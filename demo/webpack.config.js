var path = require('path');
var L20nPlugin = require('hc-honeypack-intl-plugin/babel-l20n-plugin');

var webpackOpts = {
  entry: {
    app: ['./index.jsx']
  },
  devtool: '#cheap-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            cacheDirectory: true,
            presets: ['env', 'react'],
            plugins: [
              'transform-decorators-legacy',
              'transform-class-properties',
              'add-module-exports',
              'transform-object-rest-spread',
              [path.resolve(__dirname, '../node_modules/babel-plugin-transform-runtime'), {
                polyfill: false,
                regenerator: true
              }],
              [path.resolve(__dirname, '../node_modules/babel-plugin-transform-async-to-module-method'), {
                module: 'bluebird',
                method: 'coroutine'
              }],
              [path.resolve(__dirname, '../node_modules/hc-honeypack-intl-plugin/babel-l20n-loader'), {
                duplicate: false,
                filename: path.join(__dirname, './assets/locale/zh_CN.js')
              }]
            ],
            metadataSubscribers: [L20nPlugin.metadataContextFunctionName]
          }
        }
      }
    ]
  },
  plugins: [
    new L20nPlugin({filename: path.join(__dirname, './assets/locale/zh_CN.js')})
  ],
  devServer: {
    disableHostCheck: true,
    proxy: {
    }
  }
};

module.exports = webpackOpts;
