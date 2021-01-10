import {
    ADD_COUNTER,
    ADD_CART,
    DEL_CART,
    DECREASE,
    INCREASE
} from './mutation-types'


export default {
    //mutations唯一目标是修改state中状态
    //mutations每个方法尽可能做的事情要单一
    [ADD_COUNTER](state, payload) {
        payload.count = payload.count + payload.num
    },
    [ADD_CART](state, payload) {
        payload.checked = true
        state.cartlist.push(payload)
    },
    [DEL_CART](state, payload) {
        state.cartlist.map((item, index) => {
            if (item.iid === payload.iid && item.size === payload.size && item.color === payload.color) {
                state.cartlist.splice(index, 1)
            }
        })
    },
    [DECREASE](state, payload) {
        state.cartlist.map((item, index) => {
            if (item.iid === payload.iid && item.size === payload.size && item.color === payload.color) {
                item.count--
            }
        })
    },
    [INCREASE](state, payload) {
        state.cartlist.map((item, index) => {
            if (item.iid === payload.iid && item.size === payload.size && item.color === payload.color) {
                item.count++
            }
        })
    }
}