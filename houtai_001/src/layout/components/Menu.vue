<template>
  <div class="menu">
    <div class="title">后台管理系统</div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
    >
    <!-- 商品列表 -->
      <el-submenu index="1">

        <template slot="title">
          <i class="icon icon-shangpin" ></i>
          <span>商品</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="1-1" @click='goods'>商品列表</el-menu-item>
          <el-menu-item index="1-2" @click='goodsto'>商品详情</el-menu-item>
           <!-- <el-menu-item index="1-3" @click='car'>订购清单</el-menu-item> -->
        </el-menu-item-group>

      </el-submenu>

         <!-- 用户列表 -->
       <el-submenu index="2">
        
        <template slot="title">
          <i class="icon icon-yonghu"></i>
          <span>用户</span>
        </template>

        <el-menu-item-group>
           <el-menu-item index="2-1" @click='biaoge'>用户列表</el-menu-item>
         <el-menu-item index="2-2" @click='yhadd'>用户添加</el-menu-item>
        </el-menu-item-group>

      </el-submenu>
    <!-- 地图列表 -->
  <el-submenu index="3">

        <template slot="title">
          <i class="icon icon-weizhixiangqing"></i>
          <span>位置地图</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="3-1" @click='shangpu'>商铺位置</el-menu-item>
           <el-menu-item index="3-2" @click='mapfanwei'>配送范围</el-menu-item>
          
        </el-menu-item-group>

      </el-submenu>
   <!-- 图标 -->
    <el-submenu index="4">

        <template slot="title">
          <i class="icon icon-shuju01"></i>
          <span>数据分析</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="4-1" @click='tuone'>数据报表</el-menu-item>
          <el-menu-item index="4-2" @click='tutwo'>数据趋势图</el-menu-item>
         
          
        </el-menu-item-group>

      </el-submenu>
        <el-submenu index="5">

        <template slot="title">
          <i class="icon icon-menu"></i>
          <span>订单管理</span>
        </template>

        <el-menu-item-group>
         
          <el-menu-item index="5-1" @click="dinggoudan">订购清单</el-menu-item>
         
          
        </el-menu-item-group>

      </el-submenu>
    </el-menu>
  </div>
</template>

<script>

export default {
  methods:{
    goods(){
      this.$router.push('/goods/goodlist');
    },
    goodsto(){
      this.$router.push('/goods/goodlistto');
    },
    biaoge(){
      this.$router.push('/order/list');
    },
    // car(){
    //    this.$router.push('/gouwuche/gouwuchecar');
    // },
    
    yhadd(){
       this.$router.push('/yh/yhadd');
    },



    shangpu(){
       this.$router.push('/giss/map');
    },
    mapfanwei(){
       this.$router.push('/giss/mapfanwei');
    },
    tuone(){
       this.$router.push('/tubiao/tuone');

    },
    tutwo(){
       this.$router.push('/tubiao/tutwo');

    },
    dinggoudan(){
      this.$router.push('/dd')
    }
  }
};
</script>

<style lang="less" scoped>
@import url('../../assets/font_3691033_s5la8ifmrf/iconfont.css');
.menu {
  .title {
    height: 60px;
    background-color: #ccc;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #333;
    font-size: 16px;
  }
  /deep/.el-menu {
    border-right: 0;
  }
}
i{
  margin-right: 20px;
}
</style>
