import Vue from 'vue'
import VueRouter from 'vue-router'

const home = () =>
    import ('../views/home/home')
const cart = () =>
    import ('../views/cart/cart')
const catagory = () =>
    import ('../views/catagory/catagory')
const profile = () =>
    import ('../views/profile/profile')
const detail = () =>
    import ('../views/detail/detail')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home'
    },
    {
        path: '/home',
        component: home
    },
    {
        path: '/cart',
        component: cart
    },
    {
        path: '/catagory',
        component: catagory
    },
    {
        path: '/profile',
        component: profile
    },
    {
        path: '/detail/:iid',
        component: detail
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}


export default router