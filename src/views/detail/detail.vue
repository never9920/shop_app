<template>
  <div id="detail">
    <detailnavbar class="detailnav" @titleclick="titleclick" ref="nav"></detailnavbar>
    <scroll class="content1" ref="scroll" :probe-type="3" @scroll="bscroll">
    <!--<ul class="bbar">
        <li v-for="(item,index) in $store.state.cartlist" :key="index">
          {{item}}
        </li>
    </ul>-->
    <detailswiper :topimg="topimg"></detailswiper>
    <detailbaseinfo :goods="goods"></detailbaseinfo>
    <detailshop :shop="shop"></detailshop>
    <detailgoods :detailinfo="detailinfo" @imageload="imageload"></detailgoods>
    <detailparam :paraminfo="paraminfo" ref="param"></detailparam>
    <detailcomment :commentinfo="commentinfo" ref="comment" @showimg="showimg"></detailcomment>
    <detailrecommend :recommendlist="recommendlist" ref="recommend"></detailrecommend>
    </scroll>
    <detailbottombar @addtocart="showpop" @add="add"></detailbottombar>
    <backtop @click.native="backtop" v-show="isshow"></backtop>
    <popup 
    v-show="pop" 
    @popclose="popclose" 
    :paraminfo="paraminfo" 
    :topimg="topimg" 
    :goods="goods"
    @tocart="tocart" 
    :mess="mess"></popup>
    <popupimg v-show="popimg" :image="image"  @popclose="close"></popupimg>
    <!--:为后者是父组件信息，前者是子组件的接受，后者传送给前者，一般用于父组件传给子组件；@前者为子组件发出的信息，后者为父组件的方法-->
  </div>
</template>

<script>
import detailnavbar from "./childcomps/detailnavbar"
import detailswiper from "./childcomps/detailswiper"
import detailbaseinfo from "./childcomps/detailbaseinfo"
import detailshop from "./childcomps/detailshop"
import detailgoods from "./childcomps/detailgoods"
import detailparam from "./childcomps/detailparam"
import detailcomment from "./childcomps/detailcomment"
import detailrecommend from "./childcomps/detailrecommend"
import detailbottombar from "./childcomps/detailbottombar"
import popup from './childcomps/popup'
import popupimg from './childcomps/popupimg'
//import backtop from "components/content/backtop/backtop"

import scroll from "components/common/better-scroll/scroll"

import {getdetail,Goods,Shop,Goodsparam,Comment,getrecommend} from "network/detail"


import {debounce} from 'common/utils'
import {imglistern,backtopp} from 'common/mixin'

import {mapActions} from 'vuex'

