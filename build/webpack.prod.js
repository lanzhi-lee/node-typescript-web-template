// @ts-check
const webpack = require('webpack')
const { merge } = require('webpack-merge')

const TerserPlugin = require('terser-webpack-plugin') // 构建前清理目录
const { CleanWebpackPlugin } = require('clean-webpack-plugin') // 构建前清理目录

const BaseConfig = require('./webpack.base')

/** @type {webpack.Configuration} */
module.exports = merge(BaseConfig, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin()],
  optimization: {
    minimize: true,
    // @ts-ignore
    minimizer: [new TerserPlugin({ extractComments: false }), '...'],
  },
})
