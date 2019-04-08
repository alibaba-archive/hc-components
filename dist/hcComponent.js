module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 57);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/icon");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localeContext = localeContext;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function localeContext(name, defaultLocale) {
  return function (BaseComponent) {
    BaseComponent.contextTypes = Object.assign(BaseComponent.contextTypes || {}, { antLocale: _propTypes2.default.object, app: _propTypes2.default.object });

    BaseComponent.prototype.getLocale = function (key) {
      var locale = void 0;
      if (this.context.locale) {
        locale = this.context.locale;
      } else {
        locale = this.context.locale = Object.assign(this.context.antLocale && this.context.antLocale[name] || {}, defaultLocale, this.props && this.props.locale);
      }
      if (key) {
        return locale[key];
      } else {
        return locale;
      }
    };
    return BaseComponent;
  };
}

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getComponent = getComponent;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getComponent(option, getProps) {
  if (option === false) {
    return function () {
      return EmptyComponent;
    };
  } else if (!option && !getProps) {
    return function (BaseComponent) {
      return BaseComponent;
    };
  }
  var AppointComponent = void 0;
  var propValues = {};
  if (option && option.prototype && option.prototype.isReactComponent) {
    AppointComponent = option;
  } else {
    propValues = option || {};
  }

  var decorator = function decorator(BaseComponent) {
    AppointComponent = AppointComponent || BaseComponent || EmptyComponent;

    var Component = function (_React$PureComponent) {
      _inherits(Component, _React$PureComponent);

      function Component(props) {
        _classCallCheck(this, Component);

        var _this = _possibleConstructorReturn(this, (Component.__proto__ || Object.getPrototypeOf(Component)).call(this, props));

        if (BaseComponent && !BaseComponent.prototype.isReactComponent) {
          _this.state = {
            stateProps: {},
            Component: EmptyComponent
          };
          _this._getComponent = BaseComponent;
        } else {
          _this.state = {
            stateProps: {},
            Component: AppointComponent
          };
        }
        return _this;
      }

      _createClass(Component, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          this.mounted = true;
          if (this._getComponent) {
            this._getComponent(this.context, function (err, component, props) {
              if (err) {
                window.console.error(err);
              } else {
                if (_this2.mounted) {
                  _this2.setState({
                    stateProps: props || {},
                    Component: component
                  });
                }
              }
            }, function (nextState) {
              return _this2.setState({ stateProps: Object.assign({}, _this2.state.stateProps, nextState) });
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          this.mounted = false;
        }
      }, {
        key: 'getRealInstance',
        value: function getRealInstance() {
          return this._wrappedComponent;
        }
      }, {
        key: 'render',
        value: function render() {
          var _this3 = this;

          var _state = this.state,
              stateProps = _state.stateProps,
              Component = _state.Component;

          var newProps = Object.assign({}, propValues);
          for (var key in this.props) {
            if (newProps[key] === undefined) {
              newProps[key] = this.props[key];
            }
          }
          var asyncProps = getProps ? getProps(newProps, this.context, function (nextProps) {
            _this3.setState({
              stateProps: Object.assign({}, _this3.state.stateProps, nextProps)
            });
          }) : {};
          return _react2.default.createElement(Component, _extends({ ref: function ref(inst) {
              return _this3._wrappedComponent = inst;
            } }, newProps, asyncProps, stateProps));
        }
      }]);

      return Component;
    }(_react2.default.PureComponent);

    var newComponent = (0, _hoistNonReactStatics2.default)(Component, AppointComponent);
    if (BaseComponent && BaseComponent.contextTypes) {
      newComponent.contextTypes = Object.assign(newComponent.contextTypes || {}, BaseComponent.contextTypes);
    }
    return newComponent;
  };
  return decorator;
}

/* eslint-disable react/prop-types */
function EmptyComponent(props) {
  return _react2.default.createElement(
    'span',
    { id: props.id },
    props.children
  );
}
getComponent.emptyComponent = EmptyComponent;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/message");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BasicLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _getComponent2 = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function loop(arrOrMap, callback) {
  if (Array.isArray(arrOrMap)) {
    arrOrMap.forEach(callback);
  } else {
    for (var key in arrOrMap) {
      var item = arrOrMap[key];
      var newItem = { key: key };
      if (typeof item === 'function') {
        if (item.prototype && item.prototype.isReactComponent) {
          newItem.component = item;
        } else {
          newItem.getProps = item;
        }
      } else if (item === false) {
        newItem.props = false;
      } else {
        Object.assign(newItem, item);
      }
      callback(newItem);
    }
  }
}

var BasicLayout = exports.BasicLayout = (_temp = _class = function (_React$PureComponent) {
  _inherits(BasicLayout, _React$PureComponent);

  function BasicLayout() {
    _classCallCheck(this, BasicLayout);

    return _possibleConstructorReturn(this, (BasicLayout.__proto__ || Object.getPrototypeOf(BasicLayout)).apply(this, arguments));
  }

  _createClass(BasicLayout, [{
    key: 'getComponent',
    value: function getComponent(name) {
      return this.props.components[name] || _getComponent2.getComponent.emptyComponent;
    }
  }, {
    key: 'hasComponent',
    value: function hasComponent(name) {
      return this.props.components[name] && this.props.components[name] !== _getComponent2.getComponent.emptyComponent;
    }
  }]);

  return BasicLayout;
}(_react2.default.PureComponent), _class.getLayoutProps = function (option, viewContent) {
  option.__widgets__ = option.__widgets__ || {};
  var layoutProps = Object.assign({
    route: option.route,
    viewContent: viewContent,
    components: Object.assign({}, option.__widgets__),
    style: option.style
  }, option.props);
  var layoutBlocks = Object.assign({}, this.layoutBlocks);
  loop(option.components, function (item) {
    var Com = item.component || layoutBlocks[item.key];
    if (Com) {
      delete item.component;
      delete layoutBlocks[item.key];
      layoutProps.components[item.key] = layoutProps.components[item.key] || (0, _getComponent2.getComponent)(item.props, item.getProps)(Com);
      if (item.props && item.static) {
        option.__widgets__[item.key] = layoutProps.components[item.key];
      }
    }
  });
  for (var name in layoutBlocks) {
    layoutProps.components[name] = layoutProps.components[name];
    if (layoutBlocks[name].props && layoutBlocks[name].static) {
      option.__widgets__[name] = layoutProps.components[name];
    }
  }
  var customLayoutProps = this.displayName && option[this.displayName];
  for (var key in customLayoutProps) {
    if (key === 'components') {
      Object.assign(layoutProps.components, customLayoutProps[key]);
    } else {
      layoutProps[key] = customLayoutProps[key];
    }
  }
  return layoutProps;
}, _class.propTypes = {
  className: _propTypes2.default.string,
  components: _propTypes2.default.object,
  viewContent: _propTypes2.default.element,
  children: _propTypes2.default.element,
  style: _propTypes2.default.object
}, _class.defaultProps = {
  className: '',
  components: {}
}, _temp);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.converter = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

exports.formatLayer = formatLayer;

var _merge = __webpack_require__(61);

var _merge2 = _interopRequireDefault(_merge);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// see: http://gitlab.alibaba-inc.com/openad/oa-ui/issues/57723


function safeMerge(o, b) {
  for (var key in b) {
    if (o.hasOwnProperty(key)) {
      window.console.warn('存在相同属性，即将被覆盖');
    }
    o[key] = b[key];
  }
  return o;
}

function getParameters(pm, state) {
  var params = {};

  if (pm) {
    pm.forEach(function (m) {
      params[m.name] = state[m.name] || m.value;
    });
  }

  return params;
}

function getDataByStructure(ret, structure, fields) {
  var asyncProps = {};
  var collections = [];
  var dataSource = ret;
  if (dataSource) {
    if (!Array.isArray(dataSource)) {
      dataSource = [dataSource];
    }
  } else {
    dataSource = [];
  }

  var _loop = function _loop(key) {
    var field = structure[key];
    // value: 'series[0].data
    if (typeof field === 'string') {
      field = {
        propName: field
      };
    }
    /**
     * field = {
     *  dataIndex,
     *  propName,
     *  // 只在对象时有效
     *  extend,
     *  data,
     *  district,
     *  groupBy,
     *  noLoop
     * }
     */
    field.dataIndex = field.dataIndex || key;
    field.propName = field.propName || key;

    var data = [];
    if (field.noLoop) {
      // dataFilter还有这个用处
      var _dataFilter = converter.parse(field.dataFilter);
      if (_dataFilter) {
        data = _dataFilter(ret, fields);
      } else {
        data = field.data || ret;
      }
    }

    if (field.groupBy) {
      var map = {};
      var index = 0;
      dataSource.forEach(function (item) {
        if (!map[item[field.groupBy]]) {
          collections.push({
            field: Object.assign({}, field, { propName: field.propName.replace('${x}', index++) }),
            data: field.noLoop ? data : [],
            dataMap: {}
          });
        }
        map[item[field.groupBy]] = true;
      });
    } else {
      collections.push({
        field: field,
        data: data,
        dataMap: {}
      });
    }
  };

  for (var key in structure) {
    _loop(key);
  }
  dataSource.forEach(function (item, index) {
    collections.forEach(function (map) {
      if (map.field.noLoop) return;

      var value = item[map.field.dataIndex];
      var _dataFilter = converter.parse(map.field.dataFilter);
      var newItem = item;
      if (_dataFilter) {
        newItem = _dataFilter(item, dataSource, fields, index);
      } else if (map.field.dataIndex) {
        newItem = value;
      }
      var flag = map.field.groupBy ? item[map.field.groupBy] !== undefined : true;
      if (flag) {
        if (map.field.district) {
          map.dataMap[value] = newItem;
        } else {
          map.data.push(newItem);
        }
      }
    });
  });

  collections.forEach(function (col) {
    var key = col.field.propName;
    var ks = key.split('.');
    var last = ks.length - 1;
    var prop = asyncProps;
    var lastProp = void 0;

    ks.forEach(function (tmp, index) {
      // xxx[x]
      if (tmp[tmp.length - 1] === ']') {
        var pos = tmp.indexOf('[');
        var num = tmp.slice(pos + 1, -1);
        var name = tmp.substr(0, pos);
        prop = prop[name] = prop[name] || [];

        // xxx[x].xx
        if (index < last) {
          if (num) {
            prop = prop[num] = {};
          } else {
            var _tmp = {};
            prop.push(_tmp);
            prop = _tmp;
          }
        } else {
          // xxx[x]
          lastProp = prop;
          key = num;
        }
      } else if (index < last) {
        // xxx[x].xx
        prop = prop[tmp] = prop[tmp] || {};
      } else {
        lastProp = prop;
        key = tmp;
      }
    });
    var data = void 0;
    if (col.field.district) {
      data = [];
      for (var k in col.dataMap) {
        data.push(col.dataMap[k]);
      }
    } else {
      data = col.data;
    }
    if (Array.isArray(lastProp)) {
      if (key === undefined) {
        lastProp.push(data);
      } else {
        lastProp[key] = data;
      }
    } else {
      lastProp[key] = data;
      if (col.field.extend) {
        safeMerge(lastProp, col.field.extend);
      }
    }
  });
  window.console.log(asyncProps);
  return asyncProps;
}

function dataRender(ret, structure, fields, dataFilter, dataPropName) {
  // 通过数据处理器返回
  if (dataFilter) {
    ret = dataFilter(ret, fields);
    // 通过结构返回
  } else if (structure) {
    ret = getDataByStructure(ret, structure, fields);
    // 通过赋值属性返回
  }
  if (dataPropName) {
    return _defineProperty({}, dataPropName, ret);
  } else {
    return ret || {};
  }
}

function bindStateObserver(Com, props, pm, stateObserver) {
  if (pm || stateObserver) {
    var _class, _temp;

    var routeHelper = void 0;
    stateObserver = stateObserver ? [].concat(stateObserver) : [];
    stateObserver.forEach(function (_ref2) {
      var trigger = _ref2.trigger,
          getValueFromEvent = _ref2.getValueFromEvent;

      props[trigger] = function () {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        getValueFromEvent = converter.parse(getValueFromEvent);
        var obj = getValueFromEvent ? getValueFromEvent.apply(undefined, args) : args[0];
        routeHelper && routeHelper.setState(obj);
      };
    });
    var newCom = (_temp = _class = function (_Com) {
      _inherits(newCom, _Com);

      function newCom(props, context) {
        _classCallCheck(this, newCom);

        var _this = _possibleConstructorReturn(this, (newCom.__proto__ || Object.getPrototypeOf(newCom)).call(this, props, context));

        routeHelper = context.routeHelper;
        return _this;
      }

      _createClass(newCom, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
          var _this2 = this;

          _get(newCom.prototype.__proto__ || Object.getPrototypeOf(newCom.prototype), 'componentDidMount', this) && _get(newCom.prototype.__proto__ || Object.getPrototypeOf(newCom.prototype), 'componentDidMount', this).call(this);
          if (pm) {
            this.__watcher = function (nextState, prevState) {
              var hasChange = false;
              var mastChange = true;
              pm.forEach(function (item) {
                // _ID_ &&
                if (item.name[0] === '_' && item.name[item.name.length - 1] === '_') {
                  mastChange = nextState[item.name] !== prevState[item.name];
                } else {
                  // ||
                  hasChange = hasChange || nextState[item.name] !== prevState[item.name];
                }
              });
              return mastChange && hasChange;
            };
            this.context.routeHelper.watch(this.__watcher, function (nextState) {
              if (_this2 && _this2.handleResolve) {
                _this2.handleResolve(nextState);
              }
            });
          }
        }
      }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
          _get(newCom.prototype.__proto__ || Object.getPrototypeOf(newCom.prototype), 'componentWillUnmount', this) && _get(newCom.prototype.__proto__ || Object.getPrototypeOf(newCom.prototype), 'componentWillUnmount', this).call(this);
          this.context.routeHelper.unwatch(this.__watcher);
        }
      }]);

      return newCom;
    }(Com), _class.contextTypes = {
      routeHelper: _propTypes2.default.object
    }, _temp);


    return newCom;
  } else {
    return Com;
  }
}

function setFields(fields, elements, context) {
  var newFields = [];
  fields.forEach(function (item) {
    var _dataFilter = converter.parse(item.dataFilter);
    if (_dataFilter) {
      item = _dataFilter(item, fields, context);
      if (item.component) {
        item.Component = context.layer.findComponent(item.component);
      }
    }
    newFields.push(safeMerge(item, elements && elements[item.dataIndex]));
  });
  return newFields;
}

var defaultLayerOptoin = { cname: 'SimpleLayer', componentType: 'custom' };

function formatLayerLoop(modules, layerOption, widgetsOption, dataQuery) {
  if (!layerOption) {
    return null;
  }
  var widgets = [];
  var widgetsMap = {};
  widgetsOption = widgetsOption || modules;
  widgetsOption.forEach(function (item, index) {
    if (typeof item === 'string') {
      widgetsMap[item] = { orderIndex: index, option: {} };
    } else {
      widgetsMap[item.name] = { orderIndex: index, option: item };
    }
  });
  modules.forEach(function (mod) {
    if (!mod.name || !widgetsMap[mod.name]) {
      return;
    }
    var orderIndex = widgetsMap[mod.name].orderIndex;
    var _widgetsMap$mod$name$ = widgetsMap[mod.name].option,
        layer = _widgetsMap$mod$name$.layer,
        layout = _widgetsMap$mod$name$.layout,
        blocks = _widgetsMap$mod$name$.blocks,
        elements = _widgetsMap$mod$name$.elements,
        attrs = _widgetsMap$mod$name$.attrs,
        props = _widgetsMap$mod$name$.props;
    var name = mod.name,
        pt = mod.pt,
        pm = mod.pm;

    var ds = mod.ds || {};

    var widget = void 0;
    // 容器
    if (pt.blocks) {
      widget = {
        layout: layout,
        layer: formatLayerLoop(pt.blocks, layer || defaultLayerOptoin, blocks, dataQuery)
      };
    } else {
      // 组件
      var fields = pt.fields;
      var _pt$dataset = pt.dataset,
          fieldPropName = _pt$dataset.fieldPropName,
          dataPropName = _pt$dataset.dataPropName,
          structure = _pt$dataset.structure,
          component = _pt$dataset.component,
          stateObserver = _pt$dataset.stateObserver;

      var dataFilter = converter.parse(pt.dataset.dataFilter);

      widget = component || {};
      widget.key = widget.key || name;
      widget.contextTypes = widget.contextTypes || [];

      var map = {};
      widget.contextTypes.forEach(function (t) {
        return map[t] = t;
      });
      ['app', 'layer', 'hocCreator', 'routeHelper'].forEach(function (service) {
        if (map[service] === undefined) {
          widget.contextTypes.push(service);
        }
      });

      if (!ds.data && (ds.api || pm || stateObserver)) {
        // 动态组件
        widget.getComponent = function (context, callback) {
          var hasReady = widget.contextTypes.every(function (name) {
            return context[name];
          });
          if (hasReady) {
            var Com = context.layer.findComponent(widget.cname, widget.componentType);
            // 封装成Hoc组件，动态获取数据
            var asyncProps = Object.assign({}, props);
            if (!asyncProps[fieldPropName] && fieldPropName && fields) {
              // 静态字段结构
              asyncProps[fieldPropName] = setFields(fields, elements, context);
            }

            if (ds.api) {
              var RichCom = context.hocCreator.getRichComponent(Com, {
                getResolver: function getResolver(state) {
                  state = state || context.routeHelper.state;
                  // 发起请求
                  return context.app.ajax[ds.method || 'post'](ds.api, Object.assign({
                    structure: ds.structure,
                    statement: ds.statement,
                    parameters: getParameters(pm, state)
                  }, dataQuery)).then(function (ret) {
                    return dataRender(ret, structure, fields, dataFilter, dataPropName);
                  });
                },
                childProps: asyncProps
              });
              callback(null, bindStateObserver(RichCom, asyncProps, pm, stateObserver));
            } else {
              callback(null, bindStateObserver(Com, asyncProps, pm, stateObserver), asyncProps);
            }
          } else {
            window.console.warn('服务丢失：' + widget.contextTypes.join(', '));
            callback(null, function () {
              return _react2.default.createElement('div', null);
            });
          }
        };
      } else {
        var getProps = converter.parse(widget.getProps);
        widget.getProps = function (props, context) {
          var syncProps = getProps ? getProps(props, context) : {};
          Object.assign(syncProps, dataRender(ds.data, structure, fields, dataFilter, dataPropName));
          // 静态组件
          if (!syncProps[fieldPropName] && fieldPropName && fields) {
            // 静态字段结构
            // TODO layer
            syncProps[fieldPropName] = setFields(fields, elements, context);
          }

          return syncProps;
        };

        widget.props = (0, _merge2.default)(widget.props || {}, props);
      }
    }

    // 把skeleton的属性和定位信息合并进来
    widget.attrs = (0, _merge2.default)(widget.attrs || {}, attrs);
    // 是否有title
    if (pt.hasTitle) {
      if (pt.title) {
        widget.attrs.title = pt.title;
      } else {
        window.console.warn('title不能为空');
      }
    }

    widgets[orderIndex] = widget;
  });
  return Object.assign(layerOption, {
    // 组件处理
    components: widgets
  });
}

var converter = exports.converter = {
  transform: function transform(code) {
    return code;
  },
  stringify: function stringify(obj) {
    try {
      if (Object(obj) === obj) {
        return JSON.stringify(obj, function (k, v) {
          if (typeof v === 'function') {
            return v.toString();
          } else {
            return v;
          }
        }, 2);
      } else if (obj) {
        return obj.toString();
      }
    } catch (e) {
      window.console.error(e);
    }
  },
  parse: function parse(obj) {
    try {
      if (typeof obj === 'function') {
        return obj;
      } else if (Object(obj) === obj) {
        return JSON.parse(obj, function (k, v) {
          if (typeof v === 'string' && v.indexOf('function') === 0) {
            return new Function('return ' + obj)();
          } else {
            return v;
          }
        }, 2);
      } else {
        return new Function('return ' + obj)();
      }
    } catch (e) {
      window.console.error(e);
    }
  }
};

function formatLayer(pageSetting, dataQuery) {
  try {
    var _ref3 = Object(pageSetting) === pageSetting ? pageSetting : JSON.parse(pageSetting),
        blocks = _ref3.blocks,
        skeleton = _ref3.skeleton;

    if (skeleton && blocks) {
      return {
        layout: skeleton.layout,
        layer: formatLayerLoop(blocks, skeleton.layer, skeleton.blocks, dataQuery)
      };
    } else {
      return {};
    }
  } catch (e) {
    window.console.error(e);
  }
  return {};
}

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/form");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/card");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavLink = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _menu = __webpack_require__(19);

var _menu2 = _interopRequireDefault(_menu);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _dropdown = __webpack_require__(31);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _localeContext = __webpack_require__(3);

__webpack_require__(77);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavLink = exports.NavLink = (_dec = (0, _localeContext.localeContext)('NavLink', {
  more: '更多'
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(NavLink, _React$PureComponent);

  function NavLink() {
    _classCallCheck(this, NavLink);

    return _possibleConstructorReturn(this, (NavLink.__proto__ || Object.getPrototypeOf(NavLink)).apply(this, arguments));
  }

  _createClass(NavLink, [{
    key: 'setAction',
    value: function setAction(key, flag) {
      var item = void 0;
      if (Object(key) === key) {
        item = key;
      } else {
        item = this.props.links.find(function (item) {
          return item.key === key;
        }) || this.props.menus.find(function (item) {
          return item.key === key;
        });
      }

      if (item.propName) {
        item[item.propName] = flag;
      }

      this.forceUpdate();

      return item;
    }
  }, {
    key: 'handleClick',
    value: function handleClick(e) {
      var _this2 = this;

      var key = e.key;

      var item = this.setAction(key, true);
      var action = item.action || this.props.onClick;

      var cancelCallback = function cancelCallback() {
        _this2.setAction(item, false);
      };
      if (action) {
        if (!action(e, this.props.data, cancelCallback)) {
          cancelCallback();
        }
      } else {
        cancelCallback();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var handleClick = this.handleClick.bind(this);
      var _props = this.props,
          links = _props.links,
          menus = _props.menus,
          data = _props.data,
          className = _props.className,
          style = _props.style;

      var menu = _react2.default.createElement(
        _menu2.default,
        { onClick: function onClick(e) {
            return handleClick(e);
          }, className: 'j-com-dropdown-link' },
        menus.map(function (item, index) {
          var propsByState = item.getProps ? item.getProps(data) : {};
          return _react2.default.createElement(
            _menu2.default.Item,
            _extends({
              key: item.key || index,
              disabled: item.disabled,
              loading: item.loading
            }, propsByState),
            _react2.default.createElement(
              'a',
              null,
              item.render ? item.render() : item.name
            )
          );
        })
      );
      return _react2.default.createElement(
        'div',
        { className: 'j-com-nav-link ' + className, style: style },
        links.map(function (item, index) {
          var propsByState = item.getProps ? item.getProps(data) : {};
          return _react2.default.createElement(
            _button2.default,
            _extends({
              size: item.size ? item.size : 'small',
              type: item.type ? item.type : 'button',
              className: item.type ? '' : 'ant-btn-link',
              key: item.key || index,
              disabled: item.disabled,
              loading: item.loading,
              onClick: function onClick() {
                return handleClick(item);
              }
            }, propsByState),
            item.href ? _react2.default.createElement(
              'a',
              { href: item.href, target: item.target || '_blank' },
              item.render ? item.render() : item.name
            ) : _react2.default.createElement(
              'span',
              null,
              item.render ? item.render() : item.name
            )
          );
        }),
        menus.length ? this.props.menuLabel ? _react2.default.createElement(
          _dropdown2.default.Button,
          { overlay: menu },
          this.props.menuLabel
        ) : _react2.default.createElement(
          _dropdown2.default,
          { overlay: menu },
          _react2.default.createElement(
            'a',
            { className: 'ant-dropdown-link ant-btn-link' },
            this.getLocale().more,
            _react2.default.createElement(_icon2.default, { type: 'down' })
          )
        ) : null
      );
    }
  }]);

  return NavLink;
}(_react2.default.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  links: _propTypes2.default.array,
  menus: _propTypes2.default.array,
  onClick: _propTypes2.default.func,
  data: _propTypes2.default.any,
  menuLabel: _propTypes2.default.any
}, _class2.defaultProps = {
  className: '',
  links: [],
  menus: []
}, _temp)) || _class);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GlobalFooter = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

__webpack_require__(86);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GlobalFooter = exports.GlobalFooter = (_temp = _class = function (_React$PureComponent) {
  _inherits(GlobalFooter, _React$PureComponent);

  function GlobalFooter() {
    _classCallCheck(this, GlobalFooter);

    return _possibleConstructorReturn(this, (GlobalFooter.__proto__ || Object.getPrototypeOf(GlobalFooter)).apply(this, arguments));
  }

  _createClass(GlobalFooter, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          style = _props.style,
          links = _props.links,
          copyright = _props.copyright;


      return _react2.default.createElement(
        'div',
        { className: 'j-com-globalFooter ' + className, style: style },
        links && _react2.default.createElement(
          'div',
          { className: 'links' },
          links.map(function (link) {
            var linkProps = link.action ? {
              onClick: function onClick(e) {
                return link.action(e, link);
              }
            } : {
              target: link.blankTarget ? '_blank' : '_self',
              href: link.href
            };
            return _react2.default.createElement(
              'a',
              _extends({ key: link.name || link.title }, linkProps),
              link.title
            );
          })
        ),
        copyright && _react2.default.createElement(
          'div',
          { className: 'copyright' },
          copyright
        )
      );
    }
  }]);

  return GlobalFooter;
}(_react2.default.PureComponent), _class.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  links: _propTypes2.default.array,
  copyright: _propTypes2.default.string
}, _class.defaultProps = {
  className: ''
}, _temp);

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/layout");

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.findService = exports.gallery = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.findComponent = findComponent;
exports.setGallery = setGallery;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _upperFirst = __webpack_require__(25);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _getComponent = __webpack_require__(5);

var _layerConvertor = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hcGetComponent = _getComponent.getComponent;
var gallery = exports.gallery = {
  layouts: {
    name: 'layout',
    items: {}
  },
  services: {
    name: 'service',
    items: {}
  },
  layers: {
    name: 'layer',
    items: {}
  },
  components: {
    name: 'component',
    items: {
      custom: { name: 'custom', items: {} },
      hc: { name: 'hc', items: {} },
      antd: { name: 'antd', items: {} },
      material: { name: 'material', items: {} }
    }
  }
};

function findComponent() {
  var cname = void 0;
  var componentType = void 0;
  var component = void 0;
  var getComponent = void 0;
  var contextTypes = void 0;
  var hoc = void 0;
  var props = void 0;
  var getProps = void 0;
  var galleryType = void 0;
  var original = void 0;

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  if (Object(args[0]) === args[0]) {
    var _args$ = args[0];
    cname = _args$.cname;
    componentType = _args$.componentType;
    component = _args$.component;
    props = _args$.props;
    getProps = _args$.getProps;
    getComponent = _args$.getComponent;
    contextTypes = _args$.contextTypes;
    hoc = _args$.hoc;

    original = args[1];
    galleryType = args[2];
  } else {
    cname = args[0];
    componentType = args[1];
    component = args[2];
    props = args[3];
    getProps = args[4];
    getComponent = args[5];
    contextTypes = args[6];
    hoc = args[7];
    original = args[8];
    galleryType = args[9];
  }
  var decorative = !original;

  var componentList = galleryType ? gallery[galleryType] : gallery.components.items[componentType] || gallery.components.items['custom'];

  var newComponent = void 0;
  var async = void 0;
  if (getComponent) {
    newComponent = _layerConvertor.converter.parse(getComponent);
    async = true;
    newComponent._async = async;
  } else {
    if (typeof component === 'function') {
      // 本身就是组件
      newComponent = component;
    } else if (cname) {
      /**
       * com = {
       *  componentType: [antd|custom|hc|material],
       *  cname: 'x',
       *  props: {
       *    ...
       *  }
       * }
       */
      var cs = cname.split('.');
      newComponent = componentList.items[cs.shift()];
      // Button.Group
      while (newComponent && cs.length) {
        newComponent = newComponent[cs.shift()];
      }
    }
  }

  if (newComponent) {
    var newContextTypes = {};
    if (contextTypes) {
      contextTypes.forEach(function (name) {
        newContextTypes[name] = _propTypes2.default.any;
      });
      if (newComponent.contextTypes) {
        Object.assign(newComponent.contextTypes, newContextTypes);
      } else {
        newComponent.contextTypes = newContextTypes;
      }
    }

    if (decorative) {
      if (async) {
        props = props || {};
      }
      newComponent = hcGetComponent(props, _layerConvertor.converter.parse(getProps))(newComponent);
    }

    // 一般来说和view不能共用
    if (hoc) {
      var Com = findComponent(hoc);
      if (!Com) {
        window.console.log('hoc组件丢失');
      }
      var ChildComponent = newComponent;
      var childProps = hoc.childProps || {};

      var HocComponent = function (_React$PureComponent) {
        _inherits(HocComponent, _React$PureComponent);

        function HocComponent() {
          _classCallCheck(this, HocComponent);

          return _possibleConstructorReturn(this, (HocComponent.__proto__ || Object.getPrototypeOf(HocComponent)).apply(this, arguments));
        }

        _createClass(HocComponent, [{
          key: 'render',
          value: function render() {
            var children = _react2.default.createElement(
              Com,
              null,
              _react2.default.createElement(newComponent.ChildComponent, _extends({}, childProps, this.props))
            );
            // #! 包裹
            var wrapper = _layerConvertor.converter.parse(hoc.wrapper);
            if (wrapper) {
              return wrapper(children);
            } else {
              return children;
            }
          }
        }]);

        return HocComponent;
      }(_react2.default.PureComponent);

      newComponent = HocComponent;
      newComponent.ChildComponent = ChildComponent;
      newComponent._async = ChildComponent._async;
    }
  }
  return newComponent;
}

var findService = exports.findService = function findService(name) {
  return gallery.services.items[name];
};

function setGallery(aGallery) {
  for (var key in aGallery) {
    if (key === 'components') {
      for (var ikey in aGallery[key]) {
        window[(0, _upperFirst2.default)(ikey)] = aGallery[key][ikey];
        Object.assign(gallery[key].items[ikey].items, aGallery[key][ikey]);
      }
    } else {
      Object.assign(gallery[key].items, aGallery[key]);
    }
  }
}

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("hoist-non-react-statics");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/button");

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BreadCrumb = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(4);

var _breadcrumb = __webpack_require__(76);

var _breadcrumb2 = _interopRequireDefault(_breadcrumb);

var _navLink = __webpack_require__(12);

