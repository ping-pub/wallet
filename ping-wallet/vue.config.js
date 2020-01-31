module.exports = {
  css: {
    extract: false
  },
  outputDir: '../server/h5',
  devServer: {
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
