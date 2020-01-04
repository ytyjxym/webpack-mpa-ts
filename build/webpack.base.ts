import webpack from 'webpack'
import path from 'path'
import pageConfig from './page.config'
import MiniCssExtractPlugin from 'mini-css-extract-plugin' 
const baseConfig: webpack.Configuration = {
    // 上下文修复
    context: path.resolve(__dirname, '../'),
    // 多入口
    entry: pageConfig as webpack.Entry ,
    output: {
        path: './dist',
        filename: '[name]/[name].entry.js', 
        chunkFilename: "[id].js"
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
                            presets:['@babel/preset-env'],
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

                ]

            },
            // ts文件配置
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
        
    ]
}
export default baseConfig