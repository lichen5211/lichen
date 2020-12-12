<template>
  <div>
      
   <mt-navbar v-model="selected" fixed id="xx">
  <mt-tab-item><span @click="duan1">推荐</span></mt-tab-item>
  <mt-tab-item><span @click="duan2">视频</span></mt-tab-item>
  <mt-tab-item><span @click="duan">段子</span></mt-tab-item>
  
</mt-navbar>
<router-view/>
  </div>
</template>

<script>
import Shipin from './duanzi/shipin'

export default {
    data(){
        return{
            selected:'/about/shipin1'
        }
    },
    components:{
      Shipin
    },
    methods:{
      duan(){
       
        this.$router.push({path:"/about/duanzi/duan"})
      },
     duan1(){
        this.$router.push({path:"/about/duanzi/shipin1"})
     },
     duan2(){
        this.$router.push({path:"/about/duanzi/shipin1"})
     }
    }
};
</script>
<style lang="scss" scoped>
.xx{
  color: black;
}
</style>