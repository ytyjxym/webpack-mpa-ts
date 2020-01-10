import { Configuration } from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './webpack.base'
// import UglifyjsPlugin from 'uglifyjs-webpack-plugin'
const devConfig: Configuration = merge(baseConfig, {
    mode: "production",
})
export default devConfig