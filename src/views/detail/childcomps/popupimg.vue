<template>
  <div class="popup" @click="popclose">
      <div class="cart" @click.stop>
          <img v-lazy="image">
      </div>
  </div>
</template>

<script>
export default {
name:"popupimg",
  data () {
    return {
    };
  },

  props:{
      image:{
          type:String
      }
  },

  components: {},

  computed: {},

  methods: {
      popclose(){
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
    position: relative;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    border-radius: 10px;
}
.cart img{
    width: 100%;
    border-radius: 10px;
}
</style>