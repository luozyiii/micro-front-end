import React from 'react';
import User from './User'

const User2 = React.lazy(()=>import('microUser/user'))
const Goods = React.lazy(()=>import('microUser/goods'))

const App = () =>{
  return (
    <div>
      <h3>webpack 5 模块联邦（微前端）</h3>
      <User/>
      <div style={{border: '1px solid #ccc', marginTop: '24px', padding: '12px'}}>
        <React.Suspense fallback="loading app">
          <User2 />
          <Goods />
        </React.Suspense>
      </div>
    </div>
  )
}
export default App