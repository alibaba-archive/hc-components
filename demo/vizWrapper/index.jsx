import React from "expose-loader?React!react";
import ReactDOM from 'react-dom';
import Clipboard from 'clipboard';
import snakeCase from 'lodash/snakeCase';
import Modal from 'antd/lib/modal';
import Beatle from 'beatle';
import CustomForm from '../../src/components/customForm';
import DataSet from '../../src/components/dataSet';
import antdPropTypes from '../antdPropTypes';
import Mocky from '../mocker';
import path from 'path';
import parserProps from './parser';
import cloneDeep from 'lodash/cloneDeep';
const Antd = require('expose-loader?Antd!antd');

// 预先加载
// r={presets:["es2015","react","stage-0"],plugins:["transform-object-assign"]},n=o.transform(t,r).code,s=new Function(n);
// > see: https://github.com/voronianski/babel-transform-in-browser
require.ensure(['babel-standalone'], require => {
  window.Babel = require('babel-standalone');
}, 'babel');

Mocky.fetch = (url, callback) => {
  return Beatle
    .Ajax
    .get(url, null, callback);
};
const templesMap = {};
const context = require.context('./temple', false, /\.js$/);
context
  .keys()
  .forEach(key => {
    const name = path
      .basename(key)
      .replace(path.extname(key), '');
    templesMap[name] = context(key);
  });
const childrenReg = /\{\n*children\n*\}/;
const acNames = Object.keys(Antd);
export default class VizWrapper extends React.Component {
  static contextTypes = {
    routes: React.PropTypes.array
  }

  static propTypes = {
    name: React.PropTypes.string,
    code: React.PropTypes.string,
    extra: React.PropTypes.object,
    dataSource: React.PropTypes.object,
    routes: React.PropTypes.array,
    mocker: React.PropTypes.object
  }

  static getRoutes = () => {
    const childRoutes = [];
    acNames.forEach(name => {
        const Com = Antd[name];
        if (Com.prototype && Com.prototype.isReactComponent) {
          window[name] = Com;
          class Scene extends React.Component {
            static childContextTypes = {
              routes: React.PropTypes.array.isRequired
            }
            getChildContext() {
              return {
                routes: childRoutes
              };
            }
            render(){
              return (<VizWrapper name={name} mocker={window.mocker}/>)
            }
          }
          childRoutes.push({
            path: 'antd/' + name,
            name: name,
            title: name,
            navKey: 'antd',
            component: Scene,
            layout: ['consoleLayout', 'contentLayout']
          });
        }
      });
    return childRoutes;
  }

  constructor(props, context) {
    super(props, context);

    this.name = props.name;
    this.dataSource = props.dataSource ? cloneDeep(props.dataSource) : {};
    this._mocker = props.mocker || new Mocky();
    this._component = null;
    this._temple = null;
    this._propTypesSchema = null;
    this._childOption = {
      code: this.dataSource.children
    };
    this._code = props.code;
    this._jsx = '';
    this._extra = props.extra || {};
    if(props.code && !props.dataSource){
      this.parseJsx(props.code, this.name);
    }
    if (this.name) {
      this.handleChange(this.name, true);
    }
    if(this._propTypesSchema){
      this.state = this.format(this.dataSource, this._propTypesSchema.properties);
    }else{
      this.state = {};
    }
  }

  parseJsx(jsx, name){
    const tagName = '((Antd\\.)*(' + (name || acNames.join('|')) + ')[^\\s]*)';
    if(jsx.match(childrenReg)){
      this._jsx = jsx;
    }else{
      this._jsx = jsx.replace(new RegExp('<' + tagName + '\\s*([\\s\\S]*?)>([\\s\\S]*?)</\\1>'), ($0, $1, $2, $3, $4, $5) => {
        const reg = /([\w\-\_]*)=[\{"]([^"\}]*)["\}]/g;

        let mt;
        while(mt = reg.exec($4)){
          this.dataSource[mt[1]] = mt[2];
        }
        this.name = $1;
        this._childOption.code = this.dataSource.children = $5.trim();
        return '{children}';
      });
      if(this.dataSource.children){
        this._code = this.getCode();
      }
    }
  }

