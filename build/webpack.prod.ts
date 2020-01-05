import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base';
const devConfig: Configuration = merge(baseConfig, {
    mode: "production",
    devServer:{
        port:8888,
        open:true,
    },

})
module.exports = devConfig