__webpack_require__(78);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadCrumb = exports.BreadCrumb = (_temp = _class = function (_React$PureComponent) {
  _inherits(BreadCrumb, _React$PureComponent);

  function BreadCrumb() {
    _classCallCheck(this, BreadCrumb);

    return _possibleConstructorReturn(this, (BreadCrumb.__proto__ || Object.getPrototypeOf(BreadCrumb)).apply(this, arguments));
  }

  _createClass(BreadCrumb, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          navs = _props.navs,
          links = _props.links,
          extra = _props.extra;


      return _react2.default.createElement(
        'div',
        { className: 'j-com-breadcrumb ' + className, style: style },
        _react2.default.createElement(
          _breadcrumb2.default,
          null,
          navs.map(function (item, index) {
            if (item.link) {
              return _react2.default.createElement(
                _breadcrumb2.default.Item,
                { key: index },
                _react2.default.createElement(
                  _this2.props.Link,
                  { to: item.link },
                  item.text
                )
              );
            } else {
              return _react2.default.createElement(
                _breadcrumb2.default.Item,
                { key: index },
                item.text
              );
            }
          }),
          links || extra ? _react2.default.createElement(
            _breadcrumb2.default.Item,
            { className: 'j-breadcrumb-extra' },
            links && _react2.default.createElement(_navLink.NavLink, { links: links }),
            extra
          ) : null
        ),
        this.props.combox
      );
    }
  }]);

  return BreadCrumb;
}(_react2.default.PureComponent), _class.parse = function (route, subRoutes) {
  var navs = [];
  if (route) {
    navs.push({
      text: route.title
    });
    if (route.navKey && subRoutes[route.navKey]) {
      navs.unshift({
        text: subRoutes[route.navKey].title || route.navKey
      });
    }
    while ((route = route.parent) && route.title) {
      navs.unshift({ link: route.resolvePath, text: route.title });
    }
  }
  return navs;
}, _class.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  Link: _propTypes2.default.any,
  combox: _propTypes2.default.element,
  navs: _propTypes2.default.array,
  links: _propTypes2.default.array,
  extra: _propTypes2.default.any
}, _class.defaultProps = {
  className: '',

  Link: _reactRouter.Link,
  navs: []
}, _temp);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/menu");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("react-dnd");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Header = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _layout = __webpack_require__(14);

var _layout2 = _interopRequireDefault(_layout);

var _menu = __webpack_require__(19);

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _dropdown = __webpack_require__(31);

var _dropdown2 = _interopRequireDefault(_dropdown);

var _spin = __webpack_require__(37);

var _spin2 = _interopRequireDefault(_spin);

var _avatar = __webpack_require__(87);

var _avatar2 = _interopRequireDefault(_avatar);

var _headerSearch = __webpack_require__(38);

__webpack_require__(89);

var _localeContext = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = exports.Header = (_dec = (0, _localeContext.localeContext)('DataSet', {
  searchPlaceholder: '站内搜索',
  profile: '个人中心',
  setting: '设置',
  logout: '退出登录'
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(Header, _React$PureComponent);

  function Header(props) {
    _classCallCheck(this, Header);

    var _this = _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));

    _this.toggleClick = function () {
      _this.props.onCollapse(!_this.props.collapsed);

      _this._resizeTimer = setTimeout(function () {
        var event = document.createEvent('HTMLEvents');
        event.initEvent('resize', true, false);
        window.dispatchEvent(event);
      }, 600);
    };

    _this.handleChange = function (e) {
      _this.props.onChange && _this.props.onChange(e);
    };

    return _this;
  }

  _createClass(Header, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this._resizeTimer);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          loading = _props.loading,
          className = _props.className,
          hasSetting = _props.hasSetting,
          search = _props.search,
          style = _props.style,
          collapsed = _props.collapsed,
          nick = _props.nick,
          noSider = _props.noSider,
          avatar = _props.avatar,
          theme = _props.theme,
          route = _props.route,
          routes = _props.routes,
          subMenus = _props.subMenus,
          menu = _props.menu,
          brand = _props.brand,
          Link = _props.Link,
          orderKeys = _props.orderKeys,
          getResolvePath = _props.getResolvePath;

      var IMenu = this.props.Menu;
      return _react2.default.createElement(
        _layout2.default.Header,
        { className: 'j-com-header ' + className + (theme ? ' j-com-header-' + theme : ''), style: style },
        loading,
        noSider ? null : _react2.default.createElement(_icon2.default, {
          className: 'j-header-trigger',
          type: collapsed ? 'menu-unfold' : 'menu-fold',
          onClick: this.toggleClick }),
        _react2.default.createElement(
          'div',
          { className: 'j-header-right', style: { display: nick === false ? 'none' : '' } },
          search !== undefined ? search : _react2.default.createElement(_headerSearch.HeaderSearch, {
            className: 'j-header-action j-header-search',
            placeholder: this.getLocale('searchPlaceholder'),
            dataSource: [],
            onSearch: function onSearch(v) {
              return _this2.handleChange({ value: v, key: 'search' });
            },
            onPressEnter: function onPressEnter(v) {
              return _this2.handleChange({ value: v, key: 'search' });
            }
          }),
          nick ? _react2.default.createElement(
            _dropdown2.default,
            {
              overlay: _react2.default.createElement(
                _menu2.default,
                { className: 'j-header-menu', selectedKeys: [], onClick: this.handleChange },
                _react2.default.createElement(
                  _menu2.default.Item,
                  { key: 'profile' },
                  _react2.default.createElement(_icon2.default, { type: 'user' }),
                  this.getLocale('profile')
                ),
                hasSetting ? _react2.default.createElement(
                  _menu2.default.Item,
                  { key: 'setting' },
                  _react2.default.createElement(_icon2.default, { type: 'setting' }),
                  this.getLocale('setting')
                ) : null,
                _react2.default.createElement(_menu2.default.Divider, null),
                _react2.default.createElement(
                  _menu2.default.Item,
                  { key: 'logout' },
                  _react2.default.createElement(_icon2.default, { type: 'logout' }),
                  this.getLocale('logout')
                )
              ) },
            _react2.default.createElement(
              'span',
              { className: 'j-header-action j-header-account' },
              avatar && _react2.default.createElement(_avatar2.default, { size: 'small', className: 'j-header-avatar', src: avatar }),
              ' ',
              nick
            )
          ) : _react2.default.createElement(_spin2.default, { size: 'small', style: { marginLeft: 8 } })
        ),
        IMenu ? _react2.default.createElement(IMenu, { style: { marginLeft: noSider ? 70 : 0 }, route: route, routes: routes, subMenus: subMenus, menu: menu, orderKeys: orderKeys, Link: Link, getResolvePath: getResolvePath, brand: brand }) : null
      );
    }
  }]);

  return Header;
}(_react2.default.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  route: _propTypes2.default.object,
  routes: _propTypes2.default.array,
  subMenus: _propTypes2.default.object,
  menu: _propTypes2.default.any,
  brand: _propTypes2.default.object,
  Link: _propTypes2.default.any,
  Menu: _propTypes2.default.any,
  orderKeys: _propTypes2.default.array,
  getResolvePath: _propTypes2.default.func,

  collapsed: _propTypes2.default.bool,
  onCollapse: _propTypes2.default.func,
  avatar: _propTypes2.default.string,
  nick: _propTypes2.default.string,
  noSider: _propTypes2.default.bool,
  loading: _propTypes2.default.element,
  theme: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  hasSetting: _propTypes2.default.bool,
  search: _propTypes2.default.any
}, _class2.defaultProps = {
  className: ''
}, _temp)) || _class);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Notifier = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _message = __webpack_require__(7);

var _message2 = _interopRequireDefault(_message);

var _notification = __webpack_require__(42);

var _notification2 = _interopRequireDefault(_notification);

var _copyLogger = __webpack_require__(41);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// 默认8秒
_notification2.default.config({
  duration: 8
});
// 默认4秒
_message2.default.config({
  duration: 4
});

var seniorNotification = Object.assign({}, _notification2.default);
['success', 'info', 'warning', 'error', 'warn'].forEach(function (type) {
  seniorNotification[type] = function (args) {
    return _notification2.default[type](assign({}, args, { type: type, duration: null }));
  };
});

var Notifier = exports.Notifier = (_temp = _class = function () {
  function Notifier() {
    var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var immediate = arguments[1];

    _classCallCheck(this, Notifier);

    this.$opt_ = opt;
    if (immediate) {
      this.notify(opt);
    }
  }

  _createClass(Notifier, [{
    key: 'notify',
    value: function notify(opt) {
      var _this = this;

      var strategy = Notifier.strategy;
      // 特殊处理
      if (opt.rid) {
        opt = {
          content: opt
        };
      }
      opt = Object.assign({ type: 'info', level: 'one' }, this.$opt_, opt);

      if (opt.trace) {
        delete this.$opt_.trace;
        delete opt.trace;
        if (opt.content.then) {
          opt.content.then(function (res) {
            if (Object(res) !== res) {
              res = {
                message: res
              };
            }
            var rid = opt.rid || res.rid;
            if (rid) {
              opt.content = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  res.message
                ),
                _react2.default.createElement(_copyLogger.CopyLogger, { rid: rid, message: 'rid: ' + rid })
              );
            } else {
              opt.content = res.message;
            }
            _this.notify(opt);
          }, function (err) {
            opt.content = err.message;
            _this.notify(opt);
          });
        } else {
          if (Object(opt.content) === opt.content) {
            var rid = opt.rid || opt.content.rid;
            var content = opt.content.message;
            if (rid) {
              opt.content = _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  null,
                  content
                ),
                _react2.default.createElement(_copyLogger.CopyLogger, { rid: rid, message: 'rid: ' + rid })
              );
            } else {
              opt.content = content;
            }
          }
          this.notify(opt);
        }
      } else {
        // notification 和 message的初始化方式不同
        if (strategy[opt.level] === _notification2.default) {
          strategy[opt.level][opt.type]({
            message: opt.title || '提示',
            description: opt.content,
            btn: opt.btn,
            icon: opt.icon,
            key: opt.key,
            onClose: opt.onClose,
            duration: opt.duration
          });
        } else {
          strategy[opt.level][opt.type](opt.content, opt.duration);
        }
      }
    }
  }], [{
    key: 'notifierFactory',
    value: function notifierFactory(type, title, content) {
      return new Notifier({
        level: 'two',
        type: type,
        title: title || '错误异常',
        content: content,
        trace: true
      });
    }
  }, {
    key: 'error',
    value: function error(title, content) {
      if (content) {
        return new Notifier({
          type: 'error',
          level: 'two',
          title: title,
          content: content
        }, 1);
      } else {
        return new Notifier({
          type: 'error',
          level: 'one',
          content: title
        }, 1);
      }
    }
  }, {
    key: 'success',
    value: function success(title, content) {
      if (content) {
        return new Notifier({
          type: 'success',
          level: 'two',
          title: title,
          content: content
        }, 1);
      } else {
        return new Notifier({
          type: 'success',
          level: 'one',
          content: title
        }, 1);
      }
    }
  }, {
    key: 'info',
    value: function info(title, content) {
      if (content) {
        return new Notifier({
          type: 'info',
          level: 'two',
          title: title,
          content: content
        }, 1);
      } else {
        return new Notifier({
          type: 'info',
          level: 'one',
          content: title
        }, 1);
      }
    }
  }, {
    key: 'warn',
    value: function warn(title, content) {
      if (content) {
        return new Notifier({
          type: 'warn',
          level: 'two',
          title: title,
          content: content
        }, 1);
      } else {
        return new Notifier({
          type: 'warn',
          level: 'one',
          content: title
        }, 1);
      }
    }
  }]);

  return Notifier;
}(), _class.strategy = {
  one: _message2.default,
  two: _notification2.default,
  three: seniorNotification
}, _temp);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sider = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactRouter = __webpack_require__(4);

var _layout = __webpack_require__(14);

var _layout2 = _interopRequireDefault(_layout);

var _menu = __webpack_require__(19);

var _menu2 = _interopRequireDefault(_menu);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

__webpack_require__(98);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HTTP_PATTERN = /^https?:\/\//;

var bubbleSort = function bubbleSort(arr, sortCb) {
  var len = arr.length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      // 相邻元素两两对比
      if (sortCb(arr[j], arr[j + 1]) > 0) {
        // 元素交换
        var temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

var Sider = exports.Sider = (_temp = _class = function (_React$PureComponent) {
  _inherits(Sider, _React$PureComponent);

  function Sider(props) {
    _classCallCheck(this, Sider);

    var _this = _possibleConstructorReturn(this, (Sider.__proto__ || Object.getPrototypeOf(Sider)).call(this, props));

    var route = props.route;
    var routes = _this.getRoutes(props.routes, props.orderKeys);
    var openKeys = route && _this.getParentsResolvePaths(route);
    if (!openKeys || !openKeys.length) {
      openKeys = _this.getOpenKeys(routes, props.subMenus);
    }
    _this.state = {
      routes: routes,
      selectedKeys: route ? [_this.props.getResolvePath(route)] : null,
      openKeys: openKeys,
      subMenus: props.subMenus
    };
    return _this;
  }

  _createClass(Sider, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (this.props.route !== nextProps.route) {
        var resolvePath = this.props.getResolvePath(nextProps.route);
        if (!this.state.selectedKeys || this.state.selectedKeys.indexOf(resolvePath) === -1) {
          var routes = this.getRoutes(nextProps.routes, nextProps.orderKeys);
          var openKeys = this.state.openKeys.length ? this.state.openKeys : nextProps.route && this.getParentsResolvePaths(nextProps.route);
          if (!openKeys || !openKeys.length) {
            openKeys = this.getOpenKeys(routes, nextProps.subMenus);
          }
          this.setState({
            routes: routes,
            selectedKeys: [resolvePath],
            openKeys: openKeys
          });
        }
      }
    }
  }, {
    key: 'getRoutes',
    value: function getRoutes(routes, orderKeys) {
      if (orderKeys) {
        var map = {};
        orderKeys.forEach(function (v, index) {
          return map[v] = index;
        });
        return bubbleSort(routes, function (a, b) {
          var aName = a.children ? a.name : a.navKey || a.name;
          var bName = b.children ? b.name : b.navKey || b.name;
          var compare = map[aName] - map[bName];
          if (compare === 0 || isNaN(compare)) {
            return a.value - b.value;
          } else {
            return compare;
          }
        });
      } else {
        return routes;
      }
    }
  }, {
    key: 'getOpenKeys',
    value: function getOpenKeys(routes, subMenus) {
      var _this2 = this;

      var level = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

      if (this.props.openLevel) {
        var cacheMap = {};
        var keys = [];
        routes.forEach(function (route) {
          var children = route.children || route.childRoutes;
          if (route.navKey && subMenus[route.navKey]) {
            if (!cacheMap[route.navKey]) {
              cacheMap[route.navKey] = true;
              keys.push(route.navKey);
            }
          } else if (children && level < _this2.props.openLevel) {
            if (!cacheMap[route.name]) {
              cacheMap[route.name] = true;
              keys.push(route.name);
            }
            keys = keys.concat(_this2.getOpenKeys(children, subMenus, level + 1));
          }
        });
        return keys;
      } else {
        return null;
      }
    }
  }, {
    key: 'getParentsResolvePaths',
    value: function getParentsResolvePaths(route) {
      var resolvePaths = [];
      var navKey = route.navKey;
      while (route.parent) {
        route = route.parent;
        resolvePaths.push(route.name);
      }
      if (navKey && this.props.subMenus[navKey]) {
        resolvePaths.push(navKey);
      }
      return resolvePaths;
    }
  }, {
    key: 'packNode',
    value: function packNode(item, level) {
      var _this3 = this;

      var subMenus = this.state.subMenus;
      if (item.hide || item.disabled) {
        return null;
      }
      if (item.navKey && subMenus[item.navKey]) {
        if (subMenus[item.navKey].hide || subMenus[item.navKey].disabled) {
          return null;
        }
        if (level < 1) {
          subMenus[item.navKey].children = subMenus[item.navKey].children || [];
          var idx = subMenus[item.navKey].children.findIndex(function (d) {
            return d.name === item.name;
          });
          if (idx === 0) {
            item = subMenus[item.navKey];
          } else if (idx === -1) {
            subMenus[item.navKey].children = subMenus[item.navKey].children || [];
            idx = subMenus[item.navKey].children.push(item);
            if (idx > 1) {
              clearTimeout(this._timer);
              this._timer = setTimeout(function () {
                clearTimeout(_this3._timer);
                if (_this3.mounted) {
                  _this3.forceUpdate();
                }
              });
              return null;
            } else {
              var navKey = item.navKey;
              item = subMenus[item.navKey];
              item.name = navKey;
            }
          } else {
            return null;
          }
        }
      }

      // #! 从路由配置项中获取childRoutes
      var target = item.target;
      var title = item.title || item.name;
      var icon = item.icon;
      var iconCom = icon && _react2.default.createElement(_icon2.default, { type: icon });
      var children = item.children || item.childRoutes || [];

      if (title) {
        return {
          target: target,
          icon: iconCom,
          title: title,
          name: item.navKey ? item.navKey + '-' + item.name : item.name,
          children: children,
          hide: item.hide || item.disabled,
          path: children.length ? null : this.props.getResolvePath(item)
        };
      } else {
        return null;
      }
    }
  }, {
    key: 'getNavMenuItems',
    value: function getNavMenuItems(menusData) {
      var _this4 = this;

      var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var ILink = this.props.Link;
      if (!menusData) {
        return [];
      }
      return menusData.map(function (item) {
        item = _this4.packNode(item, level);

        if (!item) {
          return null;
        }

        if (item.children.length) {
          return _react2.default.createElement(
            _menu2.default.SubMenu,
            {
              title: item.icon ? _react2.default.createElement(
                'span',
                null,
                item.icon,
                _react2.default.createElement(
                  'span',
                  { className: 'j-menu-text' },
                  item.title
                )
              ) : _react2.default.createElement(
                'span',
                { className: 'j-menu-text' },
                item.title
              ),
              key: item.name },
            _this4.getNavMenuItems(item.children, level + 1)
          );
        }
        return _react2.default.createElement(
          _menu2.default.Item,
          { key: item.path },
          HTTP_PATTERN.test(item.path) ? _react2.default.createElement(
            'a',
            {
              href: item.path,
              target: item.target,
              onClick: function onClick(e) {
                return ['_self', undefined].indexOf(item.target) === -1 && e.stopPropagation();
              } },
            item.icon,
            _react2.default.createElement(
              'span',
              { className: 'j-menu-text' },
              item.title
            )
          ) : _react2.default.createElement(
            ILink,
            { to: item.path, target: item.target },
            item.icon,
            _react2.default.createElement(
              'span',
              { className: 'j-menu-text' },
              item.title
            )
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var Conn = void 0;
      var connProps = void 0;
      var sider = this.props.sider;
      var header = this.props.header;
      var brand = this.props.brand;
      var ILink = this.props.Link;
      var flexDiv = void 0;

      var menuOption = Object.assign({
        mode: 'inline',
        theme: 'dark',
        inlineIndent: 24
      }, this.props.menu);

      if (menuOption.mode === 'horizontal') {
        Conn = _layout2.default.Header;
        connProps = header || {};
      } else {
        menuOption.style = menuOption.style || {
          margin: '16px 0',
          width: '100%'
        };
        menuOption.openKeys = this.state.collapsed ? null : this.state.openKeys;
        var _props = this.props,
            collapsed = _props.collapsed,
            onCollapse = _props.onCollapse,
            flex = _props.flex;

        Conn = _layout2.default.Sider;
        // inspired
        if (sider) {
          connProps = sider;
        } else {
          var width = this.props.width || 256;
          var collapsedWidth = this.props.collapsedWidth || 80;
          if (collapsed) {
            width = 0;
            collapsedWidth = 0;
          }
          connProps = {
            trigger: null,
            collapsible: true,
            breakpoint: 'md',
            width: width,
            collapsedWidth: collapsedWidth
          };
        }
        connProps.className = 'j-com-sider ' + 'j-com-sider-' + menuOption.theme + ' ' + (collapsed ? 'j-com-sider-collapse' : 'j-com-sider-expand');
        if (connProps.flex || flex) {
          flexDiv = _react2.default.createElement(
            'div',
            { className: 'j-sider-collapse-outer' },
            _react2.default.createElement(
              'div',
              { className: 'j-sider-collapse-inner' },
              _react2.default.createElement('div', { className: 'j-sider-collapse-bg' }),
              _react2.default.createElement(
                'div',
                { className: 'j-sider-collapse', onClick: function onClick() {
                    return onCollapse(!collapsed);
                  } },
                collapsed ? _react2.default.createElement(_icon2.default, { type: 'menu-unfold' }) : _react2.default.createElement(_icon2.default, { type: 'menu-fold' })
              )
            )
          );
        }
      }
      return _react2.default.createElement(
        Conn,
        connProps,
        brand ? _react2.default.createElement(
          'div',
          { className: 'j-sider-logo' },
          _react2.default.createElement(
            ILink,
            { to: brand.path || '/' },
            _react2.default.createElement('img', { src: brand.logo, alt: 'logo' }),
            _react2.default.createElement(
              'h1',
              { className: 'j-menu-text' },
              brand.title
            )
          )
        ) : null,
        _react2.default.createElement(
          _menu2.default,
          _extends({
            onOpenChange: function onOpenChange(openKeys) {
              return _this5.setState({ openKeys: openKeys });
            },
            onSelect: function onSelect(item) {
              return _this5.setState({ selectedKeys: item.selectedKeys });
            },
            selectedKeys: this.state.selectedKeys,
            inlineCollapsed: this.state.collapsed
          }, menuOption),
          this.getNavMenuItems(this.state.routes)
        ),
        flexDiv
      );
    }
  }]);

  return Sider;
}(_react2.default.PureComponent), _class.propTypes = {
  routes: _propTypes2.default.array.isRequired,
  route: _propTypes2.default.object,
  orderKeys: _propTypes2.default.array,
  collapsed: _propTypes2.default.bool,
  openLevel: _propTypes2.default.number,
  brand: _propTypes2.default.object,
  subMenus: _propTypes2.default.object,
  Link: _propTypes2.default.any,
  getResolvePath: _propTypes2.default.func,
  menu: _propTypes2.default.object,

  width: _propTypes2.default.any,
  collapsedWidth: _propTypes2.default.any,
  onCollapse: _propTypes2.default.func,
  flex: _propTypes2.default.bool,
  sider: _propTypes2.default.object,
  header: _propTypes2.default.object
}, _class.defaultProps = {
  subMenus: {},
  getResolvePath: function getResolvePath(item) {
    return item.resolvePath || item.path;
  },
  Link: _reactRouter.Link,
  brand: {
    logo: '//img.alicdn.com/tfs/TB14dINRpXXXXcyXXXXXXXXXXXX-64-64.png?t=1517996107967',
    title: 'App'
  }
}, _temp);

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("lodash/upperFirst");

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/row");

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/col");

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CustomForm = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _form = __webpack_require__(10);

var _form2 = _interopRequireDefault(_form);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _inputNumber = __webpack_require__(64);

var _inputNumber2 = _interopRequireDefault(_inputNumber);

var _select = __webpack_require__(65);

var _select2 = _interopRequireDefault(_select);

var _datePicker = __webpack_require__(66);

var _datePicker2 = _interopRequireDefault(_datePicker);

var _timePicker = __webpack_require__(67);

var _timePicker2 = _interopRequireDefault(_timePicker);

var _radio = __webpack_require__(29);

var _radio2 = _interopRequireDefault(_radio);

var _checkbox = __webpack_require__(68);

var _checkbox2 = _interopRequireDefault(_checkbox);

var _switch = __webpack_require__(69);

var _switch2 = _interopRequireDefault(_switch);

var _card = __webpack_require__(11);

var _card2 = _interopRequireDefault(_card);

var _upload = __webpack_require__(70);

var _upload2 = _interopRequireDefault(_upload);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _tabs = __webpack_require__(71);

var _tabs2 = _interopRequireDefault(_tabs);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _message = __webpack_require__(7);

var _message2 = _interopRequireDefault(_message);

var _isPlainObject = __webpack_require__(72);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _moment = __webpack_require__(73);

var _moment2 = _interopRequireDefault(_moment);

var _localeContext = __webpack_require__(3);

__webpack_require__(74);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CustomFormBase = (_dec = (0, _localeContext.localeContext)('CustomForm', {
  illegal: '表单校验失败',
  dataIndex: '数据项',
  legend: '数据结构',
  upload: '上传文件',
  save: '保存',
  cancel: '取消'
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(CustomFormBase, _React$PureComponent);

  function CustomFormBase(props) {
    _classCallCheck(this, CustomFormBase);

    var _this = _possibleConstructorReturn(this, (CustomFormBase.__proto__ || Object.getPrototypeOf(CustomFormBase)).call(this, props));

    _this._dataSource = _this._asMutable(props.dataSource);
    _this.optionsMap = {};
    _this.refsMap = {};

    _this._submitting = false;
    _this._validating = false;
    return _this;
  }

  _createClass(CustomFormBase, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.mounted = true;
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource !== this.props.dataSource) {
        this._dataSource = this._asMutable(nextProps.dataSource);
      }
    }
  }, {
    key: '_asMutable',
    value: function _asMutable(obj) {
      var _this2 = this;

      if (Array.isArray(obj)) {
        var arr = [];
        obj.forEach(function (d) {
          arr.push(_this2._asMutable(d));
        });
        return arr;
      } else if (Object(obj) === obj) {
        var newObj = {};
        for (var key in obj) {
          if (Object(obj[key]) === obj[key]) {
            newObj[key] = this._asMutable(obj[key]);
          } else {
            if (obj.hasOwnProperty(key)) {
              newObj[key] = obj[key];
            }
          }
        }
        return newObj;
      } else {
        return obj;
      }
    }
  }, {
    key: 'validate',
    value: function validate(keep, attrName) {
      var _this3 = this;

      this._validating = true;
      return new Promise(function (resolve, reject) {
        _this3.props.form.validateFields(function (err, body) {
          if (err) {
            _this3._validating = false;
            reject(err);
            _message2.default.error(_this3.getLocale('illegal'));
          } else {
            body = _this3.parseBody(body);

            var promises = [];
            /* eslint-disable react/no-string-refs */
            for (var name in _this3.refs) {
              promises.push(_this3.refs[name].validate(keep, name));
            }
            Promise.all(promises).then(function (bodys) {
              _this3._validating = false;
              if (bodys.length) {
                body = bodys.reduce(function (p, c) {
                  if (Array.isArray(c)) {
                    if (p[c[0]]) {
                      p[c[0]].push(c[1]);
                    } else {
                      p[c[0]] = [c[1]];
                    }
                    return p;
                  } else {
                    return Object.assign(p, c);
                  }
                }, body);
              }
              if (keep && attrName) {
                var arr = attrName.split('@');
                // 数组形式
                if (arr.length === 2) {
                  resolve([arr[0], body]);
                } else {
                  resolve(_defineProperty({}, attrName, body));
                }
              } else {
                resolve(body);
              }
            }, function (errs) {
              _this3._validating = false;
              _message2.default.error(_this3.getLocale('illegal'));
              reject(errs);
            });
          }
        });
      });
    }
  }, {
    key: 'handleSubmit',
    value: function handleSubmit(onSubmit, keep) {
      var _this4 = this;

      if (this.props.disabled) {
        return Promise.resolve(true);
      }
      this._submitting = true;
      return this.validate(keep).then(function (body) {
        var result = void 0;
        try {
          if (onSubmit) {
            result = onSubmit(body, _this4.props.dataSource);
          } else if (_this4.props.onSubmit) {
            result = _this4.props.onSubmit(body, _this4.props.dataSource);
          }
        } catch (e) {
          window.console.error(e);
        }
        if (result && result.then) {
          result.then(function () {
            _this4._submitting = false;
          }, function () {
            _this4._submitting = false;
          });
        } else {
          _this4._submitting = false;
        }
        return result;
      });
    }
  }, {
    key: 'parseBody',
    value: function parseBody(body) {
      if (this.props.normalize) {
        for (var name in body) {
          if (body[name] !== undefined) {
            // 组合成数组
            if (this.optionsMap[name].getValue) {
              body[name] = this.optionsMap[name].getValue(body[name]);
            }
            if (this.optionsMap[name].originName) {
              var v = body[name];
              delete body[name];
              name = this.optionsMap[name].originName;
              body[name] = body[name] || [];
              body[name].push(v);
            }
          }
        }
      }
      if (this.props.name) {
        return _defineProperty({}, this.props.name, body);
      } else {
        return body;
      }
    }
  }, {
    key: 'handleCancel',
    value: function handleCancel() {
      this.context.router.goBack();
    }
  }, {
    key: 'getFormLayout',
    value: function getFormLayout(option, extra) {
      return Object.assign({}, this.props.formLayout, {
        label: option.title || option.name || extra.title,
        required: option.required || extra.required,
        hasFeedback: option.hasFeedback || extra.hasFeedback,
        help: option.help || extra.help,
        className: option.className || extra.className,
        extra: option.extra ? option.extra : option.icon || null
      });
    }
  }, {
    key: 'getInitialValue',
    value: function getInitialValue(option, defaultValue) {
      var dataIndex = option.name || option.dataIndex;
      var initialValue = this._dataSource[dataIndex];
      if (this.props.normalize && initialValue !== undefined) {
        switch (option.type) {
          case 'boolean':
            if (typeof initialValue !== 'boolean') {
              initialValue = [false, true][parseInt(initialValue, 10)];
              option.getValue = function (value) {
                return value + 0;
              };
              option.builtIn = true;
            }
            break;
          case 'array':
            if (!Array.isArray(initialValue)) {
              initialValue = initialValue.split(',');
              option.getValue = function (value) {
                return Array.isArray(value) ? value.join(',') : String(value);
              };
              option.builtIn = true;
            }
            break;
        }
      }
      if (initialValue === undefined && !this.props.loading) {
        initialValue = defaultValue;
      }
      if (!this.optionsMap[dataIndex]) {
        this._dataSource[dataIndex] = initialValue;
        this.optionsMap[dataIndex] = option;
      }
      return initialValue;
    }
  }, {
    key: 'renderInput',
    value: function renderInput(option, key, _onChange) {
      var _this5 = this;

      var dataIndex = option.name || option.dataIndex;
      if (!dataIndex) {
        return null;
      }

      var noFlattern = option.noFlattern === undefined ? this.props.noFlattern : option.noFlattern;
      var dataSource = noFlattern ? option.dataSource || this._dataSource : this._dataSource;
      if (option.children) {
        if (option.type === 'array') {
          var isArr = option.children[0].children;
          var dataSources = dataSource[dataIndex] || [];
          var tabs = [];
          var indexes = [];
          dataSources.forEach(function (d, index) {
            indexes.push(index + '');
            tabs.push({
              index: index + '',
              data: d
            });
          });
          // 已经赋值过了
          if (this.refsMap[dataIndex]) {
            // 发现传入的dataSources有值，说明外部dataSource有变化，需要重新赋值，提取是之前的值不一样
            if (dataSources.length && dataSources !== this.refsMap[dataIndex].dataSources) {
              this.refsMap[dataIndex] = {
                indexes: indexes,
                activeKey: indexes[0],
                tabs: tabs,
                dataSources: dataSources
              };
            }
          } else {
            // 赋值
            this.refsMap[dataIndex] = {
              indexes: indexes,
              activeKey: indexes[0],
              tabs: tabs,
              dataSources: dataSources
            };
          }
          var obj = this.refsMap[dataIndex];
          return _react2.default.createElement(
            _card2.default,
            {
              className: 'j-com-customForm-card',
              key: key,
              title: option.title || dataIndex },
            _react2.default.createElement(
              _tabs2.default,
              {
                onChange: function onChange(activeKey) {
                  obj.activeKey = activeKey;
                  if (_this5.mounted) {
                    _this5.forceUpdate();
                  }
                },
                onEdit: function onEdit(targetKey, action) {
                  var idx = void 0;
                  if (action === 'add') {
                    idx = obj.indexes.length ? 1 + parseInt(obj.indexes[obj.indexes.length - 1], 10) + '' : '0';
                    obj.indexes.push(idx);
                    obj.tabs.push({
                      index: idx,
                      data: {}
                    });
                    obj.activeKey = idx + '';
                  } else {
                    idx = obj.indexes.indexOf(targetKey);
                    obj.indexes.splice(idx, 1);
                    obj.tabs.splice(idx, 1);
                    // 选中项小于触发项
                    if (obj.activeKey >= targetKey) {
                      if (idx > 0) {
                        obj.activeKey = idx - 1;
                      } else if (obj.indexes.length) {
                        obj.activeKey = idx + 1;
                      } else {
                        obj.activeKey = '';
                      }
                      obj.activeKey = obj.activeKey + '';
                    }
                  }
                  if (_this5.mounted) {
                    _this5.forceUpdate();
                  }
                },
                activeKey: obj.activeKey,
                type: 'editable-card' },
              obj.tabs.map(function (item) {
                var key = dataIndex + '@' + obj.indexes[item.index];
                return _react2.default.createElement(
                  _tabs2.default.TabPane,
                  {
                    tab: _this5.getLocale('dataIndex') + item.index,
                    key: item.index,
                    closable: true,
                    forceRender: true },
                  isArr ? (_this5.optionsMap[key] = Object.assign({
                    name: key,
                    dataSource: dataSources[item.index],
                    originName: dataIndex,
                    title: _this5.getLocale('legend')
                  }, option.children[item.index])) && _this5.renderInput(_this5.optionsMap[key], key, function (e) {
                    if (_onChange) {
                      var arr = obj.tabs.map(function (d) {
                        return d.data;
                      });
                      var o = Object.assign({}, _this5.optionsMap[key]);
                      obj.tabs[item.index].data = arr[item.index] = CustomForm.getValueFromEvent(e, o);
                      o.name = o.originName;
                      _onChange(arr, o);
                    }
                  }) : _react2.default.createElement(CustomForm, {
                    formLayout: _this5.props.formLayout,
                    disabled: _this5.props.disabled,
                    ref: key,
                    onChange: function onChange(e, o) {
                      if (_onChange) {
                        var arr = obj.tabs.map(function (d) {
                          return d.data;
                        });
                        arr[item.index][o.name] = CustomForm.getValueFromEvent(e, o);
                        _onChange(arr, option);
                      }
                    },
                    options: option.children,
                    noLabel: _this5.props.noLabel,
                    parentDataSource: _this5._dataSource,
                    dataSource: dataSources[item.index],
                    noButton: true,
                    noFlattern: noFlattern })
                );
              })
            )
          );
        } else if (noFlattern) {
          var formElm = _react2.default.createElement(CustomForm, {
            formLayout: this.props.formLayout,
            disabled: this.props.disabled,
            key: key,
            ref: dataIndex,
            title: option.title,
            name: option.embed ? '' : dataIndex,
            onChange: function onChange(e, o) {
              if (_onChange) {
                var _obj = _this5.refsMap[dataIndex] ? _this5.refsMap[dataIndex] : _this5.refsMap[dataIndex] = {};
                _obj[o.name] = CustomForm.getValueFromEvent(e, o);
                _onChange(_obj, option);
              }
            },
            options: option.children,
            noLabel: this.props.noLabel,
            parentDataSource: this._dataSource,
            dataSource: dataSource[dataIndex],
            noButton: true,
            noFlattern: noFlattern });

          return option.embed ? _react2.default.createElement(
            _form2.default.Item,
            _extends({ key: key }, this.props.formLayout, { label: option.title || dataIndex }),
            _react2.default.createElement(
              'div',
              { style: {
                  border: '1px solid #ddd',
                  padding: 10
                } },
              formElm
            )
          ) : formElm;
        } else {
          var renderInput = this.renderInput.bind(this);
          return _react2.default.createElement(
            _card2.default,
            {
              className: 'j-com-customForm-card',
              key: key,
              title: option.title || dataIndex },
            option.children.map(renderInput)
          );
        }
      }

      var propsByState = option.getProps ? option.getProps.call(this, this._dataSource, function (nextState) {
        Object.assign(_this5._dataSource, nextState);
        _this5.forceUpdate();
      }, this.props.form) : {};
      if (propsByState.name === false) {
        return null;
      }
      var initialValue = this.getInitialValue(option, propsByState.default || option.default);

      var formItemProps = this.getFormLayout(option, propsByState);
      if (this.props.noLabel) {
        formItemProps.label = null;
      }
      var rules = [].concat(this.props.rules[dataIndex] || []);
      var defaultProps = {
        disabled: option.disabled || this.props.disabled,
        placeholder: option.placeholder
      };
      var decoratorProps = {
        defaultValue: initialValue,
        rules: rules.concat(option.rules || propsByState.rules || []),
        getValueFromEvent: function getValueFromEvent(e) {
          var v = CustomForm.getValueFromEvent(e, option);
          _this5._dataSource[dataIndex] = v;
          if (_onChange) {
            _onChange(v, option);
          }
          if (option.onChange) {
            option.onChange(_this5._dataSource, function (nextState) {
              _this5.props.form.setFieldsValue(nextState);
            });
          }
          return v;
        }
      };
      if (option.renderInput) {
        return option.renderInput(option, function (node, dpros) {
          return _react2.default.createElement(
            _form2.default.Item,
            _extends({ key: key }, formItemProps),
            _this5.props.form.getFieldDecorator(dataIndex, Object.assign(decoratorProps, dpros))(node)
          );
        }, Object.assign(defaultProps, propsByState), this.props.form);
      } else {
        var input = CustomForm.getFieldInput(option, defaultProps, propsByState, decoratorProps);
        return _react2.default.createElement(
          _form2.default.Item,
          _extends({ key: key }, formItemProps),
          this.props.form.getFieldDecorator(dataIndex, decoratorProps)(input)
        );
      }
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.props.form.resetFields();
      this.refsMap = {};
      /* eslint-disable react/no-string-refs */
      for (var name in this.refs) {
        this.refs[name].clear();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      var _buttons = CustomForm.getButtons(this.props.buttons, {
        noButton: this.props.noButton,
        save: this.getLocale('save'),
        cancel: this.getLocale('cancel'),
        onSubmit: function onSubmit() {
          return _this6.handleSubmit(null, _this6.props.keep);
        },
        onCancel: function onCancel() {
          return _this6.handleCancel();
        }
      });
      var buttons = _buttons ? _react2.default.createElement(
        _form2.default.Item,
        {
          wrapperCol: {
            offset: this.props.formLayout.labelCol.span,
            span: this.props.formLayout.wrapperCol.span
          } },
        _buttons
      ) : null;

      var compact = this.props.compact ? 'j-com-customForm-compact ' : '';
      var className = compact + this.props.className;
      var formElm = _react2.default.createElement(
        _form2.default,
        {
          className: 'j-com-customForm ' + className,
          style: this.props.style,
          onSubmit: function onSubmit(e) {
            e.preventDefault();
            _this6.handleSubmit(null, _this6.props.keep);
          },
          layout: this.props.layout },
        this.props.options.map(function (option, key) {
          return _this6.renderInput(option, key, _this6.props.onChange);
        }),
        ' ',
        buttons
      );
      if (this.props.name) {
        return _react2.default.createElement(
          _card2.default,
          {
            className: 'j-com-customForm-card ' + className,
            title: this.props.title || this.props.name },
          formElm
        );
      } else {
        return formElm;
      }
    }
  }, {
    key: 'submitting',
    get: function get() {
      return this._submitting;
    }
  }, {
    key: 'validating',
    get: function get() {
      return this._validating;
    }
  }]);

  return CustomFormBase;
}(_react2.default.PureComponent), _class2.contextTypes = {
  router: _propTypes2.default.object
}, _class2.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  dataSource: _propTypes2.default.object,
  parentDataSource: _propTypes2.default.object,
  options: _propTypes2.default.array.isRequired,
  formLayout: _propTypes2.default.object,
  rules: _propTypes2.default.object,
  onSubmit: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  layout: _propTypes2.default.string,
  buttons: _propTypes2.default.object,
  name: _propTypes2.default.string,
  title: _propTypes2.default.string,
  noLabel: _propTypes2.default.bool,
  noButton: _propTypes2.default.bool,
  noFlattern: _propTypes2.default.bool,
  normalize: _propTypes2.default.bool,
  loading: _propTypes2.default.bool,
  keep: _propTypes2.default.bool,
  form: _propTypes2.default.object,
  compact: _propTypes2.default.bool,
  disabled: _propTypes2.default.bool
}, _class2.defaultProps = {
  className: '',

  layout: 'horizontal',
  dataSource: {},
  compact: true,
  rules: {},
  normalize: true,
  options: [],
  formLayout: {
    labelCol: {
      span: 4
    },
    wrapperCol: {
      span: 19
    },
    hasFeedback: true,
    required: true
  }
}, _temp)) || _class);


