<template>
  <div>
      <div v-if="Object.keys(commentinfo).length !==0" class="cinfo">
          <div class="iheader">
              <div class="htitle">用户评价</div>
              <div class="hmore">
                  更多
                  <i class="aright"></i>
              </div>
          </div>
          <div class="iuser">
              <img v-lazy="commentinfo.user.avatar" alt="">
              <span>{{commentinfo.user.uname}}</span>
          </div>
          <div class="idetail">
              <p>{{commentinfo.content}}</p>
              <div class="iother">
                  <span class="data">{{commentinfo.created | showdata}}</span>
                  <span>{{commentinfo.style}}</span>
              </div>
              <div class="iimgs">
                  <img v-lazy="item" v-for="(item,index) in commentinfo.images" :key="index" @click="showimg(item)">
              </div>
          </div>
          <div class="ex">
              <p>{{commentinfo.explain}} </p>
          </div>
      </div>
  </div>
</template>

<script>
import {formatDate} from "common/utils"
export default {
name:"detailcomment",
props:{
    commentinfo:{
        type:Object
    }
},
filters:{
    showdata:function(value){
       let data = new Date(value*1000);
       return formatDate(data,'yyyy-MM-dd')
    }
},
  data () {
    return {
    };
  },

  components: {
  },

  computed: {},

  methods: {
      /*imgload(){
          this.$emit("imageload")
      }*/
      showimg(item){
          this.$emit('showimg',item)
      },
  }
}

</script>
<style scoped>
.cinfo{
    padding: 5px 12px;
    color: #333;
    border-bottom: 5px solid #f2f5f5;
}
.iheader{
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid rgba(0,0,0,.1);
}
.htitle{
    float: left;
    font-size: 15px;
}
.hmore{
    float: right;
    margin-right: 10px;
    font-size: 13px;
}
.iuser{
    padding: 10px 0 5px;
}
.iuser img{
    width: 42px;
    height: 42px;
    border-radius: 50%;
}
.iuser span{
    position: relative;
    font-size: 15px;
    top: -15px;
    margin-left: 10px;
}
.idetail{
    padding: 0 5px 15px;
}
.idetail p{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
}
.idetail .iother{
    font-size: 12px;
    color: #999;
    margin-top: 10px;
}
.iother .data{
    margin-right: 8px;
}
.iimgs{
    margin-top: 10px;
}
.iimgs img{
    width: 70px;
    height: 70px;
    margin-right: 5px;
}
.ex{
    font-size: 14px;
    color: #777;
    line-height: 1.5;
}
</style>