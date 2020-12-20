<template>
  <div class="shopinfo">
      <div class="stop">
          <img v-lazy="shop.logo">
          <span class="title">{{shop.name}}</span>
      </div>
      <div class="smiddle">
          <div class="smitem smleft">
              <div class="isells">
                  <div class="scount">
                      {{shop.sells | sellCountFilter}}
                  </div>
                  <div class="stext">总销量</div>
              </div>
              <div class="igoods">
                  <div class="gcount">
                      {{shop.goodsCount}}
                  </div>
                  <div class="gtext">全部宝贝</div>
              </div>
          </div>
          <div class="smitem smright">
              <table>
                  <tr v-for="(item,index) in shop.score" :key="index">
                      <td>{{item.name}}</td>
                      <td class="score" :class="{'score-better':item.isbetter}">{{item.score}}</td>
                      <td class="better" :class="{'better-more':item.isbetter}"><span>{{item.isbetter ? '高':'低'}}</span></td>
                  </tr>
              </table>
          </div>
      </div>
      <div class="sbottom">
          <div class="eshop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
name:"detailshop",
props:{
    shop:{
        type:Object,
        default:{
            return :{}
        }
    }
},
filters:{
    sellCountFilter:function (value){
        if(value<10000) return value;
        return (value/10000).toFixed(1) + '万'
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
.shopinfo{
    padding:25px 8px;
    border-bottom: 5px solid #f2f5f5;
    background-color: #fff;
}
.stop{
    line-height: 45px;
    display: flex;
    align-items: center;
}
.stop img{
    width: 45px;
    height: 45px;
    border-radius: 1px solid rgba(0,0,0,.1);
}
.stop .title{
    margin-left: 10px;
    vertical-align: center;
}
.smiddle{
    margin-top: 15px;
    display: flex;
    align-items: center;
}
.smitem{
    flex:1;
}
.smleft{
    display: flex;
    justify-content: space-evenly;
    color: #333;
    text-align: center;
    border-right: 1px solid rgba(0,0,0,.1);
}
.scount .gcount{
    font-size: 18px;
}
.stext .gtext{
    margin-top: 10px;
    font-size: 12px;
}
.smright{
    font-size: 13px;
    color: #333;
}
.smright table{
    width: 120px;
    margin-left: 30px;
}
.smright table td{
    padding:5px 0;
}
.smright .score{
    color:green;
}
.smright .score-better{
    color:red;
}
.smright .better span{
    background-color: green;
    color: white;
    text-align: center;
}
.smright .better-more span{
    background-color: red;
}
.sbottom{
    text-align: center;
    margin-top: 10px;
}
.eshop{
    display: inline-block;
    font-size: 14px;
    background-color: #f2f5f5;
    width:150px;
    height: 30px;
    text-align: center;
    line-height: 30px;
    border-radius: 10px;
}
</style>