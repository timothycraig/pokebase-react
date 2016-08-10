const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  entry: [path.join(__dirname, '/src/app/index.js')],

  // render source-map file for final build
  devtool: 'source-map',

  // output config
  output: {
    path: buildPath,
    filename: 'index.js',
  },

  plugins: [
    // minify the bundle
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        // supresses warnings, usually from module minification
        warnings: false,
      },
    }),
    // allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // transfer Files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],

  module: {
    loaders: [
      {
        test: /\.js$/,
        // react-hot is like browser sync and babel loads jsx and es6-7
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
    ],
  },
};

module.exports = config;
