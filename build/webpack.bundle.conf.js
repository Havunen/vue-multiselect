const webpack = require('webpack')
const base = require('./webpack.base.conf')
const config = require('../config')
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const sass = require('sass')
const { merge } = require('webpack-merge')
const CssMinimizierPlugin = require('css-minimizer-webpack-plugin')

const env = process.env.NODE_ENV === 'testing'
  ? require('../config/test.env')
  : config.bundle.env

base.entry = {
  'VueMultiselect': './src/index.js'
}

const webpackConfig = merge(base, {
  output: {
    path: config.bundle.assetsRoot,
    publicPath: config.bundle.assetsPublicPath,
    filename: 'vue-multiselect.min.js',
    library: 'VueMultiselect',
    libraryTarget: 'umd'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: sass,
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  devtool: config.bundle.productionSourceMap ? 'source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new TerserPlugin(),
    new MiniCssExtractPlugin({
      filename: 'vue-multiselect.min.css'
    }),
    new CssMinimizierPlugin()
  ]
})

module.exports = webpackConfig
