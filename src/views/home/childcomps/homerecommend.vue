<!--  -->
<template>
  <div class="homerecommend">
      <div v-for="(item,index) in recommends" :key=index  class="recommend-item">
          <a :href="item.link">
              <img :src="item.image" alt="">
              <div>{{item.title}}</div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:"homerecommend",
props:{
     recommends:{
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

  components: {},

  computed: {},

  methods: {}
}

</script>
<style scoped>
.homerecommend{
    display: flex;
    width:100%;
    text-align: center;
    font-size: 12px;
    padding: 10px 0px 20px;
    border-bottom: 10px solid #eee;
}
.recommend-item{
    flex:1;
}
.recommend-item img{
    width:70px;
    height:70px;
    margin-bottom: 5px;
}
</style>