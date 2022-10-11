<template>
  <el-card class="box-card">
    <div class="header">
      <h1>商品详情页</h1>
 <el-dialog title="新增商品" :visible.sync="dialogFormVisible" width='620px'>
      <el-form :model="form">
        <el-form-item label="商品名称" :label-width="formLabelWidth" class="biginput">
          <el-input v-model="form.name" autocomplete="off" class="sminput"></el-input>
        </el-form-item>
        <!-- <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.dizhi" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="商品分类" :label-width="formLabelWidth" class="biginput">
          <el-input v-model="form.category" autocomplete="off" class="sminput"></el-input>
        </el-form-item>

          <el-form-item label="商品价格" :label-width="formLabelWidth" class="biginput">
          <el-input v-model="form.price" autocomplete="off" class="sminput"></el-input>
        </el-form-item>

        <el-form-item label="商品图片" :label-width="formLabelWidth" class="biginput">
          <el-input v-model="form.imgUrl" autocomplete="off" class="sminput"></el-input>
        </el-form-item>

         <el-form-item label="商品描述" :label-width="formLabelWidth" class="biginput">
          <el-input v-model="form.goodsDesc" autocomplete="off" class="sminput"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addsp">确 定</el-button>
      </div>
    </el-dialog>
       <el-button class="add" type="primary" @click="dialogFormVisible = true"
        >点击新增商品</el-button
      >

    </div>
    <div class="bigbox">
      <div
        v-for="item in shoppinglist"
        :key="item.id"
        class="box"
        @click="tiaozhuan(item)"
      >
        <!-- <img class="img" :src="item.img" alt="" /> -->
        <h2>编号:{{item.id}}</h2>
        <h2>商品名称：{{ item.name }}</h2>
        <h3>商品价格：{{ item.price }} 元</h3>
        <p><span>商品描述</span>：{{item.goodsDesc}}</p>
      </div>
    </div>
  </el-card>
</template>

<script>
import {shoppinglist,addshoping} from '../../api/index.js'
export default {
  data() {
    return {
       dialogTableVisible: false,
      dialogFormVisible:false,
      //新增商品参数
      form:{
          name:"",
          category:"",
          price:"",
          imgUrl:"",
          goodsDesc:""
      },
       spqingqiu:{
        //页码
         currentPage:1,
         //条数
         pageSize:9999,
         name:'',
         category:''
      },
      shoppinglist:{},
    };
  },
   mounted() {
    this.splist()
  },
  methods: {
    //展示商品列表
    splist(){
      shoppinglist({
        currentPage:this.spqingqiu.currentPage,
        pageSize:this.spqingqiu.pageSize,
        name:this.spqingqiu.name,
        category:this.spqingqiu.category
      }).then((res) => {
            console.log(res);
            this.shoppinglist = res.data.data
            console.log(this.shoppinglist);
      })
    },
    //添加商品列表
    addsp(){
        addshoping({
          name:this.form.name,
          category:this.form.category,
          price:this.form.price,
          imgUrl:this.form.imgUrl,
          goodsDesc:this.form.goodsDesc
        }).then((res) => {
           console.log(res);
           this.dialogFormVisible = false
            this.splist()
        })
    },
    tiaozhuan(item) {
      this.$router.push({
        path: "/goods/goodlisttotwo",
        query: {
          id: item.id,
          name: item.name,
          ctime:item.ctime,
          price:item.price,
          sellCount:item.sellCount,
          goodsDesc:item.goodsDesc,
          category:item.category,
          rating:item.rating
        },
      });
    },
  },
};
</script>

<style lang="less" scoped>
.box-card{
    min-height:800px;
    position: relative;
}
.add{
  height: 50px;
  position: absolute;
  right: 180px;
  margin: 15px 0 15px 0;
}
 h1{
    background-image: linear-gradient(to right, rgb(157, 214, 238) , rgb(5, 187, 233));
    width: 100%;
  line-height: 80px;
  text-align: center;
  margin-right: 200px;
 }
.header {
  height: 80px;
  background: #f2f2f2;
  width: 100%;
  text-align: center;
  color: white;
  line-height: 80px;
}
.bigbox {
  height: 100%;
  width: 100%;
  margin: 65px 0px 0px 100px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  .box {
    height: 200px;
    width: 450px;
    border: 2px solid rgb(13, 192, 236);
    border-radius:5% ;
    margin: 15px 5px 0px 5px;
     overflow: hidden;
      text-overflow:ellipsis;
     background-image: linear-gradient(to right, rgb(171, 213, 233) , rgb(75, 200, 231));
    h2{
      text-align: center;
    }
    
    p{
      overflow: hidden;
      text-overflow:ellipsis;
      font-size: 13px;
      text-indent:2em;
      span{
        font-size: 16px;
         font-weight :600;
      }
    }
  }
  img {
    height: 100px;
    width: 100px;
  }
}
.biginput{  
  text-align: center;
  .sminput{
    width: 500px;
  
  }
}
</style>
