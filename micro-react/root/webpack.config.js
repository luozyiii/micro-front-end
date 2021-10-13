const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 模块联邦
const { ModuleFederationPlugin } = require('webpack').container

module.exports = {
  // mode 工作模式
  mode: 'development', // production / development / none
  // 入口
  entry: './src/index.js',
  // 出口
  output: {
    filename: './bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  // 模块
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                '@babel/preset-env',
                '@babel/preset-react'
              ]
            }
          }
        ]
      }
    ]
  },
  // 插件
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new ModuleFederationPlugin({
      name: 'roots',
      remotes: {
        microUser: 'microUser@http://localhost:3001/micro-user.js'
      }
    })
  ],
  // 服务器
  devServer: {
    port: 9000,
    open: true
  }
}