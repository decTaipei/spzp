<template>
  <el-container class="main">
    <el-aside class="aside" width="200px"><Menu /></el-aside>
    <el-container class="content">
      <el-header class="header"><Header /></el-header>
      <el-main class="mainBox"><router-view /></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./components/Header.vue";
import Menu from "./components/Menu.vue";
export default {
  components: {
    Header,
    Menu,
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .mainBox {
    background: #f2f2f2;
    padding: 16px;
    height: calc(100vh - 92px);
  }
}
</style>
