import path from 'path'
import chalk from 'chalk'
import shell from 'shelljs'
import webpack from 'webpack'
import config from '../config/index.js'
import webpackConfig from './webpack.bundle.conf.js'

const assetsPath = path.join(config.bundle.assetsRoot, config.bundle.assetsSubDirectory)
shell.rm('-rf', assetsPath)
shell.mkdir('-p', assetsPath)

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
})
