<template>
  <div class="bigbox">
    <div class="box">
      <div class="leftbox">
        <div class="sonbox"><p class="logo">首页</p></div>
        <div class="sonbox"><p>招标管理</p></div>
        <div class="zhanwei"></div>
      </div>
      <div class="right">
          <div class="right-right">
              <i class="icon icon-xiaoxi" style="color:white"></i>
              <span><img src="../assets/immg/touxiang.jpg" alt=""></span>
              <span class="wenzi">张小宇</span>
              <i class="icon icon-sanjiao1" style="color:white"></i>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // isoneshow:true,
            // istwoshow:true
        }
    },
    methods: {
        // onclick(){
        //      this.isoneshow = !this.isoneshow
        //      if(this.isoneshow == true){
        //          this.$refs.oneshow.style.color='red'
        //      }
        // }
    },
};
</script>

<style lang="less" scoped>
@import url('../assets/incofont/headericon/iconfont.css');
.bigbox {
 *{
     margin: 0px;
     padding: 0px;
 }
 .icon{
     font-size:20px ;
 }
  .box {
    display: flex;
    flex-direction: row;
    height: 90px;
    .leftbox {
      flex: 8;
      display: flex;
      .sonbox {
        flex: 1%;
        height: 100%;
        width: 149px;
        background-color: #1D2027;
        margin: 0px 10px 0px 10px;
        line-height: 90px;
        text-align: center;
        .logo{
          text-align: center;
          margin: 0 auto;
          padding-right: 20px;
          margin-left: 20px;
        }
        p{
           color: white; 
           font-size: 18px;
           font-weight:500 ;
        }
      }
      .zhanwei{
          flex: 8;
      }
    }
  }
  .right {
    flex: 2;
    position: relative;

    .right-right{
        height: 100%;
        width: 300px;
        position: absolute;
        right: 0px;
        .icon-xiaoxi{
          margin-left: 60px;
        }
        i{
            line-height: 90px;
            margin: 0px 15px 0px 15px;
        }
        span{
            line-height: 90px;
            margin: 0px 15px 0px 15px;
            img{ 
                line-height: 90px;
                height: 25px;
                width: 25px;
                border-radius: 50%;
                margin-top: 30px;
            }
        } 
        .wenzi{
            color: #FFFFFF;
            font-weight:700 ;
        }
    }
  }
}
</style>
