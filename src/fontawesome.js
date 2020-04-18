import Vue from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import {} from '@fortawesome/free-brands-svg-icons'
import {} from '@fortawesome/free-regular-svg-icons'
import { faHistory, faAmbulance, faSkullCrossbones, faSpinner, faViruses, faHeartbeat, faHospitalAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHistory, faAmbulance, faSkullCrossbones, faSpinner, faViruses, faHeartbeat, faHospitalAlt)
Vue.component('font-awesome-icon', FontAwesomeIcon)
