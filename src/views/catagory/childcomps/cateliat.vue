<template>
<scroll id="content1">
  <div class="cata">
     <div v-for="(item,index) in cateliat" 
     :class="{active:index===cataindex}" 
     :key="index"
     class="catalist"
     @click="itemclick(index)">
         {{item.title}}
     </div>
  </div>
  </scroll>
</template>

<script>
import scroll from 'components/common/better-scroll/scroll.vue';
export default {
name:"catelist",
props:{
     cateliat:{
         type:Array,
         default(){
            return []
         }
     }
},
  data () {
    return {
        cataindex:0
    };
  },

  components: {scroll},

  computed: {},

  methods: {
      itemclick(index){
          this.cataindex=index;
          this.$emit('tabclick',index)
      }
  }
}

</script>
<style scoped>
/*.content{
    height: calc(100% - 44px - 49px);
    background-color:#eee;
    box-sizing: border-box;
    overflow: hidden;
}
.controlitem{
    text-align: center;
    height: 40px;
    line-height: 40px;
    width: 100%;
}
.controlitem.active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #eee;
    border-left: 3px solid var(--color-high-text);
}*/
#content1{
    background-color: #ffffff;
    height: 100%;
    width: 100px;
    box-sizing: border-box;
}
.catalist{
    height: 35px;
    width: 100%;
    text-align: center;
    line-height: 35px;
}
.catalist.active{
    font-weight: 700;
    color: var(--color-high-text);
    background-color: #f1f1f1;
    border-left: 3px solid var(--color-high-text);    
}
</style>