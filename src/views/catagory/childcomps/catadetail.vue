<template>
  <div class="rinfo">
      <gridview>
          <listitem v-for="(item,index) in recommendlist" :key="index" :goodsitem="item"></listitem>
          <!--<img v-for="(item,index) in recommendlist" :key="index" v-lazy="item.image" @load="loadimg" class="cp">-->
      </gridview>
  </div>
</template>

<script>
import listitem from 'components/content/goods/listitem'
import gridview from 'components/common/gridview/gridview'
export default {
name:"detailrecommend",
props:{
    recommendlist:{
        type:Array,
        default:[]
    }
},
  data () {
    return {
    };
  },

  components: {
      listitem,
      gridview
      },
  computed: {},

  methods: {},

}

</script>
<style scoped>
.rinfo{
    padding: 5px;
}
/*.cp{
    width: 40px;
    height: 40px;
}*/
</style>