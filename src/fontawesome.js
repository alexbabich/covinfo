import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSkullCrossbones } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSkullCrossbones)
Vue.component('font-awesome-icon', FontAwesomeIcon)
