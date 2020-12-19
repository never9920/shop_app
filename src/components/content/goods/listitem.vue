<!--  -->
<template>
  <div class="goods-item" @click="itemclick">
      <img v-lazy="getimg" alt="" @load="imageload">
  <div class="goods-info">
      <p>{{goodsitem.title}}</p>
      <span class="price">¥{{goodsitem.price}}</span>
      <span class="collect">{{goodsitem.cfav}}</span>
  </div>
  </div>
</template>

<script>
export default {
name:"listitem",
props:{
    goodsitem:{
        type:Object,
        default(){
            return {}
        }
    }
},
  data () {
    return {
    };
  },

  components: {},

  computed: {
    getimg(){
      return this.goodsitem.img || this.goodsitem.image || this.goodsitem.show.img
    }
  },

  methods: {
    imageload(){
      /*事件总线*/
      /*1.在main。js添加 vue.prototype.$bus = new vue()*/
      /*2.$bus.$emit('名称',参数) 发射 $bus.$on('名称',回调函数(参数)) 接受*/
      this.$bus.$emit('load')
    },
    itemclick(){
      //this.$router.push('./detail/' + this.goodsitem.iid)//只可以home跳到detail，不能detail跳到detail
      /*this.$router.push({
        path:'/detail',
        query:{
        }
      })*/
      /*let iid = this.goodsitem.iid;
      this.$router.push({
        path:'/detail',
        query:{
          iid
          }
          })*/
         //console.log(this.goodsitem.item_id)
          if(this.goodsitem.item_id){
            this.$router.push(this.goodsitem.item_id);
            this.$router.go(0);
          }else{
            this.$router.push('./detail/' + this.goodsitem.iid)
          }
    },
  }
}

</script>
<style>
 .goods-item {
    padding-bottom: 40px;
    position: relative;
    width: 48%;
  }

  .goods-item img {
    width: 100%;
    border-radius: 5px;
  }

  .goods-info {
    font-size: 12px;
    position: absolute;
    bottom: 5px;
    left: 0;
    right: 0;
    overflow: hidden;
    text-align: center;
  }

  .goods-info p {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 3px;
  }

  .goods-info .price {
    color: var(--color-high-text);
    margin-right: 20px;
  }

  .goods-info .collect {
    position: relative;
  }

  .goods-info .collect::before {
    content: '';
    position: absolute;
    left: -15px;
    top: -1px;
    width: 14px;
    height: 14px;
    background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
  }
</style>