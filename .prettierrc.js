// prettier配置
module.exports = {
  // 不添加行尾分号
  semi: false,
  // 文件使用单引号
  singleQuote: true,
  // jsx使用单引号
  jsxSingleQuote: true,
  printWidth: 120,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2,
      },
    },
  ],
}
