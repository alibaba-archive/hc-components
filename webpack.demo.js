var path = require('path');
var L20nPlugin = require('hc-honeypack-intl-plugin/babel-l20n-plugin');

var webpackOpts = {
  entry: {
    app: './demo/index.jsx'
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'demo/assets/build'),
  },
  // 开发者工具
  // cheap-eval-source-map 打开source
  // inline-source-map 调试的时候需要，为每个文件加一个sourcemap的DataUrl，ps：是打包前的每个文件
  devtool: 'none',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: function (modulePath) {
          return /node_modules/.test(modulePath) && !/hc-mocker/.test(modulePath);
        },
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
              [path.resolve(__dirname, 'node_modules/babel-plugin-transform-runtime'), {
                polyfill: false,
                regenerator: true
              }],
              [path.resolve(__dirname, 'node_modules/babel-plugin-transform-async-to-module-method'), {
                module: 'bluebird',
                method: 'coroutine'
              }],
              [path.resolve(__dirname, 'node_modules/hc-honeypack-intl-plugin/babel-l20n-loader'), {
                duplicate: false,
                filename: path.join(__dirname, 'demo/assets/locale/zh_CN.js')
              }]
            ],
            metadataSubscribers: [L20nPlugin.metadataContextFunctionName]
          }
        }
      }
    ]
  },
  plugins: [
    new L20nPlugin({filename: path.join(__dirname, 'demo/assets/locale/zh_CN.js')})
  ]
};

module.exports = webpackOpts;
