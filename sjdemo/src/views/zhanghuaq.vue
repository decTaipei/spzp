<template>
<div>
  <el-card class="box-card">
    <div class="boxone">
        <span class="spanone">安全级别</span>
      <el-progress
        :percentage="50"
        status="success"
        stroke-width="15"
        class="jindu"
        format="aaa"
      
      ></el-progress>
      <span class="spantwo">建议您启动全部安全配置,已保障账户安全及资金安全</span>
      <span class="spanthree"></span>
    </div>
    <div class="boxtwo">
        <span class="iii"><i class="icon icon-jiesuo"></i></span>
        <span class="wenzi">登陆密码</span>
        <div class="zhong">互联网账号存在被盗风险，建议您定期更新密码已保护账户安全</div>
        <span class="zhanwei"></span>
        <span class="you"><i class="icon icon-bianji"></i>修改</span>
    </div>
    <div class="boxthree">
        <span class="iii"><i class="icon icon-jiesuo"></i></span>
        <span class="wenzi">邮箱验证</span>
        <div class="zhong">验证后，可用于快速找回登录密码，以及后期业务往来中重要资料传输</div>
        <span class="zhanwei"></span>
        <span class="you"><p>验证</p></span>
    </div>
    <div class="boxfour">
        <span class="iii"><i class="icon icon-jiesuo"></i></span>
        <span class="wenzi">手机验证</span>
        <div class="zhong">验证您的手机号 173****0093 若以丢失或停用，请及时更换，避免账户被盗</div>
        <span class="zhanwei"></span>
        <span class="you"><i class="icon icon-bianji"></i>修改</span>
    </div>
  </el-card>
  <el-card class="box-card2">
    <h3>常见问题</h3>
    <div class="dibubox">
        <div class="dibubox1">
            <p class="dibubox-p">退换货运费险理赔成功，在哪里查看是否到账？</p>
            <p class="dibubox-p">如何区分京东自营和第三方商家销售的商品？</p>
            <p class="dibubox-p">如何提高账户安全等级？</p>
        </div>
        <div class="dibubox1">
           <p class="dibubox-p">退换货运费险理赔成功，在哪里查看是否到账？</p>
            <p class="dibubox-p">如何区分京东自营和第三方商家销售的商品？</p>
            <p class="dibubox-p">如何提高账户安全等级？</p>
        </div>
        <div class="dibubox1">
            <p class="dibubox-p">退换货运费险理赔成功，在哪里查看是否到账？</p>
            <p class="dibubox-p">如何区分京东自营和第三方商家销售的商品？</p>
            <p class="dibubox-p">如何提高账户安全等级？</p>
        </div>
    </div>
  </el-card>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.icon-jiesuo{
    font-size:50px ;
    color: #E1A778;
}
.icon-bianji{
    font-size:20px ;
    color: #2A82E4;
}
.box-card {
  height: 560px;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;

  .boxone {
    flex: 1;
    display: flex;
    height: 90px;
    margin-top: 20px;
    border-bottom: 1px solid rgb(122, 119, 119);
    .spanone{
        flex: 1;
        margin-left: 20px;
        font-size: 22px;
        color: #000000;
        font-weight:500  ;
    }
    .jindu {
        float: 3;
      width: 500px;
      margin: 10px;
    }
    .spantwo{
        flex: 3;
        margin: 10px;
        font-size:12px ;
        color: rgb(223, 156, 56);
    }
    .spanthree{
        flex: 3;
    }
  }
  .boxtwo {
      height: 130px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(122, 119, 119);
    
    .iii{
        flex: 1;
   
        color: black;
        font-weight:500 ;
        i{
        margin-left: 60px;
        margin-top:20px ;
        }
    }
    .wenzi{
        flex: 1;
        
        font-size: 22px;
    }
    .zhong{
        flex: 4;
       
        margin-left: 50px;
        color: black;
    }
    .zhanwei{
        flex: 3;
      

    }
    .you{
        flex: 1;
        color: #2A82E4;
        i{
            margin-right: 15px;
        }
    }
  }


  .boxthree {
      height: 130px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(122, 119, 119);
    
    .iii{
        flex: 1;
       
        color: black;
        font-weight:500 ;
        i{
        margin-left: 60px;
        margin-top:20px ;
        }
    }
    .wenzi{
        flex: 1;
        
        font-size: 22px;
    }
    .zhong{
        flex: 4;
      
        margin-left: 50px;
        color: black;
    }
    .zhanwei{
        flex: 3;
       

    }
    .you{
        flex: 1;
        margin-right: -35px;
        color: #2A82E4;

        p{
            margin-right: 15px;
        }
    }
  }
   .boxfour {
      height: 130px;
    flex: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid rgb(122, 119, 119);
    
    .iii{
        flex: 1;
     
        color: black;
        font-weight:500 ;
        i{
        margin-left: 60px;
        margin-top:20px ;
        }
    }
    .wenzi{
        flex: 1;
        
        font-size: 22px;
    }
    .zhong{
        flex: 4;
        
        margin-left: 50px;
        color: black;
    }
    .zhanwei{
        flex: 3;
       

    }
    .you{
        flex: 1;
        color: #2A82E4;
     
        i{
            margin-right: 15px;
        }
    }
  }
}
.box-card2{
    height: 200px;
    width: 100%;
    background-color: #FFFFFF;
    margin-top: 20px;
    .dibubox{
        display: flex;
        .dibubox1{
            flex: 1;
            height: 150px;
            margin-top: 15px;
            display: flex;
            flex-direction: column;
          
            justify-content: center;
            p{
                flex: 1;
                margin: 5px;
                padding: 0px; 
                 color: rgba(128, 128, 128);
            }
        }
        
    }
}
</style>
