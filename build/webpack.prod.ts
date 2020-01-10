import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base';
const devConfig: Configuration = merge(baseConfig, {
    mode: "production",

})
module.exports = devConfig