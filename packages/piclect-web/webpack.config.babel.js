import webpack from 'webpack';
import path from 'path';
import BellOnBundlerErrorPlugin from 'bell-on-bundler-error-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import Dotenv from 'dotenv-webpack';
import WebpackBuildNotifier from 'webpack-build-notifier';

const extensions = ['.js'];

const entries = [
  './src/app.js',
];

const plugins = [
  new webpack.NoEmitOnErrorsPlugin(),
  new BellOnBundlerErrorPlugin(),
  new HtmlWebpackPlugin({
    template: './public/index.html',
    filename: 'index.html',
  }),
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  }),
  new Dotenv({
    path: '.env.' + process.env.NODE_ENV,
    safe: false,
  }),
  new WebpackBuildNotifier({
    sound: false,
    suppressSuccess: "always",
  }),
];

if (process.env.NODE_ENV == 'production') {
  plugins.concat([
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
  ]);
}


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
    historyApiFallback: true,
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
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader?name=../font/[name].[ext]'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
    ]
  },
  plugins,
};

module.exports = JS_CONFIG;