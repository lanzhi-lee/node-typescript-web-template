// @ts-check
// 用于粗浅地检测 node 主版本
const { engines } = require('../package.json')

const getMajor = (versionStr) => versionStr.split('.')[0].replace(/\D/g, '')

const version = getMajor(engines.node)
const curVersion = getMajor(process.version)

if (curVersion < version) {
  console.error(
    '\x1B[31m%s\x1B[0m',
    `> Error: Required node version ${engines.node}, But now running on ${process.version}!\n`
  )

  process.exit(1)
}
