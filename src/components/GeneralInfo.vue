<template>
  <div class="container cov-general-page">
    <Loader
      :isLoading="isLoading"
    />
    <template v-if='checkRequestStatus == isLoading'>
      <!-- <p> {{ usersData }} </p> -->
      <!-- <div class="cov-world-time">
        <p><b>last update time </b> <span v-if="usersData.updated">{{ usersData.updated | moment("MMM Do, h:mm a") }}</span></p>
        <p><b>Los Angeles</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'America/Los_Angeles', 'MMM Do, h:mm a') }}</span></p>
        <p><b>London</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'Europe/London', 'MMM Do, h:mm a') }}</span></p>
        <p><b>Shanghai</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'Asia/Shanghai', 'MMM Do, h:mm a') }}</span></p>
      </div> -->
      <ul class="cov-general-list">
        <li class="item"><font-awesome-icon icon="history" /><b>last update time</b> <span>{{ usersData.updated | moment("MMM Do, h:mm a") }}</span></li>
        <li class="item"><font-awesome-icon icon="viruses" /><b>cases</b> <span>{{ usersData.cases }}</span></li>
        <li class="item"><font-awesome-icon icon="skull-crossbones" /><b>deaths</b> <span>{{ usersData.deaths }}</span></li>
        <li class="item"><font-awesome-icon icon="heartbeat" /><b>recovered</b> <span>{{ usersData.recovered }}</span></li>
      </ul>
      <br/>
      <ul class="cov-country-list">
        <li
          v-for="(item, index) in sortableCountry"
          :class="['item', {'is-active':item.country == isSelected}]"
          :key="index"
          @click="getCountryInfo(item.country)"
        >
          <img class="item-img" :src="item.countryInfo.flag" :alt="item.country" />
          <span class="item-title">{{item.country}}</span>
        </li>
      </ul>
      <div class="cov-country-info" v-if="Object.keys(this.selectCountry).length > 0">
        <p class="item-title">
          {{ this.selectCountry.country }}
        </p>
        <ul class="cov-info-list">
          <!-- <li class="item"><font-awesome-icon icon="viruses" /><b>updated</b> <span>{{ this.selectCountry.updated | moment("MMM Do, h:mm a") }}</span></li> -->
          <li class="item"><font-awesome-icon icon="viruses" /><b>cases</b> <span>{{ this.selectCountry.cases }}</span></li>
          <li class="item"><font-awesome-icon icon="ambulance" /><b>todayCases</b> <span>{{ this.selectCountry.todayCases }}</span></li>
          <li class="item"><font-awesome-icon icon="skull-crossbones" /><b>deaths</b> <span>{{ this.selectCountry.deaths }}</span></li>
          <li class="item"><font-awesome-icon icon="heartbeat" /><b>recovered</b> <span>{{ this.selectCountry.recovered }}</span></li>
        </ul>
      </div>
    </template>
  </div>
</template>

<script>
// import moment from 'moment'
import { mapState } from 'vuex'
import Loader from '@/components/ui/Loader'

export default {
  name: 'GeneralInfo',
  components: { Loader },
  props: {
  },
  data () {
    return {
      isSelected: '',
      isLoading: false,
      selectCountry: [],
      sortableCountry: []
    }
  },
  computed: {
    ...mapState(['usersData', 'usersData2', 'countryList']),
    checkRequestStatus () {
      if (this.usersData !== null && this.usersData2 !== null) {
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.$store.dispatch('loadUsers')
    this.$store.dispatch('loadUsers2')
    this.$store.dispatch('loadCountry')
    console.log(this.countryList)
    this.sortableCountry = this.usersData2.sort(function (a, b) {
      var x = a.country.toLowerCase()
      var y = b.country.toLowerCase()
      return x < y ? -1 : x > y ? 1 : 0
    })
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    callFunction () {
      var v = this
      setTimeout(function () {
        v.isLoading = true
      }, 3000)
    },
    getCountryInfo (val) {
      this.isSelected = val
      this.selectCountry = this.$store.getters.getCountryByName(val)
      return true
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">

</style>
