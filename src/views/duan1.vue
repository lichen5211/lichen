<template>
  <div>
    <nut-navbar 
    @on-click-back="back" 
    @on-click-title="title" 
    @on-click-more="more"
><a slot="left" @click="back">返回</a>
{{jieshou.bb}}
</nut-navbar>
<br><br>
{{jieshou.aa}}<br><br>
<div>
  <el-row>
  <el-col :span="6"><i class="el-icon-thumb"></i></el-col>
  <el-col :span="6"><i class="el-icon-star-off"></i></el-col>
  <el-col :span="6"><i class="el-icon-chat-dot-round"></i></el-col>
  <el-col :span="6">
    <el-dropdown>
  <span class="el-dropdown-link">
   <i class="el-icon-more"></i>
  </span>
  <el-dropdown-menu slot="dropdown">
    <el-dropdown-item>分享到朋友圈</el-dropdown-item>
    <el-dropdown-item disabled>下载</el-dropdown-item>
    
  </el-dropdown-menu>
</el-dropdown>
  </el-col>
</el-row> 
</div> 
<hr>
<div class="qwe">
  <ul v-for="item in pinglun" :key="item">
   <span class="chen">{{mingzi}}</span>
    <li>
      {{item.name}}
    </li>
  </ul>
</div>
<br><br>
<el-row gutter="20">
  <el-col :span="18"><el-input v-model="input" placeholder="请输入内容" suffix-icon="el-icon-edit"></el-input></el-col>
  <el-col :span="5"><el-button type="primary" size="small" @click="fasong">发送</el-button></el-col>
</el-row>



  </div>
</template>

<script>
import storage from '../js/shuju'
export default {
  data(){
    return{
      pinglun:[],
      input:"",
      mingzi:''
    }
  },
   computed:{
       jieshou(){
           return  this.$store.state.shuju
       }
   },
   
  methods:{
    back(){
      
      this.$router.go(-1)
    },
   fasong(){
     this.pinglun.push({
       name:this.input
     })
     this.input=""
   }
  },
  mounted(){
 this.mingzi= storage.Getstorage("ming")
 }
   }
</script>

<style lang="scss">
 .el-icon-star-off,.el-icon-chat-dot-round,.el-icon-thumb,.el-icon-more{
   font-size: 30px;
  
 }
 .qwe{
   width: 100%;
   height: 330px;
   
    word-wrap:break-word;
    word-break:break-all;
    overflow: hidden;
    overflow:auto;
 }
 .chen{
   font-size: 20px;
 }
</style>