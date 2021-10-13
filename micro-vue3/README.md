# micro-vue3

- layout微应用和home微应用可以相互引用
- 本示例 layout微应用引入home微应用，home微应用也可以单独部署访问 

### 使用
```bash
# 切换到home 根目录，安装依赖，并启动服务
yarn   
yarn start
# 访问地址：http://localhost:9004

# 切换到layout 根目录，安装依赖，并启动服务
yarn
yarn start
# 访问地址：http://localhost:9003
```

### 技术细节
```javascript
// home/webpack.config.js
// 模块联邦
const { ModuleFederationPlugin } = require('webpack').container

new ModuleFederationPlugin({
  name: 'home',
  filename: 'micro-home.js',
  remotes: {},
  exposes: {
    "./Content": "./src/components/Content",
    "./Button": "./src/components/Button"
  }
}),

// layout/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container

new ModuleFederationPlugin({
  name: 'layout',
  filename: 'micro-layout.js',
  remotes: {
    home: 'home@http://localhost:9004/micro-home.js'
  },
  exposes: {}
}),

// root/src/App.js
import React from 'react';
import User from './User'

const User2 = React.lazy(()=>import('microUser/user'))
const Goods = React.lazy(()=>import('microUser/goods'))

const App = () =>{
  return (
    <div>
      <h1>Webpack 5 联邦模块 + React17 的微前端实践</h1>
      <User/>
      <div style={{border: '1px solid #ccc', marginTop: '24px', padding: '12px'}}>
        <h3>来自其它微应用</h3>
        <React.Suspense fallback="loading app">
          <User2 />
          <Goods />
        </React.Suspense>
      </div>
    </div>
  )
}
export default App
```
