import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import webpack from 'webpack'
import baseConfig from './webpack.base.spa'
const devConfig: Configuration = merge(baseConfig, {
    mode: "development",
    devServer:{
        port: 8888,
        open: true,
        hot: true,
        compress: true, //gzip压缩
        historyApiFallback: true,
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin()
    ],
    devtool: 'cheap-module-eval-source-map'
})
export default devConfig