<template>
  <div id="login">
    <div class="box">
      <h1>用户登录</h1>
      <p>
        账号:<input type="text" v-model="account" placeholder='请输入4-16位数字,字母,下划线' @click='zhanshi'/>
        <span v-if="isshow == 'D'">请输入用户名和密码</span>
        <span v-if="isshow == 'A'">用户名或密码错误</span>
        <span v-if="isshow == 'B'">用户名或密码格式输入有误</span>
        <span v-if="isshow == 'C'">用户名或密码不能为空</span>
        <span v-else></span>
        </p>
      <p>密码:<input type="password" v-model="password" placeholder='请输入4-16位数字,字母,下划线' @click='zhanshi'/>
        <span v-if="isshow == 'D'">请输入用户名和密码</span>
        <span v-if="isshow == 'A'" ref="showred">用户名或密码错误</span>
        <span v-if="isshow == 'B'" ref="showred">用户名或密码格式输入有误</span>
        <span v-if="isshow == 'C'" ref="showred">用户名或密码不能为空</span>
        <span v-else></span>
      </p>
      <p>
        <button @click="login">登录</button>
        
        <button @click="zhuce">注册</button>
       
      </p>
    </div>
  </div>
</template>

<script>
// import axios from 'axios'
import { loging } from '@/api';
// import { loging } from "../../api/index.js";
export default {
  data() {
    return {
      account: "",
      password: "",
      token: "",
      isshow:'',
      
    };
  },
  
  methods: {
     
     login(){
       var yzaccount= /^[a-zA-Z0-9_-]{4,16}$/;
       var yzpassword = /^[a-zA-Z0-9_-]{4,16}$/;
      
      if(this.account == '' || this.password == ''){
           this.isshow = 'C'
          
      }else if(!yzaccount.test(this.account) || !yzpassword.test(this.password)){
          this.isshow = 'B'
      
      } else{
             loging({account:this.account,password:this.password}).then((res) => {
        //  alert(res.data.msg)
       
         if(res.data.code == 1){
         
            this.isshow = 'A'
             this.account = ''
             this.password = ''
          
         }else if(res.data.code == 0 ){
           this.token = res.data.token
          //  console.log('这是token' + this.token);
           localStorage.setItem('token',this.token)
           this.$router.push('/order/list')
         }else {
           alert('登陆失败')
         }
       })

       }
    
     },

     zhuce(){
       this.$router.push('/zhuce')
     },
     zhanshi(){
      this.isshow == 'D'
     },
  },
 
  //   路由守卫
  // beforeRouteLeave(to, from, next) {
  //   if (!this.name == "" && !this.password == "") {
  //       localStorage.setItem('token2','123123')
  //       console.log('aaa');
  //     //   放行
  //     next();
  //   } else {
  //     alert("请输入账号密码");
  //     next("/");
  //   }
  // },
};
</script>

<style lang="less" scoped>
#login {
  background: url("../../assets/src/bj.jpg") no-repeat;
  background-size: 100% 100%;

  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  .box {
    height: 500px;
    width: 800px;
    border: 1px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    h1 {
      font-size: 32px;
      font-weight: 700;
      text-align: center;
      margin: 40px 0 30px 0;
      color: white;
    }
    p {
      text-align: center;
      font-size: 22px;
      margin: 15px 0 15px 0;
      color: white;
      position: relative;
      input {
        height: 30px;
        width: 260px;
      }
      span{
        position: absolute;
        color: white;
        font-size: 12px;
        margin-left: 15px;
        line-height: 30px;
        width: 150px;
      }
      button {
        text-align: center;
        margin: 20px 15px;
        height: 35px;
        width: 90px;
      }
    }
  }
}
</style>
