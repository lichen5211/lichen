<template>
  <div id="xx">
    <mt-field
      label="用户名"
      placeholder="请输入用户名"
      v-model="yonghu"
    ></mt-field>

    <mt-field
      label="密码"
      placeholder="请输入密码"
      type="password"
      v-model="mima"
    ></mt-field
    ><br />
    <Button type="primary" @click="denglu">登录</Button>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import storage from "../js/shuju";
export default {
  data() {
    return {
      yonghu: "",
      mima: "",
      title: "提示",
      message: "确定执行此操作?",
      showCancelButton: true,
    };
  },

  methods: {
    denglu() {
      MessageBox.confirm("确定登录?").then((action) => {
        if (
          this.yonghu == storage.Getstorage("name") &&
          this.mima == storage.Getstorage("pwd")
        ) {
            this.$notify.success('登录成功');
          this.$router.push({ path: "/about/shipin" });
        } else {
        this.$notify.danger('用户名或密码输入错误'); 
        }
      });
    },
  },
};
</script>
<style lang="scss" scoped>
#xx {
  text-align: center;
}
</style>