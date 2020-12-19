<template>
<!-- ref在组件中，通过this.$refs.refname获得的是组件对象 -->
<!-- ref在普通元素中，通过this.$refs.refname获得的是元素对象 -->
  <div class="wrapper" ref="aaa">
    <div class="content">
     <slot></slot>      
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
name:"scroll",
props:{
  probeType:{
    type:Number,
    default:1
  },
  pullUpLoad:{
    type:Boolean,
    default:false
  }
},
  data () {
    return {
      scroll:null
    };
  },
mounted(){
this.scroll=new BScroll(this.$refs.aaa,{
    probeType:this.probeType,
    pullUpLoad:this.pullUpLoad,
    click:true
})
if(this.probeType === 2 ||this.probeType === 3){
  this.scroll.on('scroll',(position)=>{
  //console.log(position)
  this.$emit('scroll',position)
})
}

if(this.pullUpLoad){
 this.scroll.on('pullingUp',()=>{
  //console.log('jiazai')
  this.$emit('pullingUp') 
  })
}
/*this.scroll.refresh()*/
},
  components: {},

  computed: {},

  methods: {
    scrollTo(x,y,time=500){
      this.scroll && this.scroll.scrollTo && this.scroll.scrollTo(x,y,time)
    },
    finishPullUp(){
      this.scroll && this.scroll.finishPullUp && this.scroll.finishPullUp()
    },
    refresh(){
      //console.log('-----')
      this.scroll && this.scroll.refresh && this.scroll.refresh()
    },
    getscrolly(){
      return this.scroll?this.scroll.y:0
    }
  }
}

</script>
<style scoped>
</style>