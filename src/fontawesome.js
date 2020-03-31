import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faSkullCrossbones, faSpinner, faProcedures, faHeartbeat } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faSkullCrossbones, faSpinner, faProcedures, faHeartbeat)
Vue.component('font-awesome-icon', FontAwesomeIcon)
