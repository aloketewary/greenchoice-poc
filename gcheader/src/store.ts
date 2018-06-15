import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)
/* eslint-disable */
export default new Vuex.Store({
  state: {
    menus: []
  },
  getters: {
    getMenus: state => state.menus
  },
  mutations: {
    ADD_MENUS: (state, payload) => {
      state.menus = payload
    },
  },
  actions: {
  }
})
