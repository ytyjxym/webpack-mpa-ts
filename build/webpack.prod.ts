import webpack, { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base'
import ZipCss from 'optimize-css-assets-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'
const devConfig: Configuration = merge(baseConfig, {
    mode: "production",
    // optimization: {
    //     minimizer: [
    //         new TerserWebpackPlugin(),
    //     ]
    // },
    plugins:[
        // new webpack.LoaderOptionsPlugin({
        //      minimize: true
        //    }),
        new ZipCss()
    ]
})
export default devConfig