<template>
  <div class="popup" @click="popclose">
      <div class="cart" @click.stop>
          <div class="title">提示</div>
          <div class="center">是否要删除该商品</div>
          <div class="bottom">
              <div class="left" @click="popclose">取消</div>
              <div class="right" @click="sure">确认</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
name:"popupdel",
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
      popclose(){
          this.$emit('popclose')
      },
      sure(){
          this.$emit('sure')
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
    position: relative;
    width: 80%;
    height: 30%;
    top: 50%;
    margin: 0 auto;
    transform: translate(0,-50%);
    border-radius: 10px;
    background-color: #fff;
    overflow: hidden;
}
.title{
    font-size: 20px;
    color: var(--color-tint);
    text-align: center;
    padding: 10px;
    border-bottom: solid 1px;
}
.center{
  height: 110px;
  text-align: center;
  font-size: 15px;
  line-height: 110px;
}
.bottom{
    display: flex;
}
.left,.right{
    flex:1;
    text-align: center;
    font-size: 15px;
    border-top: solid 1px;
    padding: 10px 0;
    height: 60px;
}
.left{
    border-right: solid 1px;
}
</style>