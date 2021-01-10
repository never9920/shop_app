<!--  -->
<template>
  <div class="cart">
    <navbar class="nbar">
      <div slot="center">购物车({{cartlength}})</div>
    </navbar>
    <scroll class="content" ref="scroll">
      <cartlist></cartlist> 
    </scroll>
    <cartbuttom></cartbuttom>
    <popupdel v-show="delsure" @popclose="popclose" @sure="sure"></popupdel>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import cartlist from './childcomps/cartlist'
import cartbuttom from './childcomps/cartbuttom'
import popupdel from './childcomps/popupdel'

import {mapGetters,mapActions} from 'vuex'

import scroll from 'components/common/better-scroll/scroll.vue'
export default {
name:"cart",
data(){
  return{
    delsure:false,
    delitem:{}
  }
},
components:{
  navbar,
  cartlist,
  scroll,
  cartbuttom,
  popupdel,
},
mounted(){
  this.$bus.$on('makesure',this.makesure)
},
computed:{
  ...mapGetters(['cartlength'])
  /*...mapGetters([
    length='cartlength'
  ])*/
},
activated(){
  this.$refs.scroll.refresh()
},
methods:{
  ...mapActions(['delcart']),
  popclose(){
    this.delsure = false
  },
  makesure(item){
    this.delsure = true
    this.delitem = item
  },
  sure(){
    this.delcart(this.delitem).then(res=>{
      this.$toast.show(res,1500)
      this.delsure = false
    })
  }
}
}

</script>
<style scoped>
.cart{
  height: 100vh;
}
.nbar{
  background-color:var(--color-tint);
  color: #fff;
}
.content{
  height:calc(100% - 44px - 49px - 40px);
  overflow: hidden;
  width:100%
}
</style>