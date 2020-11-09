<template>
  <div id="xxx">
    <mt-header title="多个按钮">
      <router-link to="/about/wode" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button  slot="right">
        <nut-button small id="xx"  @click="dianji"> 确认 </nut-button>
      </mt-button>
    </mt-header>

    <br /><br /><br />
    新昵称：<input type="text" v-model="aa" id="xxx" />
  </div>
</template>
<script>
import storage from "../js/shuju";
export default {
  data() {
    return {
      aa: "",
      name: "",
      url: "https://my-json-server.typicode.com/linrufeng/demo/posts",
    };
  },

  methods: {
    dianji() {
      if (this.aa == "") {
        alert("不能为空");
      } else {
        storage.Setstorage("ming", this.aa);
        this.$router.push({path:'/about/wode'})
      }
    },
  },
};
</script>
<style lang="scss" scoped>
#xxx {
  text-align: center;
}
#xx{
  border-radius: 20%;
}
</style>