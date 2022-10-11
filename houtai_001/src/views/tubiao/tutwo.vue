<template>
<div class="box">
  <div class="zuo">
    <div>
      <div id="header">
    <div class="header-div" style="background-color:#569CFF">
       <span>销量榜</span>
         <p>商品名称:哈尔滨啤酒</p>
         <p>数量：294瓶</p>
    </div>
    <div class="header-div" style="background-color:#0FD6CB">
       <span>增速榜</span>
         <p>商品名称:矿泉水</p>
         <p>增长率：30%</p>
    </div>
    <div class="header-div" style="background-color:#999900">
       <span>流通量</span>
         <p>商品名称:巨峰葡萄</p>
         <p>流通量:98.6%</p>
    </div>
</div>
<div id="main"></div>

    </div>
   
  </div>

  <div class="you">
     <tubiaoyouce></tubiaoyouce>
  </div>

</div> 
</template>

<script>
import * as echarts from "echarts";
// import tubiao from '../../components/tubiaoyouce.vue'
import tubiaoyouce from '../../components/tubiaoyouce.vue';
export default {
  components: { tubiaoyouce },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    let option = {
      title: {
        text: "每月商品销售趋势图",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["哈尔滨啤酒", "彩色土豆", "玻璃杯", "巨峰葡萄", "矿泉水"],
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["一月", "二月", "三月", "四月", "五月", "六月", "七月","八月"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          name: "哈尔滨啤酒",
          type: "line",
          stack: "Total",
          data: [120, 132, 101, 134, 600, 700, 980,1120],
        },
        {
          name: "彩色土豆",
          type: "line",
          stack: "Total",
          data: [220, 182, 191, 234, 290, 330, 310,250],
        },
        {
          name: "玻璃杯",
          type: "line",
          stack: "Total",
          data: [150, 232, 201, 154, 190, 330, 410,450],
        },
        {
          name: "巨峰葡萄",
          type: "line",
          stack: "Total",
          data: [56, 35, 150, 100, 500, 600, 750,1250],
        },
        {
          name: "矿泉水",
          type: "line",
          stack: "Total",
          data: [200, 400, 450, 500, 700, 950, 1330,1420],
        },
      ],
    };
    myChart.setOption(option);
  },
};
</script>

<style lang="less" scoped>

.box{
   display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.zuo{
  flex: 7;
    height: 800px;
    width: 1200px;
    margin: 40 auto;
}
.you{
   flex: 3;
 flex-direction: column;
 height: 800px;
//  width: 00px;
    // background-color: rebeccapurple;
}

#main {
  height: 500px;
  width: 1200px;
  margin: 40 auto;
 
}
#header{
  height: 200px;
  width: 1200px;
  display: flex;
  justify-content: space-between;
   .header-div{
     flex: 1;
     margin: 20px 50px;
   
     background: #569CFF;
     display: flex;
     flex-direction: column;
     justify-content: center;
     align-items: center;
     text-align: center;
     border-radius: 20px;
     span{
       flex: 1;
       margin-top: 12px;
       font-size: 32px;
       color: #FFFFFF;
       font-weight: 700;
     }
     p{
       flex: 1;
       margin-top: 12px;
       font-size: 22px;
       color: #FFFFFF;
       
     }
   }
}
</style>
