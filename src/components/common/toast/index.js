import Toast from './toast'

const obj = {}

obj.install = function(Vue) {
    //document.body.appendChild(toast.$el)
    //Vue.prototype.$toast = toast
    const toastcontrustor = Vue.extend(Toast)

    const toast = new toastcontrustor()

    toast.$mount(document.createElement('div'))

    document.body.appendChild(toast.$el)

    Vue.prototype.$toast = toast
}

export default obj