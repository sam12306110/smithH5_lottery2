import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import actions from './actions'

const state = {
    foc: 0,
    a: 1,
    b: 2
}


const mutations = {

    Number(state) {
        state.foc++;
    }
}


const store = new Vuex.Store({
    state,
    mutations,
    actions
})

export default store