var CustomForm = _form2.default.create({ withRef: true })(CustomFormBase);

CustomForm.getLabel = function getLabel(item, option) {
  if (option.getLabel) {
    return option.getLabel(item);
  } else {
    return option.lableKey ? item[option.lableKey] : item.label || item.name;
  }
};
CustomForm.getValueFromEvent = function getValueFromEvent(e, option) {
  var v = void 0;
  if (Object(e) === e) {
    if ((0, _isPlainObject2.default)(e) || (0, _isPlainObject2.default)(e.__proto__)) {
      if (option.valuePropName) {
        v = e[option.valuePropName];
      } else {
        v = e.target ? e.target.value : e;
      }
    } else {
      v = e.target && e.target.nodeName ? e.target.value : e;
    }
  } else {
    v = e;
  }
  return option.builtIn && option.getValue ? option.getValue(v) : v;
};

CustomForm.getButtons = function getButtons(buttons, props) {
  if (!buttons && !props.noButton) {
    buttons = [];
    if (props.save) {
      buttons.push(_react2.default.createElement(
        _button2.default,
        {
          key: 0,
          onClick: props.onSubmit,
          style: {
            marginRight: 10
          },
          type: 'primary' },
        props.save || 'save'
      ));
    }
    if (props.cancel) {
      buttons.push(_react2.default.createElement(
        _button2.default,
        { key: 1,
          onClick: props.onCancel,
          style: {
            marginRight: 10
          },
          type: 'default' },
        props.cancel || 'cancel'
      ));
    }
  }
  return buttons;
};
/**
 * option = {
 *  dataType | type,
 *  // 枚举值
 *  enum,
 *  options,
 *
 *  // 特殊组件
 *  format,
 *  mode,
 *  // 上传
 *  dragger,
 *  action,
 *  valuePropName,
 *
 *  // 指定组件
 *  Component,
 *
 *  // 数字
 *  max,
 *  maxLength,
 *  maximum,
 *  // 置灰
 *  disabled,
 *  // 提示
 *  placeholder
 * }
 */
CustomForm.getFieldInput = function getFieldInput(option, props, stateProps, decorator) {
  var input = void 0;
  var dataFormat = void 0;
  if (option.enum) {
    input = _react2.default.createElement(
      _radio2.default.Group,
      _extends({}, props, stateProps),
      option.enum.map(function (item) {
        return _react2.default.createElement(
          _radio2.default,
          { key: item, value: item },
          item
        );
      })
    );
  } else {
    if (option.format) {
      switch (option.format) {
        case 'DATE_TIME':
          dataFormat = option.dataFormat || 'YYYY-MM-DD HH:mm:ss';
          decorator.initialValue = (0, _moment2.default)(decorator.defaultValue);
          input = _react2.default.createElement(_datePicker2.default, _extends({
            style: {
              maxWidth: 250
            },
            showTime: true,
            format: dataFormat
          }, props, stateProps));
          break;
        case 'DATE':
          dataFormat = option.dataFormat || 'YYYY-MM-DD';
          decorator.initialValue = (0, _moment2.default)(decorator.defaultValue);
          input = _react2.default.createElement(_datePicker2.default, _extends({
            style: {
              maxWidth: 250
            },
            format: dataFormat
          }, props, stateProps));
          break;
        case 'TIME':
          dataFormat = option.dataFormat || 'HH:mm:ss';
          decorator.initialValue = (0, _moment2.default)(decorator.defaultValue);
          input = _react2.default.createElement(_timePicker2.default, _extends({
            style: {
              maxWidth: 250
            },
            format: dataFormat
          }, props, stateProps));
          break;
        case 'DATE_RANGE':
          input = _react2.default.createElement(_datePicker2.default.RangePicker, _extends({}, props, stateProps));
          break;
        case 'CDN_PIC':
        case 'FILE':
          dataFormat = option.description || 'Click or drag files to the upload area';
          decorator.valuePropName = option.valuePropName = 'fileList';
          if (option.dragger) {
            input = _react2.default.createElement(
              _upload2.default.Dragger,
              _extends({}, props, stateProps, {
                listType: option.format === 'FILE' ? 'text' : 'picture',
                action: option.action }),
              _react2.default.createElement(
                'p',
                { className: 'ant-upload-drag-icon' },
                _react2.default.createElement(_icon2.default, { type: 'inbox' })
              ),
              _react2.default.createElement(
                'p',
                { className: 'ant-upload-text' },
                dataFormat
              )
            );
          } else {
            input = _react2.default.createElement(
              _upload2.default,
              _extends({}, props, stateProps, {
                action: option.action,
                listType: option.format === 'FILE' ? 'text' : 'picture' }),
              _react2.default.createElement(
                _button2.default,
                null,
                _react2.default.createElement(_icon2.default, { type: 'upload' }),
                ' ',
                option.description || 'Upload'
              )
            );
          }
          break;
        case 'SELECT':
          var options = stateProps.options || option.options;
          if (option.mode === 'radio') {
            input = _react2.default.createElement(
              _radio2.default.Group,
              _extends({}, props, stateProps),
              options.map(function (item) {
                return _react2.default.createElement(
                  _radio2.default,
                  {
                    key: item.value,
                    value: item.value,
                    disabled: item.disabled },
                  CustomForm.getLabel(item, option)
                );
              })
            );
          } else if (option.mode === 'checkbox') {
            input = _react2.default.createElement(_checkbox2.default.Group, _extends({}, props, stateProps, { options: options }));
          } else {
            input = _react2.default.createElement(
              _select2.default,
              _extends({ mode: option.mode }, props, stateProps),
              options.map(function (item) {
                return _react2.default.createElement(
                  _select2.default.Option,
                  {
                    key: item.value || item.id,
                    value: item.value || item.id,
                    disabled: item.disabled },
                  CustomForm.getLabel(item, option)
                );
              })
            );
          }
          break;
        case 'Component':
          input = _react2.default.createElement(option.Component, _extends({}, props, stateProps));
          break;
        case 'Element':
        case 'TEXT':
        case 'Function':
        case 'JSON':
          input = _react2.default.createElement(_input2.default.TextArea, _extends({
            autosize: {
              minRows: 4,
              maxRows: 10
            }
          }, props, {
            onPressEnter: decorator.getValueFromEvent,
            onBlur: decorator.getValueFromEvent
          }, stateProps));
          break;
        default:
          input = _react2.default.createElement(_input2.default, _extends({}, props, stateProps));
      }
    } else {
      var type = option.dataType || option.type;
      switch (type) {
        case 'number':
        case 'integer':
          var max = option.max;
          if (!max) {
            var maxLength = maxLength = option.maxLength ? option.maxLength : 10;
            max = +new Array(maxLength).join(9);
            if (option.maximum) {
              max = Number(maxLength + '0.' + option.maximum);
            }
          }
          input = _react2.default.createElement(_inputNumber2.default, _extends({
            style: {
              maxWidth: 250
            },
            min: option.min ? option.min : 0,
            max: max
          }, props, stateProps));
          break;
        case 'boolean':
          decorator.valuePropName = option.valuePropName || 'checked';
          var placeholder = [].concat(option.placeholder);
          input = _react2.default.createElement(_switch2.default, _extends({
            unCheckedChildren: placeholder[0],
            checkedChildren: placeholder[1]
          }, props, stateProps));
          break;
        case 'string':
        default:
          input = _react2.default.createElement(_input2.default, _extends({}, props, stateProps));
          break;
      }
    }
  }
  decorator.initialValue = decorator.initialValue || decorator.defaultValue;
  return input;
};

CustomForm.prototype.getRealInstance = function () {
  return this.refs.wrappedComponent;
};
['handleSubmit', 'clear', 'validate'].forEach(function (method) {
  CustomForm.prototype[method] = function () {
    var _refs$wrappedComponen;

    return (_refs$wrappedComponen = this.refs.wrappedComponent)[method].apply(_refs$wrappedComponen, arguments);
  };
});
Object.defineProperties(CustomForm.prototype, {
  submitting: {
    get: function get() {
      return this.refs.wrappedComponent.submitting;
    }
  },
  validating: {
    get: function get() {
      return this.refs.wrappedComponent.validating;
    }
  }
});

exports.CustomForm = CustomForm;

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/radio");

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Divider");

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/dropdown");

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DataSet = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataSet = exports.DataSet = (_temp = _class = function (_React$PureComponent) {
  _inherits(DataSet, _React$PureComponent);

  function DataSet(props, context) {
    _classCallCheck(this, DataSet);

    var _this = _possibleConstructorReturn(this, (DataSet.__proto__ || Object.getPrototypeOf(DataSet)).call(this, props, context));

    _this.handleResolve = function (value, params) {
      if (_this.props.spin) {
        _this.setState({
          pending: true
        });
      }
      if (_this.props.getResolver) {
        var resolver = _this.props.getResolver(value, params);
        resolver.then(function (iState) {
          iState.pending = false;
          _this.setState(iState, _this.props.onChange);
        });
      }
    };

    _this.state = {
      pending: props.spin
    };
    _this.stateUpdater = {};

    if (props.getResolver) {
      _this._resolver = props.getResolver(props.defaultValue);
    }
    /**
     * prop = {
     *  value: Object | Function,
     *  format: String,
     *  formatter: Function,
     *  setter: String | Function
     * }
     */
    Object.keys(props.data).forEach(function (name) {
      var prop = props.data[name];
      if (prop.value) {
        var originValue = typeof prop.value === 'function' ? prop.value.call(_this, _this.props) : prop.value;
        var formatter = _this.getFormatter(props.formatter, name);
        // formatter是一系列解决组件schema的格式化函数
        if (formatter) {
          _this.state[name] = formatter.call(_this, prop.schema, originValue);
        } else {
          _this.state[name] = originValue;
        }
      }
      if (prop.setter) {
        var setter = props.childProps[prop.setter];
        _this.stateUpdater[prop.setter] = function (updateFn) {
          return _this.setState(function (prevState) {
            var newValue = typeof updateFn === 'function' ? updateFn.call(_this, prevState[name]) : updateFn;
            var formatter = _this.getFormatter(props.formatter, name);
            if (formatter) {
              newValue = formatter.call(_this, prop.schema, newValue);
            }
            setter && setter(newValue);
            return _defineProperty({}, name, newValue);
          });
        };
      }
    });
    return _this;
  }

  _createClass(DataSet, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this._resolver && this._resolver.then(function (iState) {
        iState.pending = false;
        _this2.setState(iState, _this2.props.onChange);
      });
    }
  }, {
    key: 'getFormatter',
    value: function getFormatter(formatter, name) {
      if (!formatter && DataSet.formatter) {
        var comFormatter = DataSet.formatter[this.props.format] || {};
        formatter = comFormatter[name];
      }
      return formatter;
    }
  }, {
    key: 'getRealInstance',
    value: function getRealInstance() {
      return this._instance;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var option = {};
      var _props = this.props,
          children = _props.children,
          Component = _props.Component,
          childProps = _props.childProps;

      var type = void 0;
      if (Component) {
        type = Component.name;
        if (type && DataSet.themeOptions[type]) {
          option = DataSet.themeOptions[type];
        }

        if (children) {
          return _react2.default.createElement(
            Component,
            _extends({
              ref: function ref(instance) {
                return _this3._instance = instance;
              }
            }, option, childProps, this.state, this.stateUpdater),
            children
          );
        } else {
          return _react2.default.createElement(Component, _extends({
            ref: function ref(instance) {
              return _this3._instance = instance;
            }
          }, option, childProps, this.state, this.stateUpdater));
        }
      } else {
        type = children.type.name;
        if (type && DataSet.themeOptions[type]) {
          option = DataSet.themeOptions[type];
        }
        return _react2.default.cloneElement(_react2.default.Children.only(children), _extends({
          ref: function ref(instance) {
            _this3._instance = instance;
            if (typeof children.ref === 'function') {
              children.ref(instance);
            }
          }
        }, option, childProps, this.state, this.stateUpdater));
      }
    }
  }]);

  return DataSet;
}(_react2.default.PureComponent), _class.formatter = {}, _class.themeOptions = {}, _class.theme = function (themeOptions) {
  DataSet.themeOptions = themeOptions;
}, _class.propTypes = {
  Component: _propTypes2.default.any,
  childProps: _propTypes2.default.object,
  onChange: _propTypes2.default.object,

  value: _propTypes2.default.any,
  data: _propTypes2.default.object,
  getResolver: _propTypes2.default.func,
  defaultValue: _propTypes2.default.string,
  format: _propTypes2.default.string,
  formatter: _propTypes2.default.func,
  children: _propTypes2.default.any,
  spin: _propTypes2.default.bool
}, _class.defaultProps = {
  data: {},
  childProps: {}
}, _temp);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DragItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DragItem = exports.DragItem = (_dec = (0, _reactDnd.DragSource)(function (props) {
  return props.type;
}, {
  beginDrag: function beginDrag(props, monitor) {
    props.doAction(props.type, props.data, monitor);
    return { data: props.data };
  },
  endDrag: function endDrag(props, monitor) {
    props.doAction(props.type, props.data, monitor);
  }
}, function (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(DragItem, _React$PureComponent);

  function DragItem() {
    _classCallCheck(this, DragItem);

    return _possibleConstructorReturn(this, (DragItem.__proto__ || Object.getPrototypeOf(DragItem)).apply(this, arguments));
  }

  _createClass(DragItem, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;
      if (this.props.isDragging) {
        className += ' j-com-drag';
      }
      return this.props.connectDragSource(_react2.default.createElement(
        'div',
        _extends({ className: className, style: this.props.style }, this.props.htmlFor),
        this.props.children
      ));
    }
  }]);

  return DragItem;
}(_react2.default.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  type: _propTypes2.default.string.isRequired,
  data: _propTypes2.default.object.isRequired,
  doAction: _propTypes2.default.func.isRequired,
  connectDragSource: _propTypes2.default.func,
  isDragging: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  htmlFor: _propTypes2.default.object
}, _class2.defaultProps = {
  className: '',

  doAction: function doAction(noop) {
    return noop;
  },
  htmlFor: {}
}, _temp)) || _class);

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropItem = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDnd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DropItem = exports.DropItem = (_dec = (0, _reactDnd.DropTarget)(function (props) {
  return props.types;
}, {
  drop: function drop(props, monitor) {
    // component
    var type = monitor.getItemType();
    var data = monitor.getItem().data;
    monitor.targetProps = props;
    if (props.types.indexOf(type) > -1) {
      props.doAction(type, data, monitor);
    } else {
      props.doAction(type, data, monitor);
    }
  }
}, function (connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop()
  };
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(DropItem, _React$PureComponent);

  function DropItem() {
    _classCallCheck(this, DropItem);

    return _possibleConstructorReturn(this, (DropItem.__proto__ || Object.getPrototypeOf(DropItem)).apply(this, arguments));
  }

  _createClass(DropItem, [{
    key: 'render',
    value: function render() {
      var className = this.props.className;
      if (this.props.canDrop) {
        className += ' j-com-drop';
      }
      if (this.props.isOver) {
        className += ' j-com-drop-over';
      }
      return this.props.connectDropTarget(_react2.default.createElement(
        'div',
        _extends({ className: className, style: this.props.style }, this.props.htmlFor),
        this.props.children
      ));
    }
  }]);

  return DropItem;
}(_react2.default.PureComponent), _class2.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,

  types: _propTypes2.default.array.isRequired,
  doAction: _propTypes2.default.func.isRequired,
  connectDropTarget: _propTypes2.default.func,
  canDrop: _propTypes2.default.bool,
  isOver: _propTypes2.default.bool,
  children: _propTypes2.default.any,
  htmlFor: _propTypes2.default.object
}, _class2.defaultProps = {
  className: '',
  htmlFor: {}
}, _temp)) || _class);

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Exception = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _navLink = __webpack_require__(12);

__webpack_require__(82);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/**
 * data = {
 *  title,
 *  desc,
 *  img
 * }
 */
/* eslint-disable react/prop-types */
var Exception = function Exception(_ref) {
  var className = _ref.className,
      data = _ref.data,
      links = _ref.links,
      rest = _objectWithoutProperties(_ref, ['className', 'data', 'links']);

  return _react2.default.createElement(
    'div',
    _extends({ className: 'j-com-exception ' + className }, rest),
    _react2.default.createElement(
      'div',
      { className: 'imgBlock' },
      _react2.default.createElement('div', {
        className: 'imgEle',
        style: { backgroundImage: 'url(' + data.img + ')' }
      })
    ),
    _react2.default.createElement(
      'div',
      { className: 'content' },
      _react2.default.createElement(
        'h1',
        null,
        data.title
      ),
      _react2.default.createElement(
        'div',
        { className: 'desc' },
        data.desc
      ),
      links && _react2.default.createElement(
        'div',
        { className: 'links' },
        _react2.default.createElement(_navLink.NavLink, { links: links })
      )
    )
  );
};
exports.Exception = Exception;

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/alert");

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/spin");

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeaderSearch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _autoComplete = __webpack_require__(39);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

__webpack_require__(88);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var HeaderSearch = exports.HeaderSearch = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(HeaderSearch, _React$PureComponent);

  function HeaderSearch() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, HeaderSearch);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = HeaderSearch.__proto__ || Object.getPrototypeOf(HeaderSearch)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      searchMode: false,
      value: ''
    }, _this.onKeyDown = function (e) {
      if (e.key === 'Enter') {
        _this.timeout = setTimeout(function () {
          _this.props.onPressEnter(_this.state.value); // Fix duplicate onPressEnter
        }, 0);
      }
    }, _this.onChange = function (value) {
      _this.setState({ value: value });
      _this.props.onChange();
    }, _this.enterSearchMode = function () {
      _this.setState({
        searchMode: true
      }, function () {
        if (_this.state.searchMode) {
          _this.input.focus();
        }
      });
    }, _this.leaveSearchMode = function () {
      _this.setState({ searchMode: false, value: '' });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(HeaderSearch, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearTimeout(this.timeout);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          className = _props.className,
          style = _props.style,
          placeholder = _props.placeholder,
          restProps = _objectWithoutProperties(_props, ['className', 'style', 'placeholder']);

      return _react2.default.createElement(
        'span',
        {
          className: 'j-com-headerSearch ' + className,
          style: style,
          onClick: this.enterSearchMode },
        _react2.default.createElement(_icon2.default, { type: 'search' }),
        _react2.default.createElement(
          _autoComplete2.default,
          _extends({
            className: 'input ' + (this.state.searchMode ? 'show' : ''),
            value: this.state.value,
            onChange: this.onChange
          }, restProps),
          _react2.default.createElement(_input2.default, {
            placeholder: placeholder,
            ref: function ref(node) {
              _this2.input = node;
            },
            onKeyDown: this.onKeyDown,
            onBlur: this.leaveSearchMode })
        )
      );
    }
  }]);

  return HeaderSearch;
}(_react2.default.PureComponent), _class.propTypes = {
  className: _propTypes2.default.string,
  style: _propTypes2.default.object,
  placeholder: _propTypes2.default.string,
  onSearch: _propTypes2.default.func,
  onPressEnter: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  defaultActiveFirstOption: _propTypes2.default.bool,
  dataSource: _propTypes2.default.array
}, _class.defaultProps = {
  defaultActiveFirstOption: false,
  onPressEnter: function onPressEnter() {},
  onChange: function onChange() {},
  onSearch: function onSearch() {},
  className: '',
  placeholder: '',
  dataSource: []
}, _temp2);

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/auto-complete");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.GModal = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _modal = __webpack_require__(91);

