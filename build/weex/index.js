// You can see all the config in `./build/weex`.
const  buildPlugins = require('./plugin');
let webpackConfig;
module.exports = env => {
  switch (env.NODE_ENV) {
    case 'prod':
    case 'production':
      webpackConfig = require('./webpack.prod.conf');
      break;
    case 'test':
    case 'testing':
      webpackConfig = require('./webpack.test.conf');
      break;
    case 'plugin':
      buildPlugins();
    case 'common':
      webpackConfig = require('./webpack.common.conf');
      break;
    case 'release':
      webpackConfig = require('./webpack.release.conf');
      break;
    case 'dev':
    case 'development':
    default:
      webpackConfig = require('./webpack.dev.conf');
  }
  return webpackConfig;
}
