


<template>
  <div class="about">
    <mt-tabbar v-model="selected" fixed >
     
  <mt-tab-item  class="xx"  >
    <div @click="dian1">
    <img slot="icon" src="../tupian/72.png" width="30" height="30" ><br>
    视频</div>
  </mt-tab-item>

  <mt-tab-item class="xx">
    <div @click="dian2">
    <img slot="icon" src="../tupian/QQ图片20201102153433.png" width="30" height="30" ><br>
    段子</div>
  </mt-tab-item>

  <mt-tab-item  class="xx">
    <div @click="dian3">
    <img slot="icon" src="../tupian/QQ图片20201102153634.png" width="30" height="30" ><br>
    直播</div>
  </mt-tab-item>
  
  <mt-tab-item  class="xx">
    <div @click="dian4">
    <img slot="icon" src="../tupian/49.png" width="30" height="30" ><br>
    应用</div>
  </mt-tab-item>
  
  <mt-tab-item  class="xx">
    <div @click="dian5">
    <img slot="icon" src="../tupian/49.png" width="30" height="30"><br>
    我的</div>
  </mt-tab-item>
 
</mt-tabbar>
<router-view/>
  </div>
</template>
<script>
import { log } from 'util'
export default {
  data(){
    return{
       selected:'/about/shipin'
     
    }
  
  },
  methods:{
    dian1(){
       this.$router.push({path:'/about/shipin'})
    },
    dian2(){
       this.$router.push({path:'/about/duanzi/shipin1'})
    },
    dian3(){
       this.$router.push({path:'/about/zhibo'})
    },
    dian4(){
       this.$router.push({path:'/about/yingyong'})
    },
    dian5(){
       this.$router.push({path:'/about/wode'})
    },
  }
}
</script>
<style lang="scss" scoped>
  .xx{
      color: black;
     
  }
</style>
