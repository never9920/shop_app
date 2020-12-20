<template>
  <div class="pinfo" v-if="Object.keys(paraminfo).length!==0">
      <table v-for="(table,index) in paraminfo.sizes"
      class="isize" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
          <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
      </table>
      <table class="iparam">
          <tr v-for="(info,index) in paraminfo.infos" :key="index">
              <td class="ipkey">{{info.key}}</td>
              <td class="pvalue">{{info.value}}</td>
          </tr>
      </table>
      <div class="iimg" v-if="paraminfo.image.length!==0">
          <img v-lazy="paraminfo.image" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:"detailparam",
props:{
    paraminfo:{
        type:Object
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
.pinfo{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f5;
}
.pinfo table{
    width: 100%;
    border-collapse: collapse;
}
.pinfo table tr{
    height: 42px;
}
.pinfo table tr td{
    border-bottom: 1px solid rgba(100,100,100,.1);
}
.ipkey{
    width: 95px;
}
.iparam{
    border-top: 1px solid rgba(0,0,0,.1);
}
.pvalue{
    color: red;
}
.iimg img{
    width: 100%;
}
</style>