  transformCode(code, varName){
    if(window.Babel && code){
      return window.Babel.transform((varName? 'window.' + varName + '=' : '') + code, {
        presets: [
          'es2015',
          'react',
          'stage-0'
        ],
        plugins: [
          'transform-object-assign'
        ]
      }).code;
    }
  }

  runCode () {
    let code = this.getCode().replace(/\/\/[^;]+;\n*/g, '');
    const transformCode = this.transformCode(code, '_tmp_code_');
    if(transformCode) {
      new Function(transformCode)('_tmp_code_');
      this.setState({
        children: window['_tmp_code_']
      });
    }else{
      return require.ensure(['babel-standalone'], require => {
        window.Babel = require('babel-standalone');
        try{
          new Function(this.transformCode(code, '_tmp_code_'))('_tmp_code_');
          this.setState({
            children: window['_tmp_code_']
          });
        }catch(e){
          console.error(e);
          message.error('代码解析非法');
        }
      }, 'babel');
    }
  }

  handleChange(v, noForce) {
    if(!Antd[v]){
      this.name = '';
      const tmp = v.split('.');
      if(tmp[0].toLowerCase() === 'antd'){
        tmp.shift();
      }
      let len = tmp.length; 
      let i = 0;
      while(i < len){
        v = tmp[i++];
        if(!Antd[v]){
          return;
        }
      }
      this._component = Antd[v];
      this._propTypesSchema = antdPropTypes[v + 'Props'] || parserProps(this._component);
    }else{
      this._component = Antd[v];
      this._propTypesSchema = antdPropTypes[v + 'Props'];
    }
    this.name = v;
    this._temple = templesMap[v];
    this._code = this.getCode();
    if (!this._propTypesSchema.properties.children && !['checked', 'message', 'defaultValue', 'value', 'fileList'].filter(k => !!this._propTypesSchema.properties[k]).length) {
      this._propTypesSchema.properties.children = {
        type: 'string',
        format: 'Element'
      };
    }
    if (this._propTypesSchema.properties.children) {
      this._propTypesSchema.properties.children.help = (
        <span>组件填充内容，<a
          onClick={() => {
          this.setHtml('组件配置', () => {
              try {
                this.dataSource.children = this._vizWrapper.getCode();
                const getCode = this._vizWrapper.getCode.bind(this._vizWrapper);
                Object.assign(this._childOption, {
                  getCode: () => {
                    const code = getCode().replace(/\/\/[^;]+;\n*/g, '');
                    if(this._childOption.jsx){
                      return this._childOption.jsx.replace(childrenReg, code);
                    }else{
                      return code;
                    }
                  },
                  code: this.dataSource.children,
                  name: this._vizWrapper.name,
                  dataSource: this._vizWrapper.dataSource
                });
                return this.runCode();
              } catch (e) {
                console.error(e);
              }
            }, {
            content: (<VizWrapper
              ref={inst => this._vizWrapper = inst}
              routes={this.context.routes || this.props.routes}
              mocker={this._mocker}
              name={this._childOption.name}
              dataSource={this._childOption.dataSource}
              code={this._childOption.code}
              />),
            width: '80%'
          })
        }}>引用代码</a>
        <Antd.Popover onVisibleChange={(visible) => {
          if(visible){
            this._previewInput.textAreaRef.value = this.getChildCode();
          }
        }} content={(<Antd.Input.TextArea  style={{width: 500, height: 200}} ref={inst => this._previewInput = inst} disabled={true}></Antd.Input.TextArea>)} title="预览引用代码">
          &nbsp;&nbsp;<Antd.Icon type="eye"/>
        </Antd.Popover>
        &nbsp;&nbsp;<Antd.Button type="dashed" size="small" onClick={() => {
          this.setHtml('配置插值模板', () => {
            if(this._input){
              if(this._input.textAreaRef.value.match(childrenReg)){
                this._childOption.jsx = this._input.textAreaRef.value;
                this._childOption.code = this._childOption.jsx.replace(childrenReg, this.dataSource.children);
              }else{
                message.error('插值字符串必须包含{children}插值变量')
              }
            }
            this.runCode();
          }, {
            value: this._childOption.jsx
          })
        }}>配置插值模板</Antd.Button>
        </span>
      );
    }

    !noForce && this.forceUpdate();
  }

