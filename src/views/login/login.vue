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
            <input placeholder="请输入号码" class="put" type="tel" maxlength="11" v-model="phone">
            <button :disabled="!rightphone" 
		            class="makesure"
                    :class="{phone: !rightphone}"
                    @click.prevent="getCode">
                    {{codetime>0 ? `已发送(${codetime}s)` : '获取验证码'}}
            </button>
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
        <div v-else class="password">
            <input placeholder="请输入号码/邮箱/用户名" class="put put2" maxlength="16">
            <input placeholder="请输入密码" class="put put1" :type=pass maxlength="6">
            <img src="~assets/img/login/eyeclose.svg" v-if="isactive" @click="change">
            <img src="~assets/img/login/eyeopen.svg" v-else @click="change">
            <div class="submit submit1">
            <input type="checkbox" name="users" value="true" v-model="sure">
            <strong class="word">已同意<span>《用户服务协议》</span></strong>
            <div>
            <button class="last" :disabled="check">登录</button>
            </div>
            <div class="others">————其他登录方式————</div>
            <div class="loginimg loginimg1">
                <img src="~assets/img/login/qq.jpg">
                <img src="~assets/img/login/weixin.jpg">
                <img src="~assets/img/login/weibo.jpg">
            </div>
            </div>
        </div>
    </div>
    <div v-else class="loginuser">
        <input placeholder="请输入用户名" class="put put2" maxlength="16">
        <input placeholder="请输入密码" class="put put2" :type=pass maxlength="6">
        <input placeholder="请输入号码" class="put put2" type="tel" maxlength="11" v-model="phone">
            <button :disabled="!rightphone" 
		            class="makesure"
                    :class="{phone: rightphone}"
                    @click.prevent="getCode">
                    {{codetime>0 ? `已发送(${codetime}s)` : '获取验证码'}}
            </button>
            <input placeholder="请输入验证码" class="put" type="password" maxlength="6">
            <div class="submit">
            <input type="checkbox" name="users" value="true" v-model="sure">
            <strong class="word">已同意<span>《用户服务协议》</span></strong>
            <div>
            <button class="last" :disabled="check">注册</button>
            </div>
          </div>
    </div>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import tabcontrol from 'components/content/tabcontrol/tabcontrol'
export default {
name:"login",
  data () {
    return {
        current:0,
        way:0,
        phone:'',
        codetime: 0,
        sure:true,
        isactive:false
    };
  },

  components: {
      navbar,
      tabcontrol
  },

  computed: {
      rightphone(){
        return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(this.phone)
      },
      check(){
          return !this.sure
      },
      pass(){
          if(this.isactive) return 'text'
          return 'password'
      }
  },

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
      getCode(){
          if(!this.codetime){
              this.codetime = 60
              const timer = setInterval(()=>{
                  this.codetime--
                  if (this.codetime<=0){
                        clearInterval(timer)
                    }
              },1000)  
          }
      },
      tabc(){
          console.log(this.sure)
      },
      change(){
          this.isactive = !this.isactive
      }
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
    left:150px;
    font-size:10px;
    top:-25px;
    background-color: white;
    color: black;
    border: none;
    text-align: center;
    text-decoration: none;
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
.put1{
    margin-top:13px;
}
.put2{
    margin-top:18px;
}
.password img{
    position: relative;
    height:20px;
    width: 20px;
    left:190px;
    top:-25px
}
.submit1{
    position: relative;
    top:-20px
}
.loginimg1{
    position: relative;
    left:-188px;
}
.loginimg1 img{
    margin:0 20px;
    height: 30px;
    top:18px;
}
.phone{
    color:rgba(0, 0, 0, 0.5) ;
}
</style>