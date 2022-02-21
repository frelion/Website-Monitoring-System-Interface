<template>
  <div id="app">
  <!-- 布局容器 -->
  <el-container class="Con">
    <!-- 侧边栏部分 -->
    <el-aside width=auto>
    <!-- 塞一个导航条 -->
    <el-row class="tac">
      <el-col :span="24">
        <h5 class="nav-text">导航条</h5>
        <!-- 路由menu -->
        <el-menu
          default-active="1"
          router
          class="el-menu-vertical-demo"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-menu-item index="1" route="/" class="menu-item" >
            <i class="el-icon-date"></i>
            <span slot="title">数据统计</span>
          </el-menu-item>
          <el-menu-item index="2" route="/Database" class="menu-item">
            <i class="el-icon-coin"></i>
            <span slot="title">数据库</span>
          </el-menu-item>
          <el-menu-item index="3" route="/Log" class="menu-item">
            <i class="el-icon-document"></i>
            <span slot="title">日志</span>
          </el-menu-item>
          <el-menu-item index="/About" class="menu-item">
            <i class="el-icon-sugar"></i>
            <span slot="title">关于</span>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
    </el-aside>

    <!-- 布局容器 -->
    <el-container>
      <!-- 头部 -->
      <el-header class="head">
        苏州大学网站监测系统
      </el-header>
      <!-- 页面,也是路由显示区 -->
      <el-main class="body">
        <router-view />
      </el-main>
    </el-container>
</el-container>



  </div>

</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0px;
}
body{
  margin: 0px;
}


.head, .body{
  margin-left: 15.5rem;

}

.body{
  height: 100vh;
  padding: 0px;
}
.tac{  
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 15.5rem;
  height: 100vh;
  overflow: hidden;
  background-color: #545c64;
}
.menu-item{
  width: 100%;
}
.nav-text{
  font-size: 20px;
  height: 100px;
  padding: 0px;
  margin: 0px;
  line-height: 100px;
  color: aliceblue;
}
.menu-item i,span{
  position: relative;
  left: -10px;
}


/* 布局容器的装饰 */
  .el-header, .el-footer {
    background-color: #909399;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  
  .el-aside {
    background-color: #fff;
    color: #333;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: rgba(15, 23, 42, 0.06);
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .Con{
    height: 100vh;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
