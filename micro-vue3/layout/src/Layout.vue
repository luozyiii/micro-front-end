<template>
  <div class="layout-app">
    <h1 class="title">Webpack 5 联邦模块 + Vue3的微前端实践</h1>
    <div class="micro-app">
      <h3>来自其它微应用</h3>
      <content-element />
      <button-element />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.layout-app .title{
  text-align: center;
}
.micro-app {
  border: 1px solid #ccc;
  padding: 12px;
  margin-top: 12px;
}
</style>