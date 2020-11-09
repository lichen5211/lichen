<template>
  <div>
<nut-row>
    <h1>娱乐直播</h1>
    <nut-col :span="12" v-for="(item,index) in xiaogui" :key="index">
        
        
            <img :src=item.aa width="70%" height="150"><br>
        <span id="xx">{{item.bb}}</span>
        <br><br><br>
    </nut-col>
    <h1>英雄联盟</h1>
    <nut-col :span="12" v-for="(item,index) in xiaogui2" :key="index">
       
            <img :src=item.aa width="70%" height="150"><br>{{item.bb}}
        
        <br><br><br>
    </nut-col>
</nut-row>
  </div>
</template>

<script>
export default {
   data(){
       return{
           xiaogui:[{
              aa:require("../tupian/101.gif"),
              bb:"水蜜桃..A520" 
           },{
               aa:require("../tupian/102.gif"),
               bb:"户外刘姐"
           },{
               aa:require("../tupian/103.gif"),
               bb:"吉他~~~"
           },{
               aa:require("../tupian/104.png"),
               bb:"乔碧萝"
           },{
               aa:require("../tupian/105.png"),
               bb:"青青~"
           },{
               aa:require("../tupian/106.gif"),
               bb:"。小可~"
           }],
           xiaogui2:[{
               aa:require("../tupian/201.gif"),
               bb:"上单霸主~~霸哥"
           },{
               aa:require("../tupian/202.gif"),
               bb:"新人主播（啾咪），求关注"
           },{
               aa:require("../tupian/203.gif"),
               bb:"洞主~~凯利"
           },{
               aa:require("../tupian/204.gif"),
               bb:"uzi。"
           },{
               aa:require("../tupian/205.gif"),
               bb:"PDD"
           },{
               aa:require("../tupian/206.gif"),
               bb:"淑怡小妹..."
           }]
           
       }
   }
}
</script>

<style lang="scss">
#xx{
    color: rgb(255, 94, 0);
}
</style>