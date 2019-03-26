import React from 'react';
import PropTypes from 'prop-types';
import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';

import {CustomForm} from '../customForm';

import Divider from 'material-ui/Divider';

import './index.less';
class IArchive extends React.PureComponent {
  static propTypes = {
    options: PropTypes.array,
    dataSource: PropTypes.object,
    limit: PropTypes.number,
    form: PropTypes.object,
    cols: PropTypes.number,
    readonly: PropTypes.bool,
    compact: PropTypes.bool,

    layout: PropTypes.string,
    formItemLayout: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    formatter: PropTypes.func,
    noLabel: PropTypes.bool,
    style: PropTypes.object,
    className: PropTypes.string,

    buttons: PropTypes.array,
    buttonProps: PropTypes.object
  }

  static defaultProps = {
    options: [],
    dataSource: {},
    cols: 3,
    readonly: true,
    compact: false,
    buttonProps: {noButton: true},
    className: '',
    style: {}
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      expand: !props.limit || props.limit > props.options.length,
      dataSource: this.props.dataSource
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.dataSource !== this.props.dataSource) {
      this.setState({dataSource: nextProps.dataSource});
    }
  }

  getFieldValue(name, option, editable) {
    const value = this.state.dataSource[name] || option.value;
    if (this.props.formatter) {
      return this.props.formatter(value);
    } else {
      if (editable) {
        return option.renderInput ? option.renderInput(value, this.state.dataSource) : value;
      } else {
        return option.render ? option.render(value, this.state.dataSource) : value;
      }
    }
  }

  getFieldInput(name, option) {
    const {form, readonly, onChange} = this.props;
    const editable = option.editable === undefined ? !readonly : option.editable;

    if (editable) {
      /**
       * option = {
       *  dataType | type,
       *  enum,
       *  options,
       *  format,
       *  mode,
       *  dragger,
       *  action,
       *  valuePropName,
       *  Component,
       *  max,
       *  maxLength,
       *  maximum,
       *  disabled,
       *  placeholder
       * }
       */
      const decorator = option.decorator || {};
      if (onChange) {
        decorator.getValueFromEvent = (e) => {
          const v = CustomForm.getValueFromEvent(e, option);
          onChange(v, name);
          return v;
        };
      }
      decorator.defaultValue = this.getFieldValue(name, option, editable);
      const stateProps = option.getProps ? option.getProps.call(this, this.props, this.state.dataSource, (nextState) => {
        this.setState({
          dataSource: Object.assign({}, this.state.dataSource, nextState)
        });
      }, this.props.form) : {};
      if (stateProps === false) return null;
      const fieldInput = CustomForm.getFieldInput(option, option.props, stateProps, decorator);
      return form.getFieldDecorator(name, decorator)(fieldInput);
    } else {
      return this.getFieldValue(name, option);
    }
  }

  getFields() {
    const {options, limit, cols, formItemLayout, compact, noLabel} = this.props;
    const span = Math.floor(24 / cols);
    const count = this.state.expand ? options.length : limit;
    // const {getFieldDecorator} = form;
    const fields = [];
    const itemStyle = compact ? {marginBottom: 0} : {};
    let item;
    let name;
    let label;
    let input;
    for (let i = 0; i < count; i++) {
      item = options[i];
      if (item && (item.dataIndex || item.name)) {
        name = item.dataIndex || item.name;
        label = noLabel ? null :  (item.title || item.name);
        input = this.getFieldInput(name, item);
        if (input) {
          fields.push(
            <Col span={item.col ? item.col * span : item.span || span} key={name} style={{display: i < count ? 'block' : 'none'}}>
              <Form.Item {...formItemLayout} {...item.attrs} label={label} style={itemStyle}>
                {input}
              </Form.Item>
            </Col>
          );
        }
      }
    }
    return fields;
  }

  toggle = () => {
    this.setState({expand: !this.state.expand});
  }

  handleSubmit = (e) => {
    e && e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.onSubmit && this.props.onSubmit(values);
      }
    });
  }

  getButtons() {
    const {buttons, buttonProps} = this.props;
    if (buttonProps.onSubmit) {
      buttonProps.onSubmit.bind(this.state.dataSource);
    } else {
      buttonProps.onSubmit = this.handleSubmit;
    }
    const justify = buttonProps.align || 'end';
    const _buttons = CustomForm.getButtons(buttons, buttonProps);
    return _buttons ? (<Row justify={justify} type="flex" className="o-com-archive_btns" style={buttonProps.btnStyle}>{_buttons}</Row>) : null;
  }

  render() {
    return (<Form className={'o-com-archive ' + this.props.className} style={this.props.style} layout={this.props.layout} onSubmit={this.props.buttonProps.noButton && this.handleSubmit}>
      <Row gutter={24}>
        {this.getFields()}
        {this.props.limit && this.props.limit < this.props.options.length ? (<a className="o-com-archive_expand" onClick={this.toggle}>
          more <Icon type={this.state.expand ? 'up' : 'down'} />
        </a>) : null}
      </Row>
      {this.getButtons()}
    </Form>);
  }
}

class ArchiveGroup extends React.PureComponent {
  static propTypes = {
    options: PropTypes.array,
    dataSource: PropTypes.object
  }
  static defaultProps = {
    options: [],
    dataSource: {}
  }

  render() {
    return (<div className="o-com-archive-group">
      {
        this.props.options.map(item => {
          return (<div key={item.name} className="o-com-archive-group_box">
            <h5>{item.title || item.name}</h5>
            <Divider />
            <Archive {...item.attrs} {...this.props} options={item.items} dataSource={this.props.dataSource[item.name]} />
          </div>);
        })
      }
    </div>);
  }
}

export const Archive = Form.create({name: 'archive'})(IArchive);
Archive.Group = ArchiveGroup;
