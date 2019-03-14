import {$m} from 'hc-l20n';

import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import {Layer, converter, bootstrap} from '../src';

Layer.resolveGallery = (callback) => new Promise(resolve => {
  window.React = React;
  window.ReactDOM = ReactDOM;
  window.moment = moment;
  window.$m = $m;
  // r={presets:["es2015","react","stage-0"],plugins:["transform-object-assign"]},n=o.transform(t,r).code,s=new Function(n);
  // > see: https://github.com/voronianski/babel-transform-in-browser
  require.ensure(['lodash', 'antd', 'material-ui', 'babel-standalone'], function (require) {
    Object.assign(window, {
      Babel: require('babel-standalone'),
      _: require('lodash')
    });

    function transform(code, varName) {
      if (code) {
        return window.Babel.transform(
          (varName ? 'window.' + varName + '=' : '') + code,
          {
            presets: ['es2015', 'react', 'stage-0'],
            plugins: ['transform-object-assign']
          }
        ).code;
      }
    }

    function runCode(code) {
      code = transform(code, '__tmp_code__');
      new Function(code)('__tmp_code__');
      code = window.__tmp_code__;
      delete window.__tmp_code__;
      return code;
    }
    converter.transform = transform;
    converter.parse = (obj) => {
      try {
        if (typeof obj === 'function') {
          return obj;
        } else if (Object(obj) === obj) {
          return JSON.parse(obj, (k, v) => {
            if (typeof v === 'string' && v.indexOf('function') === 0) {
              return runCode(obj);
            } else {
              return v;
            }
          }, 2);
        } else {
          return runCode(obj);
        }
      } catch (e) {
        window.console.error(e);
      }
    };

    const gallery = {
      components: {
        antd: require('antd'),
        material: require('material-ui')
      }
    };

    callback && callback(gallery);
    resolve(gallery);
  }, 'standalone');
});

export default bootstrap;
