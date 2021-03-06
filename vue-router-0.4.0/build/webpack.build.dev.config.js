var webpack = require('webpack')
var banner = require('./banner')

module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist',
    filename: 'vue-router.js',
    library: 'VueRouter',
    libraryTarget: 'umd'
  },
  plugins: [
    new webpack.BannerPlugin(banner)
  ]
}
