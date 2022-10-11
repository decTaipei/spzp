<template>
  <el-card class="box-card">
    <!-- 新增 -->
    <el-button type="primary" @click="dialogFormVisible = true">新增</el-button>
    <!-- 新增弹出框 -->
    <el-dialog title="用户" :visible.sync="dialogFormVisible">
      <el-form :model="form" >
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.dizhi" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="电话" :label-width="formLabelWidth">
          <el-input v-model="form.phone" autocomplete="off"></el-input>
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
      <el-form-item label="地址" class="dizhi">
        <el-input
          v-model="formInline.dizhi"
          placeholder="地址"
          class="dizhi"
        ></el-input>
      </el-form-item>
      <el-form-item label="电话" class="dianhua">
        <el-input
          v-model="formInline.phone"
          placeholder="电话"
          class="dianhua"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>
    <!-- 表格 -->
    <el-table :data="tableData" style="width: 100%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>

      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>

      <el-table-column prop="address" label="地址" width="300">
      </el-table-column>

      <el-table-column prop="phone" label="电话" width="300"> </el-table-column>

      <el-table-column prop="action" label="操作" width="300">
        <!-- 表格结束 -->
        <!-- template slot-scope="scope"插槽放在整个范围的最外层 -->
        <template slot-scope="scope">
          <!-- 修改模块 -->
          <el-button type="primary" round @click="edit(scope.row, scope.$index)"
            >修改</el-button
          >

          <el-dialog
            title="修改用户"
            :visible.sync="dialog_xiugai"
            :close-on-click-modal="false"
          >
            <el-form :model="form">
              <el-form-item label="姓名" :label-width="formLabelWidth">
                <el-input v-model="form.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="地址" :label-width="formLabelWidth">
                <el-input v-model="form.address" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="电话" :label-width="formLabelWidth">
                <el-input v-model="form.phone" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialog_xiugai = false">取 消</el-button>
              <el-button type="primary" @click="handleEdit">确 定</el-button>
            </div>
          </el-dialog>
          <!-- 修改模块结束 -->
          <el-button
            type="danger"
            round
            @click="remove(scope.row, scope.$index)"
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
        prev-click='fentejia'
        next-click='fentejian'
        :total="15"
        @current-change="changePage"
      >
      </el-pagination>
    </div>
  </el-card>
</template>

<script>

export default {
  data() {
    return {
     
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-03",
          name: "张宇",
          address: "上海市普陀区金沙江路 1516 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "17386220093",
        },
      ],

      //   备份
      tableDatacopy: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-03",
          name: "张宇",
          address: "上海市普陀区金沙江路 1516 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "17386220093",
        },
      ],
      // 第二页的新数据  分页到2时 展示的数据
      tableDatatwo: [
        {
          date: "2016-05-02",
          name: "张宇",
          address: "上海市普陀区金沙江路 1518 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-04",
          name: "赵四",
          address: "上海市普陀区金沙江路 1517 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-01",
          name: "小明",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-03",
          name: "小王",
          address: "上海市普陀区金沙江路 1516 弄",
          phone: "17386220093",
        },
        {
          date: "2016-05-01",
          name: "陶",
          address: "上海市普陀区金沙江路 1519 弄",
          phone: "17386220093",
        },
      ],
      //   新增数据值显示隐藏
      dialogTableVisible: false,
      dialogFormVisible: false,
      // 修改数据值 显示隐藏
      dialog_xiugai: false,
      // 新增用数据form
      form: {
        name: "",
        dizhi: "",
        phone: "",
      },
      formLabelWidth: "120px",

      // 查询用数据formInline
      formInline: {
        name: "",
        // dizhi: "",
        // phone: "",
      },

      editId: "",
      //  返回当前页数和需要展示的条数  searchForm   
      searchForm: {
        pageNumber: 1,
        pageSize: 5,
      },
       
    };
  },
  methods: {
    // created() {
    
        
    //     fu(){
    //       if( this.form.name == this.regname){
    //            console.log("shibai");
    //       }else{
    //          console.log("chengg");
    //       }
    //     },
   
    add() {
      
      //   console.log(this.formInline)
      // 新增 没写判断
      if (
       
        this.form.name == false ||
        this.form.dizhi == false ||
        this.form.phone == false 
       
      ) {
        alert("输入不能为空");
      } else {
        this.tableData.push({
          date: "2022-06-05",
          name: this.form.name,
          address: this.form.dizhi,
          phone: this.form.phone,
        });
        this.dialogFormVisible = false;
        this.form.name = "";
        this.form.dizhi = "";
        this.form.phone = "";
       
      }
    },
    // 删除当前项
    remove(row, index) {
      this.tableData.splice(index, 1);
    },
    // 修改框 获取到点击的列表的值
    edit(row, i) {
      //  console.log(row,i);
      // data的值 获取整个row的值转化为字符串
      let data = JSON.parse(JSON.stringify(row));
      // 关闭修改框
      this.dialog_xiugai = true;
      // 将data的值赋给form列表 form列表为
      this.form = data;
      this.editId = i;
    },
    // 确认修改框
    handleEdit() {
      this.tableData[this.editId] = JSON.parse(JSON.stringify(this.form));
      // 替换掉原数据
      this.tableData.splice(
        this.editId,
        1,
        JSON.parse(JSON.stringify(this.form))
      );
      // console.log(this.tableData[this.editId], "this.tableData[this.editId]");
      this.dialog_xiugai = false;
      this.form.name = ''
      this.form.dizhi = ''
      this.form.phone = ''
    },
    // 查询事件
    onSubmit() {
      let arr = [];
      // 遍历原数组的每一项 对比输入框的name 那么把item push到空数据arr中 
      // 只要arr的数组长度大于0 就是有数据 就用arr的数组替换掉原数组
      this.tableData.forEach((item) => {
        if (item.name == this.formInline.name) {
          arr.push(item);
        }
      });
      if (arr.length > 0) {
        this.tableData = arr;
      }
      // console.log(this.formInline, "this.formInline");
    },
    // 失去焦点事件 input 返回原数组 element-ui 的 api
    changeName(value) {
      if (!value) {
        this.tableData = this.tableDatacopy;
      }
    },
    // 以下3个为分页事件
    
    changePage(value) {
      this.searchForm.pageNumber = value;
      // console.log(this.searchForm, "changePage");
      // console.log(value, "value");
      if(value==2){
       this.tableData  =  this.tableDatatwo
      }else if(value!==2){
        this.tableData  =  this.tableDatacopy  
      }
    },
    fenyejia(value){
      value++
    },
     fenyejian(value){
      value--
    },
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
  .block {
    margin-left: 480px;
  }
}
</style>
