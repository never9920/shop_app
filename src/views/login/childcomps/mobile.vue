<template>
  <div> 
    <loginphone></loginphone>
    <input placeholder="请输入验证码" class="put" type="password" maxlength="6">
    <div class="submit">
    <input type="checkbox" name="users" value="true" v-model="sure">
    <strong class="word">已同意<span>《用户服务协议》</span></strong>
    <div>
    <button class="last" :disabled="check">登录</button>
    </div>
    <div class="others">————其他登录方式————</div>
     <div class="loginimg">
        <img src="~assets/img/login/qq.jpg">
        <img src="~assets/img/login/weixin.jpg">
        <img src="~assets/img/login/weibo.jpg">
    </div>
    </div>
  </div>
</template>

<script>
import loginphone from "./loginphone"
export default {
name:"mobile",
  data () {
    return {
        sure:true,
    };
  },

  components: {
      loginphone
  },

  computed: {
      check(){
          return !this.sure
      },
    },

  methods: {}
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
.submit{
    margin-top: 30px;
    text-align: center;
}
.word{
    color:black;
}
.last{
    margin-top: 20px;
    width: 100%;
    background-color: var(--color-tint);
    color: #fff;
    font-size: 30px;
    border-radius: 15px;
    box-shadow: 0 9px #999;
}
.last:active {
  background-color: pink;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
.others{
    margin-top: 20px;
}
.loginimg{
    display: flex;
}
.loginimg img{
    flex:1;
    height: 30px;
    width: 30px;
    margin:10px 20px 0;
    border-radius: 15px;
}
</style>