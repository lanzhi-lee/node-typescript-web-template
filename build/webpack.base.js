// @ts-check
const path = require('path')
const webpack = require('webpack')

const nodeExternals = require('webpack-node-externals')
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const resolve = (dir) => path.resolve(__dirname, dir)

const isProd = process.env.NODE_ENV === 'production'

/** @type {webpack.Configuration} */
module.exports = {
  target: 'node',
  entry: resolve('../src/index.ts'), // 入口文件
  output: {
    filename: 'app.js',
    path: resolve('../dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx'],
    alias: {},
  },
  // @ts-ignore 这里去掉也有一个奇怪的类型问题
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.(js|ts)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          cacheDirectory: true,
        },
      },
    ],
  },
  plugins: [
    new FriendlyErrorsPlugin(),
    new ForkTsCheckerWebpackPlugin({
      async: false,
    }),
    new webpack.DefinePlugin({
      __IS_PROD__: isProd,
    }),
  ],
}