export default {
name:"detail",
  data () {
    return {
        iid : null,
        topimg:[],
        goods:{},
        shop:{},
        detailinfo:{},
        paraminfo:{},
        commentinfo:{},
        recommendlist:[],
        themetopy:[],
        currentindex:0,
        mess:'',
        show:false,
        pop:false,
        mess:'加入购物车',
        popimg:false,
        image:''
    };
  },
  mixins:[imglistern,backtopp],
  //混入：生命周期函数可以完全代替，但method中不能
  created(){
    this.iid= this.$route.params.iid
    getdetail(this.iid).then(res=>{
        const data = res.result
        //console.log(data)

        this.topimg = res.result.itemInfo.topImages;

        this.goods = new Goods(data.itemInfo,data.columns,data.shopInfo.services)
        //console.log(this.goods)

        this.shop = new Shop(data.shopInfo)
        //console.log(this.shop)

        this.detailinfo = data.detailInfo
        //console.log(this.detailinfo.detailImage)

        this.paraminfo = new Goodsparam(data.itemParams.info,data.itemParams.rule)

        //判断是否有评论
        if(data.rate.list){
          this.commentinfo = data.rate.list[0]
        }
        //console.log(data.rate.list[0])

        //this.recommendlist = data.shopInfo.categories

        /*this.$nextTick(()=>{
          this.themetopy = [];
          this.themetopy.push(0);
          this.themetopy.push(this.$refs.param.$el.offsetTop - 44);
          this.themetopy.push(this.$refs.comment.$el.offsetTop - 44);
          this.themetopy.push(this.$refs.recommend.$el.offsetTop - 44);
          console.log(this.themetopy)
        })*/
        //值不对：图片没有计算在内
        //created:不能获取元素
        //mounted：数据还没获取到
        //获取到数据的回调：dom还没渲染完
    }),
    getrecommend().then((res,error)=>{
      //console.log(res)
      if(error) return
      this.recommendlist = res.data.list
      //console.log(this.recommendlist)
    })
  },
  components: {
      detailnavbar,
      detailswiper,
      detailbaseinfo,
      detailshop,
      detailgoods,
      detailparam,
      detailcomment,
      detailrecommend,
      detailbottombar,
      scroll,
      popup,
      popupimg
  },

  computed: {},

  methods: {
    ...mapActions(['addcart']),
    imageload(){
      this.$refs.scroll.refresh();
      this.themetopy = [];
      this.themetopy.push(0);
      this.themetopy.push(this.$refs.param.$el.offsetTop-44);
      this.themetopy.push(this.$refs.comment.$el.offsetTop-44);
      this.themetopy.push(this.$refs.recommend.$el.offsetTop-44);
      this.themetopy.push(Number.MAX_VALUE)
      //console.log(this.themetopy)
    },
    bscroll(position){
      const positiony = -position.y
      this.isshow = (positiony)>1500
      /*if(this.themetopy[0]<-position.y<this.themetopy[1]){
        this.index = 0
      }else if(this.themetopy[1]<-position.y<this.themetopy[2]){
        this.index = 1
      }else if(this.themetopy[2]<-position.y<this.themetopy[3]){
        this.index = 2
      }else{
        this.index = 3
      }*/
      let length = this.themetopy.length
      for(let i = 0;i<length-1;i++){
        /*if(this.currentindex!==i&&((i <this.themetopy.length-1 && -position.y >= this.themetopy[i] && -position.y < this.themetopy[i+1])||(i=== this.themetopy.length-1 &&-position.y>=this.themetopy[i]))){
           this.currentindex = i;
           //console.log(this.currentindex)
           this.$refs.nav.currentindex = this.currentindex
        }*/
        if(this.currentindex!==i &&(positiony>=this.themetopy[i]&&positiony<this.themetopy[i+1])){
          this.currentindex = i;
          //console.log(this.currentindex)
          this.$refs.nav.currentindex = this.currentindex
        }
      }
    },
    titleclick(index){
      this.$refs.scroll.scrollTo(0,-this.themetopy[index])
    },
    tocart(arcv){
      //console.log('---')
      const product = {}
      product.image = this.topimg[0];
      product.title = this.goods.title;
      product.desc = this.goods.desc;
      product.price = this.goods.realPrice
      product.iid = this.iid;
      product.num = arcv.num;
      product.color = arcv.color;
      product.size = arcv.sizes;
      this.addcart(product).then(res=>{
        this.$toast.show(res,1500)
        this.pop= false
        if(this.mess === '购买'){
          this.$router.push('/cart')
        }
      })
    },
    popclose(){
      this.pop = false
    },
    showpop(){
      this.mess = '加入购物车'
      this.pop = true
    },
    add(){
      this.mess = '购买'
      this.pop = true
    },
    close(){
      this.popimg = false
    },
    showimg(item){
      this.image = item;
      this.popimg = true
    },
  },
  mounted(){
  },
  destroyed(){
    this.$bus.$off('load',this.imglistern)
  }
}

</script>
<style scoped>
#detail{
  position: relative;
  z-index: 9;
  background-color: #fff;
  height:100vh;
}
.detailnav{
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content1{
  height: calc(100% - 44px - 56px);
  width:100%;
  overflow: hidden;
}

</style>