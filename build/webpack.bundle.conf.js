import webpack from 'webpack'
import config from '../config/index.js'
import TerserPlugin from 'terser-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as sass from 'sass'
import { merge } from 'webpack-merge'
import CssMinimizierPlugin from 'css-minimizer-webpack-plugin'
import base from './webpack.base.conf.js'

import testConfig from '../config/test.env.js'

const env = process.env.NODE_ENV === 'testing'
  ? testConfig
  : config.bundle.env

base.entry = {
  VueMultiselect: './src/index.js'
}

const webpackConfig = merge(base, {
  output: {
    path: config.bundle.assetsRoot,
    publicPath: config.bundle.assetsPublicPath,
    filename: 'vue-multiselect.esm.mjs',
    module: true,
    library: {
      type: 'module'
    }
  },
  // output: {
  //   path: config.bundle.assetsRoot,
  //   publicPath: config.bundle.assetsPublicPath,
  //   filename: 'vue-multiselect.cjs',
  //   library: {
  //     type: 'commonjs-module'
  //   }
  // },
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
              sourceMap: true
            }
          }
        ]
      }
    ]
  },
  devtool: config.bundle.productionSourceMap ? 'source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': env
    }),
    new MiniCssExtractPlugin({
      filename: 'vue-multiselect.min.css'
    }),
    new CssMinimizierPlugin()
  ]
})

export default webpackConfig
