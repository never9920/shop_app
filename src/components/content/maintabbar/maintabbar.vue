<template>
  <tabbar>
      <tabbaritem path="/home" activecolour="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="">
        <img slot="item-icon-self" src="~assets/img/tabbar/home_active.svg" alt="">
        <div slot="item-text">首页</div>
      </tabbaritem>
      <tabbaritem path="/catagory" activecolour="red">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="">
        <img slot="item-icon-self" src="~assets/img/tabbar/category_active.svg" alt="">
        <div slot="item-text">分类</div>
      </tabbaritem>
      <tabbaritem path="/cart" activecolour="skyblue">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="">
        <img slot="item-icon-self" src="~assets/img/tabbar/shopcart_active.svg" alt="">
        <div slot="item-text">购物车</div>
      </tabbaritem>
      <tabbaritem path="/profile" activecolour="blue">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="">
        <img slot="item-icon-self" src="~assets/img/tabbar/profile_active.svg" alt="">
        <div slot="item-text">我的</div>
      </tabbaritem>
    </tabbar>
</template>

<script>
import tabbar from 'components/common/tabbar/tabbar'
import tabbaritem from 'components/common/tabbar/tabbaritem'
export default {
name:"maintabbar",
  data () {
    return {
    };
  },

  components: {
      tabbar,
      tabbaritem
  },

  computed: {},

  methods: {}
}

</script>
<style>
</style>