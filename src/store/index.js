import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

const state = {
    cartlist: []
}

const store = new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    plugins: [createPersistedState({
        storage: window.sessionStorage
    })]
})

export default store