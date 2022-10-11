<template>
  <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-submenu index="2">
    <template slot="title" @click='sp'>商品</template>
    <el-menu-item index="2-1" @click='sp'>商品列表</el-menu-item>
    <el-menu-item index="2-2" @click='spto'>商品详情</el-menu-item>
    <el-menu-item index="2-3" @click='gouwuche'>订购清单</el-menu-item>
  </el-submenu>

<el-submenu index="3">
    <template slot="title" @click='yh'>用户</template>
    <el-menu-item index="3-1" @click='yh'>用户列表</el-menu-item>
    <el-menu-item index="3-2" @click='yhadd'>用户添加</el-menu-item>
  </el-submenu>

<el-submenu index="6">
    <template slot="title">订单管理</template>
    <el-menu-item index="6-1" @click="dinggou">订购清单</el-menu-item>
   
  </el-submenu>


 <el-submenu index="4">
   
    <template slot="title" @click='wz'>位置</template>
    
    <el-menu-item index="4-1" @click='wz'>商铺位置</el-menu-item>
    <el-menu-item index="4-2" @click='fw'>配送范围</el-menu-item>
  </el-submenu>

<el-submenu index="5">
    <template slot="title" @click="bb">可视化数据</template>
    <el-menu-item index="5-1" @click="bb">数据报表</el-menu-item>
    <el-menu-item index="5-2" @click="qs">数据趋势图</el-menu-item>
  </el-submenu>


    <el-button type="text" @click="open">退出登录</el-button>



</el-menu>
</template>

<script>
 export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      sp(){
         this.$router.push('/goods/goodlist')
      },
      spto(){
         this.$router.push('/goods/goodlistto')
      },
      gouwuche(){
          this.$router.push('/dd')
      },
       yh(){
          this.$router.push('/order/list')
      },
       yhadd(){
          this.$router.push('/yh/yhadd')
      },
      wz(){
          this.$router.push('/giss/map')
      },
      fw(){
          this.$router.push('/giss/mapfanwei')
      },
       bb(){
          this.$router.push('/tubiao/tuone')
      },
      dinggou(){
          this.$router.push('/dd')
          
      },
      qs(){
          this.$router.push('/tubiao/tutwo')
      },
     open() {
        this.$confirm('是否要退出登录?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
        
        }).then(() => {
          this.$router.push('/login')
           localStorage.removeItem('token2')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消'
          });          
        });
      },




      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style lang="less" scoped>
.el-menu-demo{
  
  display: flex;
  justify-content: flex-end;
}
</style>
