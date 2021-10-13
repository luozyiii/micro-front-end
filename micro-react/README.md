# micro-react
- root微应用和user微应用可以相互引用
- 本示例 root微应用引入user微应用，user微应用也可以单独部署访问 

### 使用
```bash
# 切换到user 根目录，安装依赖，并启动服务
yarn   
yarn start
# 访问地址：http://localhost:9001

# 切换到root 根目录，安装依赖，并启动服务
yarn
yarn start
# 访问地址：http://localhost:9000
```

### 技术细节
```javascript
// root/webpack.config.js
// 模块联邦
const { ModuleFederationPlugin } = require('webpack').container

new ModuleFederationPlugin({
  name: 'roots',
  remotes: {
    microUser: 'microUser@http://localhost:9001/micro-user.js'
  }
})

// user/webpack.config.js
const { ModuleFederationPlugin } = require('webpack').container

new ModuleFederationPlugin({
  // 对外提供打包后的文件名，导入时会使用
  filename: 'micro-user.js',
  // 微应用的名字，类似single-spa 的组织名
  name: 'microUser',
  // 具体导出
  exposes: {
    // 名字：具体某个组件
    './user':'./src/User.js',
    './goods':'./src/Goods.js'
  }
})

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
