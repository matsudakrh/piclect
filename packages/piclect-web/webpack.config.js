const webpack = require('webpack');
const path = require('path');
const BellOnBundlerErrorPlugin = require('bell-on-bundler-error-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extensions = ['.js'];

const entries = {
  app: './src/app.js'
};

const JS_CONFIG = {
  entry: entries,
  output: {
    filename: '[name].pack.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: {
    subtract: {
      jquery: true,
    },
  },
  resolve: {
    extensions,
  },
  devServer: {
    contentBase: path.join(__dirname, 'build'),
    port: 3000,
    hot: false,
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new BellOnBundlerErrorPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
      filename: 'index.html',
    }),
  ],
};

module.exports = JS_CONFIG;