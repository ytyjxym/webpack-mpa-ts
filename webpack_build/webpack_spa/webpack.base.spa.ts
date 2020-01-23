import webpack, { Configuration } from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import baseConfig from '../webpack.base'

// 入口抽离
const entry:webpack.Entry = {
    main:path.resolve(__dirname, '../../', './src/main.tsx')
}
const Config: Configuration = merge(baseConfig, {
    entry,
})
export default Config