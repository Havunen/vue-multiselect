import path from 'path'
import config from '../config/index.js'
import { VueLoaderPlugin } from 'vue-loader'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(import.meta.url)

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

export default {
  entry: {
    app: './documentation/main.js'
  },
  mode: 'production',
  output: {
    path: config.docs.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.docs.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue'],
    modules: [
      resolve('src'),
      resolve('documentation'),
      resolve('node_modules')
    ],
    alias: {
      vue$: 'vue/dist/vue',
      'vue-multiselect': path.resolve(__dirname, '../src/Multiselect'), // for consistent docs
      src: path.resolve(__dirname, '../src'),
      assets: path.resolve(__dirname, '../documentation/assets'),
      examples: path.resolve(__dirname, '../documentation/partials/examples'),
      components: path.resolve(__dirname, '../src/components')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          preserveWhitespace: false,
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader' // <style lang="scss">
          }
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('documentation'), resolve('test')]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
