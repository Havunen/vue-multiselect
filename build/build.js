import path from 'path'
import chalk from 'chalk'
import shell from 'shelljs'
import webpack from 'webpack'
import config from '../config/index.js'
import webpackConfig from './webpack.docs.conf.js'

process.env.NODE_ENV = 'production'
const assetsPath = path.join(config.docs.assetsRoot, config.docs.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)
shell.config.silent = true
shell.cp('-R', 'static/*', assetsPath)
shell.config.silent = false

webpack(webpackConfig, function (err, stats) {
  if (err) throw err
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: false
  }) + '\n\n')

  console.log(chalk.cyan('  Build complete.\n'))
  console.log(chalk.yellow(
    '  Tip: built files are meant to be served over an HTTP server.\n' +
    '  Opening index.html over file:// won\'t work.\n'
  ))
})
