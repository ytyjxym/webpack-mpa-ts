import webpack, { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base.spa'
import ZipCss from 'optimize-css-assets-webpack-plugin'
const devConfig: Configuration = merge(baseConfig, {
    mode: "production",
    plugins:[
        new webpack.LoaderOptionsPlugin({
             minimize: true
           }),
        new ZipCss()
    ]
})
export default devConfig