import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(Vuex, VueAxios, axios)

// TODO need to refactoring and remove unneeded

export default new Vuex.Store({
  state: {
    allData: [],
    infoByCountry: [],
    countryList: []
  },
  mutations: {
    ALL_INFO (state, allData) {
      state.allData = allData
    },
    INFO_BY_COUNTRY (state, infoByCountry) {
      console.log(infoByCountry)
      state.infoByCountry = infoByCountry
    },
    COUNTRY_LIST (state, countryList) {
      state.countryList.push(countryList.country)
    }
  },
  actions: {
    allInfo ({ commit }) {
      // api v1
      axios.get('https://corona.lmao.ninja/all').then(result => {
        commit('ALL_INFO', result.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    },
    countrysInfo ({ commit }) {
      // api v1
      axios.get('https://corona.lmao.ninja/countries')
        // .then(result => {
        //   console.log(result)
        //   result.data.map(resp => {
        //     commit('COUNTRY_LIST', resp)
        //   })
        // })
        .then(result => {
          commit('INFO_BY_COUNTRY', result.data)
        })
        .catch(error => {
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
      return state.infoByCountry.find(item => item.country === country)
    }
  }
})
