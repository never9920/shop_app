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
const login = () =>
    import ('../views/login/login')

Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/home',
    },
    {
        path: '/home',
        component: home,
        meta: {
            isshow: true
        }
    },
    {
        path: '/cart',
        component: cart,
        meta: {
            isshow: true
        }
    },
    {
        path: '/catagory',
        component: catagory,
        meta: {
            isshow: true
        }
    },
    {
        path: '/profile',
        component: profile,
        meta: {
            isshow: true
        }
    },
    {
        path: '/detail/:iid',
        component: detail
    },
    {
        path: '/login',
        component: login
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