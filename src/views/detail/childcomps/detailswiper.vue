<template>
  <div>
      <swiper class="dswiper" v-if="topimg.length">
          <swiper-item v-for="(item,index) in topimg" :key="index" class="sitem">
              <img :src="item" alt="">
          </swiper-item>
      </swiper>
  </div>
</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
name:"detailswiper",
props:{
    topimg:{
        type:Array,
        default(){
            return []
        }
    }
},
  data () {
    return {
    };
  },

  components: {
      Swiper,
      SwiperItem
  },

  computed: {},

  methods: {}
}

</script>
<style scoped>
.sitem{
    height: 300px;
    text-align: center;
}
</style>