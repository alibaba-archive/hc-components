import React from 'react';
import PropTypes from 'prop-types';

export class DataSet extends React.PureComponent {
  static formatter = {};

  static themeOptions = {};

  static theme = (themeOptions) => {
    DataSet.themeOptions = themeOptions;
  }

  static propTypes = {
    Component: PropTypes.any,
    childProps: PropTypes.object,
    onChange: PropTypes.object,

    value: PropTypes.any,
    data: PropTypes.object,
    getResolver: PropTypes.func,
    defaultValue: PropTypes.string,
    format: PropTypes.string,
    formatter: PropTypes.func,
    children: PropTypes.any,
    spin: PropTypes.bool,
  }

  static defaultProps = {
    data: {},
    childProps: {}
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      pending: props.spin
    };
    this.stateUpdater = {};

    if (props.getResolver) {
      this._resolver = props.getResolver(props.defaultValue);
    }
    /**
     * prop = {
     *  value: Object | Function,
     *  format: String,
     *  formatter: Function,
     *  setter: String | Function
     * }
     */
    Object
      .keys(props.data)
      .forEach(name => {
        const prop = props.data[name];
        const originValue = typeof prop.value === 'function' ? prop.value.call(this, this.props) : prop.value;
        const formatter = this.getFormatter(props.formatter, name);
        // formatter是一系列解决组件schema的格式化函数
        if (formatter) {
          this.state[name] = formatter.call(this, prop.schema, originValue);
        } else {
          this.state[name] = originValue;
        }
        if (prop.setter) {
          this.stateUpdater[prop.setter] = (updateFn, callback) => (this.setState(({stateName}) => () => {
            let newValue = typeof updateFn === 'function' ?
              updateFn.call(this, stateName) :
              updateFn;
            const formatter = this.getFormatter(props.formatter, name);
            if (formatter) {
              newValue = formatter.call(this, prop.schema, newValue);
            }
            return newValue;
          }, callback));
        }
      });
  }

  componentDidMount() {
    this._resolver && this._resolver.then(iState => {
      iState.pending = false;
      this.setState(iState, this.props.onChange);
    });
  }

  handleResolve = (value, params) => {
    if (this.props.spin) {
      this.setState({
        pending: true
      });
    }
    if (this.props.getResolver) {
      const resolver = this.props.getResolver(value, params);
      resolver.then(iState => {
        iState.pending = false;
        this.setState(iState, this.props.onChange);
      });
    }
  }

  getFormatter(formatter, name) {
    if (!formatter && DataSet.formatter) {
      const comFormatter = DataSet.formatter[this.props.format] || {};
      formatter = comFormatter[name];
    }
    return formatter;
  }

  getRealInstance() {
    return this._instance;
  }

  render() {
    let option = {};
    const {children, Component, childProps} = this.props;
    let type;
    if (Component) {
      type = Component.name;
      if (type && DataSet.themeOptions[type]) {
        option = DataSet.themeOptions[type];
      }

      if (children) {
        return (
          <Component
            ref={instance => this._instance = instance}
            {...option}
            {...childProps}
            {...this.state}
            {...this.stateUpdater}>{children}</Component>
        );
      } else {
        return (<Component
          ref={instance => this._instance = instance}
          {...option}
          {...childProps}
          {...this.state}
          {...this.stateUpdater} />);
      }
    } else {
      type = children.type.name;
      if (type && DataSet.themeOptions[type]) {
        option = DataSet.themeOptions[type];
      }
      return React.cloneElement(React.Children.only(children), {
        ref: instance => {
          this._instance = instance;
          if (typeof children.ref === 'function') {
            children.ref(instance);
          }
        },
        ...option,
        ...childProps,
        ...this.state,
        ...this.stateUpdater
      });
    }
  }
}
