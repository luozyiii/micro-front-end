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
      // 对外提供打包后的文件名，导入时会使用
      filename: 'micro-user.js',
      // 微应用的名字，类似single-spa 的组织名
      name: 'study',
      // 具体导出
      exposes: {
        // 名字：具体某个组件
        './user':'./src/User.js',
        './goods':'./src/Goods.js'
      }
    })
  ],
  // 服务器
  devServer: {
    port: 3001,
    open: true
  }
}