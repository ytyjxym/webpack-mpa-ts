import webpack from 'webpack'
import path from 'path'
import pageConfig from './webpack__configs/page.config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin' 
import HtmlWebpackPlugin from 'html-webpack-plugin'
import cleanDist from './webpack__utils/cleanDist'
// build 前删除dist
cleanDist(path.resolve(__dirname, '../dist'))
// 入口,html抽离
const { config, htmls } = pageConfig
const entry:webpack.Entry = {
    ...config as webpack.Entry,
    main:path.resolve(__dirname, '../', './src/main.ts')
}
// 配置文件
const baseConfig: webpack.Configuration = {
    entry,
    output: {
        path: path.resolve(__dirname, '../','./dist'),
        publicPath:'/',
        filename: '[name]/[name].entry.js', 
    },
    module:{
        rules: [
            // js文件配置
            {
                test: /\.(js)|(jsx)$/,
                use:[
                    {
                        loader:'babel-loader',
                        options:{
                            presets:['@babel/preset-env', '@babel/preset-react'],
                            plugins:['@babel/transform-runtime']
                        }
                    }
                ],
                exclude: /(node_modules)/,
                include:/src/
            },
            // css文件配置
            {
                test:/\.css$/,
                use:[
                    'css-loader',
                    MiniCssExtractPlugin.loader,
                ]

            },
            // ts文件配置
            {
                test:/\.(ts)|(tsx)/,
                use:[
                    {
                        loader:'ts-loader',
                        options:{
                            
                        }
                    }
                ]
            }
        ]
    },
    // 公共包
    externals: {
        react: 'React',
        lodash: {
            commonjs: 'lodash',
            amd: 'lodash',
            root: '_' // 指向全局变量
        }
    },
    // 优化
    optimization:{

    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../','./public/template/main.template.html'),
            filename:'index.html',
            chunks:['index']
        }),
        ...htmls
    ]
}
export default baseConfig