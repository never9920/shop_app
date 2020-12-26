<template>
  <div class="bbar">
      <div class="bitem bleft">
          <div>
              <i class="icon service"></i>
              <span class="text">客服</span>          
          </div>
          <div>
              <i class="icon shop"></i>
              <span class="text">店铺</span>          
          </div>          
          <div>
              <i class="icon select"></i>
              <span class="text">收藏</span>          
          </div>          
      </div>
      <div class="bitem bright">
          <div class="cart" @click="addtocart">加入购物车</div>
          <div class="buy" @click="addtocart">购买</div>
      </div>
  </div>
</template>

<script>
export default {
name:"detailbottombar",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
      addtocart(){
          this.$emit('addtocart')
      }
  }
}

</script>
<style scoped>
.bbar{
    height: 56px;
    position: relative;
    background-color: #fff;
    display: flex;
    text-align:center;
}
.bitem{
    flex:1;
    display: flex;
}
.bitem>div{
    flex:1
}
.bleft .text{
    font-size: 13px;
}
.bleft .icon{
    display: block;
    width: 22px;
    height: 22px;
    margin: 10px auto 3px;
    background: url("~assets/img/detail/detail_bottom.png") 0 0/100%;
}
.bleft .service{
    background-position: 0 -54px;
}
.bleft .shop{
    background-position: 0 -98px;
}
.bright{
    font-size: 15px;
    color: white;
    line-height: 58px;
}
.bright .cart{
    background-color: #ffe817;
    color: #333;
}
.bright .buy{
    background-color: #f69;
}
</style>