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
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import cartlist from './childcomps/cartlist'
import cartbuttom from './childcomps/cartbuttom'

import {mapGetters} from 'vuex'

import scroll from 'components/common/better-scroll/scroll.vue'
export default {
name:"cart",
components:{
  navbar,
  cartlist,
  scroll,
  cartbuttom
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