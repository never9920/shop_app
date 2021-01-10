<template>
<div>
  <slip @makesure="makesure">
  <div id="citem">
      <div class="iselector">
          <checkbutton :ischeck="product.checked" @click.native="checkbtn"></checkbutton>
      </div>
      <div class="iimg" @click="todetail">
          <img :src="product.image" alt="商品">
      </div>
      <div class="iinfo">
          <div class="ititle">{{product.title}}</div>
          <div class="idesc">尺寸：{{product.size}}</div>
          <div class="idesc">颜色：{{product.color}}</div>
          <div class="ibottom">
              <div class="iprice left">¥{{product.price}}</div>
              <button class="jia right" @click="inc">+</button>
              <div class="icount right">{{product.count}}</div>
              <button class="jian right" @click="dec">-</button>
          </div>
      </div>
  </div>
  </slip>
  </div>
</template>

<script>
import checkbutton from './checkbutton'
import {mapActions} from 'vuex'
import slip from '../../../components/common/slip/slip'
export default {
name:"cartitem",
props:{
    product:{
        type:Object,
        default:{}
    }
},
  data () {
    return {
    };
  },

  components: {
      checkbutton,
      slip
  },

  computed: {},

  methods: {
      ...mapActions(['increase','decrease']),
      inc(){
          this.increase(this.product)
      },
      dec(){
          if(this.product.count!==1){
              this.decrease(this.product)
          }else if(this.product.count === 1){
              this.$bus.$emit('makesure',this.product)
          }
      },
      checkbtn(){
          this.product.checked =!this.product.checked;
      },
      todetail(){
          this.$router.push('./detail/' + this.product.iid)
      },
      makesure(){
          this.$bus.$emit('makesure',this.product)
      }
  }
}

</script>
<style scoped>
#citem{
    width:375px;
    display: flex;
    font-size: 0;
    padding: 5px;
    border-bottom: 1px solid #ccc;
}
.iselector{
    width:14%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.ititle,.idesc{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
.idesc{  
    margin-top: 5px!important
}
.iimg{
    padding: 5px;
}
.iimg img{
    width: 80px;
    height: 100px;
    display: block;
    border-radius: 5px;
}
.iinfo{
    font-size: 17px;
    color: #333;
    padding: 5px 10px;
    position: relative;
    overflow: hidden;
}
.iinfo .idesc{
    font-size: 14px;
    color: #666;
    margin-top: 15px;
}
.ibottom{
    margin-top: 10px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    right:10px;
}
.ibottom .iprice{
    color:orangered;
}
.jia,.jian{
    width: 20px;
    text-align: center;
    border-radius: 5px;
    border: 5px;
    margin: 0 5px;
}
.icount{
    width: 20px;
    text-align: center;
}
</style>