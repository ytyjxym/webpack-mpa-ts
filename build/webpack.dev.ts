import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base';
const devConfig: Configuration = merge(baseConfig, {
    mode: "development",
    devServer:{
        port:8888,
        open:true,
    },
    devtool:'inline-source-map'

})
export default devConfig