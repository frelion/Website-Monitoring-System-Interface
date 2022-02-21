<template>
    <div class="view">
        <el-table
            :data="tableData.filter(data => !search || data.name.toLowerCase().includes(search.toLowerCase()))"
            style="width: 100%">
            <el-table-column
            label="Url"
            prop="Url"
            label-class-name="column-label">
            </el-table-column>
            <el-table-column
            label="Statement"
            prop="StateMent"
            label-class-name="column-label">
            </el-table-column>
            <el-table-column
            align="right">
            <template slot-scope="scope">
              <el-popconfirm 
              title="确定删除吗？"
              @confirm="handleDelete(scope.$index, scope.row)"
              >
                <el-button
                 slot="reference"
                size="mini"
                type="danger"
                >Delete</el-button>
              </el-popconfirm>
            </template>
            </el-table-column>
        </el-table>
      <el-input
        type="textarea"
        autosize
        placeholder="请输入内容"
        v-model="url">
      </el-input>
      <el-button type="primary" @click="searchUrl">搜索<i class="el-icon-search el-icon--right"></i></el-button>
      <el-button type="primary" @click="insertUrl">上传<i class="el-icon-upload el-icon--right"></i></el-button>
      <el-button type="primary" @click="update" v-trigger>刷新<i class="el-icon-update el-icon--right"></i></el-button>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [],
        search: '',
        url:''
      }
    },
    directives: {
        trigger: {
            inserted(el) {
                el.click(console.log("自动唤起"))
                //$(el).trigger('click')
            }
        }
    },methods: {
      handleDelete(index, row) {
        console.log(index)
        console.log(row['Url'],Object.keys(row));
        this.deleteUrl(row['Url'])
      },
      deleteUrl(Url){

        this.$http.post("http://127.0.0.1:5000/api/deleteUrl",{url:Url}).
        then((response) => {
          this.$Message({
            message: '删除成功',
            type: 'success'
          });
          console.log(response)
        }).catch((error) => {
          this.url = "";
          this.$Message.error('url有错或删除失败')
          console.log(error);
        })
      },
      searchUrl(){
        this.$http.post("http://127.0.0.1:5000/api/searchUrl",{url:this.url}).
        then((response) => {
          this.tableData.pop();
          var tmp = [];
          tmp = JSON.parse(JSON.stringify('['+response['data']+']').replace(/'/g, '"').slice(1,-1));
          this.tableData.unshift(tmp[0]);
        }).catch((error) => {
          this.$Message.error('url有错或者该网页不可访问')
          this.url = "";
          console.log(error);
        })
      },
      
      insertUrl(){
        this.$http.post("http://127.0.0.1:5000/api/insertUrl",{url:this.url}).
        then((response) => {
          console.log(JSON.stringify('['+response['data']+']').replace(/'/g, '"').slice(1,-1))
          this.tableData.pop();
          var tmp = [];
          tmp = JSON.parse(JSON.stringify('['+response['data']+']').replace(/'/g, '"').slice(1,-1));
          this.tableData.unshift(tmp[0]);
          this.$Message({
            message: '插入成功',
            type: 'success'
          });
        }).catch(function (error){
          this.$Message.error('url有错或者该网页不可访问')
          console.log(error);
        })
      },
      update() {
        this.tableData = [];
        this.$http.get("http://127.0.0.1:5000/api/select6Webpage").
        then((response) => {
          console.log(typeof(this.tabledata));
          console.log(JSON.stringify(response['data']).replace(/'/g, '"').slice(1,-1));
          this.tableData = JSON.parse(JSON.stringify(response['data']).replace(/'/g, '"').slice(1,-1));
        }).catch(function (error){
          console.log(error);
        })
      }
    }
  }
</script>

<style>

.view{
    background-color: #fff;
    box-sizing:border-box;
    border-radius: 16px;
    margin: 50px;
    width: 1500px;
    height: 800px;
}
.el-table{
    max-width: 85%;
    margin-left: 100px;
    margin-right: 100px;
}
.column-label{
    color: red;
}

.el-input__inner {
  width: 19.5rem;
  height: 2.5rem;
  padding: 0 1.5rem;
  color: black;
  border-radius: 2.5rem;
  background-color: var(--BG);
}
</style>