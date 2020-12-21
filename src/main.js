import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/jiazai.jpg')
})

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')