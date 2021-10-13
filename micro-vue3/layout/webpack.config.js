const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
    // mode 工作模式
    mode: 'development', // production / development / none
    cache: false,
    devtool: 'source-map',
    optimization: {
        minimize: false
    },
    target: 'web',
    // 入口
    entry: path.resolve(__dirname, './src/main.js'),
    // 出口
    output: {
    //   filename: './bundle.js',
    //   path: path.resolve(__dirname, 'dist'),
        publicPath: 'auto'
    },
    resolve: {
        extensions: [".vue", ".jsx", ".js", ".json"],
        alias: {
            vue: "@vue/runtime-dom"
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            },
            {
                test: /\.png$/,
                use: {
                    loader: 'url-loader',
                    options: {limit: 8192}
                }
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new ModuleFederationPlugin({
            name: 'layout',
            filename: 'remoteEntry.js',
            remotes: {
                home: 'home@http://localhost:3002/remoteEntry.js'
            },
            exposes: {}
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, './index.html'),
            chunks: ['main']
        }),
        new VueLoaderPlugin()
    ],
    devServer: {
        compress: true,
        port: 3001,
        hot: true,
        headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "X-Requested-With,content-type,Authorization",
        }
    }
}