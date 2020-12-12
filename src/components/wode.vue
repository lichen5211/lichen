<template>
  <div>
    <mt-cell :title="mingzi" to="/nicheng">
      <span></span>
      <img slot="icon" src="../tupian/105.png" width="50" height="50" />
    </mt-cell>
    <br />
    <mt-cell title="我的收藏" to="" is-link value=""> </mt-cell>
    <mt-cell title="我的下载" to="" is-link value=""> </mt-cell>
    <mt-cell title="账户余额" to="" is-link value=""> </mt-cell>
    <mt-cell title="我的关注" to="" is-link value=""> </mt-cell>
    <mt-cell title="更换账号" to="" is-link value=""> </mt-cell>
    <router-view></router-view>
  </div>
</template>
<script>
import Nicheng from '../components/nicheng'
import storage from '../js/shuju'
export default {
 data(){
     return{
         mingzi:'张三'
     }
 },
 mounted(){
 this.mingzi= storage.Getstorage("ming")
 }
};
</script>