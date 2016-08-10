const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {

  // entry points to the project
  entry: [
    'webpack/hot/dev-server',
    'webpack/hot/only-dev-server',
    path.join(__dirname, '/src/app/index.js'),
  ],

  // server configuration options
  devServer: {
    contentBase: 'src/www', // relative directory for base of server
    devtool: 'eval',
    hot: true,              // live-reload
    inline: true,
    port: 3000,
    host: '0.0.0.0',
  },

  devtool: 'eval',

  output: {
    path: buildPath,
    filename: 'index.js',
  },

  plugins: [
    // enables Hot Modules Replacement
    new webpack.HotModuleReplacementPlugin(),
    // allows error warnings but does not stop compiling.
    new webpack.NoErrorsPlugin(),
    // moves files
    new TransferWebpackPlugin([
      {from: 'www'},
    ], path.resolve(__dirname, 'src')),
  ],

  module: {
    loaders: [
      {
        // react-hot loader and all .js files
        test: /\.js$/,
        // react-hot is like browser sync and babel loads jsx and es6-7
        loaders: ['react-hot', 'babel-loader'],
        exclude: [nodeModulesPath],
      },
    ],
  },
};

module.exports = config;
