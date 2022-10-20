<template>
<div>
 <div class="elcardone">
           <div class="box1">
               <div class="box11">
                   <div class="top">商品名称</div>
                   <el-input class="xia" v-model="input" placeholder="请输入商品名称"></el-input>
               </div>
                <div class="box12">
                   <div class="top">订单编号</div>
                   <el-input class="xia" v-model="input" placeholder="请输入订单编号"></el-input>
               </div>
           </div>
           <div class="box1">
                <div class="box11">
                   <div class="top">下单日期</div>
                   <el-input class="xia" v-model="input" placeholder="请输入下单日期"></el-input>
               </div>
           </div>
           <div class="box1">
               <div class="box11">
                   <div class="top">发货状态</div>
                   <el-input class="xia" v-model="input" placeholder="请输入发货状态"></el-input>
               </div>
           </div>
           <div class="box4">
               <el-button class="boxbutton">查询</el-button>
           </div>
      </div>
    <el-card class="boxcardtwo">
<el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column align="center"
        prop="date"
        label="订单编号"
        width="200">
      </el-table-column>
      <el-table-column align="center"
        prop="name"
        label="下单时间"
        width="220">
      </el-table-column>
      <el-table-column align="center"
        prop="address"
        label="商品排序"
         width="220">
      </el-table-column>
       <el-table-column align="center"
        prop="a"
        label="单价(元)"
         width="220">
      </el-table-column>
       <el-table-column align="center"
        prop="b"
        label="数量"
         width="180">
      </el-table-column>
       <el-table-column align="center"
        prop="c"
        label="总金额(元)"
         width="180">
      </el-table-column>
       <el-table-column align="center"
        prop="d"
        label="服务状态"
        style="color:rgb(67,207,124)"
         width="200">
      </el-table-column>
      <el-table-column align="center"
      fixed="right"
      label="操作"
      width="220">
      <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
    </el-table-column>
    </el-table>
    </el-card>
</div>
   
</template>

   
<script>
export default {
    methods: {
      handleClick(row) {
        console.log(row);
      }
    },
      data() {
        return {
          tableData: [{
            date: '1',
            name: '2016-05-02',
            address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }, {
            date: '2',
            name: '2016-05-02',
            address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }, {
            date: '3',
            name: '2016-05-02',
            address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }, {
            date: '4',
            name: '2016-05-02',
             address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }, {
            date: '5',
            name: '2016-05-02',
             address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }, {
            date: '6',
            name: '2016-05-02',
             address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }, {
            date: '7',
            name: '2016-05-02',
             address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          },{
            date: '8',
            name: '2016-05-02',
             address: '商品名称商品名称...',
            a:'1',
            b:'1',
            c:'1',
            d:'通过',
            e:'1'
          }]
        }
      }
    }
</script>
   
<style lang="less" scoped>
*{
    margin: 0px;
    padding: 0px;
}
.elcardone{
    height: 172px;
    width: 100%;
    background-color: #FFFFFF;
    display: flex;
    .box1{
        flex: 1;
        display: flex;
        flex-direction: column;
        flex-direction: center;
        align-items: center;
        .box11{
         flex: 1;
         display: flex;
         flex-direction: row;
         margin: 0px ;
         padding: 0px;
         .top{
            width: 100px;
          
            font-size:18px ;
            text-align: center;
            margin-top:23px ;
         }
         .xia{
            width: 300px;
          
              margin-top:20px ;
         }
        }
        .box12{
            flex: 1;
         display: flex;
         flex-direction: row;
         margin: 0px ;
         padding: 0px;
         .top{
            width: 100px;
         
            font-size:18px ;
            text-align: center;
            margin-top:23px ;
         }
         .xia{
            width: 300px;
         
              margin-top:20px ;
         }
        }
    }
    .box4{
        flex: 1;
        .boxbutton{
            background-color: #BD8A69;
            height: 42px;
           color: #FFFFFF;
           margin: 20px 0px 0px 300px;
        }
    }
}
.boxcardtwo{
    height: 600px;
    background-color: #FFFFFF;
    width: 100%;
    margin-top: 20px;
    el-table{
 el-table-column{
        height: 30px;
    }
    }
   
}
</style>
