<template>
  <div>
      <navbar>
          <div slot="left" class="back" @click="backclick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
          <div slot="center" class="title">
              <div  v-for="(item,index) in titles" 
              :key="index"
              class="ditem"
              :class="{active:index===currentindex}"
              @click="titleclick(index)">
              {{item}}
              </div>
          </div>
      </navbar>
  </div>
</template>

<script>
import navbar from "components/common/navbar/navbar"
export default {
name:"detailnavbar",
  data () {
    return {
        titles:['商品','参数','评论','推荐'],
        currentindex:0,
    };
  },

  components: {
      navbar
  },

  computed: {},

  methods: {
      titleclick(index){
         this.currentindex=index;
         this.$emit('titleclick',index)
      },
      backclick(){
          this.currentindex = 0
          this.$router.back();
      }
  }
}

</script>
<style scoped>
.title{
    display: flex;
    font-size: 14px;
}
.ditem{
    flex:1;
}
.active{
    color: var(--color-high-text);    
}
.back img{
    margin-top: 11px;
}
</style>