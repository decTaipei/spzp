<template>
 <el-card class="box-card">
 <el-form ref="form" :model="form" label-width="80px">

     <el-form-item label="用户头像">
    <el-upload
  class="avatar-uploader"
  action="https://jsonplaceholder.typicode.com/posts/"
  :show-file-list="false"
  :on-success="handleAvatarSuccess"
  :before-upload="beforeAvatarUpload">
  <img v-if="imageUrl" :src="this.imageUrl" class="avatar">
  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
</el-upload>
  </el-form-item>

  <el-form-item label="账号">
    <el-input v-model="form.account" class="el-input-width"></el-input>
  </el-form-item>

  <el-form-item label="密码">
    <el-input v-model="form.password" class="el-input-width"></el-input>
  </el-form-item>

  <!-- <el-form-item label="用户电话">
    <el-input v-model="form.phone" class="el-input-width"></el-input>
  </el-form-item> -->

  <el-form-item label="用户权限">
    <el-select v-model="form.userGroup" placeholder="请选择用户权限">
      <el-option label="普通管理员" value="普通管理员" ></el-option>
      <!-- <el-option label="高级用户" value="gaoji"></el-option> -->
      <el-option label="超级管理员" value="超级管理员" ></el-option>
    </el-select>
  </el-form-item>


  <!-- <el-form-item label="添加类型">
    <el-radio-group v-model="form.resource">
      <el-radio label="用户"></el-radio>
      <el-radio label="管理员"></el-radio>
    </el-radio-group>
  </el-form-item> -->

  <!-- <el-form-item label="其他备注">
    <el-input type="textarea" v-model="form.desc" class="el-input-width2"></el-input>
  </el-form-item> -->

  <el-form-item>
    <el-button type="primary" @click="onSubmit">立即创建</el-button>
    <el-button @click="quxiao">取消</el-button>
  </el-form-item>
</el-form>
</el-card>
</template>

<script>
// import axios from 'axios';
import {yhadd} from '@/api'
     export default {
    data() {
      return {
          imageUrl: '',
          form: {
             account: '',
             password:'',
             userGroup:'',
        }
      }
    },
    
    methods: {
      onSubmit() {
       yhadd({
           account:this.form.account,
           password:this.form.password,
           userGroup:this.form.userGroup
       }).then((res) => {
           console.log(res);
           alert('添加新用户成功')
            this.form.account = ''
           this.form.password = ''
           this.form.userGroup = ''
         })
      },
      quxiao(){
           this.form.account = ''
           this.form.password = ''
           this.form.userGroup = ''
      },
       handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      },

    }
  }
</script>

<style lang="less" scoped>
.box-card{
  height: 100%;
}
.el-input-width{
    width: 320px;
}
.el-input-width2{
    width: 400px;
    
}

 .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    border: 1px solid gray;
  }
  .avatar {
    width:80px;
    height: 80px;
    display: block;
  }
</style>