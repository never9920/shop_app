<template>
  <div class="bbar">
    <div class="bdiv"> 
      <checkbutton class="cbutton" :ischeck="checked" @click.native="cclick"></checkbutton>
      <span>全选</span>
    </div>
    <div class="price">
      合计：{{totalprice}}
    </div>
    <div class="calculate" @click="calc">
      去结算:({{checklength}})
    </div>
  </div>
</template>

<script>
import checkbutton from './checkbutton'
export default {
name:"cartbuttom",
  data () {
    return {
    };
  },

  components: {
    checkbutton
  },

  computed: {
    totalprice(){
      return '¥' + this.$store.getters.cartlist.filter(item=>{
        return item.checked
      }).reduce((preValue,item)=>{
        return preValue + item.price * item.count
      },0).toFixed(2)
    },
    checklength(){
      return this.$store.getters.cartlist.filter(item => item.checked).length
    },
    checked(){
      if(this.$store.getters.cartlist.length === 0) return false
      return !(this.$store.getters.cartlist.filter(item=>!item.checked).length)
      //return !(this.$store.getters.cartlist.find(item=>!item.checked))
      //return !this.$store.getters.cartlist.some(item=>!item.checked)
      //find会返回undefined（找不到）       some只会返回Boolen值
      
      /*let ischeck = false;
      for(let item of this.$store.getters.cartlist){
        if(!item.checked){
          return false
        }
      }
      return true*/
    }
  },

  methods: {
    cclick(){
      if(this.checked){
        this.$store.getters.cartlist.forEach(item => item.checked = false);
      }else{
        this.$store.getters.cartlist.forEach(item => item.checked = true);
      }
    },
    calc(){
      if(!this.$store.getters.cartlist.some(item=>item.checked)){
        this.$toast.show('请选择购买的商品',1500)
      }
    }
  }
}

</script>
<style scoped>
.bbar{
  height: 40px;
  background-color: #eee;
  position: relative;
  line-height: 40px;
  display: flex;
}
.bdiv{
  display: flex;
  align-items: center;
  margin: 0 5px;
  width: 70px;
}
.cbutton{
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 0 5px;
}
.price{
  margin-left:20px;
  flex: 1;
  text-align:left;
  color:slateblue;
}
.calculate{
  background-color:orange;
  width: 80px;
  text-align: center;
  color: white;
}
</style>