<template>
    <div>
        <ul>
            <li v-for="(item,index) in neirong" :key="index" >
              <div @click="tiao(item)">
                   <h3 id="xx" ><img :src=item.cc id="chen">&nbsp;&nbsp;{{item.bb}}</h3>
                {{item.aa}}<br></div>
                <img src="../../tupian/3.png" ><span>大赞</span>
                <img src="../../tupian/4.png" ><span>收藏</span>
                <img src="../../tupian/1.png" ><span @click="tiao(item)">评论</span>
                <img src="../../tupian/2.png" ><span>转发</span>
                <img src="../../tupian/5.png" ><br><br><hr></li>
        </ul>
    </div>
    
  
</template>
<script>
export default {
  data() {
    return {
      
      neirong: [
        {
          aa:
            "“我上床睡觉了！”“我回房睡觉了！”“我上楼睡觉了！”——从睡觉看贫富……“我回宫睡觉了！”。。。（太横了吧！）",
          bb: "俗不可耐",
          cc:require("../../tupian/10.png")
        },
        {
          aa:
            "被一个小孩打了一下，本人怒道：“你为什么欺负姐姐?”小孩说：“你不是姐姐，你是不良青年！”本人心里咯噔一下，难道他还看出本人的不良史了？遂心虚道：“我哪儿不良了？”没想到他一句就把我秒杀了，他说：“你发育不良！”熊孩子，你家人在附近吗？我保证不打死你！。。。",
            bb:"精神病院刘主任",
            cc:require("../../tupian/20.png")
        },
        {
            aa:"以前~老妈：你饿吗？ 老爸：饿啊！老妈：饿怎么不做饭？你484傻？做饭去！后来~~老妈：你饿吗？ 老爸：不饿！老妈：不活动怎么会消化！去！活动活动！把饭做了！现在~~老妈：你饿吗？老爸：我做饭去。。。",
            bb:"王八之气",
            cc:require("../../tupian/30.png")
        },
        {
            aa:"有日一男一女退房。查房时楼上报说消费了一个保健品，大家懂得。然后，女的问，保健品是什么，得到解释后，两人都说没用。于是开始争执。激烈时刻，内彪悍女从包里甩出一盒tt说：我特么这里一盒我不用，我用你的？？？结果，宾馆方战败。。。",
            bb:"神评大表哥",
            cc:require("../../tupian/40.png")
        },
        {
            aa:"服了，看小说，女主怀孕两个月出事了，医生出来问男主“大人和小孩保一个，选一个选哪个”。卧槽，要是大人没了，两个月的胎儿还能保啊？保了放哪啊？。。。",
            bb:"阿青.",
            cc:require("../../tupian/50.png")
        },{
            aa:"两个人聊天，甲：“下雨了，我能够借用你的雨衣么？”乙：“没问题，不过你要注意点，千万别把我的新雨衣弄湿了。。。”",
            bb:"皮友158912163",
            cc:require("../../tupian/60.png")
        },{
            aa:"和朋友去吃肯德基，邻桌的妈妈教育女儿：吃东西不要吧唧吧唧的，不要发出声音。女儿：为什么呀？妈妈：这样半夜偷吃东西才不会被发现。。。",
            bb:"超人丢了红内裤",
            cc:require("../../tupian/70.png")
        },{
            aa:"千万不要小瞧一块钱！姐的亲身经历，真是一分钱难倒英雄汉啊，有次要坐公交车回家，发现身上连一块钱都没有，就想着在地上找，说不定能找到一块钱啥的，于是就顺着公交路线一边走一边找，过了一小时，都走到家了也没找到一块钱。。。",
            bb:"老妇撩发少年狂",
            cc:require("../../tupian/80.png")
        }
      ],
    }
    
  },
  methods:{
    tiao(item){
      this.$router.push({path:'/duan1'})
      this.$store.commit("cun",item)
    }
  }
  
};
</script>
<style lang="scss" scoped>
#chen{
    border-radius: 50%;
    width: 30px;
    height: 30px;
}
</style>