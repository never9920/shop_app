<!--  -->
<template>
  <div id = "home">
    <navbar class="home-bar">
      <div slot="center">购物街</div>
    </navbar>
    <tabcontrol :titles="['流行','新款','精选']"   
    @tabclick="tabclick"
    ref="tab1"
    class="tabcon"
    v-show="isFixed"/>

    <scroll class="content" 
    ref="scroll" 
    :probe-type="3" 
    @scroll="contentscroll"
    :pull-up-load="true"
    @pullingUp="loadmore">
    <homeswiper :banners='banners' @swiperimg='swiperimg'></homeswiper>
    <homerecommend :recommends='recommends'></homerecommend>
    <feature/>
    <tabcontrol :titles="['流行','新款','精选']"   
    @tabclick="tabclick"
    ref="tab2"/>
    <goodslist :goods="showgoods"/>
    </scroll>
    

    <backtop @click.native="backclick" v-show="isshow"></backtop>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import goodslist from 'components/content/goods/goodslist'
import scroll from 'components/common/better-scroll/scroll'
import backtop from 'components/content/backtop/backtop'

import homeswiper from './childcomps/homeswiper'
import homerecommend from './childcomps/homerecommend'
import feature from './childcomps/feature'


import {getHomeMultidata,gethomegoods} from 'network/home'
import {debounce} from 'common/utils'
import {imglistern} from 'common/mixin'



export default {
name:"home",
components:{
  navbar,
  homeswiper,
  homerecommend,
  feature,
  tabcontrol,
  goodslist,
  scroll,
  backtop,
},
mixins:[imglistern],
data () {
    return {
       banners:[],
       recommends:[],
       goods:{
         'pop':{page:0,list:[]},
         'new':{page:0,list:[]},
         'sell':{page:0,list:[]},
       },
       currenttype:'pop',
       isshow:false,
       taboffsettop:0,
       isFixed:false,
    }
  },
  computed:{
    showgoods(){
      return this.goods[this.currenttype].list
    }
  },
  activated(){
    this.$refs.scroll.scrollTo(0,this.saveY,0.1)
    this.$refs.scroll.refresh()
  },
  deactivated(){
    this.saveY = this.$refs.scroll.getscrolly()
    //console.log(this.saveY)

    //取消全局监听
    this.$bus.$off('load',this.imglisterner)
  },
created () {
   this.getHomeMultidata();

   this.gethomegoods('pop')
   this.gethomegoods('new')
   this.gethomegoods('sell')


},
mounted(){
    /*const refresh = debounce(this.$refs.scroll.refresh,500)
     this.imglisterner = ()=>{
       refresh()
     }
     this.$bus.$on('load',this.imglisterner)*/
     /*console.log(this.$bus)*/
     /*console.log('------')*/
     /*this.$refs.scroll && this.$refs.scroll.refresh()*/
     //refresh()

   //所有组件都有一个属性$el：用于获取组件中的元素
   /*this.$refs.tab.$el.offsetTop没有完全加载图片，高度不对，过低*/



},
  methods:{
    tabclick(index){
      switch(index){
        case 0:
          this.currenttype='pop'
          break;
        case 1:
          this.currenttype='new'
          break;
        case 2:
          this.currenttype='sell'
          break;
      }
      this.$refs.tab1.currentindex = index;
      this.$refs.tab2.currentindex = index;
    },

    getHomeMultidata(){
      getHomeMultidata().then(res=>{
     //console.log(res);
    this.banners = res.data.banner.list;
    this.recommends = res.data.recommend.list;
   })
    },
    gethomegoods(type){
      const page = this.goods[type].page + 1
      gethomegoods(type,page).then(res=>{
     //console.log(res);
     this.goods[type].list.push(...res.data.list)
     this.goods[type].page+=1
     this.$refs.scroll.finishPullUp()
   })
   },
    backclick(){
      this.$refs.scroll.scrollTo(0,0)
    },
    contentscroll(position){
      this.isshow = (-position.y)>1000

      //吸顶(position:fixed)
      this.isFixed = (-position.y) > this.taboffsettop
    },
    loadmore(){
      /*console.log("jijazai")*/
      this.gethomegoods(this.currenttype)
      /*this.$refs.scroll.refresh()*/
    },
    swiperimg(){
      //console.log(this.$refs.tab.$el.offsetTop)
      this.taboffsettop = this.$refs.tab2.$el.offsetTop
    }

  },
  
}

</script>
<style scoped>
#home{
  /*padding-top: 44px;*/
  height: 100vh;
  position: relative;
  /*视口vh*/
}
.home-bar{
  background-color:var(--color-tint);
  color: white;
  /*position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;*/
}
/*.tabcontrol{
  position: sticky;
  top:44px;
  z-index: 9;
}在betterscoll中不起作用
*/
.content{
  overflow: hidden;
  position: absolute;
  top:44px;
  bottom: 49px;
}
/*.content{
 height: calc(100% - 93px);
 overflow: hidden;
 margin-top:44px;
}*/
.tabcon{
  position: relative;
  z-index: 9;
}
</style>