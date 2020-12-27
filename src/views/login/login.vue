<template>
<div id="login">
  <navbar class="login-bar">
      <div slot="left" class="back" @click="backclick">
              <img src="~assets/img/common/back.svg" alt="">
          </div>
      <div slot="center">登录</div>
      </navbar>
      <div class="image">
          <img src="~assets/img/login/login.jpg">
      </div>
      <tabcontrol :titles="['登录','注册']"   
                   @tabclick="tabclick1"
                   class="control">
    </tabcontrol>
    <div v-if="current===0" class="choice">
        <tabcontrol :titles="['短信登录','密码登录']" @tabclick="tabclick2" class="ways"></tabcontrol>
        <div v-if="way===0">
            <mobile></mobile>
        </div>
        <div v-else class="password">
            <message></message>
        </div>
    </div>
    <div v-else class="loginuser">
        <create></create>
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
import mobile from './childcomps/mobile'
import message from './childcomps/message'
import create from './childcomps/create'
export default {
name:"login",
  data () {
    return {
        current:0,
        way:0,
        phone:'',
    };
  },

  components: {
      navbar,
      tabcontrol,
      mobile,
      message,
      create
  },

  compute: {},

  methods: {
      backclick(){
          this.$router.back();
          this.current=0;
          this.way=0
      },
      tabclick1(index){
          this.current=index
      },
      tabclick2(index){
          this.way=index
      },
  } 
}

</script>
<style scoped>
#login{
    width: 100%;
    height: 100vh;
    background-image:url("~assets/img/login/bg.jpg")
}
.login-bar{
    background-color: var(--color-tint);
    color: white;
}
.back img{
    margin-top: 8px;
    height: 30px;
    width: 30px;
}
.image{
    height: 120px;
    width: 120px;
    border: 1px solid #eee;
    border-radius: 50%;
    padding: 10px;
    box-shadow: 0 0 10px #eee;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -0);
    top: 10%;
    background-color: #fff;
}
.image img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: #eee;
}
.control{
    position: absolute;
    top:200px;
    width:80%;
    left:10%;
    background-color: rgba(0, 0, 0, 0);
}
.choice,.loginuser{
    position: absolute;
    top:250px;
    width:60%;
    left:20%;
}
.ways{
    margin-bottom: 25px;
    background-color: rgba(0, 0, 0, 0);
}
</style>