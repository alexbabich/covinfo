import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

export default new Vuex.Store({
  state: {
    allCountries: [],
    allContinents: [],
    countryList: []
  },
  mutations: {
    INFO_BY_CONTINENTS (state, allContinents) {
      state.allContinents = allContinents
    },
    INFO_BY_COUNTRY (state, allCountries) {
      state.allCountries = allCountries
    },
    COUNTRY_LIST (state, countryList) {
      state.countryList.push(countryList.country)
    }
  },
  actions: {
    infoByContinents ({ commit }) {
      axios.get('https://corona.lmao.ninja/v2/continents').then(result => {
        commit('INFO_BY_CONTINENTS', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    infoByCountries ({ commit }) {
      axios.get('https://corona.lmao.ninja/v2/countries')
        .then(result => {
          commit('INFO_BY_COUNTRY', result.data)
          result.data.map(resp => {
            commit('COUNTRY_LIST', resp)
          })
        })
        .catch(error => {
          throw new Error(`API ${error}`)
        })
    }
  },
  modules: {
  },
  getters: {
    getCountryByName: state => country => {
      return state.allCountries.find(item => item.country === country)
    }
  }
})
