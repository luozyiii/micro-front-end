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