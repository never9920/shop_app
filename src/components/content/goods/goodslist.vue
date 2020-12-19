<!--  -->
<template>
  <div class="goods">
      <listitem v-for="(item,index) in goods" :key="index" :goodsitem="item"/>
  </div>
</template>

<script>
import listitem from './listitem'
export default {
name:"goodslist",
props:{
    goods:{
        type:Array,
        default:[]
    }
},
  data () {
    return {
    };
  },

  components: {
      listitem
  },

  computed: {},

  methods: {},
  
}

</script>
<style>
.goods{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2px;
}

</style>