<template>
  <el-card class="box-card">
    <!-- 新增弹出框 -->
    <el-dialog title="用户" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="账号" :label-width="formLabelWidth">
          <el-input v-model="form.account" autocomplete="off"></el-input>
        </el-form-item>
        <!-- <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.dizhi" autocomplete="off"></el-input>
        </el-form-item> -->
        <el-form-item label="密码" :label-width="formLabelWidth">
          <el-input v-model="form.password" autocomplete="off"></el-input>
        </el-form-item>

        <el-form-item label="用户权限">
          <el-select v-model="form.userGroup" placeholder="请选择用户权限">
            <el-option label="普通管理员" value="普通管理员"></el-option>
            <!-- <el-option label="高级用户" value="gaoji"></el-option> -->
            <el-option label="超级管理员" value="超级管理员"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="add">确 定</el-button>
      </div>
    </el-dialog>

    <!-- 表单 -->

    <!-- 头部查询 -->
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="姓名">
        <el-input
          v-model="formInline.name"
          placeholder="姓名"
          @input="changeName"
        ></el-input>
      </el-form-item>
      <!-- <el-form-item label="地址" class="dizhi">
        <el-input
          v-model="formInline.dizhi"
          placeholder="地址"
          class="dizhi"
        ></el-input>
      </el-form-item> -->

      <!-- <el-form-item label="密码" class="dianhua">
        <el-input
          v-model="formInline.password"
          placeholder="密码"
          class="dianhua"
        ></el-input>
      </el-form-item> -->

      <!-- 新增 -->
      <!-- <button @click="zhanshi">发请求试试</button> -->
      <el-button class="add" type="primary" @click="dialogFormVisible = true"
        >新增</el-button
      >

      <el-form-item>
        <el-button type="primary" @click="onSubmit" v-model="chaxun"
          >查询</el-button
        >
      </el-form-item>
    </el-form>

    <!-- 表格 -->
    <el-table :data="yharr" style="width: 100%">
      <el-table-column prop="id" label="编号" width="180"> </el-table-column>
      <el-table-column prop="ctime" label="日期" width="260"> </el-table-column>

      <el-table-column prop="account" label="姓名" width="220">
      </el-table-column>

      <!-- <el-table-column prop="address" label="地址" width="300">
      </el-table-column> -->

      <el-table-column prop="password" label="密码" width="300">
      </el-table-column>

      <el-table-column prop="action" label="操作" width="300">
        <!-- 表格结束 -->
        <!-- template slot-scope="scope"插槽放在整个范围的最外层 -->
        <template slot-scope="scope">
          <!-- 修改模块 -->
          <el-button class="xiugai" type="primary" round @click="edit(scope.row, scope.row.id)"
            >修改</el-button
          >
          <el-dialog
            title="修改用户"
            :visible.sync="dialog_xiugai"
            :close-on-click-modal="false"
          >
            <el-form :model="form">
              <el-form-item label="账号" :label-width="formLabelWidth">
                <el-input v-model="form.account" autocomplete="off"></el-input>
              </el-form-item>
              <!-- <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item> -->
              <!-- <el-form-item label="密码" :label-width="formLabelWidth">
                <el-input v-model="form.password" autocomplete="off"></el-input>
              </el-form-item> -->

              <el-form-item label="用户权限">
                <el-select
                  v-model="form.userGroup"
                  placeholder="请选择用户权限"
                >
                  <el-option label="普通管理员" value="普通管理员"></el-option>
                  <!-- <el-option label="高级用户" value="gaoji"></el-option> -->
                  <el-option label="超级管理员" value="超级管理员"></el-option>
                </el-select>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">

              <el-button @click="dialog_xiugai = false">取 消</el-button>
              <el-button type="primary" @click="handleEdit( scope.row.id)"
                >确 定</el-button
              >
              
            </div>
          </el-dialog>
          <!-- 修改模块结束 -->
          <el-button type="danger" round @click="remove(scope.row.id)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 分页 -->
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
// import axios from "axios";
import { qrxiugai, yhadd, chushihua, shanchu ,info} from "@/api";

