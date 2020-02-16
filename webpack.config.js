const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const devMode = process.env.NODE_ENV !== 'production'

const scssLoader = [
  devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
  {
    loader: 'css-loader',
    options: { url: false }
  },
  {
    loader: 'sass-loader'
  }
]

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const cssExtractPlugin = new MiniCssExtractPlugin({
  filename: '[name].css'
})

module.exports = {
  devServer: {
    contentBase: [path.resolve('static'), path.resolve('dev-resources')]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        use: scssLoader
      }
    ]
  },
  plugins: [htmlPlugin, cssExtractPlugin]
}
