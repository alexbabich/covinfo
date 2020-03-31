import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

// TODO need to refactoring and remove unneeded

export default new Vuex.Store({
  state: {
    usersData: [],
    usersData2: [],
    countryList: []
  },
  mutations: {
    SAVE_USERS (state, usersData) {
      state.usersData = usersData
    },
    SAVE_USERS2 (state, usersData2) {
      state.usersData2 = usersData2
    },
    COUNTRY_LIST (state, countryList) {
      state.countryList.push(countryList.country)
    }
  },
  actions: {
    loadCountry ({ commit }) {
      // api v1
      axios.get('https://corona.lmao.ninja/countries').then(result => {
        result.data.map(resp => {
          commit('COUNTRY_LIST', resp)
        })
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadUsers ({ commit }) {
      // api v1
      axios.get('https://corona.lmao.ninja/all').then(result => {
        commit('SAVE_USERS', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    loadUsers2 ({ commit }) {
      // api v1
      axios.get('https://corona.lmao.ninja/countries').then(result => {
        commit('SAVE_USERS2', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
      // api v2
      // axios.get('https://corona.lmao.ninja/v2/jhucsse').then(result => {
      //   commit('SAVE_USERS2', result.data)
      // }).catch(error => {
      //   throw new Error(`API ${error}`)
      // })
    }
  },
  modules: {
  },
  getters: {
    getCountryByName: state => country => {
      return state.usersData2.find(item => item.country === country)
    }
  }
})
