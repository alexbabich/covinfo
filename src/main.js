import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import VueMoment from 'vue-moment'
import moment from 'moment-timezone'
import i18n from './i18n'
import './fontawesome'

Vue.use(VueI18n)

Vue.use(VueMoment, {
  moment
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
