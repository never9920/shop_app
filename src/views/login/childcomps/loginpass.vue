<template>
  <div class="password">
    <input placeholder="请输入密码" class="put put1" :type=pass maxlength="6">
    <img src="~assets/img/login/eyeclose.svg" v-if="isactive" @click="change">
    <img src="~assets/img/login/eyeopen.svg" v-else @click="change">
  </div>
</template>

<script>
export default {
name:"loginpass",
  data () {
    return {
        isactive:true
    };
  },

  components: {},

  computed: {
    pass(){
      if(this.isactive) return 'password'
      return 'text'
    }
  },

  methods: {
    change(){
          this.isactive = !this.isactive
      }
  }
}

</script>
<style scoped>
.put{
    appearance:none ;
    outline: 0;
    width: 100%;
    height: 30px;
    border:0px solid #fff;
    border-radius: 20px;
    box-shadow:0 0 5px 2px rgba(0,0,0,0.1);
    padding: 0 30px 0 15px;
}
.put1{
    margin-top:13px;
}
.password img{
    position: relative;
    height:20px;
    width: 20px;
    left:190px;
    top:-25px
}
</style>