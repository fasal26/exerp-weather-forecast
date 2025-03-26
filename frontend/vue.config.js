const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    devServer: {
      hot: true,
    },
    watch: true,
    watchOptions: {
      ignored: /node_modules/,
      poll: 1000,
    },
  },
  transpileDependencies: true,
  lintOnSave: false
})
