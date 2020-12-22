<template>
  <div>
      <div class="iselector" :class="{'actived':ischeck}">
          <img src="~/assets/img/cart/tick.svg" alt="">
      </div>
  </div>
</template>

<script>
export default {
name:"checkbutton",
props:{
    ischeck:{
        type:Boolean,
        default:true 
    }
},
  data () {
    return {
    };
  },

  components: {},

  computed: {},

  methods: {
  },
}

</script>
<style scoped>
.iselector{
    position: relative;
    margin: 0;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #ccc;
    cursor: pointer;
}
.actived{
    background-color: #ff8198;
    border-color: #ff8198;
}
</style>