<template>
  <div v-if="Object.keys(detailinfo).length !== 0" class="ginfo">
    <div class="idesc cfix">
      <div class="start"></div>
      <div class="desc">{{detailinfo.desc}}</div>
      <div class="end"></div>
    </div>
    <div class="ikey">{{detailinfo.detailImage[0].key}}</div>
    <div class="ilist">
      <img v-for="(item,index) in detailinfo.detailImage[0].list" :src="item" :key="index" alt="" @load="imgload">
    </div>
  </div>
</template>

<script>
export default {
name:"detailgoods",
props:{
  detailinfo:{
    type:Object
  }
},
  data () {
    return {
      counter:0,
      imageslength:0,
    };
  },

  components: {},

  computed: {},

  methods: {
    imgload(){
      if(++this.counter === this.imageslength){
        this.$emit('imageload')
      }
    }
  },
  watch:{
    detailinfo(){
      this.imageslength = this.detailinfo.detailImage[0].list.length
    }
  }
}

</script>
<style scoped>
.ginfo{
  padding:20px 0;
  border-bottom: 5px solid #f2f5f5;
  background-color: #fff;
}
.idesc{
  padding: 0 15px;
}
.idesc .start, .idesc .end{
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}
.idesc .start{
  float: left;
}
.idesc .end{
  float: right;
}
.idesc .start::before, .idesc .end::after{
  content:'';
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}
.idesc .end::after{
  right: 0;
}
.idesc .desc{
  padding: 15px 0;
  font-size: 14px;
}
.ikey{
  margin: 10px 0 10px 15px;
  color: #333;
  font-size: 15px;
  text-align: center;
}
.ilist img{
  width: 100%;
}
</style>