  componentDidMount() {
    if (this.refs.trigger1) {
      this._clipboard1 = new Clipboard(ReactDOM.findDOMNode(this.refs.trigger1), {
        text: (trigger) => {
          return this.transformCode(this._code) || '';
        }
      });
      this
        ._clipboard1
        .on('success', (e) => {
          Antd
            .message
            .info('复制成功')
          e.clearSelection();
        });
    }
    if (this.refs.trigger2) {
      this._clipboard2 = new Clipboard(ReactDOM.findDOMNode(this.refs.trigger2), {
        text: (trigger) => {
          return this._code;
        }
      });
      this
        ._clipboard2
        .on('success', (e) => {
          Antd
            .message
            .info('复制成功')
          e.clearSelection();
        });
    }
  }

  componentWillUnmount() {
    this._clipboard1 && this
      ._clipboard1
      .destroy();
    this._clipboard2 && this
      ._clipboard2
      .destroy();
    this.modal_ && this
      .modal_
      .destroy();
  }

  setHtml(title, callback, extra) {
    this.modal_ = Modal.confirm(Object.assign({
      title: title,
      iconType: 'setting',
      okText: '确定',
      cancelText: '取消',
      width: 680,
      content: (
        <Antd.Input.TextArea defaultValue={extra && extra.value} ref={inst => this._input = inst} autosize={{
          minRows: 6,
          maxRows: 12
        }}></Antd.Input.TextArea>
      ),
      onOk: callback
    }, extra));
  }

  getChildCode(){
    return this._childOption.getCode ? this._childOption.getCode() : this._childOption.code;
  }

