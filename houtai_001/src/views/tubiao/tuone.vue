<template>
 <div id="box">
   <!-- 左侧图标 -->
  <div id="main"></div>
  <!-- 占位 -->
  <div id="zhanwei"></div>
  <!-- 右侧内容 -->
   <div id="right"> 
      <tubiaoyouce></tubiaoyouce>
   </div>

 </div>
 
</template>

<script>
// 全局引入
import * as echarts from 'echarts';
import tubiaoyouce from '../../components/tubiaoyouce.vue';

export default {
    components: { tubiaoyouce },
  created() {
    // 注册必须的组件
    // echarts.use([
    //   TitleComponent,
    //   TooltipComponent,
    //   GridComponent,
    //   DatasetComponent,
    //   TransformComponent,
    //   BarChart,
    //   LabelLayout,
    //   UniversalTransition,
    //   CanvasRenderer,
    // ]);
  },
  mounted() {

    var myChart = echarts.init(document.getElementById("main"));
    let option = {
     title: {
    text: '本月商品销量一览表'
  },
  tooltip: {},
  xAxis: {
    data: ['哈尔滨啤酒', '彩色土豆', '玻璃杯', '巨峰葡萄', '垃圾袋', '矿泉水']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [294, 290, 285, 287, 246, 229]
    }
  ]
    }
    myChart.setOption(option);
  },

};
</script>

<style lang="less" scoped>

@import url('../../assets/font_tubiao/iconfont.css');
.tz{
  background-color: #FA4A1E;
}
.hd{
  background-color: #36C7BD;
}
.yy{
  background-color: #2766FF;
}
.icon{
 font-size:32px ;
}
#box{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

#main{
 
    flex: 7;
    height: 800px;
    width: 1200px;
    margin: 40 auto;
}
#right{
    flex: 3;
 flex-direction: column;

    height: 800px;
}

</style>
