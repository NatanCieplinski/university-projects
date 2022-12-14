// vue.config.js
module.exports = {
   devServer: {
      // IMPORTANTE: senza causa errore "Invalid host header"
      disableHostCheck: true,
      overlay: {
         warnings: true,
         errors: true
      }
   },
   transpileDependencies: ['vue-echarts', 'resize-detector']
}
