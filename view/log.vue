<template>
 <div class="view">
    <el-table
      :data="tableData"
      style="width:100%;max-width: 75%;margin-left: 330px;margin-right: 100px;">
      <el-table-column
        prop="date"
        label="时间"
        width="180">
      </el-table-column>
      <el-table-column
        prop="2"
        label="2##"
        width="180">
      </el-table-column>
      <el-table-column
        prop="5"
        label="5##"
        width="180">
      </el-table-column>
      <el-table-column
        prop="4"
        label="4##"
        width="180">
      </el-table-column>
      <el-table-column
        prop="9"
        label="other"
        width="180">
      </el-table-column>
    </el-table>
    <el-button  class="but" style="width:100px; text-align:center;margin-top:120px;margin-right:50px;" type="primary" round @click="updatelog" v-trigger>
        reload
    </el-button>
 </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
            date: '2016-05-02',
            2: 0,
            5: 0,
            4: 0,
            9: 0
            }]
        }
    },
    directives: {
        trigger: {
            inserted(el) {
                el.click(console.log("自动唤起"))
                //$(el).trigger('click')
            }
        }
    },methods:{
        updatelog(){
        this.tableData = []
        this.$http.get("http://127.0.0.1:5000/api/selectlog").
        then((response) => {
            var tmp = [];
            tmp = JSON.parse(JSON.stringify(response['data']).replace(/'/g, '"').slice(1,-1));
            this.tableData = tmp
        }).catch((error) => {
          this.$Message.error('出现错误')
          console.log(error);
        });
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
</style>