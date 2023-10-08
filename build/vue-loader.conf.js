import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import * as sass from 'sass'
import autoprefixer from 'autoprefixer'

export default {
  loaders: {
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
  postcss: [
    autoprefixer({
      overrideBrowserslist: ['last 2 chrome version", "last 2 firefox version", "last 2 safari version']
    })
  ]
}
