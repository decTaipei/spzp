<template>
  <div class="bigbox">
    <div class="left">
      <div class="left-shang">
        <div class="left-shang-one">
          <div class="zuo">
            <img class="zuoa" src="../assets/immg/touxiang.jpg" alt="" />
          </div>
          <div class="you">
            <div class="pa">武汉市映之数字科技有限公司</div>
            <div class="pb">张宇 | dectaipeiz@163.com</div>
          </div>
        </div>
        <div class="left-shang-two">
          <div class="twoaa">
            <img class="twoa" src="../assets/immg/touxiang.jpg" alt="" />
            <span class="span1">发布询价</span>
          </div>
        </div>
        <div class="left-shang-three">
          <div class="twoaa">
            <img class="twoa" src="../assets/immg/touxiang.jpg" alt="" />
            <span class="span1">发布询价</span>
          </div>
        </div>
      </div>
      <div class="left-zhong">
        <div class="zuoa">
          <div class="zuoashang" style="font-size:20px;">询价</div>
          <div class="zuoaxia">
            <div class="a">
              <p style="color: rgb(128, 128, 128)">新增报价</p>
              <p style="font-size: 18px">11</p>
            </div>
            <div class="b">
              <p style="color: rgb(128, 128, 128)">待查阅报价</p>
              <p style="font-size: 18px">12</p>
            </div>
            <div class="c">
              <p style="color: rgb(128, 128, 128)">待申请处理</p>
              <p style="font-size: 18px">24</p>
            </div>
          </div>
        </div>
        <div class="youa">
          <div class="zuoashang" style="font-size:20px;">日耗拼单</div>
          <div class="zuoaxia">
            <div class="a">
              <p style="color: rgb(128, 128, 128)">日增报价</p>
              <p style="font-size: 18px">5</p>
            </div>
            <div class="b">
              <p style="color: rgb(128, 128, 128)">待发货</p>
              <p style="font-size: 18px">24</p>
            </div>
            <div class="c">
              <p style="color: rgb(128, 128, 128)">待发货</p>
              <p style="font-size: 18px">12</p>
            </div>
          </div>
        </div>
      </div>
      <div class="left-xia">
        <div class="shang">
          <p>我的订单</p>
        </div>
        <div class="zhong">
          <p>
            <span>订单号:<i>11231321321</i></span>
            <span>下单时间:<i>2022-10-16 20:25:51</i></span>
          </p>
        </div>
        <div class="xia">
          <div class="box1">
            <div class="box11">
              <div class="box111">
                <img class="box1111" src="../assets/immg/touxiang.jpg" alt="" />
              </div>
              <div class="box112">
                <p>标题标题标题标题标题标题</p>
                <p>规格:125ml 红色</p>
                <p>价格:500</p>
                <p>件数:1</p>
              </div>
            </div>
             <div class="box12">
              <div class="box111">
                <img class="box1111" src="../assets/immg/touxiang.jpg" alt="" />
              </div>
              <div class="box112">
                <p>标题标题标题标题标题标题</p>
                <p>规格:125ml 红色</p>
                <p>价格:500</p>
                <p>件数:1</p>
              </div>
            </div>
          </div>
          <div class="box2">
              <p class="p1">￥:2345</p>
              <p class="p2">支付方式:微信支付</p>
          </div>
          <div class="box3">
               <p class="p1">售后中</p>
              <p class="p2">订单详情</p>
          </div>
          <div class="box4">
                <p class="p1">去支付</p>
              <p class="p2">关闭交易</p>
          </div>
        </div>
      </div>
    </div>
    <div class="right">
        <div class="right1">
            <div class="r1">
                <p>会员推荐</p>
            </div>
            <div class="r2">
               <div class="r22">
                   <img class="r222" src="../assets/immg/touxiang.jpg" alt="">
               </div>
            </div>
        </div>
        <div class="right2">
            <h1 style="font-size:20px;">常见问题</h1>
            <p>发布产品事如何填写优质的...</p>
            <p>支付宝担保交易退款流程查...</p>
            <p>为什么看不到解绑手机按钮...</p>
            <p>发布产品事如何填写优质的...</p>
            <p>支付宝担保交易退款流程查...</p>
        </div>
        <div class="right3">
            <h1 style="font-size:20px;">常见问题</h1>
            <p>发布产品事如何填写优质的...</p>
            <p>支付宝担保交易退款流程查...</p>
            <p>为什么看不到解绑手机按钮...</p>
            <p>发布产品事如何填写优质的...</p>
            <p>支付宝担保交易退款流程查...</p>
        </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bigbox {
  width: 100%;
  height: 900px;
  display: flex;
  .left {
    flex: 7;
    height: 900px;

    display: flex;
    flex-direction: column;
    width: 100%;
    .left-shang {
      flex: 3;
background-color: white;
      display: flex;
      width: 100%;
      margin: 15px;
      
      .left-shang-one {
        flex: 6;
        display: flex;
        margin-left: 15px;
        margin-right: 50px;
        .zuo {
          flex: 2;
          width: 100%;
          position: relative;
          .zuoa {
            height: 120px;
            width: 120px;
            border-radius: 50%;
            position: absolute;
            top: 40px;
            left: 80px;
          }
        }
        .you {
          flex: 8;
          display: flex;
          flex-direction: column;
          margin-left: 50px;
          justify-content: center;
          .pa {
            flex: 1;
            width: 250px;
            margin-left: 60px;
            margin-top: 60px;
            font-size: 18px;
          }
          .pb {
            flex: 1;
            width: 250px;

            margin-left: 60px;
            margin-bottom: 60px;
            font-size: 16px;
            color: rgb(128, 128, 128);
          }
        }
      }
      .left-shang-two {
        flex: 2;
        width: 100%;
        margin-right: 20px;
          
        position: relative;
        .twoaa {
          height: 106px;
          width: 106px;
          border-radius: 50%;
          background-color: salmon;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          .twoa {
            height: 106px;
            width: 106px;
            border-radius: 50%;
          }
          .span1 {
            font-size: 18;
            margin-left: 18px;
            margin-top: 30px;
          }
        }
      }
      .left-shang-three {
        flex: 2;

        position: relative;
        .twoaa {
          height: 106px;
          width: 106px;
          border-radius: 50%;
          background-color: salmon;
          position: absolute;
          top: 35%;
          left: 50%;
          transform: translate(-50%, -50%);
          .twoa {
            height: 106px;
            width: 106px;
            border-radius: 50%;
           
          }
          .span1 {
            font-size: 18;
            margin-left: 18px;
            margin-top: 50px;
          }
        }
      }
    }
    .left-zhong {
      flex: 2;
       margin-bottom: 20px;
      display: flex;
      .zuoa {
        flex: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        .zuoashang {
          flex: 1;
          font-size: 16px;
          margin-left: 30px;
          margin-top: 30px;
        }
        .zuoaxia {
          flex: 2;
          display: flex;
          flex-direction: row;
          .a {
            flex: 1;
            border-right: 1px solid rgb(128, 128, 128);
            p {
              font-weight: 600;
              text-align: center;
              margin-bottom: 15px;
            }
          }
          .b {
            flex: 1;
            border-right: 1px solid rgb(128, 128, 128);
            p {
              font-weight: 600;
              text-align: center;
              margin-bottom: 15px;
            }
          }
          .c {
            flex: 1;

            p {
              font-weight: 600;
              text-align: center;
              margin-bottom: 15px;
            }
          }
        }
      }
      .youa {
        flex: 1;
        width: 100%;

        display: flex;
        flex-direction: column;
        .zuoashang {
          flex: 1;
          font-size: 16px;
          margin-left: 30px;
          margin-top: 30px;
        }
        .zuoaxia {
          flex: 2;
          display: flex;
          flex-direction: row;
          .a {
            flex: 1;
            border-right: 1px solid rgb(128, 128, 128);
            p {
              text-align: center;
              margin-bottom: 15px;
              font-weight: 600;
            }
          }
          .b {
            flex: 1;
            border-right: 1px solid rgb(128, 128, 128);
            p {
              font-weight: 600;
              text-align: center;
              margin-bottom: 15px;
            }
          }
          .c {
            flex: 1;

            p {
              font-weight: 600;
              text-align: center;
              margin-bottom: 15px;
            }
          }
        }
      }
    }
    .left-xia {
      flex: 5;
    
      display: flex;
      flex-direction: column;
      width: 100%;
      .shang {
        flex: 1.5;
        background-color: white;
        p {
          font-size: 18px;
          font-weight: 600;
          margin-left: 50px;
          margin-top: 15px;
        }
      }
      .zhong {
        flex: 1.5;
        background-color: #f6f7f9;
        p {
          margin-top: 20px;
          span {
            margin-left: 35px;
            margin-top: 35px;
            i {
              margin-left: 15px;
            }
          }
        }
      }
      .xia {
        flex: 7;
        display: flex;
     flex-direction: row;
        .box1 {
          flex: 5.5;
          display: flex;
          flex-direction: column;
          .box11 {
            flex: 3;
           
            display: flex;
            flex-direction: row;
            border: 1px solid #E5E5E5;
            .box111{
             flex: 3;
             .box1111{
                    width: 132px;
            height: 132px;
             }
            }
            .box112{
                flex: 7;
                display: flex;
                flex-direction: column;
            
                width: 500px;
                p{
                    flex: 1; 
                    margin-left: 25px;
                    margin-top: 1px;
                    width: 100%;
                }
            }
          }
         .box12 {
            flex: 3;
           
            display: flex;
            flex-direction: row;
            border: 1px solid #E5E5E5;
            .box111{
             flex: 3;
             .box1111{
                    width: 132px;
            height: 132px;
             }
            }
            .box112{
                flex: 7;
                display: flex;
                flex-direction: column;
                p{
                    flex: 1; 
                    margin-left: 25px;
                    margin-top: 1px;
                    width: 100%;
                }
            }
          }
        }
        .box2 {
          flex: 1.5;
          .p1{
              text-align: center;
              margin-top: 60%;
              font-size: 24px;
              height: 40px;
          }
          .p2{
              text-align: center;
              font-size: 14px;
              color: rgb(128, 128, 128);
              margin-top: 15px;
          }
        }
        .box3 {
          flex: 1.5;
          .p1{
              text-align: center;
              margin-top: 60%;
              font-size: 16px;
              height: 40px;
              color: rgb(255, 167, 120);
          }
          .p2{
              text-align: center;
              font-size: 14px;
              color: rgb(128, 128, 128);
              margin-top: 15px;
          }
        }
        .box4 {
          flex: 1.5;
            .p1{
              text-align: center;
              margin-top: 60%;
              font-size: 16px;
              height: 40px;
              width: 94px;
              background-color: #E1A778;
              color: white;
              line-height: 40px;
          }
          .p2{
              text-align: center;
              font-size: 14px;
              color: rgb(128, 128, 128);
              margin-top: 15px;
              margin-left: -80px;
          }
        }
      }
    }
  }
  .right {
    flex: 3;
  
    display: flex;
    flex-direction: column;
    .right1{
        flex: 1;
        background-color: white;
        margin: 15px 0px 15px 0px;
        margin-left: 50px;
        display: flex;
        flex-direction: column;
        .r1{
            flex: 2;
            p{
                font-size: 20px;
                margin: 15px;
            }
        }
        .r2{
            flex: 8;
           
            .r22{
           height: 200px;
           width: 320px;
            margin: 10%;
          
            margin-top: -10px;
            .r222{
                  height: 100%;
                   width: 100%;
            }
            }

        }
    }
    .right2{
        background-color: white;
        flex: 1;
         margin: 15px 0px 15px 0px; 
         margin-left: 50px;
         display: flex;
         flex-direction: column;
         h1{
             flex: 1;
             margin-left: 50px;
             margin-top: 15px;
         }
         p{
             margin-left: 50px;
             margin-top: 15px;
             flex: 1;
             color: rgb(128, 128, 128);
             font-size: 18px;
         }
    }
    .right3{
        background-color: white;
        flex: 1;
         margin: 15px 0px 15px 0px; 
         margin-left: 50px;
         display: flex;
         flex-direction: column;
         h1{
             flex: 1;
             margin-left: 50px;
             margin-top: 15px;
         }
         p{
             margin-left: 50px;
             margin-top: 15px;
             flex: 1;
             color: rgb(128, 128, 128);
             font-size: 18px;
         }
         }
  }
}
</style>
