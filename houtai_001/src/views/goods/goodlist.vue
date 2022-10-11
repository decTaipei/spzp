<template>
  <el-card class="box-card">
    <div class="header">
      <h1>商品列表</h1>
    </div>
    <!-- 表格 -->
    <el-table
      ref="multipleTable"
      :data="shoppinglist"
      tooltip-effect="dark"
      style="width: 100%"
    >
      <el-table-column type="selection" width="55"> </el-table-column>

 <el-table-column
        prop="id"
        width="200"
        label="商品编号"
        show-overflow-tooltip
      >
      </el-table-column>

      <!-- <el-table-column label="生产日期" width="120">
        <template slot-scope="scope">{{ scope.row.ctime }}</template>
      </el-table-column> -->

      <!-- <el-table-column prop="img" label="商品图片" width="300">
        <template slot-scope="scope">
          <img :src="scope.row.img" alt="" />
        </template>
      </el-table-column> -->

      <el-table-column prop="name" label="商品名称" width="280">
      </el-table-column>

      <el-table-column
        prop="ctime"
        width="280"
        label="入库时间"
        show-overflow-tooltip
      >
      </el-table-column>

      <el-table-column
        prop="price"
        width="120"
        label="价格"
        show-overflow-tooltip
      >
      
      </el-table-column>

     <el-table-column
        prop="imgUrl"
        width="190"
        label="图片"
        show-overflow-tooltip
      >
      <!-- <img :src="shoppinglist.imgUrl" alt=""> -->
      </el-table-column>

      <el-table-column
        prop="sellCount"
        width="120"
        label="销量"
        show-overflow-tooltip
      >
      </el-table-column>
    

      <el-table-column label="添加商品" width="400">
        <template slot-scope="scope">
          <el-button type="primary" round @click="addcar(scope.row)"
            >添加到订货单</el-button
          >
          <el-button type="danger" round @click="del(scope.row)"
            >删除商品</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <div style="margin-top: 20px">
      <el-button @click="toggleSelection()">取消选择</el-button>
    </div>

     <div class="block">
      <el-pagination
        layout="prev, pager, next"
        :page-size="searchForm.pageSize"
        :current-page="searchForm.pageNumber"
        :total="total"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </el-card>
 
</template>

<script>
import {shoppinglist,delshoping} from '../../api/index.js'
export default {
  data() {
    return {
      spqingqiu:{
        //页码
         currentPage:1,
         //条数
         pageSize:8,
         name:'',
         category:''
      },
      shoppinglist:{},
      total:'',
      // tableData: [
      //   {
      //     date: "2016-05-03",
      //     name: "苹果",
      //     address: "湖北",
      //     price: "100",
      //     img: require("../../image/aaa.jpg"),
      //     number:1,
      //     zongjia:'100'
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "橘子",
      //     address: "浙江",
      //     price: "12",
      //     img: require("../../image/aaa.jpg"),
      //     number:1,
      //      zongjia:'12'
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "西瓜",
      //     address: "海南",
      //     price: "55",
      //     img: require("../../image/aaa.jpg"),
      //      number:1,
      //      zongjia:'55'
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "橙子",
      //     address: "海南",
      //     price: "60",
      //     img: require("../../image/aaa.jpg"),
      //      number:1,
      //      zongjia:'60'
      //   },
      //   {
      //     date: "2016-05-08",
      //     name: "荔枝",
      //     address: "湖北",
      //     price: "50",
      //     img: require("../../image/aaa.jpg"),
      //      number:1,
      //      zongjia:'50'
      //   },
      //   {
      //     date: "2016-05-06",
      //     name: "菠萝",
      //     address: "海南",
      //     price: "70",
      //     img: require("../../image/aaa.jpg"),
      //      number:1,
      //      zongjia:'70'
      //   },
      //   {
      //     date: "2016-05-07",
      //     name: "哈密瓜",
      //     address: "新疆",
      //     price: "200",
      //     img: require("../../image/aaa.jpg"),
      //      number:1,
      //      zongjia:'200'
      //   },
      // ],
      multipleSelection: [],
      searchForm: {
        pageNumber: 1,
        pageSize: 8,
      },
      // carlist:{},
      // carlists:[]
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
            this.total = res.data.total
            console.log(this.total);
            this.shoppinglist = res.data.data
            console.log(this.shoppinglist);
      })
    },
    //分页
     changePage(value) {
       shoppinglist({
            currentPage:value,
        pageSize:this.spqingqiu.pageSize,
        name:this.spqingqiu.name,
        category:this.spqingqiu.category
       }).then((res) => {
          this.shoppinglist = res.data.data
          console.log(spqingqiu);
       })
    
    },
    //取消全选按钮
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    //删除商品
    del(row) {
      // console.log(row);
      // this.tableData.splice(index, 1);
      delshoping({
        id:row.id
      }).then((res) => {
        alert("删除成功")
         console.log(row.id);
         this.splist()
      })
    },
    //添加购物车事件
    addcar(row) {
      let carlist = localStorage.getItem("carlist");
      // console.log(carlist, "carlist");
      // row = row.push('number','1')
      if (carlist) {
        carlist = JSON.parse(carlist);
        carlist.push(row)
        // JSON.parse(carlist.push(JSON.parse(row)));
          localStorage.setItem("carlist", JSON.stringify(carlist));
      } else {
   //判断是否有这个值
        let cs =JSON.parse(localStorage.getItem('carlist')) 
        console.log(cs);
      //  cs.forEach((item) => {
      //   //  if(item.id == row.id){
      //   //    item.number = item.number+1
      //   //  }
      //  })
             carlist = [row];
        localStorage.setItem("carlist", JSON.stringify(carlist));
      }
    
       



      // console.log(carlist);

      // this.carlist = row
      // console.log(this.carlist);
      // let carlists = carlists.push(this.carlist)
      // console.log(this.carlists);
      // localStorage.setItem('carlists',JSON.stringify(carlists)))
      // console.log(localStorage.getItem("carlists"));
    },
    // 本地存储读数据
    // get(){
    //   let get=[];
    //   get.push(localStorage.getItem("存储的数据"))
    //    console.log(localStorage.getItem("存储的数据")); 
    //    console.log(get)
    // }
  },
};
</script>

<style lang="less" scoped>
.box-card {
  height: 100%;
  .block {
    // margin-left: 600px;
    margin-left: 640px;
  }
}
/deep/el-table-column {
  height: 100;
}
img {
  height: 50px;
}
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
</style>
