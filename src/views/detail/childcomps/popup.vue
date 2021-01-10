<template>
  <div class="popup" @click="popclose">
      <div class="cart" @click.stop>
          <div class="image">
              <img :src="topimg[0]">
              <span>￥{{goods.realPrice}}</span>
          </div>
          <div class="word">
          <div class="one">
          <div class="color">颜色</div>
          <div class="colorch">
          <div v-for="(value,i) in color" :key="i" class="colorlabel" :class="{active:currentindex===i}" @click="choice(i)">{{value}}</div>
          </div>
          </div>
          <div class="one">
          <div class="color">尺寸</div>
          <div class="sizech">
          <div v-for="(value,i) in sizes" :key="i" class="sizelabel" :class="{active:current===i}" @click="change(i)">{{value}}</div>
          </div>
          </div>
          </div>
          <div class="two">
              <div class="num">
                  数量
              </div>
              <div class="change">
                  <button @click="decrease">-</button>
                  <input onkeyup="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}" onafterpaste="if(this.value.length==1){this.value=this.value.replace(/[^1-9]/g,'')}else{this.value=this.value.replace(/\D/g,'')}"  v-model="num">
                  <button @click="increase">+</button>
              </div>
          </div>
          <div class="empty">空白</div>
          <button class="button" @click="submit">{{mess}}</button>
      </div>
  </div>
</template>

<script>
export default {
name:"popup",
  data () {
    return {
        color:[],
        sizes:[],
        current:-1,
        currentindex:-1,
        arcv:{
            color:'',
            sizes:'',
            num:0
        },
        num:1
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
    },
    mess:{
        type:String
    }
  },

  beforeUpdate(){
      this.changetype()
  },

  components: {},

  computed: {},

  methods: {
      popclose(){
          //console.log(this.paraminfo)
          this.$emit('popclose')
          this.current=-1;
          this.currentindex=-1;
          this.num = 1
      },
      change(i){
          if(this.current === i){
              this.current = -1
          }else{
           this.current = i   
          }
      },
      choice(i){
          if(this.currentindex === i){
              this.currentindex = -1
          }else{
           this.currentindex = i   
          }
      },
      submit(arcv){
          if(this.current===-1||this.currentindex===-1){
              this.$toast.show('请选择商品')
          }else{
              this.arcv.sizes = this.sizes[this.current]
              this.arcv.color = this.color[this.currentindex]
              this.arcv.num = this.num
              //console.log(this.arcv)
              this.$emit('tocart',this.arcv)
              this.current=-1;
              this.currentindex=-1
              this.num = 1
          }
      },
      changetype(){
          for(let i=0;i<this.paraminfo.infos.length;i++){
            if(this.paraminfo.infos[i].key === '颜色'){
                this.color = this.paraminfo.infos[i].value.split(',')
                //console.log(this.color)
            }else if(this.paraminfo.infos[i].key === '尺寸'){
                this.sizes = this.paraminfo.infos[i].value.split(',')
                //console.log(this.sizes)
            }else if(this.paraminfo.infos[i].key === '尺码'){
                this.sizes = this.paraminfo.infos[i].value.split(',')
                //console.log(this.sizes)
            }
        }
      },
      decrease(){
          if(this.num!==1){
              this.num--
          }
      },
      increase(){
          this.num++
      }
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
    height:60%;
    bottom: 0px;
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    overflow: scroll;
}
.image{
    margin-bottom: 10px;
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
.sizech{
    display: flex;
}
.colorlabel{
    border: solid 1px;
    text-align: center;
    font-size: 15px;
    margin:10px 80px;
    padding: 10px 0;
    border-radius: 5px;
}
.one{
    margin-bottom: 10px;
}
.active{
    color:var(--color-high-text);
    border: solid 1px var(--color-high-text);
}
.sizelabel{
    flex: 1;
    border: solid 1px;
    text-align: center;
    margin: 0 15px;
    font-size: 15px;
    border-radius: 5px;
    padding: 5px 0;
}
.button{
    position: fixed;
    left:0;
    height: 50px;
    width: 100%;
    bottom: 0px;
    background-color:var(--color-high-text) ;
    color: white;
    border-radius: 20px;
}
.empty{
    height: 50px;
    text-align: center;
}
.two{
    display: flex;
    margin:20px 0;
    font-size: 15px;
}
.num{
    position: relative;
    color: var(--color-high-text);
    left: 20px;
    margin-bottom: 10px;
}
.change{
    margin-left:260px;
}
.change button{
    width:20px;
    background-color:rgba(0,0,0,0);
    border-radius: 5px;
}
.change input{
    width:30px
}
</style>