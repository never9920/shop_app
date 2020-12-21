<template>
  <div class="aside">
      <div  v-for="(item,index) in showsubcata.list" :key="index" class="side">
        <a :href="item.link">
          <img :src="item.image" alt="">
          <div>{{item.title}} </div>
          </a>
      </div>
  </div>
</template>

<script>
export default {
name:"catagoods",
props:{
    showsubcata:{
        type:Object,
        default:{}
    }
},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
  },
}

</script>
<style scoped>
.aside{
  display: flex;
    width:100%;
    text-align: center;
    font-size: 12px;
    padding: 10px;
    border-bottom: 10px solid #f1f1f1;
    background-color: #fff;
    flex-wrap: wrap;
}
.side{
  flex:1;
  background-color: #fff;
}
.side img{
    width:80px;
    height:80px;
    margin-bottom: 5px;
}
</style>