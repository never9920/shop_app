<template>
  <div>
      <!--<li v-for="(item,index) in cartlist" :key="index">{{item}}</li> -->
      <cartitem v-for="(item,index) in cartlist" :key="index" :product="item"></cartitem>    
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import cartitem from './cartitem'

export default {
name:"cartlist",
  data () {
    return {
    };
  },

  components: {
    cartitem
  },

  computed: {
      ...mapGetters(['cartlist'])
  },

  methods: {}
}

</script>
<style scoped>
</style>