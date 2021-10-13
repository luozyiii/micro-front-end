# micro-front-end
微前端的架构实践和思考[Github](https://github.com/luozyiii/micro-front-end)

## 微前端到底是什么？
- 一种架构风格，将可独立交付的前端应用程序组成一个更大的整体。
- 多个团队开发的多个前端应用组合形成复杂平台类产品(感受就是一个SARS服务)

## 什么项目适合微前端架构？
- 拆分巨型应用，使应用变得更加可维护
- 兼容历史任务，实现增量开发

## 微前端架构的特点
- 独立部署
- 增量迁移
- 团队自治
- 松耦合代码

## 微前端架构方案
- 自由组织模式
- 基座模式
- 去中心模式 （新项目推荐选择这个，旧项目迁移困难的推荐前两个）

### 自由组织模式（自主研发）
- Iframe + postMessage
- Systemjs模块化解决方案
- 华为devCloud
不提供统一的基座，通过机制和规范，让用户只感知到一个产品；
多个SPA组成的MPA, 每个菜单就是一个SPA，Header 菜单就是一个工程化的APP，提供公共能力，维护每个SPA的生命周期。

### 基座模式
- [Single-spa](https://zh-hans.single-spa.js.org/docs/getting-started-overview) 微前端框架

- 阿里的 [qiankun](https://qiankun.umijs.org/zh/guide)  
qiankun 是一个基于 single-spa 的微前端实现库

### 去中心模式 (没有固定的基座，所有的微应用都可以相互引用；也可以选择某个应用作为中心)

- webpack 5 ModuleFederationPlugin 模块联邦（微前端）

## webpack 5 模块联邦示例
- [micro-react](https://github.com/luozyiii/micro-front-end/tree/main/micro-react)
- [micro-vue3](https://github.com/luozyiii/micro-front-end/tree/main/micro-vue3)

## 思考与展望
- 如何在 vue-cli 或者在 create-react-app 等cli 中使用webpack 5 的模块联邦?
- 旧项目如何通过qiankun(或者single-spa) 重构成为一个微前端的项目？ 