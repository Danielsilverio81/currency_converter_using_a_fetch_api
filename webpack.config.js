const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/js/home.js'
  },
  mode: 'development',
  module: {
    rules: [{
      test: /\.css$/,
      use: [MiniCssExtractPlugin.loader, 'css-loader']
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'index.css'
  })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist')
  }
}