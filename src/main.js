import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyLoad from 'vue-lazyload'
import store from './store'
import toast from 'components/common/toast'
import 'lib-flexible/flexible.js'
import FastClick from 'fastclick'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.use(toast)

Vue.use(VueLazyLoad, {
    loading: require('./assets/img/common/jiazai.jpg')
})

FastClick.attach(document.body)

new Vue({
    render: h => h(App),
    router,
    store
}).$mount('#app')