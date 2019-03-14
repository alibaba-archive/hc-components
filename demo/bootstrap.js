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
  require.ensure(['lodash', 'antd', 'material-ui', 'babel-standalone'], function (require) {
    function transform(code) {
      code = window.Babel.transform('window.__tmp_code__ = ' + code, {
        presets: [
          'es2015', 'react', 'stage-0'
        ],
        plugins: ['transform-object-assign']
      }).code;
      new Function(code)('__tmp_code__', 'global');
      code = window.__tmp_code__;
      delete window.__tmp_code__;
      return code;
    }
    converter.parse = (obj) => {
      try {
        if (typeof obj === 'function') {
          return obj;
        } else if (Object(obj) === obj) {
          return JSON.parse(obj, (k, v) => {
            if (typeof v === 'string' && v.indexOf('function') === 0) {
              return transform(obj);
            } else {
              return v;
            }
          }, 2);
        } else {
          return transform(obj);
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

    Object.assign(window, {
      Babel: require('babel-standalone'),
      _: require('lodash')
    });

    callback && callback(gallery);
    resolve(gallery);
  }, 'standalone');
});

export default bootstrap;
