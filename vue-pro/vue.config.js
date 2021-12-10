const path = require('path')

const resolve = dir => {
  return path.join(__dirname, '.', dir)
}

module.exports = {
  publicPath: process.env.VUE_PRO,
  outputDir: 'dist',
  lintOnSave: true,
  productionSourceMap: false,
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      css: {
        modules: {
          mode: 'local',
          localIdentName: '[local]-[hash:base64:6]',
        },
        localsConvention: 'camelCaseOnly',
      },
      // 默认情况下 `sass` 选项会同时对 `sass` 和 `scss` 语法同时生效
      // 因为 `scss` 语法在内部也是由 sass-loader 处理的
      // 但是在配置 `prependData` 选项的时候
      // `scss` 语法会要求语句结尾必须有分号，`sass` 则要求必须没有分号
      // 在这种情况下，我们可以使用 `scss` 选项，对 `scss` 语法进行单独配置
      /* 在打包处理 scss 文件的时候 会自动的帮你注入 @import "~@/styles/variables.scss" */
      scss: {
        prependData: '@import "~@/assets/scss/var.scss";',
      },
    },
  },
  chainWebpack: config => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@utils', resolve('src/utils'))
      .set('@components', resolve('src/components'))
      .set('@views', resolve('src/views'))
      .set('@api', resolve('src/api'))
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:57376',
        ws: false,
        changeOrigin: true,
      },
      '/account': {
        target: 'http://localhost:57376',
        ws: false,
        changeOrigin: true,
      },
    },
  },
}