var _modal2 = _interopRequireDefault(_modal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var iModal = void 0;
var GModal = exports.GModal = (_temp = _class = function (_React$PureComponent) {
  _inherits(GModal, _React$PureComponent);

  function GModal(props) {
    _classCallCheck(this, GModal);

    var _this = _possibleConstructorReturn(this, (GModal.__proto__ || Object.getPrototypeOf(GModal)).call(this, props));

    _this.state = {
      activeKeys: [],
      timestamp: +new Date().getTime(),
      modals: {}
    };

    iModal = props.component;
    props.component.open = function (config) {
      config.key = config.key || +new Date().getTime();
      config.width = config.width || _this.props.width;
      _this.applyChange(config, 'add');

      return {
        destroy: function destroy() {
          _this.applyChange(config, 'delete');
        },
        closeModal: function closeModal() {
          _this.applyChange(config, 'delete');
        }
      };
    };
    return _this;
  }

  _createClass(GModal, [{
    key: 'applyChange',
    value: function applyChange(config, operate) {
      var _state = this.state,
          modals = _state.modals,
          activeKeys = _state.activeKeys;

      switch (operate) {
        case 'add':
          config.onOk = this.getAction(config.onOk, config);
          config.onCancel = this.getAction(config.onCancel, config);
          if (config.visible === undefined) {
            config.visible = true;
          }
          modals[config.key] = config;
          activeKeys.push(config.key);
          this.setState({
            timestamp: +new Date().getTime()
          });
          break;
        case 'update':
          modals[config.key] = Object.assign({}, modals[config.key], config);
          var idx = activeKeys.indexOf(config.key);
          if (idx) {
            activeKeys.splice(idx, 1);
          }
          activeKeys.push(config.key);
          this.setState({
            timestamp: +new Date().getTime()
          });
          break;
        case 'delete':
          delete modals[config.key];
          activeKeys.pop();
          this.setState({
            timestamp: +new Date().getTime()
          });
          break;
        default:
          break;
      }
    }
  }, {
    key: 'getAction',
    value: function getAction(actionFn, config) {
      var _this2 = this;

      var closeModal = function closeModal() {
        _this2.applyChange(config, 'delete');
      };
      return function () {
        if (actionFn) {
          var ret = actionFn(closeModal);
          if (ret && ret.then) {
            _this2.applyChange({ key: config.key, confirmLoading: true }, 'update');
            ret.then(function () {
              // It's unnecessary to set loading=false, for the Modal will be unmounted after
              // close. this.update({   key: config.key,   confirmLoading: false });
              closeModal();
            }, function () {
              _this2.applyChange({ key: config.key, confirmLoading: false }, 'update');
            });
          } else if (ret !== false) {
            if (_this2.state.modals[config.key]) {
              closeModal();
            }
          }
        } else {
          closeModal();
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var modals = this.state.modals;
      return _react2.default.createElement(
        'div',
        null,
        Object.keys(modals).map(function (key) {
          return _react2.default.createElement(
            _this3.props.component,
            _extends({}, modals[key], { key: key }),
            _react2.default.createElement(
              'div',
              { className: (modals[key].prefixCls || 'j-com-modal') + '-body-wrapper' },
              modals[key].content
            )
          );
        })
      );
    }
  }]);

  return GModal;
}(_react2.default.PureComponent), _class.propTypes = {
  component: _propTypes2.default.any,
  width: _propTypes2.default.any
}, _class.defaultProps = {
  component: _modal2.default
}, _temp);


['open', 'info', 'success', 'error', 'warning', 'confirm'].forEach(function (action) {
  GModal[action] = function (props) {
    return iModal[action](props);
  };
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CopyLogger = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _clipboard = __webpack_require__(92);

var _clipboard2 = _interopRequireDefault(_clipboard);

var _message = __webpack_require__(7);

var _message2 = _interopRequireDefault(_message);

var _button = __webpack_require__(17);

var _button2 = _interopRequireDefault(_button);

var _localeContext = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CopyLogger = exports.CopyLogger = (_dec = (0, _localeContext.localeContext)('CopyLogger', {
  copy: '复制',
  copySuccess: '复制成功'
}), _dec(_class = function (_React$PureComponent) {
  _inherits(CopyLogger, _React$PureComponent);

  function CopyLogger() {
    _classCallCheck(this, CopyLogger);

    return _possibleConstructorReturn(this, (CopyLogger.__proto__ || Object.getPrototypeOf(CopyLogger)).apply(this, arguments));
  }

  _createClass(CopyLogger, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      /**
       * copy:
       * see: https://clipboardjs.com/
       */
      this._clipboard = new _clipboard2.default(_reactDom2.default.findDOMNode(this.refs.trigger));

      this._clipboard.on('success', function (e) {
        _message2.default.info(_this2.getLocale().copySuccess);
        e.clearSelection();
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._clipboard.destroy();
    }
  }, {
    key: 'render',
    value: function render() {
      var inlineStyle = {
        marginRight: '40px',
        display: 'block',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        wordBreak: 'break-all',
        lineHeight: '22px'
      };
      return _react2.default.createElement(
        'div',
        { style: { whiteSpace: 'nowrap' } },
        _react2.default.createElement(
          _button2.default,
          {
            style: { float: 'right' },
            ref: 'trigger',
            size: 'small',
            type: 'ghost',
            'data-clipboard-text': this.props.rid
          },
          this.getLocale().copy
        ),
        _react2.default.createElement(
          'span',
          { style: inlineStyle },
          this.props.message
        )
      );
    }
  }]);

  return CopyLogger;
}(_react2.default.PureComponent)) || _class);

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/notification");

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bootstrap = bootstrap;

var _notification = __webpack_require__(42);

var _notification2 = _interopRequireDefault(_notification);

var _message2 = __webpack_require__(7);

var _message3 = _interopRequireDefault(_message2);

var _fallbackRoutes = __webpack_require__(44);

var _beatle = __webpack_require__(45);

var _layers = __webpack_require__(46);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function bootstrap(app, getInitData, versionKey, inters) {
  _message3.default.config({
    top: 51
  });

  _beatle.crud.console = {
    success: _message3.default.success,
    error: function error(msg, err) {
      if (err) {
        if (!err.catched) {
          _notification2.default.error({ message: msg, description: err.message });
        }
      } else {
        _notification2.default.error({ message: 'ApiException', description: msg });
      }
    }
  };

  function proccessData(res) {
    if (res) {
      var _message = res.error || res.errorMessage || res.errMsg || res.message;
      if (_message) {
        return new Error(_message && JSON.stringify(_message, null, 2));
      } else {
        return res.data || null;
      }
    } else {
      return null;
    }
  }

  app.ajax.set('beforeRequest', function (ajaxOption) {
    if (ajaxOption.getMock || ajaxOption.mock) {
      return Promise.resolve(ajaxOption.getMock ? ajaxOption.getMock(ajaxOption) : ajaxOption.mock);
    } else {
      return ajaxOption;
    }
  });
  app.ajax.set('afterResponse', function (res, option, xhr) {
    xhr.catch(function (err) {
      err.catched = true;
      _notification2.default.error({ message: 'ApiException', description: err.message });
    });

    if (inters) {
      for (var key in inters) {
        res = inters[key](res, app);
        if (res instanceof Error) {
          return res;
        }
      }
    } else {
      res = proccessData(res, app);
    }
    return res;
  });

  // fallback路由
  app.route(_fallbackRoutes.fallbackRoutes, false);
  var promise = getInitData && getInitData() || Promise.resolve({});
  promise = promise.then(function () {
    var ret = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var route = app.route('/');
    var childRoutes = void 0;
    if (ret.scenes) {
      childRoutes = _layers.Layer.createLayerRoutes(ret.scenes);
      route.childRoutes = childRoutes;
      app.setRoutes(childRoutes, null, route);
    }
    return {
      versionKey: versionKey,
      prefix: bootstrap.getPrefix(app),
      dom: document.getElementById('main')
    };
  });

  return function ready(callback) {
    promise.then(callback);
  };
}

bootstrap.getPrefix = function (app, name) {
  var o = window.CONFIG || {};
  var prefix = o.prefix || '';
  return prefix + (name ? '/' + name : '') || (o.root || 'oa') + '/' + (name || app.appName);
};

bootstrap.getResolvePath = function (app, name) {
  var resolvePath = bootstrap.getPrefix(app, name);
  return resolvePath[0] === '/' ? resolvePath : '/' + resolvePath;
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fallbackRoutes = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _bootstrap = __webpack_require__(43);

var _reactRouter = __webpack_require__(4);

var _exception = __webpack_require__(35);

var _localeContext = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var exceptions = {
  403: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/wZcnGqRDyhPOEYFcZDnb.svg',
    title: '403'
  },
  404: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/KpnpchXsobRgLElEozzI.svg',
    title: '404'
  },
  500: {
    img: 'https://gw.alipayobjects.com/zos/rmsportal/RVRUAYdCGeYNBWoKiIwB.svg',
    title: '500'
  }
};

var ExceptionScene = (_dec = (0, _localeContext.localeContext)('Exception', {
  backToHome: '返回首页',
  403: '抱歉，你无权访问该页面',
  404: '抱歉，你访问的页面不存在',
  500: '抱歉，服务器出错了'
}), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(ExceptionScene, _React$PureComponent);

  function ExceptionScene() {
    _classCallCheck(this, ExceptionScene);

    return _possibleConstructorReturn(this, (ExceptionScene.__proto__ || Object.getPrototypeOf(ExceptionScene)).apply(this, arguments));
  }

  _createClass(ExceptionScene, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var locale = this.getLocale();
      var links = [{
        type: 'primary',
        size: 'large',
        name: locale.backToHome,
        action: function action() {
          _reactRouter.browserHistory.replace(_this2.context.app.route(_bootstrap.bootstrap.getPrefix(_this2.context.app)).resolvePath);
        }
      }];
      var data = exceptions[this.props.route.exception || 404];
      data.desc = locale[data.title];
      return _react2.default.createElement(_exception.Exception, {
        data: data,
        style: {
          minHeight: 500,
          height: '80%'
        },
        links: links
      });
    }
  }]);

  return ExceptionScene;
}(_react2.default.PureComponent), _class2.contextTypes = {
  app: _propTypes2.default.object
}, _class2.propTypes = {
  route: _propTypes2.default.object
}, _temp)) || _class);
var fallbackRoutes = exports.fallbackRoutes = [{
  name: 'noAuth',
  component: ExceptionScene,
  hide: true,
  exception: 403
}, {
  name: 'error',
  component: ExceptionScene,
  hide: true,
  exception: 500
}, {
  path: '*',
  resolvePath: '*',
  component: ExceptionScene,
  hide: true,
  exception: 404
}];

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = require("beatle");

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Layer = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _cloneDeep = __webpack_require__(109);

var _cloneDeep2 = _interopRequireDefault(_cloneDeep);

var _forEach = __webpack_require__(47);

var _forEach2 = _interopRequireDefault(_forEach);

var _beatle = __webpack_require__(45);

var _layerConvertor = __webpack_require__(9);

var _layerEditor = __webpack_require__(48);

var _galleryResolver = __webpack_require__(15);

var _getCombox = __webpack_require__(49);

var _getComponent2 = __webpack_require__(5);

var _layouts = __webpack_require__(50);

var _empty = __webpack_require__(118);

var _empty2 = _interopRequireDefault(_empty);

__webpack_require__(119);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Layer = exports.Layer = (_temp = _class = function () {
  function Layer(context, callback) {
    _classCallCheck(this, Layer);

    _initialiseProps.call(this);

    this.context = context;
    this._promise = new Promise(function (resolve) {
      Layer.resolveGallery(function (gallery) {
        gallery && (0, _galleryResolver.setGallery)(gallery);
        resolve(true);
        callback && callback();
      });
    });
    this._editable = false;
    this._activeFuns = [];
    this._watcherFns = [];

    this.state = {};
    // TODO Object to immutable
    this._state = Object(this.state);
  }

  _createClass(Layer, [{
    key: 'ready',
    value: function ready(callback) {
      this._promise.then(callback);
    }
  }, {
    key: 'setState',
    value: function setState(nextState) {
      var prevState = this.state;
      this.state = Object.assign({}, prevState, nextState);
      this._state = Object(this.state);

      this._watcherFns.forEach(function (fn) {
        fn.watcher(nextState, prevState);
      });
    }
  }, {
    key: 'watch',
    value: function watch(watcher, callback) {
      var name = typeof watcher === 'function' ? null : watcher;
      if (name) {
        watcher = function watcher(nextState, prevStore) {
          if (nextState[fnOpt.name] !== prevStore[fnOpt.name]) {
            fnOpt.resolve(nextState);
            fnOpt.resolved = false;
            fnOpt.promise = new Promise(function (resolve) {
              fnOpt.resolve = resolve;
            }).then(function (ret) {
              return fnOpt.callback && fnOpt.callback(ret);
            });
          }
        };
      }

      var fnOpt = this._watcherFns.find(function (fn) {
        return fn.name === name || fn.watch === watcher;
      });
      if (!fnOpt) {
        fnOpt = {
          name: name,
          watcher: watcher,
          callback: callback,
          resolved: true
        };
        this._watcherFns.push(fnOpt);
      }
      if (fnOpt.resolved) {
        fnOpt.resolved = false;
        fnOpt.promise = new Promise(function (resolve) {
          fnOpt.resolve = resolve;
        }).then(function (ret) {
          return fnOpt.callback && fnOpt.callback(ret);
        });
      }
      return fnOpt.promise;
    }
  }, {
    key: 'unwatch',
    value: function unwatch(watcher) {
      var idx = this._watcherFns.findIndex(function (fn) {
        return fn.name === watcher || fn.watch === watcher;
      });
      if (idx > -1) {
        this._watcherFns.splice(idx, 1);
      }
    }

    // -----------------------------

  }, {
    key: 'setEditable',
    value: function setEditable(editable) {
      this._editable = editable;
    }
  }, {
    key: 'isEditable',
    value: function isEditable() {
      return this._editable;
    }
  }, {
    key: 'register',
    value: function register(id, callback) {
      this._activeFuns.push({
        id: id,
        fn: callback,
        active: false
      });
    }
  }, {
    key: 'handleActive',
    value: function handleActive(id) {
      if (this._editable) {
        this._activeFns.forEach(function (afn) {
          afn.active = afn.id === id;
          afn.fn(afn.active);
        });
      }
    }
    // -----------------------------

  }, {
    key: 'getComponent',
    value: function getComponent(component, props, getProps) {
      if (component._async) {
        props = props || {};
      }
      var contextTypes = void 0;
      var newComponent = void 0;
      if (component.ChildComponent) {
        contextTypes = component.ChildComponent.contextTypes;
        component.ChildComponent = (0, _getComponent2.getComponent)(props, getProps)(component.ChildComponent);
        component.ChildComponent.contextTypes = contextTypes;

        newComponent = component;
      } else {
        contextTypes = component.contextTypes;
        newComponent = (0, _getComponent2.getComponent)(props, getProps)(component);
        newComponent.contextTypes = contextTypes;
      }
      return newComponent;
    }
    /**
     * com = {
     *  key,            // 组件key，可不填
     *  componentType,  // 组件源，默认不填是custom，分别为： antd、material、custom
     *  cname,          // 组件名，在组件源内唯一
     *  component,      // 组件定义
     *  getComponent,   // 动态组件，cname、component、getComponent选择其一
     *  view,           // 组件升级成view，可拥有model和services特性
     *  props,          // 组件props属性
     *  getProps        // 组件props动态属性,
     *  attrs,          // 组件放在容器中的定位
     * }
     */

  }, {
    key: 'parseComponent',
    value: function parseComponent(opt, staticProps) {
      /**
       * com = {
       *  componentType: [antd|custom|hc|material],
       *  cname: ['a', 'b'],
       *  props: {
       *    a: {
       *      ...
       *    },
       *    b: {
       *      componentType: [antd|custom|hc|material],
       *      component: 'x',
       *      ...
       *    }
       *  }
       * }
       */
      var newComponent = void 0;
      var props = opt.props;
      var getProps = _layerConvertor.converter.parse(opt.getProps);
      var cname = opt.cname;
      var componentOption = {
        static: opt.static,
        attrs: opt.attrs,
        key: opt.key || cname
      };
      if (opt.layer) {
        var layer = opt.layer;
        newComponent = (0, _galleryResolver.findComponent)(layer, true, 'layers');
        var layerProps = this.parseLayer(layer.components, layer.props, layer.grid, layer.item, staticProps);
        newComponent = this.toView(newComponent, layer.view, layerProps, getProps);
      } else {
        var view = opt.view;
        if (Array.isArray(cname)) {
          newComponent = (0, _getCombox.getCombox)(opt, _galleryResolver.findComponent, function () {
            return view ? newComponent.childContextTypes : newComponent.contextTypes;
          });
          props = view ? {} : null;
          getProps = null;
        } else {
          newComponent = (0, _galleryResolver.findComponent)(opt, true);
        }
        if (newComponent) {
          newComponent = this.toView(newComponent, view, props, getProps);
        } else {
          componentOption.props = props;
          componentOption.getProps = getProps;
        }
      }
      componentOption.component = newComponent;

      return componentOption;
    }
  }, {
    key: 'toView',
    value: function toView(component, viewOpt, props, getProps) {
      var newComponent = this.getComponent(component, props, getProps);
      if (viewOpt) {
        var providers = void 0;
        // const childContextTypes = {};
        if (viewOpt.providers) {
          providers = {};
          // 此处可能有问题
          (0, _forEach2.default)(viewOpt.providers, function (provider, name) {
            if (typeof name === 'number') {
              name = provider;
              provider = (0, _galleryResolver.findService)(name);
            }
            if (provider) {
              providers[name] = provider;
            }
            // childContextTypes[name] = PropTypes.object;
          });
        }
        if (viewOpt.selector) {
          var selector = new _beatle.BaseSelector();
          Object.assign(selector, viewOpt.selector);
          newComponent = this.context.app.view(selector, newComponent, providers, viewOpt.bindings, viewOpt.hookActions, viewOpt.props, viewOpt.getProps);
        } else {
          newComponent = this.context.app.view(newComponent, providers, viewOpt.bindings, viewOpt.hookActions, viewOpt.props, viewOpt.getProps);
        }
        // newComponent.childContextTypes = childContextTypes;
      }
      return newComponent;
    }

    /**
     * // 界面配置
     * sceneOption = {
     *  // 路由配置
     *  route: {
     *    title,
     *    path,
     *    value,
     *    disabled
     *  },
     *  // 布局设置
     *  layout: {
     *    cname,
     *    components: [],
     *    props: {
     *    }
     *  },
     *  // 面板设置
     *  layer: {
     *    cname: 'flexGridLayer',
     *    bindings: [String, ...],
     *    components: [
     *      {cname: String, props: Object, bindings: [], vector}
     *    ],
     *    props: {
     *    }
     *  }
     * }
     */

  }, {
    key: 'getLayer',
    value: function getLayer(opt, staticProps) {
      var _this = this;

      var promise = opt.then ? opt : Promise.resolve(opt);
      return Promise.all([promise, this._promise]).then(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 1),
            opt = _ref2[0];

        return _this.getViewComponent(opt, staticProps);
      });
    }
  }, {
    key: 'getViewComponent',
    value: function getViewComponent(opt, staticProps) {
      var ViewComponent = this.parseComponent(opt, staticProps).component;
      // 默认加入app服务
      // LayerComponent.childContextTypes = LayerComponent.childContextTypes || {};
      // LayerComponent.childContextTypes.layer = PropTypes.object;

      if (opt.layout) {
        ViewComponent.routeOptions = this.parseRoute(opt.layout, ViewComponent.routeOptions);
      }
      return ViewComponent;
    }
  }, {
    key: 'renderLayer',
    value: function renderLayer(Layer, customLayouts) {
      /* eslint-disable */
      var viewComponent = _react2.default.createElement(Layer, null);
      if (Layer.routeOptions && Layer.routeOptions.layout) {
        return (0, _layouts.getLayout)({
          layoutOption: Layer.routeOptions.layoutOption,
          layout: Layer.routeOptions.layout
        }, viewComponent, customLayouts);
      } else {
        return viewComponent;
      }
    }
  }, {
    key: 'render',
    value: function render(opt, staticProps) {
      if (opt.then || opt.layer) {
        return this.context.app.observer(this.getLayer(opt, staticProps)).render(this.renderLayer);
      } else {
        return _react2.default.createElement(
          'div',
          { className: 'o-spin-container' },
          _react2.default.createElement(_empty2.default, null)
        );
      }
    }
  }, {
    key: 'parseLayer',
    value: function parseLayer(components) {
      var props = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var layerGrid = arguments[2];

      var _this2 = this;

      var layerItem = arguments[3];
      var staticProps = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];

      var layerProps = (0, _cloneDeep2.default)(props);
      // TODO LayerItem提供了拖拽功能
      layerProps.LayerGrid = layerGrid && (0, _galleryResolver.findComponent)(layerGrid) || _layerEditor.LayerGrid;
      layerProps.LayerItem = layerItem && (0, _galleryResolver.findComponent)(layerItem) || _layerEditor.LayerItem;
      layerProps.components = [];

      if (components) {
        (0, _forEach2.default)(components, function (com, key) {
          var extra = staticProps[key] || staticProps[com.key] || staticProps[com.cname];
          // 可能不太好！！
          if (extra) {
            if (extra.props) {
              if (com.props) {
                Object.assign(com.props, extra.props);
              } else {
                com.props = extra.props;
              }
            } else if (extra.getProps) {
              if (com.getProps) {
                var getProps = com.getProps;
                com.getProps = function (props, context) {
                  var _props = extra.getProps(props, context);
                  return Object.assign(_props, getProps(props, context));
                };
              } else {
                com.getProps = extra.getProps;
              }
            }
          }

          var newCom = _this2.parseComponent(com, extra && extra.staticProps);
          layerProps.components.push(newCom);
        });
      }
      return layerProps;
    }
  }, {
    key: 'parseRoute',
    value: function parseRoute(layout) {
      var _this3 = this;

      var routeOptions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var layouts = [];
      if (layout.containerLayout) {
        if (Object(layout.containerLayout) === layout.containerLayout) {
          layouts.push((0, _galleryResolver.findComponent)(layout.containerLayout, null, 'layouts'));
        } else {
          layouts.push(layout.containerLayout);
        }
      }
      layouts.push((0, _galleryResolver.findComponent)(layout, null, 'layouts'));

      routeOptions.layout = layouts;
      routeOptions.layoutOption = layout.option; // defaultsDeep({}, layout.option);
      if (routeOptions.layoutOption.components) {
        var newComponents = {};
        (0, _forEach2.default)(routeOptions.layoutOption.components, function (com, key) {
          if (typeof key === 'number') {
            key = com.key || com.cname;
          }
          newComponents[key] = _this3.parseComponent(com);
        });
        routeOptions.layoutOption.components = newComponents;
      }

      return routeOptions;
    }
  }, {
    key: 'createLayerRoutes',
    value: function createLayerRoutes(scenes) {
      var _this4 = this;

      var layerRoutes = [];
      (0, _forEach2.default)(scenes, function (sceneOption) {
        var route = Object.assign({}, sceneOption.route, {
          // sceneOption: sceneOption,
          getComponent: function getComponent(nextState, callback) {
            _this4.getLayer(sceneOption).then(function (component) {
              Object.assign(route, component.routeOptions);
              callback(null, component);
            }, callback);
          }
        });
        layerRoutes.push(route);
      });
      return layerRoutes;
    }
  }]);

  return Layer;
}(), _class.resolveGallery = function (callback) {
  return callback({});
}, _class.contextTypes = {
  app: _propTypes2.default.object
}, _initialiseProps = function _initialiseProps() {
  this.findComponent = _galleryResolver.findComponent;
}, _temp);

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = require("lodash/forEach");

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LayerItem = exports.LayerGrid = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;
// import defaultsDeep from 'lodash/defaultsDeep';

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _dropItem = __webpack_require__(34);

var _card = __webpack_require__(11);

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 有点问题
var types = ['hc', 'custom', 'antd', 'material'];
// https://github.com/swagger-api/swagger-editor/blob/2cc957f755a72fcc005c084f689810ce468d2571/src/plugins/editor/components/editor.jsx

var LayerGrid = exports.LayerGrid = (_temp = _class = function (_React$PureComponent) {
  _inherits(LayerGrid, _React$PureComponent);

  function LayerGrid() {
    _classCallCheck(this, LayerGrid);

    return _possibleConstructorReturn(this, (LayerGrid.__proto__ || Object.getPrototypeOf(LayerGrid)).apply(this, arguments));
  }

  _createClass(LayerGrid, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: this.props.className, style: this.props.style },
        this.props.children
      );
    }
  }]);

  return LayerGrid;
}(_react2.default.PureComponent), _class.propTypes = {
  className: _propTypes2.default.string,
  children: _propTypes2.default.any,
  style: _propTypes2.default.object
}, _temp);


var __guid__ = 1;
function guid(prefix) {
  return prefix + __guid__++;
}
function wrapper(_ref) {
  var children = _ref.children;

  return children;
}
var LayerItem = exports.LayerItem = (_temp2 = _class2 = function (_React$PureComponent2) {
  _inherits(LayerItem, _React$PureComponent2);

  function LayerItem(props, context) {
    _classCallCheck(this, LayerItem);

    var _this2 = _possibleConstructorReturn(this, (LayerItem.__proto__ || Object.getPrototypeOf(LayerItem)).call(this, props));

    _this2.state = {
      active: false,
      guid: guid('layerItem')
    };
    context.layer.register(_this2.state.guid, function (active) {
      _this2.setState({
        active: active
      });
    });
    return _this2;
  }

  _createClass(LayerItem, [{
    key: 'render',
    value: function render() {
      var _this3 = this;

      var layer = this.context.layer;
      var ItemWrapper = layer.isEditable() ? _dropItem.DropItem : wrapper;
      var _props = this.props,
          title = _props.title,
          children = _props.children,
          disabled = _props.disabled,
          onChange = _props.onChange,
          cardProps = _props.cardProps,
          menu = _props.menu;

      return _react2.default.createElement(
        _card2.default,
        _extends({
          className: 'j-editor-layerItem ' + (this.state.active ? 'active' : ''),
          onClick: function onClick() {
            layer.handleActive(_this3.state.guid);
          },
          style: this.props.style,
          title: title,
          extra: disabled || !layer.isEditable() ? null : menu
        }, cardProps),
        _react2.default.createElement(
          ItemWrapper,
          { types: types, doAction: function doAction(type, item) {
              var target = {
                id: _this3.state.guid,
                key: 'update',
                type: type,
                attrs: item.attrs
              };
              onChange && onChange(target);
            } },
          children
        )
      );
    }
  }]);

  return LayerItem;
}(_react2.default.PureComponent), _class2.contextTypes = {
  layer: _propTypes2.default.object
}, _class2.propTypes = {
  title: _propTypes2.default.string,
  disabled: _propTypes2.default.bool,
  children: _propTypes2.default.element,
  onChange: _propTypes2.default.func,
  cardProps: _propTypes2.default.object,
  style: _propTypes2.default.object,
  menu: _propTypes2.default.any
}, _class2.defaultProps = {
  cardProps: {}
}, _temp2);

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.getCombox = getCombox;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _getComponent = __webpack_require__(5);

var _layerConvertor = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getCombox(_ref, findComponent) {
  var cname = _ref.cname,
      componentType = _ref.componentType,
      props = _ref.props,
      getProps = _ref.getProps,
      hoc = _ref.hoc,
      className = _ref.className;

  var Combox = function (_React$PureComponent) {
    _inherits(Combox, _React$PureComponent);

    function Combox(tprops, context) {
      _classCallCheck(this, Combox);

      var _this = _possibleConstructorReturn(this, (Combox.__proto__ || Object.getPrototypeOf(Combox)).call(this, tprops));

      var _getProps = _layerConvertor.converter.parse(getProps);
      var propsMap = _getProps ? _getProps.call(_this, tprops, context) : props || {};
      _this.state = {
        components: cname.map(function (n) {
          var item = propsMap[n];
          item.cname = item.cname || n;
          item.componentType = item.componentType || componentType;

          var Component = void 0;
          if (Array.isArray(item.cname)) {
            Component = getCombox(item, findComponent, function () {
              return Component.contextTypes;
            });
          } else {
            Component = findComponent(item) || _getComponent.getComponent.emptyComponent;
          }
          return {
            Component: Component,
            key: n
          };
        })
      };
      return _this;
    }

    _createClass(Combox, [{
      key: 'render',
      value: function render() {
        var _this2 = this;

        return _react2.default.createElement(
          'div',
          { className: 'o-com-combox ' + (className || '') },
          this.state.components.map(function (item) {
            return _react2.default.createElement(item.Component, _extends({ key: item.key }, _this2.props));
          })
        );
      }
    }]);

    return Combox;
  }(_react2.default.PureComponent);

  if (hoc) {
    var Com = findComponent(hoc);
    if (!Com) {
      window.console.log('hoc组件丢失');
    }
    var ChildComponent = Combox;
    var childProps = hoc.childProps || {};

    var HocCombox = function (_React$PureComponent2) {
      _inherits(HocCombox, _React$PureComponent2);

      function HocCombox() {
        _classCallCheck(this, HocCombox);

        return _possibleConstructorReturn(this, (HocCombox.__proto__ || Object.getPrototypeOf(HocCombox)).apply(this, arguments));
      }

      _createClass(HocCombox, [{
        key: 'render',
        value: function render() {
          var children = _react2.default.createElement(
            Com,
            null,
            _react2.default.createElement(HocCombox.ChildComponent, _extends({}, childProps, this.props))
          );
          // #! 包裹
          var wrapper = _layerConvertor.converter.parse(hoc.wrapper);
          if (wrapper) {
            return wrapper(children);
          } else {
            return children;
          }
        }
      }]);

      return HocCombox;
    }(_react2.default.PureComponent);

    HocCombox.ChildComponent = ChildComponent;
    HocCombox._async = ChildComponent._async;

    return HocCombox;
  } else {
    return Combox;
  }
}

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLayout = getLayout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _upperFirst = __webpack_require__(25);

var _upperFirst2 = _interopRequireDefault(_upperFirst);

var _defaultsDeep = __webpack_require__(110);

var _defaultsDeep2 = _interopRequireDefault(_defaultsDeep);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = __webpack_require__(111);

var exportObj = {};
context.keys().forEach(function (key) {
  Object.assign(exportObj, context(key));
});
/**
 * option = {layoutOption, layout, route}
 */
function getLayout(option, viewContent) {
  var CustomLayouts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  if (option.route && option.route.layout) {
    (0, _defaultsDeep2.default)(option.layoutOption, option.route.layoutOption, { route: option.route });
    option.layout = option.route.layout;
    delete option.route;
  }

  var layouts = Array.isArray(option.layout) ? option.layout : [option.layout];
  var layoutType = layouts[layouts.length - 1];
  var Layout = void 0;
  if (Object(layoutType) === layoutType) {
    Layout = layoutType;
  } else {
    Layout = CustomLayouts[layoutType] || exportObj[(0, _upperFirst2.default)(layoutType)] || exportObj['ConsoleLayout'];
  }

  var layoutProps = Layout.getLayoutProps(option.layoutOption, viewContent);
  viewContent = _react2.default.createElement(Layout, layoutProps);
  if (layouts.length > 1) {
    option.layout = layouts.slice(0, -1);
    return getLayout(option, viewContent, CustomLayouts);
  } else {
    return viewContent;
  }
}

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ConsoleLayout = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouter = __webpack_require__(4);

var _layout = __webpack_require__(14);

var _layout2 = _interopRequireDefault(_layout);

var _sider = __webpack_require__(24);

var _header = __webpack_require__(21);

var _basicLayout = __webpack_require__(8);

__webpack_require__(112);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var COLLAPSED_KEY = 'beatle_console_sidebar';

