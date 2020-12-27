<template>
  <div>
    <input placeholder="请输入号码" class="put" type="tel" maxlength="11" v-model="phone">
        <button :disabled="!rightphone" 
		        class="makesure"
                :class="{phone: !rightphone}"
                @click.prevent="getCode">
                {{codetime>0 ? `已发送(${codetime}s)` : '验证码'}}
        </button>
  </div>
</template>

<script>
export default {
name:"loginphone",
  data () {
    return {
        phone:'',
        codetime: 0,
    };
  },

  components: {},

  computed: {
      rightphone(){
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
      },
    },

  methods: {
      getCode(){
          if(!this.codetime){
              this.codetime = 5
              const timer = setInterval(()=>{
                  this.codetime--
                  if (this.codetime<=0){
                        clearInterval(timer)
                    }
              },1000)  
          }
      },
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
.makesure{
    position: relative;
    left:160px;
    font-size:10px;
    top:-20px;
    background-color: white;
    color: black;
    border: none;
    text-align: center;
    text-decoration: none;
}
.phone{
    color:rgba(0, 0, 0, 0.5) ;
}
</style>