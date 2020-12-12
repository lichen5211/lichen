<template>
 <div id="xx">
   <mt-field label="用户名" placeholder="请输入用户名" v-model="user"></mt-field>

<mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
<mt-field label="手机号" placeholder="请输入手机号" type="tel" ></mt-field><br>
     <Button type="primary" @click="zhuce"  >立即注册</Button>
  </div>
  
</template>

<script>
  import  storage from '../js/shuju'
export default {
 data () {
            return {
                    user: '',
                    password: ''
            }
        },
  methods:{
    zhuce(){
       if(this.user==''){
         alert('账号不能为空');
         return
       }else if(this.password==''){
         alert('密码不能为空');
         return
       }else if(this.password.length<6){
         alert('密码不能少于6位');
         return
       }else{
         storage.Setstorage("name",this.user);
          storage.Setstorage("pwd",this.password);
        this.$router.push({path:'/denglu'})
       }
         
    },
  }
}
</script>
<style lang="scss" scoped>
 #xx{
   text-align: center;
 }
</style>