var ConsoleLayout = exports.ConsoleLayout = (_temp = _class = function (_BasicLayout) {
  _inherits(ConsoleLayout, _BasicLayout);

  function ConsoleLayout(props) {
    _classCallCheck(this, ConsoleLayout);

    var _this = _possibleConstructorReturn(this, (ConsoleLayout.__proto__ || Object.getPrototypeOf(ConsoleLayout)).call(this, props));

    _this.state = {
      inited: true,
      collapsed: window.localStorage && window.localStorage.getItem(COLLAPSED_KEY) === 'true' || false
    };
    return _this;
  }

  _createClass(ConsoleLayout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var collapseCfg = {
        collapsed: this.state.collapsed,
        onCollapse: function onCollapse(collapsed) {
          // if (this.state.inited && this.state.collapsed) {
          //   this.setState({inited: false});
          //   return;
          // }
          _this2.setState({ collapsed: collapsed, inited: false });
          window.localStorage && window.localStorage.setItem(COLLAPSED_KEY, collapsed);
        }
      };
      var Sider = this.getComponent('Sider');
      var BLink = this.getComponent('Link');
      var Header = this.getComponent('Header');

      return _react2.default.createElement(
        'div',
        { className: 'j-layout-console ' + this.props.className, style: this.props.style },
        _react2.default.createElement(
          _layout2.default,
          { className: 'ant-layout-has-sider' },
          _react2.default.createElement(Sider, _extends({}, collapseCfg, { Link: BLink })),
          _react2.default.createElement(
            _layout2.default,
            null,
            _react2.default.createElement(Header, collapseCfg),
            _react2.default.createElement(
              _layout2.default.Content,
              null,
              this.props.viewContent || this.props.children
            )
          )
        )
      );
    }
  }]);

  return ConsoleLayout;
}(_basicLayout.BasicLayout), _class.displayName = 'ConsoleLayout', _class.layoutBlocks = {
  Header: _header.Header,
  Link: _reactRouter.Link,
  Sider: _sider.Sider
}, _temp);

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContentLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _card = __webpack_require__(11);

var _card2 = _interopRequireDefault(_card);

var _reactRouter = __webpack_require__(4);

var _globalFooter = __webpack_require__(13);

var _breadCrumb = __webpack_require__(18);

var _basicLayout = __webpack_require__(8);

__webpack_require__(113);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContentLayout = exports.ContentLayout = (_temp = _class = function (_BasicLayout) {
  _inherits(ContentLayout, _BasicLayout);

  function ContentLayout() {
    _classCallCheck(this, ContentLayout);

    return _possibleConstructorReturn(this, (ContentLayout.__proto__ || Object.getPrototypeOf(ContentLayout)).apply(this, arguments));
  }

  _createClass(ContentLayout, [{
    key: 'render',
    value: function render() {
      var Footer = this.getComponent('Footer');
      var BLink = this.getComponent('Link');
      var BreadCrumb = this.getComponent('BreadCrumb');
      return _react2.default.createElement(
        'div',
        { className: 'j-layout-content ' + this.props.className, style: this.props.style },
        _react2.default.createElement(BreadCrumb, { Link: BLink }),
        _react2.default.createElement(
          'div',
          { className: 'j-content' },
          _react2.default.createElement(
            _card2.default,
            { bordered: false },
            this.props.viewContent || this.props.children
          )
        ),
        _react2.default.createElement(Footer, { className: 'j-footer' })
      );
    }
  }]);

  return ContentLayout;
}(_basicLayout.BasicLayout), _class.displayName = 'ContentLayout', _class.layoutBlocks = {
  Footer: _globalFooter.GlobalFooter,
  Link: _reactRouter.Link,
  BreadCrumb: _breadCrumb.BreadCrumb
}, _temp);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexContentLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _card = __webpack_require__(11);

var _card2 = _interopRequireDefault(_card);

var _affix = __webpack_require__(114);

var _affix2 = _interopRequireDefault(_affix);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _reactRouter = __webpack_require__(4);

var _breadCrumb = __webpack_require__(18);

var _globalFooter = __webpack_require__(13);

var _basicLayout = __webpack_require__(8);

var _Drawer = __webpack_require__(115);

var _Drawer2 = _interopRequireDefault(_Drawer);

var _Divider = __webpack_require__(30);

var _Divider2 = _interopRequireDefault(_Divider);

__webpack_require__(116);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var styles = {
  root: {
    flexGrow: 1
  },
  appFrame: {
    minHeight: '100%',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  drawerPaper: {
    position: 'relative'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px'
  },
  drawerHeaderRight: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 8px'
  },
  content: {
    flexGrow: 1,
    padding: 0
  },
  'contentShift-left': {
    marginLeft: 0
  },
  'contentShift-right': {
    marginRight: 0
  },
  iconSelected: {
    color: '#00bfdc',
    background: '#e6f7ff',
    boxShadow: '-1px -1px 1px #c5dff5'
  },
  title: {
    height: 30,
    width: '100%',
    lineHeight: '30px',
    paddingLeft: '10px',
    whiteSpace: 'nowrap',
    wordBreak: 'break-all',
    textOverflow: 'ellipsis',
    overflow: 'hidden'
  }
};
var FlexContentLayout = exports.FlexContentLayout = (_temp = _class = function (_BasicLayout) {
  _inherits(FlexContentLayout, _BasicLayout);

  function FlexContentLayout(props) {
    _classCallCheck(this, FlexContentLayout);

    var _this = _possibleConstructorReturn(this, (FlexContentLayout.__proto__ || Object.getPrototypeOf(FlexContentLayout)).call(this, props));

    _this.handleLeftDrawer = function (open) {
      if (open === false) {
        _this.setState({ openLeft: false });
      } else {
        _this.setState({ openLeft: !_this.state.openLeft }); // openProcessor: false
      }
    };

    _this.handleRightDrawer = function (open) {
      if (open === false) {
        _this.setState({ openRight: false });
      } else {
        _this.setState({ openRight: !_this.state.openRight });
      }
    };

    _this.handleRightDrawerClose = function () {
      _this.setState({ openRight: false });
    };

    var drawerStyle = Object.assign({ zIndex: _this.props.zIndex || 1000 }, props.drawerStyle);
    _this.state = {
      openLeft: !!_this.props.openLeft,
      openRight: !!_this.props.openRight,
      drawerStyle: drawerStyle
    };
    return _this;
  }

  _createClass(FlexContentLayout, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var Footer = this.getComponent('Footer');
      var BLink = this.getComponent('Link');
      var BreadCrumb = this.getComponent('BreadCrumb');

      var LeftDrawer = this.getComponent('LeftDrawer');
      var RightDrawer = this.getComponent('RightDrawer');
      var Overview = this.getComponent('Overview');
      var Combox = this.getComponent('Combox');
      var _props = this.props,
          className = _props.className,
          drawerWidth = _props.drawerWidth,
          overviewWidth = _props.overviewWidth,
          leftTitle = _props.leftTitle,
          rightTitle = _props.rightTitle,
          affix = _props.affix,
          style = _props.style,
          mainStyle = _props.mainStyle;
      var _state = this.state,
          drawerStyle = _state.drawerStyle,
          openLeft = _state.openLeft,
          openRight = _state.openRight;

      var hasOverview = this.hasComponent('Overview');
      var hasLeftDrawer = this.hasComponent('LeftDrawer');
      var hasRightDrawer = this.hasComponent('RightDrawer');

      var StepConnector = this.getComponent('StepConnector');
      var hasStepConnector = this.hasComponent('StepConnector');

      var beforeDrawer = hasLeftDrawer ? _react2.default.createElement(
        _Drawer2.default,
        {
          open: openLeft,
          style: styles.drawerPaper,
          width: drawerWidth,
          containerStyle: drawerStyle
        },
        _react2.default.createElement(
          'div',
          { style: styles.drawerHeader },
          _react2.default.createElement(
            'div',
            { style: styles.title },
            leftTitle
          ),
          _react2.default.createElement(_icon2.default, { type: 'left-square-o', onClick: function onClick() {
              return _this2.handleLeftDrawer(false);
            } })
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(LeftDrawer, { Link: BLink })
      ) : null;
      var afterDrawer = hasRightDrawer ? _react2.default.createElement(
        _Drawer2.default,
        {
          openSecondary: true,
          open: openRight,
          style: styles.drawerPaper,
          width: drawerWidth,
          containerStyle: drawerStyle
        },
        _react2.default.createElement(
          'div',
          { style: styles.drawerHeaderRight },
          _react2.default.createElement(_icon2.default, { type: 'right-square-o', onClick: function onClick() {
              return _this2.handleRightDrawer(false);
            } }),
          _react2.default.createElement(
            'div',
            { style: styles.title },
            rightTitle
          )
        ),
        _react2.default.createElement(_Divider2.default, null),
        _react2.default.createElement(RightDrawer, { Link: BLink })
      ) : null;
      var Head = _react2.default.createElement(
        'div',
        { className: 'j-elem-iconbox' },
        hasLeftDrawer ? _react2.default.createElement(_icon2.default, { type: 'compass', onClick: this.handleLeftDrawer, style: openLeft ? styles.iconSelected : {} }) : null,
        hasRightDrawer ? _react2.default.createElement(_icon2.default, { type: 'appstore-o', onClick: this.handleRightDrawer, style: openRight ? styles.iconSelected : {} }) : null,
        hasStepConnector ? _react2.default.createElement(
          'div',
          { className: 'j-step-connector' },
          _react2.default.createElement(StepConnector, null)
        ) : null,
        _react2.default.createElement(BreadCrumb, { Link: BLink, style: { marginLeft: hasLeftDrawer ? 35 : 0, marginRight: hasRightDrawer ? 35 : 0 } })
      );
      return _react2.default.createElement(
        'div',
        { className: 'j-layout-flexContent ' + className, style: Object.assign(style, styles.root) },
        affix ? _react2.default.createElement(
          _affix2.default,
          null,
          Head
        ) : Head,
        _react2.default.createElement(
          'div',
          { style: styles.appFrame },
          beforeDrawer,
          _react2.default.createElement(
            'main',
            {
              style: Object.assign({
                minHeight: document.body.offsetHeight - 107
              }, styles.content, mainStyle, openLeft ? { marginLeft: drawerWidth } : styles['contentShift-left'], openRight ? { marginRight: drawerWidth } : styles['contentShift-right'])
            },
            _react2.default.createElement('div', { style: styles.drawerHeader }),
            _react2.default.createElement(
              _card2.default,
              { bordered: false, className: 'j-content', style: this.props.contentStyle },
              _react2.default.createElement(
                'div',
                { className: 'j-content-wrap', style: { width: hasOverview ? 'calc(100% - ' + overviewWidth + 'px)' : '' } },
                this.props.viewContent || this.props.children
              ),
              _react2.default.createElement(
                'div',
                { className: 'j-content-overview', style: { flexBasis: overviewWidth, display: hasOverview ? '' : 'none' } },
                _react2.default.createElement(Overview, null)
              )
            ),
            _react2.default.createElement(Combox, null),
            _react2.default.createElement(Footer, { className: 'j-footer' })
          ),
          afterDrawer
        )
      );
    }
  }]);

  return FlexContentLayout;
}(_basicLayout.BasicLayout), _class.displayName = 'FlexContentLayout', _class.layoutBlocks = {
  Footer: _globalFooter.GlobalFooter,
  Link: _reactRouter.Link,
  BreadCrumb: _breadCrumb.BreadCrumb
}, _class.propTypes = {
  className: _propTypes2.default.string,
  leftTitle: _propTypes2.default.node,
  rightTitle: _propTypes2.default.node,
  drawerStyle: _propTypes2.default.object,
  openLeft: _propTypes2.default.bool,
  openRight: _propTypes2.default.bool,
  hasSider: _propTypes2.default.bool,
  drawerWidth: _propTypes2.default.number,
  zIndex: _propTypes2.default.number,
  affix: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  mainStyle: _propTypes2.default.object,
  contentStyle: _propTypes2.default.object
}, _class.defaultProps = {
  drawerWidth: 200,
  overviewWidth: 250,
  affix: true,
  style: {},
  mainStyle: {}
}, _temp);

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LandingLayout = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _layout = __webpack_require__(14);

var _layout2 = _interopRequireDefault(_layout);

var _reactRouter = __webpack_require__(4);

var _globalFooter = __webpack_require__(13);

var _basicLayout = __webpack_require__(8);

var _sider = __webpack_require__(24);

var _header = __webpack_require__(21);

__webpack_require__(117);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function Brand(_ref) {
  var logo = _ref.logo,
      title = _ref.title,
      description = _ref.description,
      Link = _ref.Link;

  return _react2.default.createElement(
    'div',
    { className: 'j-top' },
    _react2.default.createElement(
      'div',
      { className: 'j-header' },
      _react2.default.createElement(
        Link,
        { to: '/' },
        _react2.default.createElement('img', { alt: '', className: 'j-logo', src: logo }),
        _react2.default.createElement(
          'span',
          { className: 'j-title' },
          title
        )
      )
    ),
    description ? _react2.default.createElement(
      'p',
      { className: 'j-desc' },
      description
    ) : null
  );
}

