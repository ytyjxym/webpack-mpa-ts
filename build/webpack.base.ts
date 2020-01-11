import webpack from 'webpack'
import path from 'path'
import pageConfig from './webpack__configs/page.config'
// import MiniCssExtractPlugin from 'mini-css-extract-plugin' 
import HtmlWebpackPlugin from 'html-webpack-plugin'
import cleanDist from './webpack__utils/cleanDist'
import TsImport from 'ts-import-plugin'

// build 前删除dist
cleanDist(path.resolve(__dirname, '../dist'))
// 入口,html抽离
const { config, htmls } = pageConfig
const entry:webpack.Entry = {
    ...config as webpack.Entry,
    main:path.resolve(__dirname, '../', './src/main.tsx')
}
// 配置文件
const baseConfig: webpack.Configuration = {
    entry,
    output: {
        path: path.resolve(__dirname, '../','./dist'),
        publicPath: '/',
        filename: '[name]/[name].[hash:8].entry.js', 
        chunkFilename: '[name]/[name].[hash:9].entry.js',
    },
    module:{
        rules: [
            // css文件配置
            {
                test:/\.css$/,
                use:[
                    // MiniCssExtractPlugin.loader,
                    'style-loader',
                    'css-loader',
                ],
            },
            // sass文件配置
            {
                test:/\.(sass|scss)$/,
                use:[
                    'style-loader',
                    // MiniCssExtractPlugin.loader,
                    'css-loader',
                    'sass-loader'
                ],
            },            
            // ts文件配置
            {
                test:/\.(ts)|(tsx)/,
                use:[{
                    loader:'awesome-typescript-loader',
                    options: {
                        getCustomTransformers: () => ({
                          before: [ TsImport(
                                [
                                    // rxjs 按需加载
                                    {
                                        libraryDirectory: '../_esm5/internal/operators',
                                        libraryName: 'rxjs/operators',
                                        camel2DashComponentName: false,
                                        transformToDefaultImport: false
                                    },
                                    {
                                        libraryDirectory: '../_esm5/internal/observable',
                                        libraryName: 'rxjs',
                                        camel2DashComponentName: false,
                                        transformToDefaultImport: false,
                                    },
                                    // antd 按需加载
                                    {
                                        libraryName: 'antd',
                                        libraryDirectory: 'es',
                                        style: 'css',
                                    }
                                ])
                            ]
                        }),
                    },
                }],
                exclude: /(node_modules)/,
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx','.ts', '.tsx'], //后缀名自动补全
    },
    // 优化
    optimization:{

    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../','./public/template/main.template.html'),
            filename:'index.html',
            chunks:['main']
        }),
        ...htmls
    ]
}
export default baseConfig