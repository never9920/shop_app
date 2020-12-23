<template>
  <div id="toast" v-show="isshow">
      <div>{{message}} </div>
  </div>
</template>

<script>
export default {
name:"toast",
  data () {
    return {
      message:'',
      isshow:false,
    };
  },
  props:{
      /*message:{
          type:String,
      },
      isshow:{
          type:Boolean,
          default:false,
      }*/
  },

  components: {},

  computed: {},

  methods: {
    show(message,duration=2000){
      //duration = duration || 2000;
      this.isshow = true;
      this.message = message;

      setTimeout(() => {
        this.isshow = false;
        this.message = ''
      }, duration);
    }
  }
}

</script>
<style scoped>
#toast{
    position: fixed;
    top:50%;
    left:50%;
    background-color:rgba(0,0,0,0.75);
    color: white;
    padding: 8px 10px;
    transform: translate(-50%,-50%);
    border-radius: 5px;
    font-size: 15px;
    z-index: 99;
}
</style>