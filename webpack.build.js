var path = require('path');

const vendors = [
  /antd\/*/,
  /lodash\/*/,
  /material-ui\/*/,
  'react',
  'prop-types',
  'react-dom',
  'react-router',
  'hoist-non-react-statics',
  'async-validator',
  'moment',
  'clipboard',
  'react-redux-loading-bar',
  'react-dnd',
  'react-dnd-html5-backend',
  'seamless-immutable',
  'classnames',
  'create-react-class',
  'react-joyride',
  'react-grid-layout',
  'beatle',
  'url'
];

var webpackOpts = {
  entry: {
    app: './src/index.js'
  },
  output: {
    filename: 'hcComponent.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'hcComponent',
    libraryTarget: 'commonjs2'
  },
  externals: vendors,
  // 开发者工具
  // cheap-eval-source-map 打开source
  // inline-source-map 调试的时候需要，为每个文件加一个sourcemap的DataUrl，ps：是打包前的每个文件
  devtool: '#cheap-source-map',
  module: {
    noParse: [/moment.js/],
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
              // [require.resolve('babel-plugin-import'), {
              //   style: true,
              //   libraryName: 'antd',
              //   libraryDirectory: 'src',
              // }]
            ]
          }
        }
      }
    ]
  },
  unPlugins: [
    'DefinePlugin',
    'UglifyJsPlugin',
    'CommonsChunkPlugin'
  ]
};

module.exports = webpackOpts;
