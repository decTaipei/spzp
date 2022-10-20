<template>
    <div>
<el-card class="elcard">
  <div class="top">
      <div class="top1">协议编号:123456789</div>
      <div class="top2">
          <div class="top22">
              <p>
                <span>有效期:2023-05-04</span>
                <span>账户状态:<i>冻结中</i></span>
              </p>
            
          </div>
      </div>
  </div>
  <div class="xia">
      <div class="xia1">
          <h1>4199.50</h1>
          <p>可用额度(元)</p>
      </div>
      <div class="xia2">
           <h1>6000</h1>
          <p>总额度(元)</p>
      </div>
      <div class="xia2">
             <h1>1800</h1>
          <p>已用额度(元)</p>
      </div>
      <div class="xia2">
             <h1>2800.50</h1>
          <p>逾期额度(元)</p>
      </div>
  </div>
</el-card>
<el-card class="elcard2">
   <div class="left">
     <span>交易明细</span>
     <span style="color:black">申请记录</span>
   </div>
   <div class="right">
        <div class="block">
    <span class="demonstration"></span>
    <el-date-picker
      v-model="value2"
      type="datetimerange"
      :picker-options="pickerOptions"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      align="right">
    </el-date-picker>
  </div>
   </div>
</el-card>
<el-card class="elcard3">
     <el-table
      :data="tableData"
      :cell-style="rowStyle"
      style="width: 100%">
      <el-table-column
       align="center"
        prop="date"
        label="订单编号"
        width="300"
          >
      </el-table-column>
     <el-table-column
      align="center"
        prop="address"
        label="商品排序"
         width="300">
      </el-table-column>
       <el-table-column
        align="center"
        prop="c"
        label="总金额(元)"
         width="300">
      </el-table-column>
       <el-table-column
        align="center"
        prop="name"
        label="下单时间"
        width="300">
      </el-table-column>
       <el-table-column
        align="center"
      fixed="right"
      label="操作"
      width="300">
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
    data() {
      return {
        pickerOptions: {
          shortcuts: [{
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近一个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          }, {
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          }]
        },
        value1: [new Date(2000, 10, 10, 10, 10), new Date(2000, 10, 11, 10, 10)],
        value2: '',
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
          }]
      };
    },
    methods: {
        // 表格内容居中的方法
        rowStyle() {
      return "text-align:center";
    },
    },
  };
</script>

<style lang="less" scoped>
.elcard{
    height: 302px;
    width: 100%;
    background-color: #2C2E3A;
    display: flex;
    flex-direction: column;
    .top{
        height: 45px;
        flex: 1;
     
        
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        .top1{
           flex: 1;
           height: 30px;
           width: 270px;
           color: rgb(128, 128, 128);
        }
        .top2{
            flex: 1;
            position: relative;
           .top22{
                width: 360px;
                height: 42px;
               background-color: #3F434D;
                border-radius:12px ;
                position: absolute;
                right: 0px;
                p{
                    span{
                        color: white;
                        margin-left: 20px;
                        text-align: center;
                        line-height: 40px;
                        i{
                            margin-left: 15px;
                            color: #FF5733;
                        }
                    }
                }
           }
        }
    }
    .xia{
          flex: 3;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        .xia1{
            flex: 1;
            border-right: 1px solid #5A5D6E;
            height: 150px;
            h1{
                font-size: 48px;
                color: rgb(225, 167, 120);
                text-align: center;
                margin: 0 auto;
                margin-top: 50px;
            }
            p{
                 font-size: 18px;
                color: rgb(128, 128, 128);
                text-align: center;
                margin: 0 auto;
            }
        }
        .xia2:nth-child(1){
              border-right: 1px solid #5A5D6E;
        }
        .xia2:nth-child(2){
              border-right: 1px solid #5A5D6E;
        }
        .xia2:nth-child(3){
              border-right: 1px solid #5A5D6E;
        }
        .xia2{
            flex:1;
            height: 150px;
          
            h1{
                 font-size: 36px;
                  color: white;
                  text-align: center;
                margin: 0 auto;
                margin-top: 60px;
            }
            p{
                    font-size: 18px;
                color: rgb(128, 128, 128);
                text-align: center;
                margin: 0 auto;
            }
        }
    }
}
.elcard2{
    height: 72px;
    width: 100%;
    background-color: white;
    margin-top: 25px;
    position: relative;
    .left{
        height: 50px;
        line-height: 50px;
        span{
        line-height: 50px;
        font-size:20px ;
        color: rgb(225, 167, 120);
        margin-left: 30px;
        margin-top: -20px;
        }
    }
    .right{
       position: absolute;
       right: 40px;
       top: 15px;
      
    }
}
.elcard3{
    height: 380px;
    width: 100%;
    background-color: white;
    margin-top: 20px;
}
</style>