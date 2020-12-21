import {
    ADD_COUNTER,
    ADD_CART
} from './mutation-types'

export default {
    addcart(context, payload) {
        /*let oldproduct = null;
        for (let item of state.cartlist) {
            if (item.iid === payload.iid) {
                oldproduct = item;
            }
        }
        if (oldproduct) {
            oldproduct.count += 1
        } else {
            payload.count = 1
            state.cartlist.push(payload)
        }*/


        /*let index = state.cartlist.indexOf(payload)

        if (index === -1) {
            payload.count = 1
            state.cartlist.push(payload)
        } else {
            let oldproduct = state.cartlist[index]
            oldproduct.count += 1
        }*/
        return new Promise((resolve, reject) => {
            let product = context.state.cartlist.find(function(item) {
                return item.iid === payload.iid
            })
            if (product) {
                context.commit(ADD_COUNTER, product)
                resolve('当前商品数量+1')
            } else {
                payload.count = 1
                    //context.state.cartlist.push(payload)
                context.commit(ADD_CART, payload)
                resolve('添加新商品到购物车')
            }
        })

    }
}