  getCode() {
    const attrs = [];
    let key;
    for(key in this._extra){
      if(this._extra[key]){
        attrs.push(key + '="' + this._extra[key] + '"');
      }
    }

    for (key in this.dataSource) {
      if (key !== 'children' && this.dataSource[key]) {
        attrs.push(key + '="' + this.dataSource[key] + '"');
      }
    }
    let code = this.getChildCode();
    if (code) {
      code = `
<Antd.${this.name} ${attrs.length ? attrs.join("\n  ") : ""}>
  ${this._childOption.code}</Antd.${this.name}>
// import Antd from 'antd';
    `
        .trim();
    } else {
      code = `
<Antd.${this.name} ${attrs.length ? attrs.join("\n  ") : ""} />
// import Antd from 'antd';
    `.trim();
    }

    code = code.replace(/\);/g, ')').replace(/\n/g, "\n  ");
    if(this._jsx) {
      return this._jsx.replace(childrenReg, code.replace(/\/\/[^;]+;\n*/g, ''));
    }else{
      return code;
    }
  }

  formatOption(value, option){
    switch(option.format){
      case 'Function':
        try {
          value = new Function('return ' + value.trim())();
        } catch (e) {
          Antd
            .message
            .error('函数定义非法');
        }
        break;
      case 'Element':
        try {
          value = new Function('return ' + value.trim())();
        } catch (e) {}
        break;
      case 'JSON':
        try {
          if (Array.isArray(value)) {
            value = '[' + value.trim().join('') + ']';
          }
          value = new Function('return ' + value)();
        } catch (e) {
          Antd
            .message
            .error('JSON结构定义非法');
        }
        break;
      default:
        if(typeof value === 'string'){
          value = JSON.stringify(value.trim()).slice(1, -1);
        }
        break;
    }
    return value;
  }

  format(data, schema){
    const dataSource = {};
    for(let key in data) {
      if(Array.isArray(data[key])) {
        dataSource[key] = new Array(data[key].length);
        data[key].forEach((item, index) => {
          if(Object(item) === item){
            dataSource[key][index] = this.format(item, schema[key].items);
          }else{
            dataSource[key][index] = this.formatOption(item, {});
          }
        });
      }else if(Object(data[key]) === data[key]){
        dataSource[key] = this.format(data[key], schema[key].properties);
      }else{
        dataSource[key] = this.formatOption(data[key], schema[key]);
      }
    }
    return dataSource;
  }

  render() {
    return (
      <div>
        {this.props.routes
          ? (
            <Antd.Select
              defaultValue={this.name}
              showSearch
              style={{
              width: 200
            }}
              placeholder="选择组件"
              optionFilterProp="children"
              onChange={this
              .handleChange
              .bind(this)}>
              {this
                .props
                .routes
                .map(route => (
                  <Antd.Select.Option key={route.name} value={route.name}>{route.name}</Antd.Select.Option>
                ))}
            </Antd.Select>
          )
          : null}
        {this._component
          ? (
            <div
              style={{
              marginTop: 10
            }}>
              <Antd.Button.Group style={{
                marginBottom: 10
              }}>
                <Antd.Button
                  type="primary"
                  onClick={(e) => {
                  this.state = {};
                  this
                    .propTypeForm
                    .clear();
                  this
                    ._mocker
                    .mock(this._propTypesSchema, {
                      getResponseSchema: res => res
                    })
                    .then(data => {
                      this.dataSource = data;
                      this.setState(this.format(this.dataSource, this._propTypesSchema.properties));
                    });
                }}>模拟数据</Antd.Button>
                <Antd.Button
                  type="default"
                  onClick={(e) => {
                  this
                    .propTypeForm
                    .handleSubmit(body => {
                      const required = [];
                      for (let name in body.propTypes) {
                        if (body.propTypes[name] !== undefined) {
                          this._propTypesSchema.properties[name].default = body.propTypes[name];
                          required.push(name);
                        }
                      }
                      this._propTypesSchema._required = this._propTypesSchema.required || [];
                      this._propTypesSchema.required = required;
                    })
                }}>锁定</Antd.Button>
                <Antd.Button
                  type="default"
                  onClick={(e) => {
                  if (this._propTypesSchema._required) {
                    this
                      ._propTypesSchema
                      .required
                      .forEach(name => {
                        delete this._propTypesSchema.properties[name].default;
                      });
                    this._propTypesSchema.required = this._propTypesSchema._required;
                    delete this._propTypesSchema._required;
                  }
                }}>重置</Antd.Button>
                {this._temple
                  ? (
                    <Antd.Dropdown.Button
                      style={{
                      float: 'none'
                    }}
                      overlay={(
                      <Antd.Menu
                        onClick={e => {
                        this.state = {};
                        this.dataSource = this._temple.list[e.key].data;
                        this.setState(this.format(this.dataSource, this._propTypesSchema.properties));
                      }}>{this
                          ._temple
                          .list
                          .map((item, index) => (
                            <Antd.Menu.Item key={index}>{item.name}</Antd.Menu.Item>
                          ))}</Antd.Menu>
                    )}>
                      选择模板
                    </Antd.Dropdown.Button>
                  )
                  : null}
                <Antd.Button type="default" onClick={() => {
                  this.setHtml('添加JSX代码', () => {
                    if(this._input){
                      this.parseJsx(this._input.textAreaRef.value, this.name);
                      this.runCode();
                    }
                  }, {
                    value: this._jsx
                  })
                }}>解析JSX语法</Antd.Button>
                <Antd.Button type="dashed">
                  <a
                    href={`https://ant.design/components/${snakeCase(this.name).replace(/_/g, '-') + '-cn'}/#API`}
                    target="_blank"><Antd.Icon type="link"/>
                    配置文档</a>
                </Antd.Button>
              </Antd.Button.Group>
              {this.props.routes
                ? null
                : (
                  <Antd.Button.Group
                    style={{
                    marginLeft: 10
                  }}>
                    <Antd.Button
                      type="default"
                      ref="trigger1">复制执行代码</Antd.Button>
                    <Antd.Button
                      type="default"
                      ref="trigger2"
                      onMouseDown={() => this._code = this.getCode()}>复制源码</Antd.Button>
                  </Antd.Button.Group>
                )}
              <div style={{position: 'relative'}}>
                <this._component {...this.state}/>
              </div>
              <DataSet
                format="form"
                data={{
                options: {
                  schema: this._propTypesSchema
                }
              }}>
                <CustomForm
                  ref={inst => {
                  this.propTypeForm = inst;
                }}
                  onChange={(e, option) => {
                  let value = e.target
                    ? e.target.value
                    : e;
                  this.dataSource[option.name] = value;
                  if(option.name === 'children'){
                    this._childOption.code = value;
                    this.runCode();
                  }else{
                    value = this.formatOption(value, option);
                    this.setState({
                      [option.name]: value
                    });
                  }
                }}
                  noFlattern={true}
                  name="propTypes"
                  title="属性配置"
                  dataSource={this.dataSource}
                  noButton={true}/>
              </DataSet>
            </div>
          )
          : null}
      </div>
    )
  }
}
