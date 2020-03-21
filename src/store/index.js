import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    usersData: []
  },
  mutations: {
    SAVE_USERS (state, usersData) {
      state.usersData = usersData
    }
  },
  actions: {
    loadUsers ({ commit }) {
      axios.get('https://corona.lmao.ninja/all').then(result => {
        commit('SAVE_USERS', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    }
  },
  modules: {
  },
  getters: {
  }
})
