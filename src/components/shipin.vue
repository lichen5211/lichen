<template>
  <div>
      
   <mt-navbar v-model="selected" fixed >
  <mt-tab-item id="1" class="xx">故事</mt-tab-item>
  <mt-tab-item id="2" class="xx">好歌</mt-tab-item>
  <mt-tab-item id="3" class="xx">好剧</mt-tab-item>
  <mt-tab-item id="4" class="xx">会谈</mt-tab-item>
  <mt-tab-item id="5" class="xx">新闻</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected" id="xxx" >
  <mt-tab-container-item id="1">
    <Gushi/>
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <Haoge/>
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
   <Haoju/>
  </mt-tab-container-item>
  <mt-tab-container-item id="4">
   <Huitan/>
  </mt-tab-container-item>
  <mt-tab-container-item id="5">
   <Xinwen/>
  </mt-tab-container-item>
</mt-tab-container>
  </div>
</template>

<script>
import Gushi from './shipin/gushi'
import Haoge from './shipin/haoge'
import Haoju from './shipin/haoju'
import Huitan from './shipin/huitan'
import Xinwen from './shipin/xinwen'

export default {
    data(){
        return{
            selected:'1'
        }
    },
    components:{
      Gushi,Haoge,Haoju,Huitan,Xinwen
    }
};
</script>
<style lang="scss">
  .xx{
      color: black;
      
  }
 
 
  
</style>