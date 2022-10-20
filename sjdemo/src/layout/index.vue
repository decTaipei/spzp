<template>
  <el-container class="main">

    <el-aside class="aside" width="200px">
        <Left></Left>
    </el-aside>

    <el-container class="content">
      <el-header class="header" height='90px'>
          <Header></Header>
      </el-header>
      <el-main class="mainBox">
          <router-view></router-view>
      </el-main>
    </el-container>

  </el-container>
</template>

<script>
import Header from './header.vue'
import Left from './left.vue'
export default {
  components: {
   Header,Left
  },
};
</script>

<style lang="less" scoped>
.main {
  height: 100%;
  .aside{
       background-color: #2C2E3A;
       
  }
  .mainBox {
    background: #f2f2f2;
    padding: 16px;
    height: calc(100vh - 92px);
  }
  .header{
      background-color: #2C2E3A;
  }
}
</style>


