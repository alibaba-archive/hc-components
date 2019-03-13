var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
  'url',
  'path'
];

var webpackOpts = {
  entry: {
    app: './example/src/app.jsx',
    vendor: vendors
  },
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, 'example/build')
  },
  // 开发者工具
  // cheap-eval-source-map 打开source
  // inline-source-map 调试的时候需要，为每个文件加一个sourcemap的DataUrl，ps：是打包前的每个文件
  devtool: '#cheap-source-map',
  plugins: [
    new webpack.ProgressPlugin(),
    // 把静态资源注入html的plugins
    new HtmlWebpackPlugin({template: path.resolve(__dirname, './example/index.html')}),
    // 代码压缩插件
    // new webpack.optimize.UglifyJsPlugin({sourceMap: true}),
    // js抽离逻辑
    new webpack.optimize.CommonsChunkPlugin({names: ['public', 'vendor'], minChunks: 2}),
  ],
  devServer: {
    stats: 'errors-only',
    open: true
  },
  unPlugins: []
};

module.exports = webpackOpts;
