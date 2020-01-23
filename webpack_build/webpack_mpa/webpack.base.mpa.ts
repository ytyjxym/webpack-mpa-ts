import webpack, { Configuration } from 'webpack'
import path from 'path'
import merge from 'webpack-merge'
import baseConfig from '../webpack.base'
import pageConfig from '../webpack__configs/page.config'
const { plugins } = baseConfig
// 入口,html抽离
const { config, htmls } = pageConfig
const entry:webpack.Entry = {
    ...config as webpack.Entry,
    main:path.resolve(__dirname, '../../', './src/main.tsx')
}
const Config: Configuration = merge(baseConfig, {
    entry,
    plugins:[
        ...plugins as webpack.Plugin[],
        ...htmls
    ],
})
export default Config