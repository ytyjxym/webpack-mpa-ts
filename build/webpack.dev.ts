import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import webpack from 'webpack'
import baseConfig from './webpack.base';
const devConfig: Configuration = merge(baseConfig, {
    mode: "development",
    devServer:{
        port: 8888,
        open: true,
        hot: true,
        // noInfo: true
    },
    devtool:'inline-source-map',
    plugins:[
        new webpack.HotModuleReplacementPlugin()
    ]
})
export default devConfig