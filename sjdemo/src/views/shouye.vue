<template>
    <div>
<el-card class="box-card">
<el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
  <el-menu-item class="xiaotitle" index="1">全部</el-menu-item>
  <el-menu-item class="xiaotitle" index="2">待提交</el-menu-item>
  <el-menu-item class="xiaotitle" index="3" >报名中</el-menu-item>
  <el-menu-item class="xiaotitle" index="4">已完成</el-menu-item>
   <button class="right"><p class="addzb">发布招标</p></button>
</el-menu>
</el-card>
<el-card class="box-cardtwo">
 <p>按时间排序</p>
 <div class="smbox">
     <el-input v-model="input" placeholder="请输入招标名称"></el-input>
     <button><i class="icon icon-sousuo"></i></button>
 </div>
</el-card>
 <el-card class="box-zhuti">
     <Zbxx class="zbxx">
         <h4 slot="toptitle">
             这是订单一......
            <span slot="zhuangtai">报名中</span>
         </h4>
         <span class="baomingtime" slot="baomingtime">0天21时51分04秒</span>
         <span class="buttonsizi" slot="buttonsizi1">床垫、床架</span>
         <span class="buttonsizi" slot="buttonsizi2">2002-08-04</span>
         <span class="buttonsizi" slot="buttonsizi3">湖北 武汉</span>
         <span class="buttonsizi" slot="buttonsizi4">武汉洪山区</span>
     </Zbxx>
 </el-card>
 <el-card class="box-zhuti">
     <Zbxx class="zbxx">
         <h4 slot="toptitle">
             这是订单二......
            <span slot="zhuangtai" style="background-color:#43CF7C">已完成</span>
         </h4>
         <span class="baomingtime" slot="baomingtime">1天12时16分28秒</span>
         <span class="buttonsizi" slot="buttonsizi1">床单、被套</span>
         <span class="buttonsizi" slot="buttonsizi2">2002-08-05</span>
         <span class="buttonsizi" slot="buttonsizi3">湖北 武汉</span>
         <span class="buttonsizi" slot="buttonsizi4">武汉江汉区</span>
     </Zbxx>
 </el-card>
  <el-card class="box-zhuti">
     <Zbxx class="zbxx">
         <h4 slot="toptitle">
             这是订单三......
            <span slot="zhuangtai" style="background-color:#43CF7C">已完成</span>
         </h4>
         <span class="baomingtime" slot="baomingtime">2天17时19分56秒</span>
         <span class="buttonsizi" slot="buttonsizi1">床头柜、台灯</span>
         <span class="buttonsizi" slot="buttonsizi2">2002-08-05</span>
         <span class="buttonsizi" slot="buttonsizi3">湖北 武汉</span>
         <span class="buttonsizi" slot="buttonsizi4">武汉蔡甸区</span>
     </Zbxx>
 </el-card>
   <el-card class="box-zhuti">
     <Zbxx class="zbxx">
         <h4 slot="toptitle">
             这是订单四......
            <span slot="zhuangtai" style="background-color:#43CF7C">已完成</span>
         </h4>
         <span class="baomingtime" slot="baomingtime">2天19时23分02秒</span>
         <span class="buttonsizi" slot="buttonsizi1">沙发、茶几</span>
         <span class="buttonsizi" slot="buttonsizi2">2002-08-06</span>
         <span class="buttonsizi" slot="buttonsizi3">湖北 武汉</span>
         <span class="buttonsizi" slot="buttonsizi4">武汉汉阳区</span>
     </Zbxx>
 </el-card>
    </div>
</template>

<script>
import Zbxx from '../components/zbxx.vue'
    export default {
        data() {
            return {
                activeIndex: '1',
                activeIndex2: '1',
                input:''
            }
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        },
        components:{
            Zbxx
        }
    }
</script>

<style lang="less" scoped>

@import url('../assets/incofont/iconfont2/iconfont.css');
@import url('../assets/incofont/iconfont3/iconfont.css');
.icon{
    font-size: 22px;
    color: white;
}
  .box-card {
    width: 100%;
    height: 100px;
    /deep/.el-menu{
        line-height: 70px;
        position: relative;
        .right{
        position: absolute;
        right: 0px;
        height: 50px;
        line-height: 70px;
        width: 100px;
        background-color: #E1A778;
        border: 1px solid #E1A778;
        }
        .xiaotitle{
             font-size: 18px;
             color: #000000;
             margin: 0px 15px 0px 15px;
             font-weight:500 ;
        }
        .addzb{
            line-height: 50px;
            color: #FFFFFF;
        }
    }
  }
  .box-cardtwo{
      height:70px ;
      width: 100%;
      margin-top: 20px;
      position: relative;
      p{
       position: absolute;
       left: 80px;
      } 
      .smbox{
          position: absolute;
        left: 1200px;
       width: 300px;
       height: 70px;
       line-height: 70px;
       position: relative;
       /deep/.el-input{
           position: absolute;
           right: -110px;
           top: -20px;
          width: 180px;
          height: 70px;
      }
       button{
           width: 40px;
           height: 40px;
           position: absolute;
           right: -148px;
           top: -5px;
           background-color: #E1A778;
           border: 1px solid #E1A778;
       }
      } 
  }
  .box-zhuti{
      height: 168px;
      width: 100%;
      margin-top:10px ;
      .zbxx{
          margin-top: -5px;
      }
      .baomingtime{
          color: red;
          font-size:15px ;
          margin-left: 10px;
       
      }
      .buttonsizi{
          color: #000000;
      }
  }
</style>