export default {
  data() {
    return {
      // tableData: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "张宇",
      //     address: "上海市普陀区金沙江路 1516 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     phone: "17386220093",
      //   },
      // ],

      // //   备份
      // tableDatacopy: [
      //   {
      //     date: "2016-05-02",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "张宇",
      //     address: "上海市普陀区金沙江路 1516 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "王小虎",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     phone: "17386220093",
      //   },
      // ],
      // // 第二页的新数据  分页到2时 展示的数据
      // tableDatatwo: [
      //   {
      //     date: "2016-05-02",
      //     name: "张宇",
      //     address: "上海市普陀区金沙江路 1518 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-04",
      //     name: "赵四",
      //     address: "上海市普陀区金沙江路 1517 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "小明",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-03",
      //     name: "小王",
      //     address: "上海市普陀区金沙江路 1516 弄",
      //     phone: "17386220093",
      //   },
      //   {
      //     date: "2016-05-01",
      //     name: "陶",
      //     address: "上海市普陀区金沙江路 1519 弄",
      //     phone: "17386220093",
      //   },
      // ],
      yharr: {},
      currentPage: 1,
      //   新增数据值显示隐藏
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 修改数据值 显示隐藏
      dialog_xiugai: false,
      // 新增用数据form
      form: {
        account: "",
        // dizhi: "",
        password: "",
        userGroup: "",
      },
      formLabelWidth: "120px",

      // 查询用数据formInline
      formInline: {
        name: "",
        password: "",
        // dizhi: "",
        // phone: "",
      },

      editId: "",
      //  返回当前页数和需要展示的条数  searchForm
      searchForm: {
        pageNumber: 1,
        pageSize: 8,
      },
      id: "",
      total: "",
      chaxun: "",
      allList: [],
    };
  },
  mounted() {
    this.zhanshi();
  },
  methods: {
    zhanshi() {
      chushihua({
        currentPage: this.currentPage,
        pageSize: 8,
      }).then((res) => {
        console.log(res);
        this.total = res.data.total;
        this.yharr = res.data.data;
        console.log(this.yharr);
      });
      chushihua({ currentPage: 1, pageSize: 99999999 }).then((res) => {
        this.allList = res.data.data;
      });
        //  info({

        //  }).then((res) => {
        //    console.log(res);
        //     this.total = res.data.total;
        //     this.yharr = res.data.data;
        //  })
    },

    add() {
        var yzaccount= /^[a-zA-Z0-9_-]{4,16}$/;
       var yzpassword = /^[a-zA-Z0-9_-]{4,16}$/;
       if(yzaccount.test(this.form.account) && yzpassword.test(this.form.password)){
         yhadd({
        account: this.form.account,
        password: this.form.password,
        userGroup: this.form.userGroup,
      }).then((res) => {
        console.log(res);
        this.from = "";
        this.dialogFormVisible = false;
        //确认完重新调用ceshi函数刷新页面
        // this.ceshi()
       
      });
       }else{
         alert('请输入正确格式的用户名或密码')
          this.form.account = ''
        this.from.password = ''
        this.from.userGroup = ''
       }
      
    },

    // created() {

    //     fu(){
    //       if( this.form.name == this.regname){
    //            console.log("shibai");
    //       }else{
    //          console.log("chengg");
    //       }
    //     },

    // add() {

    //   //   console.log(this.formInline)
    //   // 新增 没写判断
    //   if (

    //     this.form.name == false ||
    //     this.form.dizhi == false ||
    //     this.form.phone == false

    //   ) {
    //     alert("输入不能为空");
    //   } else {
    //     this.tableData.push({
    //       date: "2022-06-05",
    //       name: this.form.name,
    //       address: this.form.dizhi,
    //       phone: this.form.phone,
    //     });
    //     this.dialogFormVisible = false;
    //     this.form.name = "";
    //     this.form.dizhi = "";
    //     this.form.phone = "";

    //   }
    // },
    // 删除当前项
    remove(id) {
      shanchu({
        id: id,
      }).then((res) => {
        this.id = id;
        console.log(res);
      });
      this.zhanshi();
    },
    // 修改框 获取到点击的列表的值
    edit(row, i) {
      //  console.log(row,i);
      // data的值 获取整个row的值转化为字符串
      // !!!!!!!!!!!!!!!!!!!!!转化2次  就不存在修改时改动修改框 表格数据跟着动的情况
      let data = JSON.parse(JSON.stringify(row));
      // 关闭修改框
      // let newrowaccount = JSON.parse(row)
      this.dialog_xiugai = true;
      // 将data的值赋给form列表 form列表为
      this.form = data;
      this.editId = i;
      console.log(i);
    },
    // 确认修改框
    handleEdit(i) {
      // this.tableData[this.editId] = JSON.parse(JSON.stringify(this.form));
      // 替换掉原数据
      // this.tableData.splice(
      //   this.editId,
      //   1,
      //   JSON.parse(JSON.stringify(this.form))
      // );
      // console.log(this.tableData[this.editId], "this.tableData[this.editId]");
      // this.dialog_xiugai = false;
      // this.form.name = ''
      // this.form.dizhi = ''
      // this.form.phone = ''
      qrxiugai({
        id: this.editId,
        account: this.form.account,
        userGroup: this.form.userGroup,
      }).then((res) => {
        this.dialog_xiugai = false;
        this.from = "";
        console.log(this.editId);
        // console.log(res);
      });
      this.zhanshi();
    },
    // 查询事件
    onSubmit() {
      // let arr = [];
      // // 遍历原数组的每一项 对比输入框的name 那么把item push到空数据arr中
      // // 只要arr的数组长度大于0 就是有数据 就用arr的数组替换掉原数组
      // this.yharr.forEach((item) => {
      //   if (
      //     item.account == this.formInline.name
      //     ||
      //     item.password == this.formInline.password
      //   ) {
      //     arr.push(item);
      //   }
      // });
      // if(this.chaxun = ''){
      //   this.zhanshi()
      // }
      // if (arr.length > 0) {
      //   this.yharr = arr;
      //   this.zhanshi()
      // }

      // this.allList
      if (this.formInline.name) {
        let list = [];
        this.allList.forEach((item) => {
          if (item.account.includes(this.formInline.name)) {
            list.push(item);
          }
        });
        this.yharr = list;
      } else {
        this.yharr = this.allList;
      }
    },
    // 失去焦点事件 input 返回原数组 element-ui 的 api
    changeName(value) {
      if (!value) {
        this.tableData = this.tableDatacopy;
      }
    },
    // 以下3个为分页事件

    changePage(value) {
      // this.searchForm.pageNumber = value;

      // if (value == 2) {
      //   //  this.tableData  =  this.tableDatatwo
      //   this.searchForm.pageNumber += 1;
      // } else if (value !== 2) {
      //   // this.tableData  =  this.tableDatacopy
      //   this.searchForm.pageNumber = 1;
      // }
      chushihua({
        currentPage: value,
        pageSize: 8,
      }).then((res) => {
        this.yharr = res.data.data;
        console.log(this.yharr);
      });
    },
    // fenyejia(value) {
    //   value++;
    // },
    // fenyejian(value) {
    //   value--;
    // },
  },

  computed: {
    //   sousuo(){
    //       console.log(this.formInline.name);
    //        if(this.formInline.name){
    //                 return this.tableData.filter( item => {
    //                     return item.name.indexOf(this.formInline.name)!== -1
    //                 })
    //             }else{
    //                 return tableData
    //             }
    //   }
  },
};
</script>

<style lang="less" scoped>
.box-card {
  height: 100%;
  position: relative;
  .block {
    position: absolute;
    left: 700px;
    bottom: 50px
  }
  .xiugai{
    margin-right: 20px;
  }
}
.add {
  margin: 0px 15px 0px 15px;
}
</style>
