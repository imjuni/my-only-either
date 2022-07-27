/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const WebpackBar = require('webpackbar');

const distPath = path.resolve(path.join(__dirname, 'dist'));

const config = {
  devtool: 'inline-source-map',
  mode: 'development',
  target: 'node',

  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
    fallback: {
      __dirname: false,
      __filename: false,
      console: false,
      global: false,
      process: false,
    },
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: 'tsconfig.json',
      }),
    ],
  },

  plugins: [new WebpackBar({ name: '-my-only-either' })],

  entry: {
    index: ['./src/index.ts'],
  },

  output: {
    filename: 'index.js',
    libraryTarget: 'commonjs',
    path: distPath,
  },

  optimization: {
    minimize: false, // <---- disables uglify.
    // minimizer: [new UglifyJsPlugin()] if you want to customize it.
  },

  module: {
    rules: [
      {
        loader: 'json-loader',
        test: /\.json$/,
      },
      {
        exclude: /node_modules/,
        loader: 'ts-loader',
        test: /\.tsx?$/,
        options: {
          configFile: 'tsconfig.json',
        },
      },
    ],
  },
};

module.exports = config;
