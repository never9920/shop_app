<template>
  <div class="popup" @click="popclose">
      <div class="cart" @click.stop>
          <div class="image">
              <img :src="topimg[0]">
              <span>￥{{goods.realPrice}}</span>
          </div>
          <div class="word">
          <div>
          <div class="color">颜色</div>
          <div v-for="value in color" :key="value">{{value}}</div>
          </div>
          <div>
          <div class="sizes">尺寸</div>
          <div v-for="value in sizes" :key="value" >{{value}}</div>
          </div>
          </div>
          <button>提交</button>
      </div>
  </div>
</template>

<script>
export default {
name:"popup",
  data () {
    return {
        color:[],
        sizes:[]
    };
  },
  props:{
    paraminfo:{
        type:Object
    },
    topimg:{
        type:Array,
        default(){
            return []
        }
    },
    goods:{
        type:Object
    }
  },

  watch:{
      paraminfo(val){
        //console.log(val.infos)
        for(let i=0;i<val.infos.length;i++){
            if(val.infos[i].key === '颜色'){
                this.color = val.infos[i].value.split(',')
                //console.log(this.color)
            }else if(val.infos[i].key === '尺寸'){
                this.sizes = val.infos[i].value.split(',')
                //console.log(this.sizes)
            }else if(val.infos[i].key === '尺码'){
                this.sizes = val.infos[i].value.split(',')
                //console.log(this.sizes)
            }
        }
      }
  },

  components: {},

  computed: {},

  methods: {
      popclose(){
          //console.log(this.paraminfo)
          this.$emit('popclose')
      },
  }
}

</script>
<style scoped>
.popup{
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: fixed;
    z-index: 99;
    background-color:rgba(0,0,0,0.3);
}
.cart{
    position: fixed;
    height:50%;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
}
.image{
    margin-bottom: 30px;
}
.image img{
    width: 80px;
    height: 100px;
    position: relative;
    left: 30px;
    top: 10px;
}
.image span{
    position: relative;
    font-size: 25px;
    left: 100px;
    color: var(--color-high-text);
    top: -18px;
}
.color{
    position: relative;
    font-size: 15px;
    color: var(--color-high-text);
    left: 20px;
    margin-bottom: 10px;
}
.color div{
    display: flex;
    flex:1;
}
.sizes{
    position: relative;
    font-size: 15px;
    color: var(--color-high-text);
    left: 20px;
    margin-bottom: 10px;
}
</style>