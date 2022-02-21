<template>
    <div class="view">
        <img src="../src/assets/logo.jpg" class="logo">
        <p class="text">苏州大学网站监测系统是我对web应用的初次尝试</p>
        <p class="text">她很简单但是对我来说遍布惊喜</p>
    </div>
</template>
<script>
export default ({
    name: 'about',
    data(){
        return {}
    }
})
</script>
<style scoped>

.logo{
    margin-top: 20vh;
}
.text{
    position: relative;
    top: -75px;
    line-height: 16px;
    font-weight: bold;
}
.view{
    background-color: #fff;
    box-sizing:border-box;
    border-radius: 16px;
    margin: 50px;
    width: 1500px;
    height: 800px;
}
.about{
    margin: 0pt;
    padding: 0pt;
    width: 100%;
    height: 100%;
}
</style>
