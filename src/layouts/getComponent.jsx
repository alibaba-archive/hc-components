import React from 'react';
import hoistNonReactStatics from 'hoist-non-react-statics';

export function getComponent(option, getProps) {
  if (option === false) {
    return () => EmptyComponent;
  } else if (!option && !getProps) {
    return (BaseComponent) => BaseComponent;
  }
  let AppointComponent;
  let propValues = {};
  if (option && option.prototype  && option.prototype.isReactComponent) {
    AppointComponent = option;
  } else {
    propValues = option || {};
  }

  const decorator = BaseComponent => {
    AppointComponent = AppointComponent || BaseComponent || EmptyComponent;
    class Component extends React.PureComponent {
      constructor(props, context) {
        super(props);
        if (BaseComponent && !BaseComponent.prototype.isReactComponent) {
          this.state = {
            stateProps: {},
            Component: EmptyComponent
          };
          const getComponent = BaseComponent;
          this._defer = new Promise(resolve => {
            getComponent(context, (err, component, props) => {
              if (err) {
                window.console.error(err);
              } else {
                resolve({
                  stateProps: props || {},
                  Component: component
                });
              }
            });
          });
        } else {
          this.state = {
            stateProps: {},
            Component: AppointComponent
          };
        }
      }
      componentDidMount() {
        this.mounted = true;
        this._defer && this._defer.then(nextState => {
          if (this.mounted) {
            this.setState(nextState);
          }
        });
      }

      componentWillUnmount() {
        this.mounted = false;
      }

      getRealInstance() {
        return this._wrappedComponent;
      }
      render() {
        const {stateProps, Component} = this.state;
        const newProps = Object.assign({}, propValues);
        for (let key in this.props) {
          if (newProps[key] === undefined) {
            newProps[key] = this.props[key];
          }
        }
        const asyncProps = getProps ? getProps(newProps, this.context, (nextProps) => {
          this.setState({
            stateProps: nextProps
          });
        }) : {};
        return (<Component ref={inst => this._wrappedComponent = inst} {...newProps} {...asyncProps} {...stateProps} />);
      }
    }
    const newComponent = hoistNonReactStatics(Component, AppointComponent);
    if (BaseComponent && BaseComponent.contextTypes) {
      newComponent.contextTypes = Object.assign(newComponent.contextTypes || {}, BaseComponent.contextTypes);
    }
    return newComponent;
  };
  return decorator;
}

/* eslint-disable react/prop-types */
function EmptyComponent(props) {
  return (<span>{props.children}</span>);
}
getComponent.emptyComponent = EmptyComponent;

