<template>
  <el-card class="box-card">
    <div class="box">
      <div class="one">
        <!-- <p>商品图片：{{ $route.query.img }}</p> -->
      </div>
      <div class="two">
        <p>商品编号:{{id}}</p>
        <p>商品名称:{{ name }}</p>
        <div class="two-s">
          <!-- <span>原产地:{{  }}</span> -->
          <span>入库时间:{{ctime}}</span>
          <span>零售价:{{price}}</span>
          <span>销量:{{sellCount}}</span>
          <!-- <span>销量:{{goodsDesc}}</span> -->
          <span>销量:{{category}}</span>
          <span>评分:{{rating}}</span>
        </div>
        <p class="miaoshu"><span>商品描述</span>:{{ goodsDesc }}</p>
         <el-button @click="open" type="danger" round class="del">删除商品</el-button>
      </div>
      <div class="three"></div>
     
    </div>
     
   
  </el-card>
</template>

<script>
import {delshoping} from "../../api/index.js";
export default {
  data() {
    return {
        
    };
  },

  methods: {     
     open() {
        this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!',
            });
            this.delsp()
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      },

  delsp(){
    // console.log(this.id);
      delshoping({
        id:this.id
      }).then((res) => {
        console.log(res);
       
        this.$router.push('/goods/goodlistto')
      })
  },
  
    back(){
        this.$router.back()
    }
  },
  props:['id','name','ctime','price','sellCount','goodsDesc','category','rating']
};
</script>

<style lang="less" scoped>
.box {
  display: flex;
  flex-direction: row;
  .one {
    flex: 1;
  }
  .two {
    margin-left: 50px;
    flex: 3;
    p {
      margin-top: 20px;
      font-size: 18px;
    }
    .two-s {
    
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      span {
        height: 40px;
        width: 30%;

        margin: 15px 5px 0px 5px;
      }
    }
  }
  .three {
    flex: 3;
  }
  .miaoshu{
    span{
      font-size: 20px;
      font-weight:800 ;
    }
  }
}
.del{
      margin-left:1000px ;
    }
</style>
