# micro-front-end
微前端的架构实践和思考

## webpack 5 ModuleFederationPlugin 模块联邦（微前端）

### micro-react 示例
```bash
cnpm install webpack webpack-cli html-webpack-plugin css-loader style-loader babel-loader @babel/core @babel/preset-env @babel/preset-react webpack-dev-server -D

cnpm install react react-dom -S
```

### micro-vue3 示例
```bash
yarn add vue@next
yarn add webpack webpack-cli webpack-dev-server -D
yarn add css-loader style-loader -D
yarn add vue-loader@next @vue/compiler-sfc -D
yarn add html-webpack-plugin mini-css-extract-plugin -D
```