var LandingLayout = exports.LandingLayout = (_temp = _class = function (_BasicLayout) {
  _inherits(LandingLayout, _BasicLayout);

  function LandingLayout() {
    _classCallCheck(this, LandingLayout);

    return _possibleConstructorReturn(this, (LandingLayout.__proto__ || Object.getPrototypeOf(LandingLayout)).apply(this, arguments));
  }

  _createClass(LandingLayout, [{
    key: 'render',
    value: function render() {
      var Footer = this.getComponent('Footer');
      var BLink = this.getComponent('Link');
      var Brand = this.getComponent('Brand');
      var Header = this.getComponent('Header');
      var style = this.props.style || { padding: '110px 0 144px' };
      return _react2.default.createElement(
        'div',
        { className: 'j-layout-landing ' + this.props.className, style: style },
        _react2.default.createElement(
          _layout2.default,
          null,
          _react2.default.createElement(Header, { noSider: true, Menu: _sider.Sider }),
          _react2.default.createElement(
            _layout2.default.Content,
            null,
            _react2.default.createElement(Brand, { Link: BLink }),
            this.props.viewContent || this.props.children,
            _react2.default.createElement(Footer, { className: 'j-footer' })
          )
        )
      );
    }
  }]);

  return LandingLayout;
}(_basicLayout.BasicLayout), _class.displayName = 'LandingLayout', _class.layoutBlocks = {
  Footer: _globalFooter.GlobalFooter,
  Link: _reactRouter.Link,
  Brand: Brand,
  Header: _header.Header
}, _temp);

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Deferred = Deferred;
// + 把promise封装成Deferred，参考jQuery.Deffered
// > see: https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Promise.jsm/Deferred
function Deferred() {
  var _this = this;

  var PromiseUtils = window.PromiseUtils || {};
  // #! update 062115 for typeof
  if (typeof Promise !== 'undefined' && Promise.defer) {
    // #! need import of Promise.jsm for example: Cu.import('resource:/gree/modules/Promise.jsm');
    return Promise.defer();
  } else if (typeof PromiseUtils !== 'undefined' && PromiseUtils.defer) {
    // #! need import of PromiseUtils.jsm for example: Cu.import('resource:/gree/modules/PromiseUtils.jsm');
    return PromiseUtils.defer();
  } else {
    /* A method to resolve the associated Promise with the value passed.
    * If the promise is already settled it does nothing.
    *
    * @param {anything} value : This value is used to resolve the promise
    * If the value is a Promise then the associated promise assumes the state
    * of Promise passed as value.
    */
    this.resolve = null;
    /* A method to reject the assocaited Promise with the value passed.
    * If the promise is already settled it does nothing.
    *
    * @param {anything} reason: The reason for the rejection of the Promise.
    * Generally its an Error object. If however a Promise is passed, then the Promise
    * itself will be the reason for rejection no matter the state of the Promise.
    */
    this.reject = null;
    /* A newly created Pomise object.
    * Initially in pending state.
    */
    this.promise = new Promise(function (resolve, reject) {
      _this.resolve = resolve;
      _this.reject = reject;
    });
    Object.freeze(this);
  }
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ua = navigator.userAgent.toLowerCase();
var isIE = ua.indexOf('msie') > -1;
var userDataEl;
var d = document;

var tp = location.pathname.split('/');
tp[tp.length - 1] = '';
var path = encodeURIComponent(tp.join('/'));

var ls;
var newLocalStorage;
try {
  ls = window.localStorage;
} catch (e) {
  window.console.warn(e);
}
if (ls) {
  userDataEl = window.localStorage;
  newLocalStorage = {
    set: function set(k, v) {
      try {
        userDataEl.setItem(k, v);
      } catch (e) {
        return false;
      }
      return true;
    },
    get: function get(k) {
      try {
        return userDataEl.getItem(k);
      } catch (e) {
        return;
      }
    }
  };
} else if (isIE) {
  userDataEl = d.getElementById('_console_userdata');
  if (!userDataEl) {
    userDataEl = d.createElement('input');
    userDataEl.type = 'hidden';
    d.body.insertBefore(userDataEl, d.body.firstChild);

    try {
      userDataEl.addBehavior('#default#userData');
    } catch (e) {
      window.console.warn(e);
    }
  }

  newLocalStorage = {
    set: function set(k, v) {
      try {
        userDataEl.load(path);
        userDataEl.setAttribute(k, v);
        userDataEl.save(path);
      } catch (e) {
        return false;
      }
      return true;
    },
    get: function get(k) {
      try {
        userDataEl.load(path);
      } catch (e) {
        return;
      }
      return userDataEl.getAttribute(k);
    }
  };
} else {
  newLocalStorage = {
    set: function set() {},
    get: function get() {}
  };
}

var localStorage = exports.localStorage = newLocalStorage;

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(58);

var _path = __webpack_require__(59);

var _path2 = _interopRequireDefault(_path);

var _galleryResolver = __webpack_require__(15);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var context = __webpack_require__(62);

var exportObj = {};
var gallery = {
  layers: {},
  layouts: {},
  services: {},
  components: {}
};
context.keys().forEach(function (key) {
  var ks = key.split('/');
  var filename = ks.pop();
  var dirname = ks[ks.length - 2];
  if (gallery[dirname] && _path2.default.basename(filename, _path2.default.extname(filename)) === 'index') {
    Object.assign(gallery[dirname], context(key));
  }
  Object.assign(exportObj, context(key));
});

var components = gallery.components;
gallery.components = {
  hc: components
};
(0, _galleryResolver.setGallery)(gallery);

exports.default = exportObj;
module.exports = exports['default'];

/***/ }),
/* 58 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

// resolves . and .. elements in a path array with directory names there
// must be no slashes, empty elements, or device names (c:\) in the array
// (so also no leading and trailing slashes - it does not distinguish
// relative and absolute paths)
function normalizeArray(parts, allowAboveRoot) {
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = parts.length - 1; i >= 0; i--) {
    var last = parts[i];
    if (last === '.') {
      parts.splice(i, 1);
    } else if (last === '..') {
      parts.splice(i, 1);
      up++;
    } else if (up) {
      parts.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (allowAboveRoot) {
    for (; up--; up) {
      parts.unshift('..');
    }
  }

  return parts;
}

// Split a filename into [root, dir, basename, ext], unix version
// 'root' is just a slash, or nothing.
var splitPathRe =
    /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
var splitPath = function(filename) {
  return splitPathRe.exec(filename).slice(1);
};

// path.resolve([from ...], to)
// posix version
exports.resolve = function() {
  var resolvedPath = '',
      resolvedAbsolute = false;

  for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
    var path = (i >= 0) ? arguments[i] : process.cwd();

    // Skip empty and invalid entries
    if (typeof path !== 'string') {
      throw new TypeError('Arguments to path.resolve must be strings');
    } else if (!path) {
      continue;
    }

    resolvedPath = path + '/' + resolvedPath;
    resolvedAbsolute = path.charAt(0) === '/';
  }

  // At this point the path should be resolved to a full absolute path, but
  // handle relative paths to be safe (might happen when process.cwd() fails)

  // Normalize the path
  resolvedPath = normalizeArray(filter(resolvedPath.split('/'), function(p) {
    return !!p;
  }), !resolvedAbsolute).join('/');

  return ((resolvedAbsolute ? '/' : '') + resolvedPath) || '.';
};

// path.normalize(path)
// posix version
exports.normalize = function(path) {
  var isAbsolute = exports.isAbsolute(path),
      trailingSlash = substr(path, -1) === '/';

  // Normalize the path
  path = normalizeArray(filter(path.split('/'), function(p) {
    return !!p;
  }), !isAbsolute).join('/');

  if (!path && !isAbsolute) {
    path = '.';
  }
  if (path && trailingSlash) {
    path += '/';
  }

  return (isAbsolute ? '/' : '') + path;
};

// posix version
exports.isAbsolute = function(path) {
  return path.charAt(0) === '/';
};

// posix version
exports.join = function() {
  var paths = Array.prototype.slice.call(arguments, 0);
  return exports.normalize(filter(paths, function(p, index) {
    if (typeof p !== 'string') {
      throw new TypeError('Arguments to path.join must be strings');
    }
    return p;
  }).join('/'));
};


// path.relative(from, to)
// posix version
exports.relative = function(from, to) {
  from = exports.resolve(from).substr(1);
  to = exports.resolve(to).substr(1);

  function trim(arr) {
    var start = 0;
    for (; start < arr.length; start++) {
      if (arr[start] !== '') break;
    }

    var end = arr.length - 1;
    for (; end >= 0; end--) {
      if (arr[end] !== '') break;
    }

    if (start > end) return [];
    return arr.slice(start, end - start + 1);
  }

  var fromParts = trim(from.split('/'));
  var toParts = trim(to.split('/'));

  var length = Math.min(fromParts.length, toParts.length);
  var samePartsLength = length;
  for (var i = 0; i < length; i++) {
    if (fromParts[i] !== toParts[i]) {
      samePartsLength = i;
      break;
    }
  }

  var outputParts = [];
  for (var i = samePartsLength; i < fromParts.length; i++) {
    outputParts.push('..');
  }

  outputParts = outputParts.concat(toParts.slice(samePartsLength));

  return outputParts.join('/');
};

exports.sep = '/';
exports.delimiter = ':';

exports.dirname = function(path) {
  var result = splitPath(path),
      root = result[0],
      dir = result[1];

  if (!root && !dir) {
    // No dirname whatsoever
    return '.';
  }

  if (dir) {
    // It has a dirname, strip trailing slash
    dir = dir.substr(0, dir.length - 1);
  }

  return root + dir;
};


exports.basename = function(path, ext) {
  var f = splitPath(path)[2];
  // TODO: make this comparison case-insensitive on windows?
  if (ext && f.substr(-1 * ext.length) === ext) {
    f = f.substr(0, f.length - ext.length);
  }
  return f;
};


exports.extname = function(path) {
  return splitPath(path)[3];
};

function filter (xs, f) {
    if (xs.filter) return xs.filter(f);
    var res = [];
    for (var i = 0; i < xs.length; i++) {
        if (f(xs[i], i, xs)) res.push(xs[i]);
    }
    return res;
}

// String.prototype.substr - negative index don't work in IE8
var substr = 'ab'.substr(-1) === 'b'
    ? function (str, start, len) { return str.substr(start, len) }
    : function (str, start, len) {
        if (start < 0) start = str.length + start;
        return str.substr(start, len);
    }
;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(60)))

/***/ }),
/* 60 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = require("lodash/merge");

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./components/archive/index.jsx": 63,
	"./components/breadCrumb/index.jsx": 18,
	"./components/complexInput/index.jsx": 79,
	"./components/customForm/index.jsx": 28,
	"./components/dataSet/index.jsx": 32,
	"./components/dnd/dragItem.jsx": 33,
	"./components/dnd/dropItem.jsx": 34,
	"./components/dnd/index.jsx": 80,
	"./components/exception/index.jsx": 35,
	"./components/explorer/index.jsx": 83,
	"./components/globalFooter/index.jsx": 13,
	"./components/header/index.jsx": 21,
	"./components/headerSearch/index.js": 38,
	"./components/loadingBar/index.jsx": 90,
	"./components/modal/index.jsx": 40,
	"./components/navLink/index.jsx": 12,
	"./components/notifier/copyLogger.jsx": 41,
	"./components/notifier/errorFetch.js": 93,
	"./components/notifier/errorReducer.js": 94,
	"./components/notifier/notifier.js": 23,
	"./components/result/index.jsx": 95,
	"./components/search/index.jsx": 97,
	"./components/sider/index.jsx": 24,
	"./components/stepConnector/index.jsx": 99,
	"./components/tagSearcher/index.jsx": 102,
	"./components/tour/index.jsx": 106,
	"./core/bootstrap.js": 43,
	"./core/defer.js": 55,
	"./core/fallbackRoutes.js": 44,
	"./core/localStorage.js": 56,
	"./core/localeContext.js": 3,
	"./core/versionDetector.js": 120,
	"./layers/flexGridLayer/index.jsx": 121,
	"./layers/galleryResolver.js": 15,
	"./layers/getCombox.jsx": 49,
	"./layers/index.js": 46,
	"./layers/layerConvertor.js": 9,
	"./layers/layerEditor.jsx": 48,
	"./layers/simpleLayer/index.jsx": 123,
	"./layouts/basicLayout.jsx": 8,
	"./layouts/consoleLayout/index.jsx": 51,
	"./layouts/contentLayout/index.jsx": 52,
	"./layouts/flexContentLayout/index.jsx": 53,
	"./layouts/getComponent.jsx": 5,
	"./layouts/index.jsx": 50,
	"./layouts/landingLayout/index.jsx": 54,
	"./services/adaptPage/index.js": 124,
	"./services/cascader/index.js": 125,
	"./services/hocCreator/index.js": 126,
	"./services/resizer/index.js": 127,
	"./services/routeHelper/index.js": 128,
	"./services/validator/index.js": 130
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 62;

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Archive = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp, _class2, _temp2;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _form = __webpack_require__(10);

var _form2 = _interopRequireDefault(_form);

var _row = __webpack_require__(26);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(27);

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _customForm = __webpack_require__(28);

var _Divider = __webpack_require__(30);

var _Divider2 = _interopRequireDefault(_Divider);

__webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IArchive = (_temp = _class = function (_React$PureComponent) {
  _inherits(IArchive, _React$PureComponent);

  function IArchive(props, context) {
    _classCallCheck(this, IArchive);

    var _this = _possibleConstructorReturn(this, (IArchive.__proto__ || Object.getPrototypeOf(IArchive)).call(this, props, context));

    _this.toggle = function () {
      _this.setState({ expand: !_this.state.expand });
    };

    _this.handleSubmit = function (e) {
      e && e.preventDefault();
      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          _this.props.options.forEach(function (option) {
            if (option.getValue) {
              var name = option.dataIndex || option.name;
              values[name] = option.getValue(values[name]);
            }
          });
          _this.props.onSubmit && _this.props.onSubmit(values);
        }
      });
    };

    _this.state = {
      expand: !props.limit || props.limit > props.options.length,
      dataSource: _this.props.dataSource
    };
    return _this;
  }

  _createClass(IArchive, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource !== this.props.dataSource) {
        this.setState({ dataSource: nextProps.dataSource });
      }
    }
  }, {
    key: 'getFieldValue',
    value: function getFieldValue(name, option, editable) {
      var value = void 0;
      if (this.state.dataSource[name] === undefined) {
        value = option.value;
      } else {
        value = this.state.dataSource[name];
      }
      if (this.props.formatter) {
        return this.props.formatter(value, option);
      } else {
        if (editable) {
          return option.renderInput ? option.renderInput(value, this.state.dataSource) : value;
        } else {
          return option.render ? option.render(value, this.state.dataSource) : value;
        }
      }
    }
  }, {
    key: 'getFieldInput',
    value: function getFieldInput(name, option) {
      var _this2 = this;

      var _props = this.props,
          form = _props.form,
          readonly = _props.readonly,
          onChange = _props.onChange;

      var editable = option.editable === undefined ? !readonly : option.editable;

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
        var decorator = option.decorator || {};
        if (onChange) {
          decorator.getValueFromEvent = function (e) {
            var v = _customForm.CustomForm.getValueFromEvent(e, option);
            onChange(v, name);
            return v;
          };
        }
        decorator.defaultValue = this.getFieldValue(name, option, editable);
        var stateProps = option.getProps && option.getProps.call(this, this.props, this.state.dataSource, function (nextState) {
          _this2.setState({
            dataSource: Object.assign({}, _this2.state.dataSource, nextState)
          });
        }, this.props.form);
        if (stateProps === false) return null;
        var fieldInput = _customForm.CustomForm.getFieldInput(option, option.props, stateProps || {}, decorator);
        return form.getFieldDecorator(name, decorator)(fieldInput);
      } else {
        return this.getFieldValue(name, option);
      }
    }
  }, {
    key: 'getFields',
    value: function getFields() {
      var _props2 = this.props,
          options = _props2.options,
          limit = _props2.limit,
          cols = _props2.cols,
          formItemLayout = _props2.formItemLayout,
          compact = _props2.compact,
          noLabel = _props2.noLabel;

      var span = Math.floor(24 / cols);
      var count = this.state.expand ? options.length : limit;
      // const {getFieldDecorator} = form;
      var fields = [];
      var itemStyle = compact ? { marginBottom: 0 } : {};
      var item = void 0;
      var name = void 0;
      var label = void 0;
      var input = void 0;
      for (var i = 0; i < count; i++) {
        item = options[i];
        if (item && (item.dataIndex || item.name)) {
          name = item.dataIndex || item.name;
          label = noLabel ? null : item.title || item.name;
          input = this.getFieldInput(name, item);
          if (input) {
            fields.push(_react2.default.createElement(
              _col2.default,
              { span: item.col ? item.col * span : item.span || span, key: name, style: { display: i < count ? 'block' : 'none' } },
              _react2.default.createElement(
                _form2.default.Item,
                _extends({}, formItemLayout, item.attrs, { label: label, style: itemStyle }),
                input
              )
            ));
          }
        }
      }
      return fields;
    }
  }, {
    key: 'getButtons',
    value: function getButtons() {
      var _props3 = this.props,
          buttons = _props3.buttons,
          buttonProps = _props3.buttonProps;

      if (buttonProps.onSubmit) {
        buttonProps.onSubmit.bind(this.state.dataSource);
      } else {
        buttonProps.onSubmit = this.handleSubmit;
      }
      var justify = buttonProps.align || 'end';
      var _buttons = _customForm.CustomForm.getButtons(buttons, buttonProps);
      return _buttons ? _react2.default.createElement(
        _row2.default,
        { justify: justify, type: 'flex', className: 'o-com-archive_btns', style: buttonProps.btnStyle },
        _buttons
      ) : null;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        _form2.default,
        { className: 'o-com-archive ' + this.props.className, style: this.props.style, layout: this.props.layout, onSubmit: this.props.buttonProps.noButton && this.handleSubmit },
        _react2.default.createElement(
          _row2.default,
          { gutter: 24 },
          this.getFields(),
          this.props.limit && this.props.limit < this.props.options.length ? _react2.default.createElement(
            'a',
            { className: 'o-com-archive_expand', onClick: this.toggle },
            'more ',
            _react2.default.createElement(_icon2.default, { type: this.state.expand ? 'up' : 'down' })
          ) : null
        ),
        this.getButtons()
      );
    }
  }]);

  return IArchive;
}(_react2.default.PureComponent), _class.propTypes = {
  options: _propTypes2.default.array,
  dataSource: _propTypes2.default.object,
  limit: _propTypes2.default.number,
  form: _propTypes2.default.object,
  cols: _propTypes2.default.number,
  readonly: _propTypes2.default.bool,
  compact: _propTypes2.default.bool,

  layout: _propTypes2.default.string,
  formItemLayout: _propTypes2.default.object,
  onChange: _propTypes2.default.func,
  onSubmit: _propTypes2.default.func,
  formatter: _propTypes2.default.func,
  noLabel: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  className: _propTypes2.default.string,

  buttons: _propTypes2.default.array,
  buttonProps: _propTypes2.default.object
}, _class.defaultProps = {
  options: [],
  dataSource: {},
  cols: 3,
  readonly: true,
  compact: false,
  buttonProps: { noButton: true },
  className: '',
  style: {}
}, _temp);
var ArchiveGroup = (_temp2 = _class2 = function (_React$PureComponent2) {
  _inherits(ArchiveGroup, _React$PureComponent2);

  function ArchiveGroup() {
    _classCallCheck(this, ArchiveGroup);

    return _possibleConstructorReturn(this, (ArchiveGroup.__proto__ || Object.getPrototypeOf(ArchiveGroup)).apply(this, arguments));
  }

  _createClass(ArchiveGroup, [{
    key: 'render',
    value: function render() {
      var _this4 = this;

      return _react2.default.createElement(
        'div',
        { className: 'o-com-archive-group' },
        this.props.options.map(function (item) {
          return _react2.default.createElement(
            'div',
            { key: item.name, className: 'o-com-archive-group_box' },
            _react2.default.createElement(
              'h5',
              null,
              item.title || item.name
            ),
            _react2.default.createElement(_Divider2.default, null),
            _react2.default.createElement(Archive, _extends({}, item.attrs, _this4.props, { options: item.items, dataSource: _this4.props.dataSource[item.name] }))
          );
        })
      );
    }
  }]);

  return ArchiveGroup;
}(_react2.default.PureComponent), _class2.propTypes = {
  options: _propTypes2.default.array,
  dataSource: _propTypes2.default.object
}, _class2.defaultProps = {
  options: [],
  dataSource: {}
}, _temp2);
var Archive = exports.Archive = _form2.default.create({ name: 'archive' })(IArchive);
Archive.Group = ArchiveGroup;

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/input-number");

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/select");

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/date-picker");

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/time-picker");

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/checkbox");

/***/ }),
/* 69 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/switch");

/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/upload");

/***/ }),
/* 71 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tabs");

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = require("lodash/isPlainObject");

/***/ }),
/* 73 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 74 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/breadcrumb");

/***/ }),
/* 77 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 78 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ComplexInput = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp, _initialiseProps;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _form = __webpack_require__(10);

var _form2 = _interopRequireDefault(_form);

var _row = __webpack_require__(26);

var _row2 = _interopRequireDefault(_row);

var _col = __webpack_require__(27);

var _col2 = _interopRequireDefault(_col);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var formItemLayout = {
  wrapperCol: { span: 24 },
  required: false,
  style: { margin: '0 10px 10px 0' }
};
var formItemLayoutTwo = {
  labelCol: {
    xs: { span: 2 },
    sm: { span: 2 }
  },
  wrapperCol: {
    xs: { span: 2 },
    sm: { span: 22 }
  },
  style: { margin: '0 10px 10px 0' }
};

var ComplexInput = exports.ComplexInput = (_dec = _form2.default.create(), _dec(_class = (_temp = _class2 = function (_React$PureComponent) {
  _inherits(ComplexInput, _React$PureComponent);

  function ComplexInput(props) {
    _classCallCheck(this, ComplexInput);

    var _this = _possibleConstructorReturn(this, (ComplexInput.__proto__ || Object.getPrototypeOf(ComplexInput)).call(this, props));

    _initialiseProps.call(_this);

    var value = _this.convert(props.value || '');
    _this._uuid = 0;
    _this._oValue = props.value;
    _this.state = {
      value: value,
      keys: Array.isArray(value) && value.length ? value.map(function () {
        return _this._uuid++;
      }) : [_this._uuid++]
    };
    return _this;
  }

  _createClass(ComplexInput, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      var _this2 = this;

      if (nextProps.value !== this._oValue) {
        this._oValue = nextProps.value;
        var value = this.convert(nextProps.value || '');
        this._uuid = 0;
        this.setState({
          value: value,
          keys: Array.isArray(value) && value.length ? value.map(function () {
            return _this2._uuid++;
          }) : [this._uuid++]
        });
      }
    }
  }, {
    key: 'convert',
    value: function convert(v, inverse) {
      var _props = this.props,
          convert = _props.convert,
          separator = _props.separator,
          delimeter = _props.delimeter;

      if (convert) {
        return convert(v, inverse);
      } else if (separator) {
        if (inverse) {
          v = delimeter ? v.map(function (d) {
            return d.join(delimeter);
          }) : v;
          return v.join(separator);
        } else {
          v = v.split(separator);
          return delimeter ? v.map(function (d) {
            return d.split(delimeter);
          }) : v;
        }
      } else {
        return [].concat(v || []);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var keys = this.state.keys;
      return this.props.showBorder ? _react2.default.createElement(
        'div',
        { style: {
            border: '1px solid #ddd',
            padding: 10
          } },
        _react2.default.createElement(
          _form2.default,
          null,
          keys.map(this.getItem)
        )
      ) : _react2.default.createElement(
        _form2.default,
        null,
        keys.map(this.getItem)
      );
    }
  }]);

  return ComplexInput;
}(_react2.default.PureComponent), _class2.propTypes = {
  form: _propTypes2.default.object,
  separator: _propTypes2.default.string,
  delimeter: _propTypes2.default.string,
  inputs: _propTypes2.default.array,
  disabled: _propTypes2.default.bool,
  extra: _propTypes2.default.string,
  convert: _propTypes2.default.func,
  value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.array]),
  onChange: _propTypes2.default.func,
  showIcon: _propTypes2.default.bool,
  showBorder: _propTypes2.default.bool,
  showLine: _propTypes2.default.string,
  span: _propTypes2.default.number,
  keyName: _propTypes2.default.number
}, _initialiseProps = function _initialiseProps() {
  var _this3 = this;

  this.remove = function (k) {
    var keys = _this3.state.keys;
    // can use data-binding to get
    // We need at least one passenger

    if (keys.length === 1) {
      return;
    }

    // can use data-binding to set
    _this3.setState({
      keys: keys.filter(function (key) {
        return key !== k;
      })
    });
  };

  this.add = function () {
    var keys = _this3.state.keys;
    // can use data-binding to get

    var nextKeys = keys.concat(_this3._uuid);
    _this3._uuid++;
    // keys.splice(idx, 0, this._uuid++);

    // can use data-binding to set
    // important! notify form to detect changes
    _this3.setState({
      keys: nextKeys
    });
  };

  this.handleChange = function () {
    clearTimeout(_this3._timer);
    _this3._timer = setTimeout(function () {
      _this3.props.form.validateFields(function (err, values) {
        if (!err) {
          var body = _this3.state.keys.map(function (k) {
            return _this3.props.inputs.length > 1 ? _this3.props.inputs.map(function (inp, index) {
              return values['inp' + index][k];
            }) : values['inp0'][k];
          });
          _this3._oValue = _this3.convert(body, true);
          _this3.props.onChange && _this3.props.onChange(_this3._oValue);
        }
      });
    }, 200);
  };

  this.getItem = function (k, index) {
    var keys = _this3.state.keys;
    var _props2 = _this3.props,
        form = _props2.form,
        inputs = _props2.inputs,
        disabled = _props2.disabled,
        extra = _props2.extra;

    var showIcon = _this3.props.showIcon ? _this3.props.showIcon : false;
    var showLine = _this3.props.showLine ? _this3.props.showLine : 'none';
    var value = _this3.state.value[k];
    var span = _this3.props.span ? _this3.props.span : Math.floor(22 / inputs.length);
    var IInput = inputs[0].component || _input2.default;
    return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        _row2.default,
        { key: k },
        span < 22 ? inputs.map(function (inp, pos) {
          IInput = inp.component || _input2.default;
          return _react2.default.createElement(
            _col2.default,
            { span: span, key: k + '_' + pos },
            _react2.default.createElement(
              _form2.default.Item,
              _extends({}, formItemLayout, { disabled: disabled }),
              form.getFieldDecorator('inp' + pos + '[' + k + ']', Object.assign({
                initialValue: value ? value[pos] : undefined
              }, inp.rule && {
                validateTrigger: ['onChange', 'onBlur'],
                rules: inp.rule
              }))(_react2.default.createElement(IInput, _extends({}, inp, { onChange: _this3.handleChange })))
            )
          );
        }) : inputs.map(function (inp, pos) {
          IInput = inp.component || _input2.default;
          return _react2.default.createElement(
            _col2.default,
            { span: 22, key: k + '_' + pos },
            _react2.default.createElement(
              _form2.default.Item,
              _extends({}, formItemLayoutTwo, { disabled: disabled, label: inp.label, rules: inp.rules, extra: inp.types ? null : extra }),
              inp.types ? form.getFieldDecorator('inp' + pos + '[' + k + ']', Object.assign({
                initialValue: value ? value[pos] : undefined
              }, inp.rule && {
                validateTrigger: ['onChange', 'onBlur'],
                rules: inp.rule
              }))(_react2.default.createElement(IInput.TextArea, _extends({}, inp, { onChange: _this3.handleChange }))) : form.getFieldDecorator('inp' + pos + '[' + k + ']', Object.assign({
                initialValue: value ? value[pos] : undefined
              }, inp.rule && {
                validateTrigger: ['onChange', 'onBlur'],
                rules: inp.rule
              }))(_react2.default.createElement(IInput, _extends({}, inp, { onChange: _this3.handleChange })))
            )
          );
        }),
        showIcon === false ? keys.length > 0 ? _react2.default.createElement(
          'span',
          null,
          '\xA0',
          _react2.default.createElement(_icon2.default, {
            style: { lineHeight: '32px' },
            type: 'minus-circle-o',
            disabled: disabled,
            onClick: function onClick() {
              return _this3.remove(k);
            }
          }),
          '\xA0',
          _react2.default.createElement(_icon2.default, {
            style: { lineHeight: '32px' },
            type: 'plus-circle-o',
            disabled: disabled,
            onClick: function onClick() {
              return _this3.add(index);
            }
          })
        ) : null : null
      ),
      _react2.default.createElement('hr', { style: { border: '1px dashed rgb(221, 221, 221)', width: '80%', display: showLine } })
    );
  };
}, _temp)) || _class);

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DnDContext = undefined;

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _reactDndHtml5Backend = __webpack_require__(81);

var _reactDndHtml5Backend2 = _interopRequireDefault(_reactDndHtml5Backend);

var _reactDnd = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DnDContext = exports.DnDContext = function DnDContext() {
  return function (BaseComponent) {
    var Component = (0, _reactDnd.DragDropContext)(_reactDndHtml5Backend2.default)(BaseComponent);
    return (0, _hoistNonReactStatics2.default)(Component, BaseComponent);
  };
};

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = require("react-dnd-html5-backend");

/***/ }),
/* 82 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Explorer = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _tree = __webpack_require__(84);

var _tree2 = _interopRequireDefault(_tree);

var _radio = __webpack_require__(29);

var _radio2 = _interopRequireDefault(_radio);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _alert = __webpack_require__(36);

var _alert2 = _interopRequireDefault(_alert);

var _spin = __webpack_require__(37);

var _spin2 = _interopRequireDefault(_spin);

__webpack_require__(85);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Explorer = exports.Explorer = (_temp = _class = function (_React$PureComponent) {
  _inherits(Explorer, _React$PureComponent);

  function Explorer(props, context) {
    _classCallCheck(this, Explorer);

    var _this = _possibleConstructorReturn(this, (Explorer.__proto__ || Object.getPrototypeOf(Explorer)).call(this, props, context));

    _this.state = {
      searchValue: '',
      expandedKeys: [],
      activeTab: props.cateId,
      activeKey: props.value,
      dataSource: props.changeNodes ? _this.handleChange(props.dataSource, props.changeNodes) : props.dataSource
    };
    if (props.value) {
      _this.state.expandedKeys = _this.getExpandedKeys(_this.getData(), function (item) {
        return item.id === props.value;
      });
    }

    _this._lazySearch = null;
    return _this;
  }

  /**
   * dataSource = [
   *  {
   *    id,
   *    children
   *  },
   *  ...
   * ]
   */


  _createClass(Explorer, [{
    key: 'handleChange',
    value: function handleChange(dataSource, changeNodes, map) {
      var _this2 = this;

      if (!changeNodes.length) return dataSource;

      if (!map) {
        map = {};
        changeNodes.forEach(function (node, index) {
          map[node.id] = index;
        });
      }

      var newDataSource = [];
      dataSource.forEach(function (item) {
        if (map[item.id] === undefined) {
          if (item.children) {
            item.children = _this2.handleChange(item.children, changeNodes, map);
          }
        } else {
          changeNodes.splice(map[item.id], 1);
          newDataSource.push(item);
        }
      });
      return newDataSource;
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.dataSource !== this.props.dataSource || nextProps.changeNodes !== this.props.changeNodes) {
        this.setState({
          dataSource: this.handleChange(nextProps.dataSource, nextProps.changeNodes)
        });
      }
    }
  }, {
    key: 'getExpandedKeys',
    value: function getExpandedKeys(dataSource, matcher, parentKey) {
      var _this3 = this;

      var expandedKeys = [];
      dataSource.forEach(function (item) {
        if (matcher(item)) {
          // 因为有子集有命中的，所以父级ID要加进去
          if (parentKey) {
            expandedKeys.push(String(parentKey));
            parentKey = null;
          }
          expandedKeys.push(String(item.id));
        } else if (item.children && item.children.length) {
          var keys = _this3.getExpandedKeys(item.children, matcher, item.id);
          var len = keys.length;
          if (len) {
            if (item.id !== keys[len - 1]) {
              expandedKeys.push(String(item.id));
            }
            for (var i = 0; i < len; i++) {
              expandedKeys.push(String(keys[i]));
            }
          }
        }
      });
      return expandedKeys;
    }
  }, {
    key: 'getIcon',
    value: function getIcon(item) {
      var icon = item.icon ? _react2.default.createElement(_icon2.default, { type: item.icon }) : null;
      if (this.props.leafIcon) {
        return icon || (item.children ? null : _react2.default.createElement(_icon2.default, { type: this.props.leafIcon }));
      } else {
        return icon;
      }
    }
  }, {
    key: 'loopTreeNode',
    value: function loopTreeNode(dataSource) {
      var _this4 = this;

      var searchValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var actions = this.props.actions;
      var activeKey = this.state.activeKey;
      var firstMatchId = void 0;
      /**
       * item = {
       *  id,
       *  name,
       *  icon,
       *  children
       * }
       */
      var nodes = dataSource.map(function (item) {
        var index = -1;
        var beforeStr = void 0;
        var afterStr = void 0;
        var title = void 0;
        var label = item.name;
        if (item.title) {
          label = item.title;
        } else if (searchValue) {
          index = label.indexOf(searchValue);
          beforeStr = label.substr(0, index);
          afterStr = label.substr(index + searchValue.length);
        }
        /**
         * actions = [{
         *  icon,
         *  title,
         *  text,
         *  onAction
         * }, ...]
         */
        var btns = null;
        if (actions && (_this4.props.byLeaf && !item.children || !_this4.props.byLeaf)) {
          btns = _react2.default.createElement(
            'span',
            { className: 'o-com-explorer_elem-btns' },
            actions.map(function (btnItem, key) {
              return _react2.default.createElement(
                'a',
                {
                  key: key,
                  href: 'javascript:;',
                  onClick: function onClick() {
                    btnItem.onAction && btnItem.onAction(item);
                  },
                  title: btnItem.title || btnItem.text
                },
                btnItem.icon ? _react2.default.createElement(_icon2.default, { type: btnItem.icon }) : btnItem.text
              );
            })
          );
        }

        if (index > -1) {
          if (!firstMatchId) {
            firstMatchId = item.id;
          }
          title = _react2.default.createElement(
            'span',
            { id: item.id, className: 'o-com-explorer-elem_span' },
            btns,
            _react2.default.createElement(
              'span',
              { onClick: function onClick() {
                  return _this4.handleSelect(item);
                } },
              _this4.getIcon(item),
              beforeStr,
              _react2.default.createElement(
                'span',
                { style: { color: '#f50' } },
                searchValue
              ),
              afterStr
            )
          );
        } else {
          title = _react2.default.createElement(
            'span',
            { id: item.id },
            btns,
            _react2.default.createElement(
              'span',
              { onClick: function onClick() {
                  return _this4.handleSelect(item);
                } },
              _this4.getIcon(item),
              label
            )
          );
        }
        if (item.children && item.children.length) {
          return _react2.default.createElement(
            _tree2.default.TreeNode,
            { key: item.id, title: title, className: activeKey === item.id ? 'active' : '' },
            _this4.loopTreeNode(item.children, searchValue)
          );
        } else {
          return _react2.default.createElement(_tree2.default.TreeNode, { key: item.id, title: title, className: activeKey === item.id ? 'active' : '' });
        }
      });
      if (firstMatchId && this._lazySearch) {
        this._lazySearch(firstMatchId);
        this._lazySearch = null;
      }
      return nodes;
    }
  }, {
    key: 'handleSelect',
    value: function handleSelect(node) {
      this.props.onSelect && this.props.onSelect(node);
      this.setState({
        expandedKeys: this.getExpandedKeys(this.getData(), function (item) {
          return node.id === item.id;
        }),
        activeKey: node.id
      });
    }
  }, {
    key: 'getData',
    value: function getData() {
      if (this.props.mode === 'multiple') {
        return this.state.dataSource[this.state.activeTab || 0];
      } else {
        return this.state.dataSource;
      }
    }
  }, {
    key: 'renderTabs',
    value: function renderTabs(dataSource) {
      var _this5 = this;

      var activeTab = this.state.activeTab;

      return _react2.default.createElement(
        'div',
        { className: 'o-com-explorer-elem_btn-group' },
        _react2.default.createElement(
          _radio2.default.Group,
          { value: activeTab, onChange: function onChange(e) {
              _this5.setState({
                searchValue: '',
                expandedKeys: [],
                activeTab: e.target.value
              });
              _this5.props.onChange && _this5.props.onChange(e.target.value);
            } },
          dataSource.map(function (item) {
            return _react2.default.createElement(
              _radio2.default.Button,
              { value: item.id, key: item.id },
              item.name
            );
          })
        )
      );
    }
  }, {
    key: 'renderSearch',
    value: function renderSearch(dataSource) {
      var _this6 = this;

      var searchProps = {
        size: 'small',
        value: this.state.searchValue,
        placeholder: this.props.searchPlaceholder,
        onChange: function onChange(e) {
          var value = e.target.value;
          _this6.setState({
            searchValue: value
          });
          _this6.props.onSearch && _this6.props.onSearch(value);

          clearTimeout(_this6._timer);
          _this6._timer = setTimeout(function () {
            var expandedKeys = _this6.getExpandedKeys(dataSource, function (item) {
              return item.name.indexOf(value) > -1;
            });
            _this6.setState({
              expandedKeys: expandedKeys
            }, function () {
              _this6._lazySearch = function (firstMatchId) {
                _this6._timer = setTimeout(function () {
                  var node = document.getElementById(firstMatchId).parentNode.parentNode.parentNode;
                  node.scrollIntoView();
                }, 200);
              };
            });
          }, 200);
        }
      };
      return _react2.default.createElement(
        'div',
        { className: 'o-com-explorer-elem_search' },
        _react2.default.createElement(_input2.default.Search, searchProps)
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this7 = this;

      var _props = this.props,
          menu = _props.menu,
          noSearch = _props.noSearch,
          title = _props.title,
          mode = _props.mode;
      var _state = this.state,
          searchValue = _state.searchValue,
          activeKey = _state.activeKey,
          expandedKeys = _state.expandedKeys;

      var dataSource = this.getData();

      var treeProps = {
        checkStrictly: true,
        expandedKeys: expandedKeys,
        autoExpandParent: searchValue !== undefined,
        onExpand: function onExpand(expandedKeys) {
          _this7.setState({
            expandedKeys: expandedKeys,
            searchValue: ''
          });
        },
        multiple: false,
        selectable: false,
        selectedKeys: activeKey ? [String(activeKey)] : [],
        showLine: this.props.showLine
      };
      return _react2.default.createElement(
        'div',
        { className: 'o-com-explorer' },
        _react2.default.createElement(
          'div',
          { className: 'o-com-explorer_wrapper' },
          title ? _react2.default.createElement(
            'div',
            { className: 'o-com-explorer_title' },
            _react2.default.createElement(
              'span',
              { className: 'o-com-explorer_link' },
              title
            ),
            menu
          ) : null,
          mode === 'multiple' ? this.renderTabs(dataSource) : null,
          noSearch ? null : this.renderSearch(dataSource),
          _react2.default.createElement(
            'div',
            { className: 'o-com-explorer_tree' },
            dataSource.length ? _react2.default.createElement(
              _tree2.default,
              treeProps,
              this.loopTreeNode(dataSource, searchValue)
            ) : _react2.default.createElement(
              _spin2.default,
              { spinning: this.props.pending },
              _react2.default.createElement(_alert2.default, { style: { margin: '0 6px' }, message: this.props.pending ? 'Loading...' : this.props.noResult, type: 'warning' })
            )
          )
        )
      );
    }
  }]);

  return Explorer;
}(_react2.default.PureComponent), _class.propTypes = {
  mode: _propTypes2.default.string,
  dataSource: _propTypes2.default.array,
  changeNodes: _propTypes2.default.array,
  noSearch: _propTypes2.default.bool,
  cateId: _propTypes2.default.any,
  value: _propTypes2.default.any,
  onSelect: _propTypes2.default.func,
  onChange: _propTypes2.default.func,
  searchPlaceholder: _propTypes2.default.string,
  menu: _propTypes2.default.element,
  title: _propTypes2.default.string,
  actions: _propTypes2.default.array,
  onSearch: _propTypes2.default.func,
  noResult: _propTypes2.default.string,
  pending: _propTypes2.default.bool,
  showLine: _propTypes2.default.bool,
  leafIcon: _propTypes2.default.string,
  byLeaf: _propTypes2.default.bool }, _class.defaultProps = {
  dataSource: [],
  changeNodes: [],
  // single, multiple
  mode: 'single',
  noResult: 'No Result!',
  pending: false
}, _temp);

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tree");

/***/ }),
/* 85 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 86 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/avatar");

/***/ }),
/* 88 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 89 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoadingBar = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var initialState = {
  terminatingAnimationTimeout: null,
  percent: 0,
  progressInterval: null
};

var DEFAULT_SCOPE = 'default';
var UPDATE_TIME = 200;
var MAX_PROGRESS = 99;
var PROGRESS_INCREASE = 10;
var LoadingBar = exports.LoadingBar = (_temp = _class = function (_React$Component) {
  _inherits(LoadingBar, _React$Component);

  _createClass(LoadingBar, null, [{
    key: 'showLoading',
    value: function showLoading() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCOPE;

      var instance = LoadingBar.instances[scope];
      if (instance && instance.handleUpdate) {
        instance.handleUpdate({
          loading: (instance.state.loading || 0) + 1
        });
      } else {
        LoadingBar.instances[scope] = (LoadingBar.instances[scope] || 0) + 1;
      }
    }
  }, {
    key: 'hideLoading',
    value: function hideLoading() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCOPE;

      var instance = LoadingBar.instances[scope];
      if (instance && instance.handleUpdate) {
        instance.handleUpdate({
          loading: Math.max(0, (instance.state.loading || 1) - 1)
        });
      }
    }
  }, {
    key: 'resetLoading',
    value: function resetLoading() {
      var scope = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : DEFAULT_SCOPE;

      var instance = LoadingBar.instances[scope];
      if (instance && instance.handleUpdate) {
        instance.handleUpdate({ loading: 0 });
      }
    }
  }]);

  function LoadingBar(props) {
    _classCallCheck(this, LoadingBar);

    var _this = _possibleConstructorReturn(this, (LoadingBar.__proto__ || Object.getPrototypeOf(LoadingBar)).call(this, props));

    _this.state = _extends({}, initialState, {
      loading: LoadingBar.instances[props.scope] === undefined ? props.loading : LoadingBar.instances[props.scope].loading
    });
    _this.style = {
      opacity: '0',
      transform: 'scaleX(0)',
      transformOrigin: 'left',
      width: '100%',
      willChange: 'transform, opacity'
    };

    // Use default styling if there's no CSS class applied
    if (!_this.props.className) {
      _this.style.height = '3px';
      _this.style.backgroundColor = 'red';
      _this.style.position = 'absolute';
    }

    Object.assign(_this.style, _this.props.style);

    _this.boundSimulateProgress = _this.simulateProgress.bind(_this);
    _this.boundResetProgress = _this.resetProgress.bind(_this);

    LoadingBar.instances[props.scope] = _this;
    return _this;
  }

  _createClass(LoadingBar, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Re-render the component after mount to fix problems with SSR and CSP.
      //
      // Apps that use Server Side Rendering and has Content Security Policy for style
      // that doesn't allow inline styles should render an empty div and replace it
      // with the actual Loading Bar after mount See:
      // https://github.com/mironov/react-redux-loading-bar/issues/39
      //
      // eslint-disable-next-line react/no-did-mount-set-state
      this.mounted = true;

      if (this.state.loading > 0) {
        this.launch();
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.mounted = false;
      clearInterval(this.state.progressInterval);
      clearTimeout(this.state.terminatingAnimationTimeout);
    }
  }, {
    key: 'handleUpdate',
    value: function handleUpdate(nextProps) {
      if (this.shouldStart(nextProps)) {
        this.launch();
      } else if (this.shouldStop(nextProps)) {
        if (this.state.percent === 0 && !this.props.showFastActions) {
          // not even shown yet because the action finished quickly after start
          clearInterval(this.state.progressInterval);
          this.resetProgress();
        } else {
          // should progress to 100 percent
          this.setState({ percent: 100 });
        }
      }
    }

    // componentWillReceiveProps(nextProps) {   this.handleUpdate(nextProps); }

  }, {
    key: 'shouldStart',
    value: function shouldStart(nextProps) {
      if (!this.state.loading && nextProps.loading > 0) {
        this.setState({ loading: nextProps.loading });
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'shouldStop',
    value: function shouldStop(nextProps) {
      if (this.state.progressInterval && nextProps.loading === 0) {
        this.setState({ loading: nextProps.loading });
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'shouldShow',
    value: function shouldShow() {
      return this.state.percent > 0 && this.state.percent <= 100;
    }
  }, {
    key: 'launch',
    value: function launch() {
      var percent = this.state.percent;
      var terminatingAnimationTimeout = this.state.terminatingAnimationTimeout;


      var loadingBarNotShown = !this._progressInterval;
      var terminatingAnimationGoing = percent === 100;

      if (loadingBarNotShown) {
        this._progressInterval = setInterval(this.boundSimulateProgress, this.props.updateTime);
      }

      if (terminatingAnimationGoing) {
        clearTimeout(terminatingAnimationTimeout);
      }

      percent = 0;

      this.setState({ progressInterval: this._progressInterval, percent: percent });
    }
  }, {
    key: 'newPercent',
    value: function newPercent() {
      var percent = this.state.percent;
      var progressIncrease = this.props.progressIncrease;

      // Use cos as a smoothing function Can be any function to slow down progress
      // near the 100%

      var smoothedProgressIncrease = progressIncrease * Math.cos(percent * (Math.PI / 2 / 100));

      return percent + smoothedProgressIncrease;
    }
  }, {
    key: 'simulateProgress',
    value: function simulateProgress() {
      var _state = this.state,
          progressInterval = _state.progressInterval,
          percent = _state.percent,
          terminatingAnimationTimeout = _state.terminatingAnimationTimeout;
      var maxProgress = this.props.maxProgress;


      if (percent === 100) {
        clearInterval(progressInterval);
        terminatingAnimationTimeout = setTimeout(this.boundResetProgress, LoadingBar.TERMINATING_ANIMATION_TIME);
        progressInterval = null;
      } else if (this.newPercent() <= maxProgress) {
        percent = this.newPercent();
      }

      this.setState({ percent: percent, progressInterval: progressInterval, terminatingAnimationTimeout: terminatingAnimationTimeout });
    }
  }, {
    key: 'resetProgress',
    value: function resetProgress() {
      this.setState(initialState);
    }
  }, {
    key: 'buildStyle',
    value: function buildStyle() {
      var animationTime = this.state.percent !== 100 ? LoadingBar.ANIMATION_TIME : LoadingBar.TERMINATING_ANIMATION_TIME;

      this.style = Object.assign({}, this.style, {
        transform: 'scaleX(' + this.state.percent / 100 + ')',
        transition: 'transform ' + animationTime + 'ms linear',
        opacity: this.shouldShow() ? '1' : '0'
      });
      return this.style;
    }
  }, {
    key: 'render',
    value: function render() {
      // In order not to violate strict style CSP it's better to make an extra
      // re-render after component mount
      if (!this.mounted) {
        return _react2.default.createElement('div', null);
      }

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', { style: this.buildStyle(), className: this.props.className }),
        _react2.default.createElement('div', { style: {
            display: 'table',
            clear: 'both'
          } })
      );
    }
  }]);

  return LoadingBar;
}(_react2.default.Component), _class.UPDATE_TIME = UPDATE_TIME, _class.MAX_PROGRESS = MAX_PROGRESS, _class.PROGRESS_INCREASE = PROGRESS_INCREASE, _class.ANIMATION_TIME = UPDATE_TIME * 4, _class.TERMINATING_ANIMATION_TIME = UPDATE_TIME / 2, _class.instances = {}, _class.create = function () {
  var opt = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  return function (action, next) {
    if (action.type && !action.suppressGlobalProgress) {
      if (action.type.match(/\/start$/)) {
        LoadingBar.showLoading(opt.name);
      } else if (action.type.match(/\/success$/) || action.type.match(/\/error$/)) {
        LoadingBar.hideLoading(opt.name);
      }
    }
    next(action);
  };
}, _class.propTypes = {
  className: _propTypes.string,
  loading: _propTypes.number,
  maxProgress: _propTypes.number,
  progressIncrease: _propTypes.number,
  showFastActions: _propTypes.bool,
  updateTime: _propTypes.number,
  // eslint-disable-next-line react/no-unused-prop-types
  scope: _propTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  style: _propTypes.object
}, _class.defaultProps = {
  className: '',
  loading: 0,
  maxProgress: MAX_PROGRESS,
  progressIncrease: PROGRESS_INCREASE,
  showFastActions: false,
  style: {},
  updateTime: UPDATE_TIME,
  scope: DEFAULT_SCOPE
}, _temp);

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/modal");

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = require("clipboard");

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorFetch = errorFetch;

var _notifier = __webpack_require__(23);

function errorFetch(res, errorNotification) {
  var checkStatus = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};

  var statusResult = checkStatus(res);
  if (statusResult) {
    var error = new Error(statusResult.message || res.message || '');
    error.response = res;
    error.errorNotification = new _notifier.Notifier({
      type: 'error',
      level: 'two',
      trace: true,
      title: statusResult.title || '错误提示'
    });
    throw error;
  }
  return res;
}

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.errorReducer = errorReducer;

var _notifier = __webpack_require__(23);

function errorReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  var action = arguments[1];

  if (!action.error || action.suppressGlobalErrorNotification) {
    return state;
  }

  if (action.error.errorNotification) {
    action.error.errorNotification.notify({
      content: action.error.message || action.error.response,
      trace: true
    });
  } else {
    var errorNotification = _notifier.Notifier.notifierFactory('error', action.error.title, action.error.response || action.error.message);
    errorNotification.notify({
      trace: true
    });
  }
  return action.error;
} /**
   * ### 集成到reducer中
   * 在redux体系中，一旦有action触发，所有的reducer都会调用一次，而errorReducer会专门判断action是否包含error属性，包含即认定action发生了错误。
   * 
   * 识别action发生错误的基本结构：
   * 
   * ```javascript
   *  action = {
   *    suppressGlobalErrorNotification: Boolean, // 为true表示忽略错误 
   *    error: { // 否则认定发生了错误，需要做提示。
   *      errorNotification: Notifier, // 存在则通过告警器来做提示
   *      response: Response, // 发生错误的响应体，比如http请求的返回结果
   *      message: String, // 简单错误提示
   *    }
   *  }
   * ```
   */

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.Result = Result;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _navLink = __webpack_require__(12);

