module.exports = {
  css: {
    extract: false
  },
  outputDir: '../server/h5',
  devServer: {
    proxy: {
      '/api': {
        target: 'https://lcd.nylira.net',
        changeOrigin: true,
        pathRewrite: { ['^/api']: '' },
        router: function (req) {
          console.log(req.headers.server)
          return req.headers.server;
        }
      },
    }
  },
  pluginOptions: {
    externals: {
      common: [
        {
          id: 'vue',
          assets: [
            {
              path: 'https://cdn.jsdelivr.net/npm/vue@2.6.11',
              type: 'js'
            }
          ],
          global: 'Vue'
        },
        {
          id: 'vant',
          assets: [
            'https://cdn.jsdelivr.net/npm/vant@2.4/lib/index.css',
            'https://cdn.jsdelivr.net/npm/vant@2.4/lib/vant.min.js'
          ],
          global: 'vant'
        }
      ]
    }
  }
}
