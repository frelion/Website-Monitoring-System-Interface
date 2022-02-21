<template>
    <div class="view">
      <div>
        <div class="cardrow1">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px;">
                <div style="background-color:#67C23A;color:#FFFFFF">
                  {{ count2Page }}
                  <!-- <NumberCounter2 :key="reloadMe" :value="count2Page" class="text-color-blue nums"></NumberCounter2> -->
                </div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-popover
                    placement="top-start"
                    title="可正常访问网站"
                    trigger="hover">
                      <p>网络状态码为200等，可正常访问状态</p>
                      <div style="text-align: right; margin: 0">
                        <el-button type="primary" size="mini" @click="download('2')">导出</el-button>
                      </div>
                    <el-button slot="reference" type="text" class="button">详细</el-button>
                  </el-popover>
                </div>
              </div>
            </el-card>

            <el-card :body-style="{ padding: '0px'}" style="margin-top:100px">
              <div style="padding: 14px;">
                <div style="background-color:#F56C6C;color:#FFFFFF">
                  {{ count4Page }}
                  <!-- <NumberCounter4 :value="count4Page" key="reloadMe" class="text-color-blue nums"></NumberCounter4> -->
                </div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-popover
                    placement="top-start"
                    title="不可访问网站"
                    trigger="hover">
                      <p>网络状态码为404等，不可正常访问状态</p>
                      <div style="text-align: right; margin: 0">
                        <el-button type="primary" size="mini" @click="download('4')">导出</el-button>
                      </div>
                    <el-button slot="reference" type="text" class="button">详细</el-button>
                  </el-popover>
                </div>
              </div>
            </el-card>
        </div>

        <div class="cardrow2">
            <el-card :body-style="{ padding: '0px' }">
              <div style="padding: 14px;">
                <div style="background-color:#E6A23C;color:#FFFFFF">
                  {{ count5Page }}
                  <!-- <NumberCounter5 :value="count5Page" key="reloadMe" class="text-color-blue nums"></NumberCounter5> -->
                </div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-popover
                    placement="top-start"
                    title="可访问网站"
                    trigger="hover">
                      <p>网络状态码为502等，可访问状态</p>
                      <div style="text-align: right; margin: 0">
                        <el-button type="primary" size="mini" @click="download('5')">导出</el-button>
                      </div>
                    <el-button slot="reference" type="text" class="button">详细</el-button>
                  </el-popover>
                </div>
              </div>
            </el-card>

            <el-card :body-style="{ padding: '0px'}" style="margin-top:100px">
              <div style="padding: 14px;">
                <div style="background-color:#409EFF;color:#FFFFFF">
                  {{ count9Page }}
                  <!-- <NumberCounter9 :value="count9Page" key="reloadMe" class="text-color-blue nums"></NumberCounter9> -->
                </div>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-popover
                    placement="top-start"
                    title="其他"
                    trigger="hover">
                      <p>网络状态码为其他的网站</p>
                      <div style="text-align: right; margin: 0">
                        <el-button type="primary" size="mini" @click="download('9')">导出</el-button>
                      </div>
                    <el-button slot="reference" type="text" class="button">详细</el-button>
                  </el-popover>
                </div>
              </div>
            </el-card>
        </div>
      </div>
      <div >
        <el-button class="but" style="width:100px; text-align: center;" type="primary" round @click="updatecountPage" v-trigger>
          reload
          </el-button>
      </div>
    </div>
</template>

<script>                                  
  // import NumberCounter4 from "/home/frelion/小狮子的文件夹/softlion/Interface/softlion/src/components/NumberCounter.vue"
  // import NumberCounter2 from "/home/frelion/小狮子的文件夹/softlion/Interface/softlion/src/components/NumberCounter.vue"
  // import NumberCounter5 from "/home/frelion/小狮子的文件夹/softlion/Interface/softlion/src/components/NumberCounter.vue"
  // import NumberCounter9 from "/home/frelion/小狮子的文件夹/softlion/Interface/softlion/src/components/NumberCounter.vue"
  export default {
    components: {
      // NumberCounter4,
      // NumberCounter2,
      // NumberCounter5,
      // NumberCounter9
    },
    data() {
      return {
        count4Page: 0,
        count2Page: 0,
        count5Page: 0,
        count9Page: 0,
        currentDate: new Date(),
        reloadMe: 0
      }
    },directives: {
        trigger: {
            inserted(el) {
              console.log(el)
                el.click(console.log("自动唤起"))
            }
        }
    },methods: {
      forceRerender() {
         this.reloadMe += 1; 
      },updatecountPage(){
        this.count2Page = 0;
        this.count4Page = 0;
        this.count5Page = 0;
        this.count9Page = 0;
        this.$http.get("http://127.0.0.1:5000/api/selectcount").
        then((response) => {
          console.log(response['data']);
          var tmp = JSON.parse(JSON.stringify(response['data']).replace(/'/g, '"').slice(1,-1));
          this.count2Page = tmp['2'];
          this.count4Page = tmp['4'];
          this.count5Page = tmp['5'];
          this.count9Page = tmp['9'];
        }).catch((error) => {
          this.$Message.error('出现错误')
          this.url = "";
          console.log(error);
        });
        this.forceRerender();
      },download(tar){
        console.log(tar)
        try{
          window.location.href = "http://127.0.0.1:5000/download/" + tar;
        }catch(e){
          this.$Message.error('不可下载或网络错误')
        }
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
.but{
  position: relative;
  top: -100px;
}
.text{
  font-size: 20px;
}
.errorWebPage{
  background-color: #F56C6C;
}
.cardrow1,.cardrow2{
  padding: 100px;
  width: 30%;
  float: left;
  /* float: left; */
}
.cardrow1{
  margin-left: 45px;
}
.cardrow2{
  margin-left: 100px;
}

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100px;
  display: block;
}

.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}

.clearfix:after {
    clear: both
}
</style>