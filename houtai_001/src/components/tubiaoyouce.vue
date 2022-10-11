<template>
    <div>
   <div id="right"> 

         <div class="one">
           <div class="onebox">
             <h3 class="oneboxa">待处理</h3>
               <div class="oneboxb">
                  <div class="oneboxb-a">
                    <p>订购单</p>
                    <p>
                      <span>12</span>
                      条
                    </p>
                  </div>
                  <div class="oneboxb-a">
                    <p>好评</p>
                    <p>
                      <span>8</span>
                      条
                    </p>
                  </div>
                  <div class="oneboxb-a">
                    <p>现有商品</p>
                    <p>
                      <span>59</span>
                      种
                    </p>
                  </div>
                  <div class="oneboxb-a">
                    <p>库存</p>
                    <p>
                      <span>60</span>
                      %
                    </p>
                  </div>
               </div>
           </div>
         </div>

         <div class="two">
           <div class="twobox">
              <h3 class="twoboxa">常用功能</h3>
              <div class="twoboxb">
                <div class="twoboxb-a" @click="goodslistto">
                  <p><span class="icon icon-add"></span><i>添加商品</i></p>
                </div>
                <div class="twoboxb-a">
                  <p><span class="icon icon icon-basic_tar_f"></span><i>收藏</i></p>
                </div>
                <div class="twoboxb-a" @click="splb">
                  <p><span class="icon icon-shuju-01"></span><i>商品列表</i></p>
                </div>
                <div class="twoboxb-a">
                  <p><span class="icon icon-tools"></span><i>设置</i></p>
                </div>
                <div class="twoboxb-a" @click="quxiantutwo">
                  <p><span class="icon icon-layers"></span><i>曲线图</i></p>
                </div>
                <div class="twoboxb-a">
                  <p><span class="icon icon-email"></span><i>留言</i></p>
                </div>
                
              </div>
           </div>
           
         </div>

         <div class="three">

           <div class="threebox">
              <h3 class="threeboxa">公告栏</h3>
              <div class="threeboxb">
                  <p class="threeboxb-a"><span class="tz">通知</span>国庆所有员工不放假</p> 
                  <p class="threeboxb-a"><span class="hd">活动</span>今晚蔬菜全部特价</p>
                   <p class="threeboxb-a"><span class="yy">运营</span>1楼水果区维修冰箱</p>
                    <p class="threeboxb-a"><span class="tz">通知</span>所有员工涨薪20%</p>
                     <p class="threeboxb-a"><span class="hd">活动</span>国庆满500-100</p>
                      <p class="threeboxb-a"><span class="tz">通知</span>国庆家具上新</p>
                       <p class="threeboxb-a"><span class="hd">活动</span>国庆期间，超市与您共渡佳节</p>
              </div>
           </div>

         
         
         </div>

       
   </div>
    </div>
</template>

<script>
    export default {
         methods: {
    goodslistto(){
      this.$router.push('/goods/goodlistto')
  },
  splb(){
     this.$router.push('/goods/goodlist')
  },
  quxiantutwo(){
    this.$router.push("/tubiao/tutwo")
  }
  },
    }
</script>

<style lang="less" scoped>
@import url('../assets/font_tubiao/iconfont.css');
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
// #box{
// //   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// }




#right{
//   flex: 3;
  height: 800px;
  
  display: flex;
 flex-direction: column;
 justify-content: space-around;
  .one{
    flex: 25%;
    // margin: 15px 0 15px 0;
  
    position: relative;
    .onebox{
      height: 90%;
      width: 90%;
     
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
      .oneboxa{
         flex: 2;
         font-size:22px ;
      }
      .oneboxb{
        flex: 8;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        .oneboxb-a{
           height: 60px;
           width: 160px;
           background-color: rgba(100, 98, 98,0.2);
           p{
             color: #191E24;
             font-size:18px ;
             font-weight:700 ;
             line-height: 25px;
             padding: 1px;
           }
           span{
             line-height: 25px;
             color: #0052D9;
             padding: 2px;
           }
        }
      }
    }
  }
  .two{
    flex: 30%;
    // margin: 15px 0 15px 0;
   
    display: flex;
    flex-direction: column;
    position: relative;
    .twobox{
      height: 80%;
      width: 80%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      
      .twoboxa{
         flex: 2;
         font-size:22px ;
      }
      .twoboxb{
        flex: 8;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
         .twoboxb-a{
           height: 40px;
           width: 140px;
          background-color: rgba(100, 98, 98,0.2);
          margin: 10px 2px 8px 2px;
          p{
            text-align: center;
            line-height: 40px;
            
             i{
               font-size: 16px;
               line-height: 46px;
             }
          }
         }
      }
    }
  }
  .three{
    flex: 25%;
    // margin: 15px 0 15px 0;
   
    position: relative;
   
    .threebox{
      height: 80%;
      width: 80%;
        position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      display: flex;
      flex-direction: column;
    .threeboxa{
       flex: 2;
         font-size:22px ;
    }
    .threeboxb{
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      p{
        flex: 1;
        margin: 2px;
      }
      span{
        margin-right: 15px;
      }
    }
    }
  }
  
}
</style>