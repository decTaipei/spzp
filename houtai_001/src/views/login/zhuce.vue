<template>
  <div id="login">
    <div class="box">
      <h1>用户注册</h1>
      <p>账号:<input type="text" v-model="account" /></p>
      <p>密码:<input type="password" v-model="password" /></p>
      <el-form-item label="用户权限">
        <el-select v-model="userGroup" placeholder="请选择用户权限">
          <el-option label="普通管理员" value="普通管理员"></el-option>

          <el-option label="超级管理员" value="超级管理员"></el-option>
        </el-select>
      </el-form-item>
      <p>
          <button @click="quxiao">取消</button>
        <button @click="zhuce">注册</button>
      </p>
    </div>
  </div>
</template>

<script>
import {yhadd} from '../../api/index.js'
export default {
  data() {
    return {
      account: "",
      password: "",
      userGroup: "",
    };
  },
  methods: {
    zhuce() {
           alert('没有注册的接口，完成不了注册的功能')
      yhadd({
        account: this.account,
        password: this.password,
        userGroup: this.userGroup,
      }).then((res) => {
        console.log(res);
        this.$router.push("/login");
        //确认完重新调用ceshi函数刷新页面
        // this.ceshi()
     
      });
    },
    quxiao(){
        this.account = ''
        this.password = ''
        this.userGroup = ''
        this.$router.push('/login')
    }
  },
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
      input {
        height: 30px;
        width: 260px;
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

