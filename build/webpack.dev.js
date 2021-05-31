// @ts-check
const webpack = require('webpack')
const { merge } = require('webpack-merge')
const NodemonPlugin = require('nodemon-webpack-plugin')

const BaseConfig = require('./webpack.base')

/** @type {webpack.Configuration} */
module.exports = merge(BaseConfig, {
  mode: 'development',
  watch: true,
  watchOptions: {
    aggregateTimeout: 300, // 类似节流功能,聚合多个更改一起构建
    ignored: ['**/src/**/*.*.{css,scss,sass}', '**/node_modules'], // 排除文件
    poll: 2000, // 轮训的方式检查变更 单位：秒，如果监听没生效，可以试试这个选项.
    // 'info-verbosity': 'verbose', // 在增量构建的开始和结束时，向控制台发送消息
  },
  plugins: [new NodemonPlugin({})],
})
