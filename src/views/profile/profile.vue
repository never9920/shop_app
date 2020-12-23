<!--  -->
<template>
  <div id="profile">
    <navbar class="profile-bar">
      <div slot="center">我的</div>
    </navbar>
    <userinfo></userinfo>
    <section class="account">
      <div class="item">
        <div class="number">
        <span class="balance">0.00 元</span>
        </div>
        <div class="info">我的余额</div>
      </div>
      <div class="item">
        <div class="number">
        <span class="balance">0 个</span>
        </div>
        <div class="info">我的优惠</div>
      </div>
      <div class="item">
        <div class="number">
        <span class="balance">0 分</span>
        </div>
        <div class="info">我的积分</div>
      </div>
    </section>
    <listview :list="orderlist" class="order"></listview>
    <listview :list="servicelist" class="service"></listview>
  </div>
</template>

<script>
import navbar from 'components/common/navbar/navbar'
import userinfo from './childcomps/userinfo'
import listview from './childcomps/listview'
export default {
components: {
  navbar, 
  userinfo,
  listview
},
name:"profile",
  data () {
    return {
      orderlist: [
          {icon: '#order', iconColor: '#ff8198', info: '我的消息'},
          {icon: '#point', iconColor: '#fc7b53', info: '积分商城'},
          {icon: '#vip', iconColor: '#ffc636', info: '会员卡'},
        ],
        servicelist: [
          {icon: '#service', iconColor: '#ff8198', info: '我的购物车'},
          {icon: '#download', iconColor: '#ff8198', info: '下载购物APP'},
        ]
    };
  }
}

</script>
<style scoped>
#profile {
    background-color: #f2f2f2;
}
.profile-bar{
  background-color:var(--color-tint);
  color: white;
}

.account {
    display: flex;
}

.item {
    width: 100%;
    background-color: #fff;
    margin-right: 1px;
    text-align: center;
}

.item:last-of-type {
    margin-right: 0;
}

.item {
    color: #666;
    font-size: 13px;
    padding: 18px;
}

.item .balance {
    font-size: 24px;
    font-weight: 700;
    color: #ff5f3e;
}

.info {
    margin-top: 6px;
}

.order, .service {
    margin-top: 12px;
}
</style>