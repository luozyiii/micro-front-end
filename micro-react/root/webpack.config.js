const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const Mfp = require('webpack').container.ModuleFederationPlugin

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
    new Mfp({
      name: 'roots',
      remotes: {
        microUser: 'study@http://localhost:3001/micro-user.js'
      }
    })
  ],
  // 服务器
  devServer: {
    port: 3000,
    open: true
  }
}