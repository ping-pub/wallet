<!--
 * @Author: your name
 * @Date: 2020-02-10 11:46:40
 * @LastEditTime: 2020-02-19 17:13:42
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /ping-wallet/ping-wallet/src/App.vue
 -->
<template>
<keep-alive>
    <router-view/>
</keep-alive>
</template>

<style>
html, body {
  background: #F8F8F8;
  font-family: -apple-system, Helvetica, sans-serif;
  max-width: 800px;
  margin: 0 auto;
}
p {
  margin: 0;
}
.fc {
  color:#333;
}
.flex-1 {
  flex: 1;
}
.m-20 {
  margin: 20px;
}
.m-15 {
  margin: 15px;
}
.mb-10 {
  margin-bottom: 10px;
}
</style>