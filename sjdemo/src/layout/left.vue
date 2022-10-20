<template>
  <div class="box">
    <div class="top">
      <span>LOGO</span>
    </div>
    <div class="zhuti">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#2C2E3A"
        text-color="#fff"
        active-text-color="#ffffff"
      >
    
 <el-menu-item class="el1" index="1" @click="abc">
            <i class="el-icon-location"></i>
          <span slot="title" >首页</span>
        </el-menu-item>
        <el-menu-item class="el1" index="2" @click="zhaobiao">
          <i class="el-icon-menu"></i>
          <span slot="title" >招标管理</span>
        </el-menu-item>

        <el-menu-item class="el1" index="3" @click="yuejie">
          <i class="el-icon-document"></i>
          <span slot="title">月结申请</span>
        </el-menu-item>

        <el-menu-item class="el1" index="4" @click="zhanghu">
          <i class="el-icon-setting"></i>
          <span slot="title">账户安全</span>
        </el-menu-item>
         <!-- <el-menu-item class="el1" index="4" @click="ceshi">
          <i class="el-icon-setting"></i>
          <span slot="title">ceshi</span>
        </el-menu-item> -->
        <el-menu-item class="el1" index="5" @click="shouhou">
          <i class="el-icon-setting"></i>
          <span slot="title">售后管理</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    abc(){
          this.$router.push('aaa')
    },
    zhaobiao(){
      this.$router.push('/zhaobiao')
    },
    zhanghu(){
      this.$router.push('/zhanghuanquan')
    },
    shouhou(){
      this.$router.push('/shouhou')
    },
    yuejie(){
      this.$router.push('/yuejie')
    },
    //  ceshi(){
    //   this.$router.push('/ceshi')
    // },
  },
};
</script>

<style lang="less" scoped>
.box {
  height: 100%;
  position: relative;
  .top {
    position: absolute;
    top: 0px;
    background-color: #e1a778;
    height: 90px;
    width: 100%;
    position: relative;
    span {
      position: absolute;
      left: 50px;
      line-height: 90px;
      font-size: 30px;
      color: #ffffff;
      text-align: center;
      margin: 0 auto;
    }
  }
  .zhuti {
    position: absolute;
    top: 90px;
    z-index: 100px;
    width: 200px;
    /deep/.el-menu {
      border-right: 0;
      width: 100%;
      z-index: 10000;
      .el1 {
        height: 88px;
        background-color: #1D2027;
        text-align: center;
        line-height: 80px;
      }
    }
  }
}
</style>
