const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const { BundleAnalyzerPlugin } = BundleAnalyzer;

module.exports = {
  devtool: 'cheap-module-source-map',
  entry: {
    app: [
      'babel-polyfill',
      path.join(__dirname, '../src/index'),
    ],
  },
  output: {
    path: path.join(__dirname, '../dist'),
    filename: '[name].js',
    chunkFilename: '[chunkhash].js',
    publicPath: './',
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
      test: /\.(css|scss)$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          'css-loader',
          'sass-loader',
        ],
      }),
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
    },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
    // optimizations
    new CleanWebpackPlugin([path.join(__dirname, '../dist')], {
      root: process.cwd(),
      verbose: true,
      dry: false,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: ({ resource }) => /node_modules/.test(resource),
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new HtmlWebpackPlugin({
      title: 'ReactStarter',
      template: path.join(__dirname, '../src/index.html'),
      inject: 'body',
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false,
      },
    }),
    new BundleAnalyzerPlugin({
      // Can be `server`, `static` or `disabled`.
      analyzerMode: 'static',
      // Path to bundle report file that will be generated in `static` mode.
      // Relative to bundles output directory.
      reportFilename: 'report.html',
      // Module sizes to show in report by default.
      // Should be one of `stat`, `parsed` or `gzip`.
      // See "Definitions" section for more information.
      defaultSizes: 'parsed',
      // Automatically open report in default browser
      openAnalyzer: false,
    }),
  ],
};
