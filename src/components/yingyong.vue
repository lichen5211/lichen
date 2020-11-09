<template>
  <div>
      <div>
          <nut-searchbar
    v-model="val"
    placeText="查找软件"
    @submit="search"
    @focus="focusFun"
    ref="myInput"
></nut-searchbar>
      </div>
    <div>
    <mt-navbar v-model="selected">
      <mt-tab-item id="1" class="xx">游戏娱乐</mt-tab-item>
      <mt-tab-item id="2" class="xx">交友软件</mt-tab-item>
      <mt-tab-item id="3" class="xx">聊天工具</mt-tab-item>
      <mt-tab-item id="4" class="xx">系统应用</mt-tab-item>
    </mt-navbar>

    <mt-tab-container v-model="selected">
      <mt-tab-container-item id="1"> <Youxi/><Liaotian/></mt-tab-container-item>
      <mt-tab-container-item id="2"> <Jiaoyou/><Liaotian/></mt-tab-container-item>
      <mt-tab-container-item id="3"><Liaotian/></mt-tab-container-item>
      <mt-tab-container-item id="4"><Xitong/><Liaotian/> </mt-tab-container-item>
    </mt-tab-container></div>
  </div>
</template>
<script>
import Youxi from './yingyong/youxi'
import Jiaoyou from './yingyong/jiaoyou'
import Liaotian from './yingyong/liaotian'
import Xitong from './yingyong/xitong'
export default {
    components:{
        Youxi,Jiaoyou,Liaotian,Xitong
    },
    data() {
        return {
            val:'',
            selected:'1'
        }
    },
    mounted(){
        //设置获取焦点
        this.$nextTick(function() {
            this.$refs.myInput.focus()
        })
    },
    methods:{
        focusFun() {
            console.log('获取焦点操作！');
        },
        inputFun(value) {
            console.log(value);
            console.log('您正在输入...');
        },
        blurFun(value) {
            console.log(value);
            console.log('您已失去焦点！');
        },
        submitFun(value) {
            console.log(value);
            console.log('默认提交操作！');
        },
        search(value) {
            //点击键盘中的’搜索‘时，失去焦点
            this.$refs.myInput.blur()
            console.log('搜索')
        }
    }
}
</script>
<style lang="scss" scoped>
  .xx{
      color: black;
  }
</style>