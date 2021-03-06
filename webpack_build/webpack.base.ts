import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import cleanDist from './webpack__utils/cleanDist'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import babelConfig from './webpack__configs/babel.config'
import tsConfig from './webpack__configs/ts.config'
import WorkboxPlugin from 'workbox-webpack-plugin'
import TerserWebpackPlugin from 'terser-webpack-plugin'

const isDev = process.env.NODE_ENV !== 'production'
// build 前删除dist和lib
cleanDist(path.resolve(__dirname, '../dist'))
cleanDist(path.resolve(__dirname, '../lib'))

// 配置文件
const baseConfig: webpack.Configuration = {
    output: {
        path: path.resolve(__dirname, '../','./dist'),
        publicPath: '/',
        filename: 'static/[name].[hash:9].entry.js', 
        chunkFilename: 'static/[name].[hash:9].chunk.js',
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
        ],
        splitChunks: {
          chunks: 'all',
        }
      },
    resolve: {
        alias: {
          "@": path.resolve(__dirname, '../','./src'),
          "~": path.resolve(__dirname, '../','./public'),
        },
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.sass', '.scss'],
      },
    module:{
        rules: [
            // css文件配置
            {
                test:/\.css$/,
                exclude: /\.module\.css$/,
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader'
                ],
            },
            // sass文件配置
            {
                test:/\.(sass|scss)$/,
                exclude: /\.module\.(scss|sass)$/,
                use:[
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    'css-loader',
                    'postcss-loader',
                    'sass-loader'
                ],
            }, 
            {
                // CSS modules
                test: /\.module\.css$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                  'postcss-loader',
                ]
            },     
            {
                // SCSS modules
                test: /\.module\.(scss|sass)$/,
                use: [
                    isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        },
                    },
                  'postcss-loader',
                  'sass-loader' 
                ]
            },          
            // ts文件配置
            {
                test:/\.(js|jsx|ts|tsx)$/,
                // 配置抽离
                use:[babelConfig,tsConfig],
                exclude: /node_modules/,
            },
            // 文件loader
            {
                test: /\.(png|jpe?g|gif|svg|eot|ttf|woff|woff2)$/,
                use: [ 'url-loader' ]
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            }
        ]
    },
    // 插件
    plugins:[
        new HtmlWebpackPlugin({
            template:path.resolve(__dirname,'../','./public/template/main.template.html'),
            filename:'index.html',
            // chunks:['main'],
        }),
        new MiniCssExtractPlugin({
            filename:'static/[name].[hash:9].css'
        }),
        new ForkTsCheckerWebpackPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            // skipWaiting: true,
            maximumFileSizeToCacheInBytes: 40 * 1024 * 1024
        })
    ]
}
export default baseConfig
