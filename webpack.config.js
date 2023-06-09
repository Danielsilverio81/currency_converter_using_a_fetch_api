const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: './src/js/home.js'
  },
  mode: 'production',
  module: {
    rules: [
        {
      test: /\.s[ac]ss$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader',{
        loader: "sass-loader",
        options: {
          sourceMap: true,
          sassOptions: {
            outputStyle: "compressed",
          },
        },
      }]
    }, {
      test: /\.js$/,
      use: ['babel-loader']
    }]
  },
  plugins: [new MiniCssExtractPlugin({
    filename: 'style.css'
  })],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './public')
  }
}