<!--  -->
<template>
  <swiper class="swiper">
      <swiper-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="swiperimg">
        </a>
      </swiper-item>
    </swiper>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
name:"homeswiper",
props:{
    banners:{
        type:Array,
        default(){
            return []
        }
    }
},
components:{
    Swiper,
     SwiperItem
},
  data () {
    return {
      isload : false
    };
  },
methods:{
  swiperimg(){
    if(!this.isload){
      this.$emit('swiperimg')
      this.isload=true
      }
  }
}
}

</script>
<style scoped>
  .swiper{
    background-color: #fff;
  }
</style>