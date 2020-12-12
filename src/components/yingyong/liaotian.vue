<template>
  <ul>
    <li v-for="(item, index) in ruan" :key="index">
      <nut-row type="flex" gutter="10" align="flex-start">
        <nut-col :span="10">
          <div class="flex-content flex-content-height">
            <img :src="item.aa" width="100" height="100" />
          </div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-light">
            <span id="qq">{{ item.bb }}</span
            ><br />{{ item.cc }}
          </div>
        </nut-col>
        <nut-col :span="12">
          <div class="flex-content flex-content-height">
            <mt-button type="primary">点击下载</mt-button>
          </div>
        </nut-col>
      </nut-row>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      ruan: [
        {
          aa: require("../../tupian/w1.png"),
          bb: "新浪微博",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w2.png"),
          bb: "微信",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w3.png"),
          bb: "飞信",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w4.png"),
          bb: "小鲸鱼",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w5.png"),
          bb: "QQ",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w6.png"),
          bb: "陌陌",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w7.png"),
          bb: "MOMO陌陌",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w8.png"),
          bb: "YY",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w9.png"),
          bb: "米聊",
          cc: "微信，一款大众化使用的社交软件！",
        },
        {
          aa: require("../../tupian/w10.png"),
          bb: "有信",
          cc: "微信，一款大众化使用的社交软件！",
        }
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
#qq {
  font-size: 20px;
}
</style>