__webpack_require__(96);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

/* eslint-disable react/prop-types */
function Result(_ref) {
  var className = _ref.className,
      type = _ref.type,
      title = _ref.title,
      description = _ref.description,
      extra = _ref.extra,
      links = _ref.links,
      restProps = _objectWithoutProperties(_ref, ['className', 'type', 'title', 'description', 'extra', 'links']);

  var iconMap = {
    error: _react2.default.createElement(_icon2.default, { className: 'error', type: 'close-circle' }),
    success: _react2.default.createElement(_icon2.default, { className: 'success', type: 'check-circle' })
  };
  return _react2.default.createElement(
    'div',
    _extends({ className: 'j-com-result ' + className }, restProps),
    _react2.default.createElement(
      'div',
      { className: 'icon' },
      iconMap[type]
    ),
    _react2.default.createElement(
      'div',
      { className: 'title' },
      title
    ),
    description && _react2.default.createElement(
      'div',
      { className: 'description' },
      description
    ),
    extra && _react2.default.createElement(
      'div',
      { className: 'extra' },
      extra
    ),
    links && _react2.default.createElement(
      'div',
      { className: 'actions' },
      _react2.default.createElement(_navLink.NavLink, { links: links })
    )
  );
}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _autoComplete = __webpack_require__(39);

var _autoComplete2 = _interopRequireDefault(_autoComplete);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Search搜索组件
 */
var Search = exports.Search = (_temp = _class = function (_React$PureComponent) {
  _inherits(Search, _React$PureComponent);

  // 把数据存入dataSource使组件可以通过ref拿到原始数据；
  function Search(props) {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));

    _this.handleSearch = function (value, params) {
      params = params || _this.props.params;
      var select = Object.assign({}, _this.state.select, { value: value });
      if (!_this.props.noSearch && _this.props.getResolver) {
        _this.getOptions(_this.props.getResolver(value, params));
      } else {
        _this.setState({ select: select });
      }
    };

    _this.state = {
      dataSource: props.dataSource,
      select: {
        value: props.defaultValue,
        dataSource: props.options ? props.options : props.dataSource.map(function (item) {
          return _react2.default.createElement(
            _autoComplete2.default.Option,
            { key: item[props.rowKey] },
            _this.renderOption(item)
          );
        })
      }
    };
    if (props.getResolver) {
      _this.getOptions(props.getResolver(null, _this.props.params), props.defaultValue);
    }
    return _this;
  }

  _createClass(Search, [{
    key: 'find',
    value: function find(condition) {
      return this.state.dataSource.find(condition);
    }
  }, {
    key: 'renderOption',
    value: function renderOption(item) {
      var _props = this.props,
          labelKey = _props.labelKey,
          renderItem = _props.renderItem;

      if (renderItem) {
        return renderItem(item);
      } else {
        return item[labelKey];
      }
    }
  }, {
    key: 'getOptions',
    value: function getOptions(resolver, value) {
      var _this2 = this;

      var rowKey = this.props.rowKey;

      return resolver.then(function (ret) {
        var nextState = {
          dataSource: ret.dataSource,
          select: Object.assign({}, ret, {
            dataSource: ret.dataSource.map(function (item) {
              return _react2.default.createElement(
                _autoComplete2.default.Option,
                { key: item[rowKey] },
                _this2.renderOption(item)
              );
            })
          })
        };
        if (value) {
          nextState.select.value = value;
        }
        _this2.setState(nextState);
      });
    }
    /**
     * @param {string} value-输入框的内容
     * @param {} params
     */

  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var style = this.props.style || {};
      var _onSelect = this.props.onSelect;
      var InputSearch = this.props.noSearch ? null : _react2.default.createElement(_input2.default, { suffix: _react2.default.createElement(_icon2.default, { type: 'search' }) });
      style.width = style.width || 240;
      style.height = style.height || 32;
      return _react2.default.createElement(
        _autoComplete2.default,
        _extends({
          style: style,
          allowClear: true
        }, this.props, this.state.select, {
          filterOption: function filterOption(inputValue, option) {
            return inputValue === option.key || option.props.children.indexOf(inputValue) > -1;
          },
          onSearch: function onSearch(v) {
            var delay = _this3.props.delay;
            if (delay) {
              clearTimeout(_this3.timer);
              _this3.timer = setTimeout(function () {
                _this3.handleSearch(v);
              }, delay);
            } else {
              _this3.handleSearch(v);
            }
          },
          onSelect: function onSelect(v, o) {
            _onSelect && _onSelect(v, o);
            var select = Object.assign({}, _this3.state.select, { value: v });
            _this3.setState({ select: select });
          }
        }),
        InputSearch
      );
    }
  }]);

  return Search;
}(_react2.default.PureComponent), _class.propTypes = {
  getResolver: _propTypes2.default.func,
  defaultValue: _propTypes2.default.string,
  dataSource: _propTypes2.default.array,
  options: _propTypes2.default.array,
  rowKey: _propTypes2.default.string,
  renderItem: _propTypes2.default.func,
  labelKey: _propTypes2.default.string,
  onChange: _propTypes2.default.func,
  mode: _propTypes2.default.string,
  onSelect: _propTypes2.default.func,
  noSearch: _propTypes2.default.bool,
  style: _propTypes2.default.object,
  delay: _propTypes2.default.number,
  params: _propTypes2.default.object
}, _class.defaultProps = {
  rowKey: 'id',
  labelKey: 'value',
  dataSource: [] }, _temp);

/***/ }),
/* 98 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StepConnector = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _anchor = __webpack_require__(100);

var _anchor2 = _interopRequireDefault(_anchor);

__webpack_require__(101);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var StepConnector = exports.StepConnector = (_temp = _class = function (_React$PureComponent) {
  _inherits(StepConnector, _React$PureComponent);

  function StepConnector(props) {
    _classCallCheck(this, StepConnector);

    var _this = _possibleConstructorReturn(this, (StepConnector.__proto__ || Object.getPrototypeOf(StepConnector)).call(this, props));

    _this.handleStep = function (activeStep, activeTab) {
      _this.props.steps.forEach(function (step) {
        var dom = step.getContainer ? step.getContainer(step.id) : document.getElementById(step.id);
        if (step.tab === activeTab) {
          dom.style.display = 'block';
        } else {
          dom.style.display = 'none';
        }
      });
      _this.setState({
        activeStep: activeStep,
        activeTab: activeTab
      });
    };

    var firstStep = props.steps[0] || {};
    _this.state = {
      activeStep: 0,
      activeTab: firstStep.tab
    };
    return _this;
  }

  _createClass(StepConnector, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      if (nextProps.activeStep !== undefined && nextProps.activeStep !== this.state.activeStep) {
        this.handleStep(nextProps.activeStep, nextProps.steps[nextProps.activeStep].tab);
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var activeStep = this.state.activeStep;
      var steps = this.props.steps;

      // return (<Stepper nonLinear activeStep={activeStep} style={{height: height}}>
      //   {steps.map((label) => (
      //     <Step key={label}>
      //       <StepButton onClick={this.handleStep} completed={completed}>
      //         {label}
      //       </StepButton>
      //     </Step>
      //   ))}
      // </Stepper>);

      return _react2.default.createElement(
        _anchor2.default,
        { affix: false, className: 'o-com-stepConnector' },
        steps.map(function (step, index) {
          return [_react2.default.createElement(
            'div',
            { key: index, className: 'o-com-stepConnector_elem-step' },
            _react2.default.createElement(
              'button',
              { tabIndex: index, type: 'button', className: 'o-com-stepConnector_elem-step_btn', onClick: function onClick() {
                  return _this2.handleStep(index, step.tab);
                } },
              _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                  'span',
                  { className: 'o-com-stepConnector_elem-step_span' + (activeStep === index ? ' active' : '') },
                  _react2.default.createElement(
                    'span',
                    null,
                    _react2.default.createElement(
                      'svg',
                      { viewBox: '0 0 24 24' },
                      _react2.default.createElement('circle', { cx: '12', cy: '12', r: '10' }),
                      _react2.default.createElement(
                        'text',
                        { x: '12', y: '16' },
                        index + 1
                      )
                    )
                  ),
                  _react2.default.createElement(_anchor2.default.Link, { href: '#' + step.id, title: step.text })
                )
              )
            )
          ), steps.length - index > 1 ? _react2.default.createElement(
            'div',
            { className: 'o-com-stepConnector_elem-connector' },
            _react2.default.createElement('span', null)
          ) : null];
        })
      );
    }
  }]);

  return StepConnector;
}(_react2.default.PureComponent), _class.propTypes = {
  nonLinear: _propTypes2.default.object,
  height: _propTypes2.default.number,
  steps: _propTypes2.default.array,
  completed: _propTypes2.default.bool,
  activeStep: _propTypes2.default.number
}, _temp);

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/anchor");

/***/ }),
/* 101 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TagSearcher = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _collapse = __webpack_require__(103);

var _collapse2 = _interopRequireDefault(_collapse);

var _input = __webpack_require__(6);

var _input2 = _interopRequireDefault(_input);

var _tooltip = __webpack_require__(104);

var _tooltip2 = _interopRequireDefault(_tooltip);

var _icon = __webpack_require__(2);

var _icon2 = _interopRequireDefault(_icon);

var _alert = __webpack_require__(36);

var _alert2 = _interopRequireDefault(_alert);

var _dragItem = __webpack_require__(33);

__webpack_require__(105);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TagSearcher = exports.TagSearcher = (_temp = _class = function (_Component) {
  _inherits(TagSearcher, _Component);

  function TagSearcher(props) {
    _classCallCheck(this, TagSearcher);

    var _this = _possibleConstructorReturn(this, (TagSearcher.__proto__ || Object.getPrototypeOf(TagSearcher)).call(this, props));

    _this.state = {
      keyword: '',
      entityCode: '',
      tagCode: '',
      objectList: [],
      tagsMap: {},
      dimsMap: {}
    };
    _this.handleChange(props.entityCode, props.tagCode, props.objectList);
    return _this;
  }

  _createClass(TagSearcher, [{
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(nextProps) {
      // #! objectList发生变化时因为请求单个entity的tagList #! 只有可能改变entityCode和tagCode, 用来定位
      var mergeProps = {
        entityCode: this.state.entityCode,
        tagCode: this.state.tagCode,
        objectList: this.state.objectList,
        keyword: this.state.keyword
      };
      var keyword = this.state.keyword;
      var hasReceive = true;

      switch (true) {
        case this.props.entityCode !== nextProps.entityCode:
          mergeProps.entityCode = nextProps.entityCode;
          break;
        case this.props.tagCode !== nextProps.tagCode:
          mergeProps.tagCode = nextProps.tagCode;
          break;
        case nextProps.objectList !== this.props.objectList:
          mergeProps.objectList = nextProps.objectList;
          break;
        case this.props.keyword !== nextProps.keyword:
          keyword = '';
          // #! 因为setState是异步的
          this.setState({ keyword: '' });
          mergeProps.keyword = nextProps.keyword;
          break;
        default:
          hasReceive = false;
          break;
      }
      if (hasReceive) {
        // #! 搜索时，请求tagList会导致objectList更新
        if (keyword) {
          var _state$keyword$split = this.state.keyword.split('.'),
              _state$keyword$split2 = _slicedToArray(_state$keyword$split, 1),
              entityCodeOrName = _state$keyword$split2[0];

          var objectList = nextProps.objectList.filter(function (item) {
            return item.entityCode.indexOf(entityCodeOrName) > -1 || item.entityName.indexOf(entityCodeOrName) > -1;
          });
          this.handleChange(mergeProps.entityCode, mergeProps.tagCode, objectList);
        } else if (mergeProps.keyword) {
          this.handleSearch(mergeProps.keyword);
        } else {
          this.handleChange(mergeProps.entityCode, mergeProps.tagCode, mergeProps.objectList);
        }
      }
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps, nextState) {
      return this.props !== nextProps || this.state !== nextState;
    }
  }, {
    key: 'getDims',
    value: function getDims(object) {
      // #! entity
      if (object.dims) {
        return object.dims.map(function (dim) {
          return { name: dim.dimCode, code: dim.dimId, entityCode: object.entityCode };
        });
        // #! link
      } else if (object.objects) {
        return object.objects.map(function (obj) {
          return {
            name: obj.entityCode + '.' + obj.dims[0].dimCode,
            code: obj.relationshipId,
            entityCode: object.entityCode
          };
        });
      }
    }

    // #! 展开object或者定位object和tag

  }, {
    key: 'handleChange',
    value: function handleChange(entityCode, tagCode, objectList) {
      var tagsMap = {};
      var dimsMap = {};
      var object = entityCode ? objectList.find(function (item) {
        return item.entityCode === entityCode;
      }) : objectList[0];
      var focusItem = void 0;
      if (object) {
        // #! 需要定位的元素, 定位到entity
        if (entityCode) {
          focusItem = object;
        }
        if (object.tagList) {
          tagsMap[entityCode] = {
            list: object.tagList
          };
          if (tagCode) {
            // #! 如果有tagCode则是定位到tag
            focusItem = object.tagList.find(function (tag) {
              return tag.tagCode === tagCode;
            });
            tagsMap[entityCode].tagCode = focusItem ? focusItem.tagCode : '';
          }
        } else if (entityCode) {
          tagsMap[entityCode] = {
            loading: true,
            list: []
          };
          // #! 请求
          this.props.doFetchTagList(entityCode);
        }
        dimsMap[entityCode] = this.getDims(object);
      }
      if (focusItem) {// undefined表示collaspse的点击
        // 延迟200毫秒后定位
      }
      this.setState({
        tagCode: tagCode,
        entityCode: entityCode,
        objectList: objectList,
        tagsMap: tagsMap,
        dimsMap: dimsMap
      });
    }
  }, {
    key: 'handleSearch',
    value: function handleSearch(keyword) {
      var _this2 = this;

      var _keyword$split = keyword.split('.'),
          _keyword$split2 = _slicedToArray(_keyword$split, 2),
          entityCodeOrName = _keyword$split2[0],
          tagCodeOrName = _keyword$split2[1];

      var tagsMap = {};
      var dimsMap = {};
      var objectList = this.props.objectList;
      if (entityCodeOrName) {
        objectList = objectList.filter(function (item) {
          // #! 匹配name或者code
          if (item.entityCode.indexOf(entityCodeOrName) > -1 || item.entityName.indexOf(entityCodeOrName) > -1) {
            if (tagCodeOrName) {
              if (item.tagList) {
                // #! 匹配name或者code
                tagsMap[item.entityCode] = {
                  list: item.tagList.filter(function (tag) {
                    return tag.tagCode.indexOf(tagCodeOrName) > -1 || tag.tagName.indexOf(tagCodeOrName) > -1;
                  })
                };
              } else {
                tagsMap[item.entityCode] = {
                  loading: true,
                  list: []
                };
                _this2.props.doFetchTagList(item.entityCode);
              }
            } else {
              if (item.tagList) {
                tagsMap[item.entityCode] = {
                  list: item.tagList
                };
              } else {
                tagsMap[item.entityCode] = {
                  loading: true,
                  list: []
                };
                _this2.props.doFetchTagList(item.entityCode);
              }
              dimsMap[item.entityCode] = _this2.getDims(item);
            }
            return true;
          } else {
            return false;
          }
        });
      }

      var entityCode = objectList[0] && objectList[0].entityCode;
      var tagCode = tagsMap[entityCode] && tagsMap[entityCode].list.length && tagsMap[entityCode].list[0].tagCode;
      this.setState({ entityCode: entityCode, tagCode: tagCode, objectList: objectList, tagsMap: tagsMap, dimsMap: dimsMap });
    }
  }, {
    key: 'clearSearch',
    value: function clearSearch() {
      this.setState({ keyword: '' });
      this.handleSearch('');
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _state = this.state,
          keyword = _state.keyword,
          entityCode = _state.entityCode,
          objectList = _state.objectList,
          tagsMap = _state.tagsMap,
          dimsMap = _state.dimsMap;
      // #! 判断是否需要拖拽

      var doDrag = this.props.doDrag;
      var ItemDom = _dragItem.DragItem;
      if (!doDrag) {
        /* eslint-disable no-unused-vars */
        ItemDom = function ItemDom(_ref) {
          var children = _ref.children;

          return _react2.default.createElement(
            'div',
            null,
            _this3.props.children
          );
        };
      }

      // #! 遍历输出所有object,
      // 展开的object必然有dims，不展开则没有；展开的object必然有tagList（分为空和有列表数据，！！完全找不到则需要发请求去拿），不展开则没有
      // 。 #! handleChange，展开object；handleSearch，搜索object或tag
      return _react2.default.createElement(
        'div',
        { className: 'j-com-tagSearcher' },
        _react2.default.createElement(_input2.default.Search, {
          placeholder: this.props.searchPlaceholder || '使用 实体.标签 进行模糊搜索',
          value: keyword,
          suffix: keyword ? _react2.default.createElement(_icon2.default, { type: 'close-circle', onClick: function onClick() {
              return _this3.clearSearch();
            } }) : null,
          onChange: function onChange(e) {
            _this3.setState({ keyword: e.target.value });
          },
          onSearch: function onSearch() {
            return _this3.handleSearch(_this3.state.keyword);
          } }),
        _react2.default.createElement(
          'div',
          { className: 'j-com-elem-oltList' },
          this.props.keyword ? _react2.default.createElement(_alert2.default, { message: '\u901A\u8FC7\u5224\u5B9A\u5F0F\u5B9A\u4F4D', type: 'info', closable: true, onClose: function onClose() {
              return _this3.clearSearch();
            } }) : null,
          _react2.default.createElement(
            _collapse2.default,
            {
              accordion: true,
              activeKey: entityCode,
              onChange: function onChange(key) {
                return _this3.handleChange(key, '', objectList);
              } },
            objectList.map(function (entity) {
              return _react2.default.createElement(
                _collapse2.default.Panel,
                {
                  key: entity.entityCode,
                  header: _react2.default.createElement(
                    ItemDom,
                    { key: entity.entityCode, doAction: doDrag, type: 'entity', data: entity },
                    _react2.default.createElement('div', { className: 'j-com-elem-icon-entity' }),
                    _react2.default.createElement(
                      'span',
                      { title: entity.entityCode + '(' + entity.entityName + ')' },
                      entity.entityCode + '(' + entity.entityName + ')'
                    )
                  ) },
                _react2.default.createElement(
                  'ul',
                  null,
                  dimsMap[entity.entityCode] && dimsMap[entity.entityCode].map(function (dim, index) {
                    return _react2.default.createElement(
                      'li',
                      { key: index },
                      _react2.default.createElement(
                        ItemDom,
                        { key: dim.code, doAction: doDrag, type: 'dim', data: dim },
                        _react2.default.createElement('div', { className: 'j-com-elem-icon-dim' }),
                        _react2.default.createElement(
                          _tooltip2.default,
                          {
                            placement: 'right',
                            title: (entity.entityType === 'object' && '实体' || '关系') + '(' + entity.entityName + ')\u4E0B\u53EF\u7528\u7684\u6807\u7B7E' },
                          _react2.default.createElement(_icon2.default, { type: 'pushpin-o', className: 'j-com-elem-icon-pushpin-o' })
                        ),
                        _react2.default.createElement(
                          'span',
                          { title: dim.name },
                          dim.name
                        )
                      )
                    );
                  })
                ),
                _react2.default.createElement(
                  'ul',
                  null,
                  tagsMap[entity.entityCode] && (tagsMap[entity.entityCode].loading ? _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'span',
                      null,
                      '\u6B63\u5728\u62C9\u53D6...'
                    )
                  ) : tagsMap[entity.entityCode].list.length ? tagsMap[entity.entityCode].list.map(function (tag, index) {
                    return _react2.default.createElement(
                      'li',
                      { key: index },
                      _react2.default.createElement(
                        ItemDom,
                        { key: tag.tagCode, doAction: doDrag, type: 'tag', data: tag },
                        _react2.default.createElement('div', { className: 'j-com-elem-icon-tag' }),
                        _react2.default.createElement(
                          _tooltip2.default,
                          {
                            placement: 'right',
                            title: (entity.entityType === 'object' && '实体' || '关系') + '(' + entity.entityName + ')\u4E0B\u53EF\u7528\u7684\u6807\u7B7E' },
                          _react2.default.createElement(_icon2.default, { type: 'tag-o', className: 'j-com-elem-icon-tag-o' })
                        ),
                        _react2.default.createElement(
                          'span',
                          { title: tag.tagCode + '(' + tag.tagName + ')' },
                          tag.tagCode + '(' + tag.tagName + ')'
                        )
                      )
                    );
                  }) : _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                      'span',
                      null,
                      '\u65E0\u6807\u7B7E'
                    )
                  ))
                )
              );
            })
          )
        )
      );
    }
  }]);

  return TagSearcher;
}(_react.Component), _class.propTypes = {
  entityCode: _propTypes2.default.string.isRequired,
  tagCode: _propTypes2.default.string.isRequired,
  keyword: _propTypes2.default.string.isRequired,
  objectList: _propTypes2.default.array.isRequired,
  doFetchTagList: _propTypes2.default.func.isRequired,
  children: _propTypes2.default.any,
  doDrag: _propTypes2.default.func,
  searchPlaceholder: _propTypes2.default.string
}, _class.defaultProps = {
  entityCode: '',
  tagCode: '',
  keyword: '',
  objectList: []
}, _temp);

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/collapse");

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/tooltip");

/***/ }),
/* 105 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tour = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dec, _class, _class2, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactJoyride = __webpack_require__(107);

var _reactJoyride2 = _interopRequireDefault(_reactJoyride);

var _localeContext = __webpack_require__(3);

__webpack_require__(108);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var types = ['continuous', 'single'];

var Tour = exports.Tour = (_dec = (0, _localeContext.localeContext)('CustomForm', {
  back: '后退',
  close: '关闭',
  last: '完成',
  next: '下一个',
  skip: '跳过'
}), _dec(_class = (_temp = _class2 = function (_React$Component) {
  _inherits(Tour, _React$Component);

  function Tour(props, context) {
    _classCallCheck(this, Tour);

    var _this = _possibleConstructorReturn(this, (Tour.__proto__ || Object.getPrototypeOf(Tour)).call(this, props));

    _this.handleFocus = function (e) {
      _this.setState({
        selector: e.type === 'tooltip:before' ? e.step.selector : ''
      });
    };

    _this.state = {
      joyrideOverlay: props.mask || true,
      joyrideType: props.type || types[0],
      isRunning: props.visible || false,
      stepIndex: 0,
      steps: [],
      selector: ''
    };
    _this._defaultSteps = [];

    if (Array.isArray(props.steps)) {
      _this.state.steps = props.steps;
    } else {
      if (_this.props.steps.steps) {
        _this._defaultSteps = _this.props.steps.steps;
      }
      context.history.listen(function (location, action) {
        if (action.location) {
          var step = _this.props.steps[action.location.pathname];
          if (step) {
            clearTimeout(_this._timer);
            _this._timer = setTimeout(function () {
              if (step.type) {
                _this._switch(step.type, step.mask);
              } else {
                _this.setState({ joyrideType: types[0] });
              }
              _this.addSteps(step.steps, function () {
                if (step.tip) {
                  _this.addTooltip(step.tip);
                }
              }, step.action);
            }, 300);
          } else {
            if (_this._defaultSteps[0] && document.querySelector(_this._defaultSteps[0].selector)) {
              _this.setState({ steps: _this._defaultSteps });
            }
          }
        }
      });
    }
    return _this;
  }

  _createClass(Tour, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      if (this.props.visible !== false) {
        setTimeout(function () {
          if (!_this2.state.isRunning) {
            _this2.setState({ steps: _this2._defaultSteps, isRunning: true });
          }
        }, 1000);
      }
    }
  }, {
    key: 'addSteps',
    value: function addSteps(steps, callback, action) {
      var newSteps = steps;

      if (!Array.isArray(newSteps)) {
        newSteps = [newSteps];
      }

      if (!newSteps.length) {
        return;
      }
      if (action === 'replace') {
        this.setState({
          isRunning: true,
          steps: newSteps
        }, callback);
      } else if (action === 'push') {
        // Force setState to be synchronous to keep step order.
        this.setState(function (currentState) {
          currentState.steps = currentState.steps.concat(newSteps);
          callback && callback();
          return currentState;
        });
      } else {
        var _steps = void 0;
        var stepIndex = 0;
        if (action) {
          var idx = this._defaultSteps.findIndex(function (item) {
            return item.tag === action;
          });
          if (idx > -1) {
            stepIndex = idx + 1;
            _steps = this._defaultSteps.slice(0, idx + 1).concat(newSteps).concat(this._defaultSteps.slice(idx + 1));
          } else {
            _steps = newSteps.concat(this._defaultSteps);
          }
        } else {
          _steps = this._defaultSteps.concat(newSteps);
        }
        this.setState({
          isRunning: true,
          stepIndex: stepIndex,
          steps: _steps
        }, callback);
      }
    }
  }, {
    key: 'addTooltip',
    value: function addTooltip(data) {
      this._joyride.addTooltip(data);
    }
  }, {
    key: 'next',
    value: function next() {
      this._joyride.next();
    }
  }, {
    key: '_switch',
    value: function _switch(type, mask) {
      var _this3 = this;

      if (type === types[0]) {
        this._joyride && this._joyride.reset();

        this.setState({ isRunning: false, joyrideType: type, joyrideOverlay: mask });
        clearTimeout(this._timer);
        this._timer = setTimeout(function () {
          _this3.setState({ isRunning: true });
        }, 300);
      } else {
        this.setState({ joyrideType: type, joyrideOverlay: mask });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this4 = this;

      var _state = this.state,
          isRunning = _state.isRunning,
          joyrideOverlay = _state.joyrideOverlay,
          joyrideType = _state.joyrideType,
          selector = _state.selector,
          stepIndex = _state.stepIndex,
          steps = _state.steps;


      return _react2.default.createElement(_reactJoyride2.default, {
        ref: function ref(inst) {
          return _this4._joyride = inst;
        },
        callback: this.handleFocus,
        debug: false,
        disableOverlay: selector === '.j-tour-ticket',
        locale: this.getLocale(),
        run: isRunning,
        showOverlay: joyrideOverlay,
        showSkipButton: true,
        showStepsProgress: true,
        stepIndex: stepIndex,
        steps: steps,
        type: joyrideType });
    }
  }]);

  return Tour;
}(_react2.default.Component), _class2.contextTypes = {
  history: _propTypes2.default.object
}, _class2.propTypes = {
  steps: _propTypes2.default.object,
  type: _propTypes2.default.bool,
  mask: _propTypes2.default.bool,
  visible: _propTypes2.default.bool
}, _temp)) || _class);

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports = require("react-joyride");

/***/ }),
/* 108 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = require("lodash/cloneDeep");

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports = require("lodash/defaultsDeep");

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./consoleLayout/index.jsx": 51,
	"./contentLayout/index.jsx": 52,
	"./flexContentLayout/index.jsx": 53,
	"./landingLayout/index.jsx": 54
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 111;

/***/ }),
/* 112 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/affix");

/***/ }),
/* 115 */
/***/ (function(module, exports) {

module.exports = require("material-ui/Drawer");

/***/ }),
/* 116 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 117 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 118 */
/***/ (function(module, exports) {

module.exports = require("antd/lib/empty");

/***/ }),
/* 119 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.versionDetector = versionDetector;

var _localStorage = __webpack_require__(56);

function versionDetector(tmpVersionKey, appVersion) {
  window.tmpVersionUpdate = function (flag) {
    document.getElementById('j_' + tmpVersionKey).remove();

    if (flag) {
      var val = String(encodeURIComponent(window[tmpVersionKey]));
      _localStorage.localStorage.set(tmpVersionKey, val);

      var date = new Date();
      date.setTime(date.getTime() + 30 * 24 * 60 * 60 * 1000);
      val += '; expires=' + date.toUTCString();
      if (window.location.pathname.indexOf('/portal/publisher/') === 0) {
        val += '; domain=' + document.domain.split('.').slice(1).join('.');
      } else {
        val += '; domain=' + document.domain;
      }
      val += '; path=/';

      document.cookie = tmpVersionKey + '=' + val;

      window.location.reload(true);
    }
    // 已更新了，30分钟后继续探测
    setTimeout(window.tmpIntervalFunc, 1000 * 60 * 30);
  };
  window.tmpIntervalTick = function () {
    var tmpVersion = _localStorage.localStorage.get(tmpVersionKey);
    if (tmpVersion && window[tmpVersionKey] && tmpVersion !== window[tmpVersionKey]) {
      var tmpVs = window[tmpVersionKey].split('_');
      var tmpVersions = tmpVersion.split('_');
      if (tmpVs[0] === tmpVersions[0] || tmpVs[0] === appVersion) {
        var tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = '<div id="j_' + tmpVersionKey + '" style="position: fixed; top: 0; z-index: 100000000; left: 50%; padding: 5px 20px; border: 1px solid #ffe58f; background-color: #fffbe6; width: 294px; margin-left: -147px; font-weight: bold;">\n              \u60A8\u597D\uFF0C\u7CFB\u7EDF\u6709\u66F4\u65B0\uFF0C\u8BF7\u70B9\u51FB<a onclick="window.tmpVersionUpdate(1);">\u5237\u65B0</a>\u9875\u9762\u3002\n              <a onclick="window.tmpVersionUpdate();" style="display: inline-block; *zoom: 1; *display: inline; width: 14px; height: 14px; opacity: 0.3;    position: absolute; border: 1px solid; border-radius: 7px; right: 4px; top: 7px;" >\n                <i style=" position: absolute; right: 6px; top: 1px; height: 11px; width: 1px; background-color: #333; transform: rotate(45deg); "></i>\n                <i style=" position: absolute; right: 6px; top: 1px; height: 11px; width: 1px; background-color: #333; transform: rotate(-45deg); "></i>\n              </a>\n            </div>';
        document.body.appendChild(tmpDiv);
      }
    } else if (window[tmpVersionKey]) {
      _localStorage.localStorage.set(tmpVersionKey, window[tmpVersionKey]);
      // 没有识别到，30分钟后继续探测
      setTimeout(window.tmpIntervalFunc, 1000 * 60 * 30);
    }
  };

  var tickScript;
  window.tmpIntervalFunc = function () {
    if (tickScript) {
      tickScript.remove();
    }
    tickScript = document.createElement('script');
    tickScript.type = 'text/javascript';
    tickScript.src = window.__static_public_path__ + ('../v.js?t=' + +new Date().getTime());
    tickScript.onload = window.tmpIntervalTick;
    document.head.appendChild(tickScript);
  };

  window.tmpIntervalFunc();
}

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FlexGridLayer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp2;
// see: https://github.com/STRML/react-grid-layout


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(22);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactGridLayout = __webpack_require__(122);

var _reactGridLayout2 = _interopRequireDefault(_reactGridLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FlexGridLayer = exports.FlexGridLayer = (_temp2 = _class = function (_React$PureComponent) {
  _inherits(FlexGridLayer, _React$PureComponent);

  function FlexGridLayer() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, FlexGridLayer);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FlexGridLayer.__proto__ || Object.getPrototypeOf(FlexGridLayer)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      width: 800
    }, _this._nextVectors = [], _temp), _possibleConstructorReturn(_this, _ret);
  }
  // static providers = ['resizer'];

  _createClass(FlexGridLayer, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      /* eslint-disable react/no-find-dom-node */
      var dom = _reactDom2.default.findDOMNode(this);
      this.setState({
        width: dom.offsetWidth
      }, function () {
        if (_this2.context.resizer) {
          _this2._cancelResize = _this2.context.resizer.resize(dom, function () {
            _this2.setState({
              width: dom.offsetWidth
            });
          });
        }
      });
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this._cancelResize && this._cancelResize();
    }
  }, {
    key: 'getGridVector',
    value: function getGridVector(vectors) {
      if (this._nextVectors.length) {
        return this._nextVectors.shift();
      }
      var precedent = !!vectors[0];
      // 一行分6个
      var count = 12;
      // 所有高度
      var hArr = new Array(count);
      // x轴只判断一遍
      var xArr = [];
      // 最低高度
      var minHeight = precedent ? count : 0;
      // 最低高度的下标
      var minHkey = 0;
      var tmpHeight = void 0;
      for (var i = vectors.length; i--;) {
        tmpHeight = vectors[i].y + vectors[i].h;
        if (tmpHeight <= minHeight && !xArr[vectors[i].x]) {
          minHeight = tmpHeight;
          minHkey = i;
          xArr[vectors[i].x] = true;
        }
        // 首行占用了多少位置
        if (vectors[i].y === 0) {
          for (var j = 0; j < vectors[i].w; j++) {
            hArr[vectors[i].x + j] = true;
          }
        }
      }
      var minH = 3;
      var minW = 4;
      var k = 0;
      // 已占有2个宽度为准
      var fWidth = 0;
      // 有占用时的下标
      var fWkey = 0;
      if (hArr.length) {
        while (fWkey < count) {
          if (hArr[fWkey]) {
            fWkey++;
          } else {
            while (k < minW) {
              if (fWkey + k < count && !hArr[fWkey + k]) {
                fWidth++;
              }
              k++;
            }
            break;
          }
        }
      }
      // 未占满
      var vector = void 0;
      if (fWidth === minW) {
        vector = { x: fWkey, y: 0, w: fWidth, h: minH };
      } else if (precedent) {
        // 重要，如果一个模块下，可以容纳2个，那么就加入2个
        var mults = Math.floor(vectors[minHkey].w / minW);
        if (mults > 1) {
          vector = { x: vectors[minHkey].x, y: minHeight, w: minW, h: minH };
          for (var z = 1; z < mults; z++) {
            this._nextVectors.push({ x: vectors[minHkey].x + minW * z, y: minHeight, w: minW * z, h: minH });
          }
        } else {
          vector = { x: vectors[minHkey].x, y: minHeight, w: vectors[minHkey].w, h: minH };
        }
      } else {
        vector = { x: 0, y: 0, w: minW, h: minH };
      }
      return vector;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this3 = this;

      var _props = this.props,
          components = _props.components,
          LayerItem = _props.LayerItem,
          onLayerChange = _props.onLayerChange,
          autoGrid = _props.autoGrid,
          isResizable = _props.isResizable,
          style = _props.style;

      var editable = this.context.layer.isEditable();
      var enabled = isResizable || editable;
      var vectors = [];
      return _react2.default.createElement(
        'div',
        { style: Object.assign({ position: 'relative' }, style), className: 'o-layer o-layer-flexGrid' },
        _react2.default.createElement(
          _reactGridLayout2.default,
          { isDraggable: enabled, isResizable: enabled, cols: 12, rowHeight: 100, width: this.state.width },
          components.map(function (item, index) {
            var vector = item.attrs.vector;
            if (autoGrid) {
              if (!vector) {
                vector = item.attrs.vector = _this3.getGridVector(vectors);
              }
              vectors.push(vector);
            }
            return _react2.default.createElement(
              'div',
              { key: item.key || index, 'data-tt': 1, 'data-grid': vector },
              _react2.default.createElement(
                LayerItem,
                _extends({ onChange: onLayerChange }, item.attrs),
                item && item.component ? _react2.default.createElement(item.component, null) : null
              )
            );
          })
        )
      );
    }
  }]);

  return FlexGridLayer;
}(_react2.default.PureComponent), _class.contextTypes = {
  resizer: _propTypes2.default.object,
  layer: _propTypes2.default.object
}, _class.propTypes = {
  components: _propTypes2.default.array,
  LayerItem: _propTypes2.default.any,
  onLayerChange: _propTypes2.default.func,
  autoGrid: _propTypes2.default.bool,
  isResizable: _propTypes2.default.bool,
  style: _propTypes2.default.object
}, _temp2);

