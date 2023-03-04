const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const sass = require('sass')

module.exports = {
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
              sourceMap: true,
            },
          },
        ],
      },
    ]
  },
  postcss: [
    require('autoprefixer')({
      overrideBrowserslist: ['last 2 versions']
    })
  ]
}
