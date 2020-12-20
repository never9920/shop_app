<template>
  <div v-if="Object.keys(goods).length!==0" class="baseinfo">
    <div class="ititle">{{goods.title}}</div>
    <div class="iprice">
        <span class="nprice">{{goods.newPrice}}</span>
        <span class="oprice">{{goods.oldPrice}}</span>
        <span class="discount">{{goods.discount}}</span>
    </div>
    <div class="iother">
        <span>{{goods.columns[0]}}</span>
        <span>{{goods.columns[1]}}</span>
        <span>{{goods.services[goods.services.length-1].name}}</span>
    </div>
    <div class="iservice">
        <span class="isitem" v-for="index in goods.services.length-1" :key="index">
            <img :src="goods.services[index-1].icon">
            <span>{{goods.services[index-1].name}}</span>
        </span>
    </div>
  </div>
</template>

<script>
export default {
name:"detailbaseinfo",
props:{
    goods:{
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
.baseinfo{
    margin-top: 15px;
    padding:0 8px;
    color:#999;
    border-bottom: 5px solid #f2f5f5;
}
.ititle{
    color:#222
}
.iprice{
    margin-top:10px
}
.iprice .nprice{
    font-size: 24px;
    color:var(--color-high-text)
}
.iprice .oprice{
    font-size: 13px;
    margin-left: 5px;
    text-decoration: line-through;
}
.iprice .discount{
    font-size: 12px;
    padding:2px 5px;
    color:white;
    background-color: var(--color-high-text);
    border-radius: 8px;
    margin-left: 5px;

    position: relative;
    top:-8px;
}
.iother{
    margin-top: 15px;
    line-height: 30px;
    display: flex;
    font-size: 13px;
    border-bottom: 1px solid rgba(100,10,100,.1);
    justify-content: space-between;
}
.iservice{
    display: flex;
    justify-content: space-between;
    line-height: 60px;
}
.isitem img{
    width: 14px;
    height: 14px;
    position: relative;
    top:2px;
}
.isitem span{
    font-size: 10px;
    color: #333;
}
</style>