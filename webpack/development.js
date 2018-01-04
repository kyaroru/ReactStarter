const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, '../src/index'),
    ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, '../src/components/common'),
      actions: path.resolve(__dirname, '../src/actions'),
      reducers: path.resolve(__dirname, '../src/reducers'),
      sagas: path.resolve(__dirname, '../src/sagas'),
      api: path.resolve(__dirname, '../src/api'),
      utils: path.resolve(__dirname, '../src/utils'),
    },
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
    }, {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loader: 'url-loader?name=img/[hash].[ext]',
    }, {
      test: /\.json/,
      use: 'json-loader',
      exclude: /node_modules/,
    }, {
      test: /\.js$/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['react', 'es2015', 'stage-2'],
        },
      },
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web'),
      },
    }),
    new CleanWebpackPlugin([path.join(__dirname, '../dist')]),
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      template: path.join(__dirname, '../src/index.html'),
      inject: 'body',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};
