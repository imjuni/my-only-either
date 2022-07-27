const TsconfigPathsWebpackPlugin = require('tsconfig-paths-webpack-plugin');
const { merge } = require('webpack-merge');
const devConfig = require('./webpack.config.dev');

const config = merge(devConfig, {
  mode: 'production',
  target: 'node',

  resolve: {
    plugins: [
      new TsconfigPathsWebpackPlugin({
        configFile: 'tsconfig.prod.json',
      }),
    ],
  },

  optimization: {
    minimize: true, // <---- disables uglify.
  },
});

module.exports = config;
