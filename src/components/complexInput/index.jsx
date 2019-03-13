import React from 'react';
import PropTypes from 'prop-types';

import Form from 'antd/lib/form';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Icon from 'antd/lib/icon';
import Input from 'antd/lib/input';

const formItemLayout = {
  wrapperCol: {span: 24},
  required: false,
  style: {margin: '0 10px 10px 0'}
};
const formItemLayoutTwo = {
  labelCol: {
    xs: {span: 2},
    sm: {span: 2},
  },
  wrapperCol: {
    xs: {span: 2},
    sm: {span: 22},
  },
  style: {margin: '0 10px 10px 0'}
};


@Form.create()
export class ComplexInput extends React.PureComponent {
  static propTypes = {
    form: PropTypes.object,
    separator: PropTypes.string,
    delimeter: PropTypes.string,
    inputs: PropTypes.array,
    disabled: PropTypes.bool,
    extra: PropTypes.string,
    convert: PropTypes.func,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
    onChange: PropTypes.func,
    showIcon: PropTypes.bool,
    showBorder: PropTypes.bool,
    showLine: PropTypes.string,
    span: PropTypes.number,
    keyName: PropTypes.number,
  }

  constructor(props) {
    super(props);
    const value = this.convert(props.value || '');
    this._uuid = 0;
    this._oValue = props.value;
    this.state = {
      value: value,
      keys: Array.isArray(value) && value.length ? value.map(() => this._uuid++) : [this._uuid++],
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this._oValue) {
      this._oValue = nextProps.value;
      const value = this.convert(nextProps.value || '');
      this._uuid = 0;
      this.setState({
        value: value,
        keys: Array.isArray(value) && value.length ? value.map(() => this._uuid++) : [this._uuid++]
      });
    }
  }

  convert(v, inverse) {
    const {convert, separator, delimeter} = this.props;
    if (convert) {
      return convert(v, inverse);
    } else if (separator) {
      if (inverse) {
        v = delimeter ? v.map(d => d.join(delimeter)) : v;
        return v.join(separator);
      } else {
        v = v.split(separator);
        return delimeter ? v.map(d => d.split(delimeter)) : v;
      }
    } else {
      return [].concat(v || []);
    }
  }

  remove = (k) => {
    const {keys} = this.state;
    // can use data-binding to get
    // We need at least one passenger
    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    this.setState({
      keys: keys.filter(key => key !== k),
    });
  }

  add = () => {
    const {keys} = this.state;
    // can use data-binding to get
    const nextKeys = keys.concat(this._uuid);
    this._uuid++;
    // keys.splice(idx, 0, this._uuid++);

    // can use data-binding to set
    // important! notify form to detect changes
    this.setState({
      keys: nextKeys
    });
  }

  handleChange = () => {
    clearTimeout(this._timer);
    this._timer = setTimeout(() => {
      this.props.form.validateFields((err, values) => {
        if (!err) {
          const body = this.state.keys.map((k) => {
            return this.props.inputs.length > 1 ? this.props.inputs.map((inp, index) => values[`inp${index}`][k]) : values['inp0'][k];
          });
          this._oValue = this.convert(body, true);
          this.props.onChange && this.props.onChange(this._oValue);
        }
      });
    }, 200);
  }

  getItem = (k, index) => {
    const {keys} = this.state;
    const {form, inputs, disabled, extra} = this.props;
    const showIcon = this.props.showIcon ? this.props.showIcon : false;
    const showLine = this.props.showLine ? this.props.showLine : 'none';
    const value = this.state.value[k];
    const span = this.props.span ? this.props.span : Math.floor(22 / inputs.length);
    let IInput = inputs[0].component || Input;
    return (<div><Row key={k}>
      {span < 22 ?
        inputs.map((inp, pos) => {
          IInput = inp.component || Input;
          return (
            <Col span={span} key={k + '_' + pos}>
              <Form.Item {...formItemLayout} disabled={disabled} >
                {form.getFieldDecorator(`inp${pos}[${k}]`, Object.assign({
                  initialValue: value ? value[pos] : undefined
                }, inp.rule && {
                  validateTrigger: ['onChange', 'onBlur'],
                  rules: inp.rule
                })
                )(
                  <IInput {...inp} onChange={this.handleChange} />
                )}
              </Form.Item>
            </Col>
          );
        }) : inputs.map((inp, pos) => {
          IInput = inp.component || Input;
          return (
            <Col span={22} key={k + '_' + pos}>
              <Form.Item {...formItemLayoutTwo} disabled={disabled} label={inp.label} rules={inp.rules} extra={inp.types ? null : extra}>
                {inp.types ? form.getFieldDecorator(`inp${pos}[${k}]`, Object.assign({
                  initialValue: value ? value[pos] : undefined
                }, inp.rule && {
                  validateTrigger: ['onChange', 'onBlur'],
                  rules: inp.rule
                })
                )(
                  <IInput.TextArea {...inp} onChange={this.handleChange} />
                ) : form.getFieldDecorator(`inp${pos}[${k}]`, Object.assign({
                  initialValue: value ? value[pos] : undefined
                }, inp.rule && {
                  validateTrigger: ['onChange', 'onBlur'],
                  rules: inp.rule
                })
                )(
                  <IInput {...inp} onChange={this.handleChange} />
                )}
              </Form.Item>
            </Col>
          );
        })
      }
      {showIcon === false ? keys.length > 0 ? (
        <span>&nbsp;<Icon
          style={{lineHeight: '32px'}}
          type="minus-circle-o"
          disabled={disabled}
          onClick={() => this.remove(k)}
        />&nbsp;
        <Icon
          style={{lineHeight: '32px'}}
          type="plus-circle-o"
          disabled={disabled}
          onClick={() => this.add(index)}
        />
        </span>
      ) : null : null}
    </Row><hr style={{border: '1px dashed rgb(221, 221, 221)', width: '80%', display: showLine}} /></div>);
  }

  render() {
    const keys = this.state.keys;
    return (
      this.props.showBorder ? <div style={{
        border: '1px solid #ddd',
        padding: 10
      }}><Form>
          {keys.map(this.getItem)}
        </Form></div> : <Form>
        {keys.map(this.getItem)}
      </Form>);
  }
}