/***/ }),
/* 122 */
/***/ (function(module, exports) {

module.exports = require("react-grid-layout");

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SimpleLayer = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleLayer = exports.SimpleLayer = (_temp = _class = function (_React$PureComponent) {
  _inherits(SimpleLayer, _React$PureComponent);

  function SimpleLayer() {
    _classCallCheck(this, SimpleLayer);

    return _possibleConstructorReturn(this, (SimpleLayer.__proto__ || Object.getPrototypeOf(SimpleLayer)).apply(this, arguments));
  }

  _createClass(SimpleLayer, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          components = _props.components,
          LayerItem = _props.LayerItem,
          LayerGrid = _props.LayerGrid,
          style = _props.style;

      return _react2.default.createElement(
        LayerGrid,
        { className: 'o-layer o-layer-simple', style: style },
        components.map(function (item, index) {
          return _react2.default.createElement(
            LayerItem,
            _extends({ key: item.key || index }, item.attrs, { className: 'o-layer-elem_box' }),
            item && item.component ? _react2.default.createElement(item.component, null) : null
          );
        })
      );
    }
  }]);

  return SimpleLayer;
}(_react2.default.PureComponent), _class.propTypes = {
  components: _propTypes2.default.array,
  LayerItem: _propTypes2.default.any,
  LayerGrid: _propTypes2.default.any,
  style: _propTypes2.default.object
}, _temp);

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var w = window;
var documentElement = document.documentElement;
var body = document.body;

var AdaptPage = exports.AdaptPage = function () {
  _createClass(AdaptPage, [{
    key: 'setOffsetHeight',
    value: function setOffsetHeight(offsetHeight) {
      this._offsetHeight = offsetHeight;
    }
  }, {
    key: 'getScreenHeight',
    value: function getScreenHeight() {
      return (w.innerHeight || documentElement.clientHeight || body.clientHeight) - this._offsetHeight;
    }
  }], [{
    key: 'inIframe',

    /**
     * identify in an iframe
     * see: http://stackoverflow.com/questions/326069/how-to-identify-if-a-webpage-is-being-loaded-inside-an-iframe-or-directly-into-t
     */
    value: function inIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    }
  }]);

  function AdaptPage() {
    var _this = this;

    _classCallCheck(this, AdaptPage);

    this._offsetHeight = 0;
    this._isInIframe = AdaptPage.inIframe();
    this._watchers = [];
    this._adapter = function () {
      clearTimeout(_this._timer);
      _this._timer = setTimeout(function () {
        var index = 0;
        var watcher = _this._watchers[index];
        while (watcher) {
          if (!watcher.el || watcher.el.offsetParent === null) {
            _this._watchers.splice(index, 1);
          } else {
            watcher.fn(watcher.el);
            index++;
          }
          watcher = _this._watchers[index];
        }
      }, 200);
    };

    /**
     * + add resize
     * see: http://stackoverflow.com/questions/19014250/reactjs-rerender-on-browser-resize
     */
    window.addEventListener('resize', this._adapter);
  }

  _createClass(AdaptPage, [{
    key: 'onAdapt',
    value: function onAdapt(el, callback) {
      this._watchers.push({ el: el, fn: callback });
      callback(el, this._isInIframe);
    }
  }, {
    key: 'autoAdaptDim',
    value: function autoAdaptDim(el, setter) {
      var _this2 = this;

      var callback = function callback(el, isInIframe) {
        setter(el.offsetHeight - _this2._offsetHeight, isInIframe, _this2.getScreenHeight());
      };
      this.onAdapt(el, callback);
    }
  }, {
    key: 'autoAdapt',
    value: function autoAdapt(dom, action) {
      this.autoAdaptDim(dom, function (size, isInIframe, screenHeight) {
        action(size, screenHeight, isInIframe);
      });
    }
  }, {
    key: 'dispose',
    value: function dispose() {
      this._watchers = [];
      window.removeEventListener('resize', this._adapter);
    }
  }]);

  return AdaptPage;
}();

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cascader = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _forEach = __webpack_require__(47);

var _forEach2 = _interopRequireDefault(_forEach);

var _getComponent = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Cascader = exports.Cascader = function () {
  function Cascader() {
    var _this = this;

    _classCallCheck(this, Cascader);

    this._cascadesMap = {};
    this._refs = {};

    this.getFieldDecorator = function (name, _ref) {
      var rely = _ref.rely,
          _ref$event = _ref.event,
          event = _ref$event === undefined ? 'onChange' : _ref$event,
          _ref$argIndex = _ref.argIndex,
          argIndex = _ref$argIndex === undefined ? 2 : _ref$argIndex,
          getValueFromEvent = _ref.getValueFromEvent,
          trigger = _ref.trigger,
          _ref$props = _ref.props,
          props = _ref$props === undefined ? {} : _ref$props;
      return function (Field) {
        /**
         * + 初始化步骤
         * 1. rely有值表示当前组件和来源组件有级联关系，rely指向来源组件的实例名
         * 2. this._cascadesMap[rely]存入当前级联的配置信息，来源组件的事件作为key，值是数组
         *
         * 示例：
         * A（来源）和B有级联，通过A的onClick；当前装饰C，需要和A有级联，通过onChange；当前装饰C，需要和A有级联，通过onChange；当装饰D，D和A也做级联，而且也是通过onChange。
         *
         * A（来源）和B有级联onClick， A本身有onClick事件，alert(1); B本身onChange值介绍1个参数是不行的，必须要接受2个参数，A传给B的值放在第二个参数，同时这个参数值会存起来。
         */
        if (rely) {
          _this._cascadesMap[rely] = _this._cascadesMap[rely] || {};
          var events = _this._cascadesMap[rely][event] = _this._cascadesMap[rely][event] || [];
          var item = events.find(function (item) {
            return item.name === name;
          });
          // 是否有重复的级联配置存在
          if (!item) {
            events.push({
              name: name,
              getValueFromEvent: getValueFromEvent,
              trigger: trigger
            });
          }
        }

        // 1. 外部变量，统一在函数内部一个地方可以管理到
        // 2. 外部变量很大，存在内部变量来使用，效率更高
        var cascadesMap = _this._cascadesMap;
        var refs = _this._refs;
        /**
        * Hoc所需的getProps方法
        * @param {object} props -外部传入的props
        * @param {object} context -父级挂载的组件
        * @param {func} setState -方法
        */
        var _getProps = props.getProps;
        var getProps = function getProps(props, context, setState) {
          var newProps = _getProps ? _getProps(props, context, setState) : {};
          // 拿到ref实例
          newProps.ref = function (inst) {
            // 判断是否是Hoc组件
            if (inst && inst.getRealInstance) {
              refs[name] = inst.getRealInstance();
            } else {
              refs[name] = inst;
            }
          };

          var cascadeEvents = cascadesMap[name];
          if (cascadeEvents) {
            // 遍历级联事件
            (0, _forEach2.default)(cascadeEvents, function (cascades, eventName) {
              var eventCb = newProps[eventName] || props[eventName];
              // 拦截事件
              newProps[eventName] = function (e) {
                // 之前的事情触发掉。
                var ret = eventCb && eventCb(e);
                var promise = ret && ret.then ? ret : Promise.resolve();
                // 在之前的事件触发完成之后再执行后续的动作
                promise.then(function () {
                  cascades.forEach(function (instObj) {
                    var value = e.target ? e.target.value : e;
                    // 组件的实例
                    var instance = refs[instObj.name];
                    if (instance) {
                      //
                      if (argIndex !== 1 && instance._triggerParams === undefined) {
                        // 我们给B组件传入值到第二个参数
                        if (!instance._args) {
                          instance._args = [];
                          for (var i = 1; i < argIndex; i++) {
                            instance._args.push(undefined);
                          }
                        }
                        var method = instance[instObj.trigger];
                        instance[instObj.trigger] = function () {
                          return method.apply(this, instance._args.concat(instance._triggerParams));
                        };
                      }
                      // 约定把值传入给_triggerParams
                      instance._triggerParams = instObj.getValueFromEvent ? instObj.getValueFromEvent(value) : null;
                      instance[instObj.trigger]();
                    }
                  });
                });
                return ret;
              };
            });
          }
          return newProps;
        };

        /**
         * Hoc的通用逻辑：B -> Hoc
         * 1. 新定义组件Hoc，传入的所有的prop存在state
         * 2. render函数把state的值，以props的形式传入到A
         * 3. Hoc组件，可以通过getRealInstance获取B的实例
         */
        var HocField = (0, _getComponent.getComponent)(props, getProps)(Field);
        HocField.prototype.getRealInstance = function () {
          return refs[name];
        };

        // 装饰当前组件，会生成一个新的Hoc组件返回。
        return HocField;
      };
    };
  }
  // #! 维护所有组件实例的配置

  // #! 维护所有践实例引用


  _createClass(Cascader, [{
    key: 'getInstance',


    // # 获取组件实例
    value: function getInstance(name) {
      return this._refs[name];
    }
    /**
     * # 装饰一个组件，并加入级联配置信息
     * @param {String} name -指定实例的名称
     * @param {Object} option - 组件的级联配置
     *
     * + getFieldDecorator函数定义
     * ```
     *  getFieldDecorator = function (name, option) {
     *    // Field当前组件的定义
     *    return function(Field) {
     *      return Hoc组件;
     *    }
     *  }
     *
     * // getFieldDecorator(a, b)(Input)
     * ```
     *
     * + option的示例结构
     * ```
     *  option = {
     *    rely,                 // 级联的来源组件实例名称
     *    event,                // 来源组件监听的事件，该事件触发后，会驱动当前组件的触发动作
     *    getVallueFormEvent,   // 触发动作调用时，会传入来源组件触发事件后带进来的值
     *    trigger,              // 当前组件的触发动作
     *    props                 // 装饰组件的额外props
     *  }
     * ```
     *
     * + this._cascadesMap示例结构
     * ```
     * cascadesMap = {
     *  a: {
     *    onChange: [{name, getValueFromEvent, trigger}, ...],
     *    onClick: []
     *  }
     * }
     * ```
     */

  }]);

  return Cascader;
}();

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HocCreator = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _modal = __webpack_require__(40);

var _dataSet = __webpack_require__(32);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HocCreator = exports.HocCreator = function () {
  function HocCreator() {
    _classCallCheck(this, HocCreator);

    this._modals = [];
  }

  _createClass(HocCreator, [{
    key: 'getModalComponent',


    /**
     * modalOption = {
     *  // 对话框的配置
     *  modalProps,
     *  // 对话框打开类型
     *  modalType,
     *  // 独立打开
     *  standalone,
     *  // 子组件的属性
     *  childProps
     * }
     */
    value: function getModalComponent(Widget, modalOption, richProps) {
      var modalType = modalOption.modalType || 'open';
      // 有richProps说明是一个动态数据的组件
      if (richProps) {
        Widget = this.getRichComponent(Widget, richProps);
      }
      var option = Object.assign({
        content: _react2.default.createElement(Widget, modalOption.childProps)
      }, modalOption.modalProps);

      var modal = _modal.GModal[modalType](option);

      // 多个对话框可以叠加
      if (modalOption.standalone) {
        this._modals.push(modal);
      } else {
        // 否则把之前的对话框干掉，只显示当前的
        this._modals[0] && this._modals[0].destroy();
        this._modals[0] = modal;
      }
      return modal;
    }
  }, {
    key: 'destroy',
    value: function destroy() {
      var modal = this._modals.pop();
      modal && modal.destroy();
    }
  }, {
    key: 'getRichComponent',
    value: function getRichComponent(Widget, richProps) {
      var RichWidget = function (_React$PureComponent) {
        _inherits(RichWidget, _React$PureComponent);

        function RichWidget() {
          _classCallCheck(this, RichWidget);

          return _possibleConstructorReturn(this, (RichWidget.__proto__ || Object.getPrototypeOf(RichWidget)).apply(this, arguments));
        }

        _createClass(RichWidget, [{
          key: 'getRealInstance',
          value: function getRealInstance() {
            return this._wrappedComponent;
          }
        }, {
          key: 'handleResolve',
          value: function handleResolve(v, params) {
            this._wrappedComponent.handleResolve(v, params);
          }
        }, {
          key: 'render',
          value: function render() {
            var _this2 = this;

            if (richProps.childProps) {
              Object.assign(richProps.childProps, this.props);
            }
            return _react2.default.createElement(
              _dataSet.DataSet,
              _extends({
                ref: function ref(inst) {
                  return _this2._wrappedComponent = inst;
                }
              }, richProps),
              _react2.default.createElement(Widget, null)
            );
          }
        }]);

        return RichWidget;
      }(_react2.default.PureComponent);

      return RichWidget;
    }
  }]);

  return HocCreator;
}();

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// see: https://www.npmjs.com/package/vue-resize
var Resizer = exports.Resizer = function () {
  function Resizer() {
    _classCallCheck(this, Resizer);
  }

  _createClass(Resizer, [{
    key: 'resize',
    value: function resize(el, callback) {
      var object = document.createElement('object');
      this._resizeObject = object;
      object.setAttribute('style', 'display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;');
      object.setAttribute('aria-hidden', 'true');
      object.setAttribute('tabindex', -1);
      object.onload = function () {
        object.contentDocument.defaultView.addEventListener('resize', callback);
      };
      object.type = 'text/html';
      if (this.isIE) {
        el.appendChild(object);
      }
      object.data = 'about:blank';
      if (!this.isIE) {
        el.appendChild(object);
      }
      return function () {
        object.contentDocument.defaultView.removeEventListener('resize', callback);
      };
    }
  }, {
    key: 'isIE',
    get: function get() {
      if (this._isIE === undefined) {
        var ua = window.navigator.userAgent;

        var msie = ua.indexOf('MSIE ');
        if (msie > 0) {
          // IE 10 or older => return version number
          this._isIE = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
        }

        var trident = ua.indexOf('Trident/');
        if (trident > 0) {
          // IE 11 => return version number
          var rv = ua.indexOf('rv:');
          this._isIE = parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
        }

        var edge = ua.indexOf('Edge/');
        if (edge > 0) {
          // Edge (IE 12+) => return version number
          this._isIE = parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
        }

        // other browser
        this._isIE = -1;
      }
      return this._isIE;
    }
  }]);

  return Resizer;
}();

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RouteHelper = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _url = __webpack_require__(129);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var RouteHelper = exports.RouteHelper = (_temp = _class = function () {
  function RouteHelper(context) {
    var _this = this;

    _classCallCheck(this, RouteHelper);

    this._fns = [];
    this.context = context;
    this.setState(null, window.location.href);
    context.router.listen(function (location) {
      _this.context.location = location;
      _this.setState(null, window.location.href);
    });
  }

  _createClass(RouteHelper, [{
    key: 'replace',
    value: function replace(query) {
      var newLocation = this.context.router.createLocation(this.context.location.pathname);
      newLocation.query = Object.assign(this.context.location.query, query);
      this.context.router.replace(newLocation);
    }
  }, {
    key: 'push',
    value: function push(url) {
      this.context.router.push(url);
    }
  }, {
    key: 'watch',
    value: function watch(watcher, callback) {
      this._fns.push({
        watcher: watcher,
        callback: callback
      });
    }
  }, {
    key: 'unwatch',
    value: function unwatch(watcher) {
      var index = this._fns.findIndex(function (cfg) {
        return cfg.watcher === watcher;
      });
      this._fns.splice(index, 1);
    }
  }, {
    key: 'setState',
    value: function setState(query, url) {
      var newState = {};
      if (url) {
        var u = _url2.default.parse(url, true);
        Object.assign(newState, u.query);
      }

      if (query) {
        Object.assign(newState, query);
      }

      try {
        var cfg = void 0;
        for (var i = 0, len = this._fns.length; i < len; i++) {
          cfg = this._fns[i];
          if (cfg.watcher(newState, this.state)) {
            cfg.callback(newState);
          }
        }
      } catch (e) {
        window.console.error(e);
      }
      this.state = newState;
    }
  }, {
    key: 'location',
    get: function get() {
      return this.context.location;
    }
  }]);

  return RouteHelper;
}(), _class.contextTypes = {
  location: _propTypes2.default.object,
  router: _propTypes2.default.object
}, _temp);

/***/ }),
/* 129 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Validator = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp; /**
                    * # 通用校验模块
                    * 1. 通过定义校验规则用于校验数据合法
                    * 2. 集成antd-form，校验表单合法
                    */


var _asyncValidator = __webpack_require__(131);

var _asyncValidator2 = _interopRequireDefault(_asyncValidator);

var _hoistNonReactStatics = __webpack_require__(16);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _form = __webpack_require__(10);

var _form2 = _interopRequireDefault(_form);

var _message = __webpack_require__(7);

var _message2 = _interopRequireDefault(_message);

var _defer = __webpack_require__(55);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * + async-validator@1.6.6
 * > see: https://github.com/yiminghe/async-validator
 */
var Validator = exports.Validator = (_temp = _class = function () {

  /* eslint-disable camelcase */
  function Validator(props, validateRules) {
    _classCallCheck(this, Validator);

    for (var key in validateRules) {
      validateRules[key] = this.pack(validateRules[key]);
    }
    this._validateRules = validateRules || {};
    this._handleSubmit = function (errors, values) {
      if (errors) {
        return false;
      } else {
        return values;
      }
    };
    this._submitting = false;
    this._validating = false;
  }
  /**
   * + 校验规则
   * ```
   * fieldRules = [{
   *  [fieldName]: {
   *    type: ['string', 'number', 'boolean', 'method', 'regexp', 'integer', 'float', 'array', 'object', 'enum', 'date', 'url', 'hex', 'email'],
   *    required,
   *    pattern,
   *    whitespace,
   *    transform,
   *    message,
   *    validator,
   *    [range(min, max): 'string' | 'array' | 'integer'],
   *    [length: 'string' | 'array']
   *    [enum: 'enum'],
   *    [fields: 'deep rules'],
   *    [defaultField: 'array' | 'object']
   *  }
   * },...]
   * ```
   */


  _createClass(Validator, [{
    key: 'isSubmitting',
    value: function isSubmitting() {
      return this._submitting;
    }
  }, {
    key: 'isValidating',
    value: function isValidating() {
      return this._validating;
    }
  }, {
    key: 'pack',
    value: function pack(rule) {
      if (Array.isArray(rule)) {
        rule = rule.map(function (item) {
          if (typeof item.pattern === 'string') {
            item.pattern = Validator.templates.pattern[item.pattern];
          }
          return item;
        });
      } else {
        if (typeof rule.pattern === 'string') {
          rule.pattern = Validator.templates.pattern[rule.pattern];
        }
      }
      return rule;
    }
  }, {
    key: 'setForm',
    value: function setForm(form, validateRules, submitCallback) {
      this._form = form;
      if (submitCallback) {
        this._handleSubmit = submitCallback;
        if (validateRules) {
          for (var key in validateRules) {
            validateRules[key] = this.pack(validateRules[key]);
          }
          this._validateRules = validateRules;
        }
      } else if (validateRules) {
        this._handleSubmit = validateRules;
      }
    }
  }, {
    key: 'reset',
    value: function reset() {
      this._form.resetFields();
    }
  }, {
    key: 'getProps',
    value: function getProps(fieldName, rule) {
      if (this._validateRules[fieldName]) {
        return assignDeep(this._validateRules[fieldName], rule && this.pack(rule));
      } else {
        return rule && this.pack(rule);
      }
    }

    // #! for antd-form

  }, {
    key: 'getFieldProps',
    value: function getFieldProps(fieldName, option) {
      if (!option.rules && option.rule) {
        option.rules = [option.rule];
      }
      if (this._validateRules[fieldName]) {
        // option.rules = assignDeep([].concat(this._validateRules[fieldName]),
        // option.rules && this.pack(option.rules) || []);
        option.rules = [].concat(this._validateRules[fieldName], option.rules && this.pack(option.rules) || []);
      } else if (option.rules) {
        option.rules = this.pack(option.rules);
      }
      return this._form.getFieldProps(fieldName, option);
    }
  }, {
    key: 'getFieldDecorator',
    value: function getFieldDecorator(fieldName, option) {
      if (!option.rules && option.rule) {
        option.rules = [option.rule];
      }
      if (this._validateRules[fieldName]) {
        // option.rules = assignDeep([].concat(this._validateRules[fieldName]),
        // option.rules && this.pack(option.rules) || []);
        option.rules = [].concat(this._validateRules[fieldName], option.rules && this.pack(option.rules) || []);
      } else if (option.rules) {
        option.rules = this.pack(option.rules);
      }
      return this._form.getFieldDecorator(fieldName, option);
    }
  }, {
    key: '_validate',
    value: function _validate(opt) {
      var _this = this;

      var defer = new _defer.Deferred();
      this._validating = true;
      this._form.setFields();
      opt.preCallback && opt.preCallback();
      var callback = function callback(errors, values) {
        _this._validating = false;
        var postCallback = function postCallback() {
          opt.postCallback && opt.postCallback();
          _this._form.setFields();
        };
        if (errors) {
          if (opt.catchError) {
            opt.catchError(errors);
          } else {
            _message2.default.error('表单校验失败');
          }
          postCallback();
          return defer.reject(false);
        }

        var result = opt.callback && opt.callback(errors, values);
        if (result && result.then) {
          result.then(defer.resolve, defer.reject);
        } else if (result === false) {
          defer.reject(false);
        } else {
          defer.resolve(result);
        }
        defer.promise.then(postCallback, postCallback);
      };
      if (opt.source) {
        new _asyncValidator2.default(this._validateRules).validate(opt.source, callback);
      } else {
        this._form[opt.method](callback);
      }
      return defer.promise;
    }
  }, {
    key: 'validateFields',
    value: function validateFields(callback, catchError) {
      return this._validate({
        method: 'validateFields',
        callback: callback,
        catchError: catchError
      });
    }
  }, {
    key: 'validateFieldsAndScroll',
    value: function validateFieldsAndScroll(callback, catchError) {
      return this._validate({
        method: 'validateFieldsAndScroll',
        callback: callback,
        catchError: catchError
      });
    }
  }, {
    key: 'validate',
    value: function validate(source, callback, catchError) {
      return this._validate({
        source: source,
        callback: callback,
        catchError: catchError
      });
    }
  }, {
    key: 'submit',
    value: function submit(_callback, catchError) {
      var _this2 = this;

      return this._validate({
        method: 'validateFieldsAndScroll',
        preCallback: function preCallback() {
          _this2._submitting = true;
        },
        postCallback: function postCallback() {
          _this2._submitting = false;
        },
        callback: function callback(errors, values) {
          values = _this2._handleSubmit(errors, values);
          if (values === false) {
            return false;
          } else {
            return _callback(values);
          }
        },
        catchError: catchError
      });
    }
  }]);

  return Validator;
}(), _class.enhanceForm = function (option) {
  return function (BaseComponent) {
    var Component = _form2.default.create(Object.assign(option || {}, { withRef: true }))(BaseComponent);
    Component.prototype.getRealInstance = function () {
      return this.refs.wrappedComponent.refs.formWrappedComponent;
    };
    return (0, _hoistNonReactStatics2.default)(Component, BaseComponent);
  };
}, _class.validate = function (rules, source, callback) {
  var descriptor = {};
  for (var key in rules) {
    if (typeof rules[key] === 'boolean') {
      descriptor[key] = {
        type: 'string',
        required: rules[key]
      };
    } else {
      descriptor[key] = rules[key];
    }
  }
  var validator = new _asyncValidator2.default(descriptor);
  validator.validate(source, callback);
}, _class.templates = {
  pattern: {
    // #! 中英字母数字下划线
    legal: /^[A-Za-z0-9_\u4e00-\u9fa5]*$/,
    // #! 必须是字母数字、下划线、中划线以及
    light_legal: /^[A-Za-z0-9._-]*$/,
    // #! 以字母开头，不能包含中文或特殊字符
    light_light_legal: /^[a-zA-Z]\w*$/,
    // #! 中英字母数字下划线
    dark_legal: /^[A-Za-z0-9_\u4e00-\u9fa5]*$/,
    // #! 必须是中英字母数字下划线以及.
    dark_dark_legal: /^[A-Za-z0-9._\u4e00-\u9fa5]*$/
  } }, _class.$inject = ['props', 'validateRules'], _temp);


function assignDeep(obj, newObj) {
  if (Array.isArray(obj)) {
    return obj.map(function (item, index) {
      return assignDeep(item, newObj[index]);
    });
  } else {
    return Object.assign(obj, newObj);
  }
}

/***/ }),
/* 131 */
/***/ (function(module, exports) {

module.exports = require("async-validator");

/***/ })
/******/ ]);
//# sourceMappingURL=hcComponent.js.map