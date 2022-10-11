<template>
  <el-card class="box-card">
    <div class="header">
    
      <h1>商品订货单</h1>
    </div>
    <!-- 表格 -->
    <el-table :data="carlist" style="width: 100%" border='true' fit='true'>


      <!-- <el-table-column prop="img" label="商品图片" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column> -->

      <el-table-column prop="id" label="商品编号" width="120">
          <template slot-scope="scope">{{ scope.row.id }}</template>
      </el-table-column>

      <el-table-column
        prop="name"
        width="300"
        label="商品名称"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
        prop="price"
        width="120"
        label="单价"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
        prop="number"
        width="150"
        label="数量"
        show-overflow-tooltip
      >
          <template slot-scope="scope">
          {{ scope.row.number }}
          </template>
       
         </el-table-column>

  <el-table-column
        
        width="500"
        label="操作"
        show-overflow-tooltip
      >
       <template slot-scope="scope">
          <el-button type="primary" round @click="numadd(scope.row,scope.$index)"
            >添加数量</el-button
          >
         
          <el-button type="primary" round @click="numremove(scope.row,scope.$index)"
            >减少数量</el-button
          >
          <el-button type="primary" round @click="del(scope.row, scope.$index)"
            >删除商品</el-button
          >
        </template>
      </el-table-column>



 <el-table-column
        prop="zongjia"
        width="200"
        label="总价"
       
        show-overflow-tooltip
      >
     
      </el-table-column>

    </el-table>
    <!-- 底部 -->
    <div class="footer">
      <div class="right">
<el-button @click="qingkong" type="warning" plain class="elbutton">清空</el-button>
      <h2 class="num">总价格:{{this.num.toFixed(2)}}元</h2>
      </div>
     
    
   
    </div>
  </el-card>
</template>

<script>
// import {a,b} from '../../store/ceshi'
// import local from '../../fengzhuang/local.js'
export default {
  data() {
    return {
      num:0 ,
      carlist: [],
      
    };
  },
  created() {
    this.init();
  
  },
  mounted() {
      this.get()
      // this.numnum()
  },
//    updated(){
//  this.del()
//    },
  methods: {
    init() {
      //初次渲染
      let list = localStorage.getItem("carlist");
      if (list) {
        this.carlist = JSON.parse(list);
      } else {
        this.carlist = [];
      }
    },
    //删除
    del(row, index) {
      let list = localStorage.getItem("carlist");
      if (list) {
        list = JSON.parse(list);
        list.splice(index, 1);
        localStorage.setItem("carlist", JSON.stringify(list));
        this.init();
   
  
      }
    },
    get(){
    // 计算总价格的方法     
      let zongjialist = JSON.parse(localStorage.getItem("carlist"))
      let aaaa = 0
      zongjialist.forEach(item => {
         console.log(item.zongjia.toFixed(2));
         aaaa = aaaa+parseInt(item.zongjia.toFixed(2))
         
      })
     this.num = aaaa
     
    },
    // 减少数量 计算单项总价
    numremove(row){
      let zongjialist = JSON.parse(localStorage.getItem("carlist"))
      //   zongjialist.forEach(item => {
      //     // item.zongjia = row.number * row.price
            
      // })
      if(row.number<=1){
                   row.number = 1
             }else{
              row.number --
             }
    
      row.zongjia = row.number * row.price.toFixed(2)
    localStorage.setItem('carlist',JSON.stringify(this.carlist))
      this.num = 0
     if(this.carlist && this.carlist.length>0){
          this.carlist.forEach(item => {
            this.num +=  Number(item.zongjia.toFixed(2))
          })
     }
    },
     // 增加数量 计算单项总价
    numadd(row){
     row.number++
     row.zongjia = row.number * row.price.toFixed(2)
     localStorage.setItem('carlist',JSON.stringify(this.carlist))
     this.num = 0
     if(this.carlist && this.carlist.length>0){
          this.carlist.forEach(item => {
            this.num += Number(item.zongjia.toFixed(2))
          })
     }
     
    },
    qingkong(){
      this.$confirm('清空订购单, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '清空成功!'
          });
          //删除carlist的本地存储数据 清空列表
          localStorage.removeItem('carlist')
          this.init()
          //页面强制刷新
          this.$router.go(0)
          this.num = ''
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消清空'
          });          
        });
    }
    
  },
  computed:{
    //  numnum(){
    // // 计算总价格的方法     
    //   let zongjialist = JSON.parse(localStorage.getItem("carlist"))
    //   let aaaa = 0
    //   zongjialist.forEach(item => {
    //      console.log(item.zongjia.toFixed(2));
    //      aaaa = aaaa+parseInt(item.zongjia.toFixed(2))
         
    //   })
    //  this.num = aaaa
    //  return this.num
    //  }
  },
  watch:{

  }
};
</script>

<style lang="less" scoped>
.header{
  height: 80px;
  background: #f2f2f2;
  width: 100%;
  text-align: center;
  color: white;
  line-height: 80px;
    h1{
   background-image: linear-gradient(to right, rgb(157, 214, 238) , rgb(5, 187, 233));
    width: 100%;
  line-height: 80px;
  text-align: center;
  margin-right: 200px;
 }
}
.footer{
 
   height: 80px;
  background: #f2f2f2;
  width: 100%;

.right{
  .elbutton{
margin: 25px 250px 0px 1150px;
  }
  .num{
    margin-left: 250px;
  }
  h2{
    color: rgb(27, 162, 224);
  line-height: 80px;
  text-align: right;
  margin-right: 200px;
  margin-top: -60px;
 }
}
 

}
img {
  height: 50px;
}
</style>
