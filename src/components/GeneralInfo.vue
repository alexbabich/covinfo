<template>
  <div class="container cov-general-page">
    <Loader
      :isLoading="isLoading"
    />
    <template v-if='isLoading'>
      <div class="cov-continent-list">
        <div class="cov-continent-item" v-for="(item, index) in allContinents" :key="index">
          <p class="cov-continent-title">{{item.continent}}</p>
          <p class="cov-continent-time-update"><strong><font-awesome-icon icon="history" /></strong>{{item.updated | moment("MMM Do, h:mm a")}}</p>
          <p class="cov-continent-active"><strong><font-awesome-icon icon="hospital-alt" /></strong>{{item.active}}</p>
          <p class="cov-continent-today-cases"><strong><font-awesome-icon icon="ambulance" /></strong>{{item.todayCases}}</p>
          <p class="cov-continent-total-deaths"><strong><font-awesome-icon icon="skull-crossbones" /></strong>{{item.deaths}} (today:{{item.todayDeaths}})</p>
          <p class="cov-continent-total-recovered"><strong><font-awesome-icon icon="heartbeat" /></strong>{{item.recovered}}</p>
        </div>
      </div>
      <br/>
      <div class="cov-info-lists">
        <v-select :options="countryList" @input="getCountryInfo" class="cov-country-list" />
        <br/>
        <template v-if="isSelected">
          <!-- {{ this.selectCountry }} -->
          <ul class="cov-country-info-list">
            <li class="item"><font-awesome-icon icon="hospital-alt" /><span>{{ this.selectCountry.cases }}</span></li>
            <li class="item"><font-awesome-icon icon="ambulance" /><span>{{ this.selectCountry.todayCases }}</span></li>
            <li class="item"><font-awesome-icon icon="skull-crossbones" /><span>{{ this.selectCountry.deaths }}</span></li>
            <li class="item"><font-awesome-icon icon="heartbeat" /><span>{{ this.selectCountry.recovered }}</span></li>
          </ul>
          <router-link :to="`country/${this.selectCountry.countryInfo.iso3}`" class="cov-country-link">view more</router-link>
        </template>
        <template v-else>
          <p>select country from list</p>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Loader from '@/components/ui/Loader'

export default {
  name: 'GeneralInfo',
  components: { Loader },
  props: {
  },
  data () {
    return {
      isSelected: false,
      isLoading: false,
      selectCountry: []
    }
  },
  computed: {
    ...mapState(['allContinents', 'allCountries', 'countryList']),
    ...mapActions(['infoByContinents', 'infoByCountries']),
    checkRequestStatus () {
      if (this.allContinents !== null && this.allContinents.length !== 0) {
        return true
      } else {
        return false
      }
    }
  },
  beforeCreate () {
  },
  created () {
    this.loadPage()
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    loadPage () {
      this.$store.dispatch('infoByCountries')
      this.$store.dispatch('infoByContinents')
    },
    callFunction () {
      var v = this
      setTimeout(function () {
        v.isLoading = true
      }, 500)
    },
    getCountryInfo (val) {
      if (val !== '') {
        this.isSelected = true
        this.selectCountry = this.$store.getters.getCountryByName(val)
      } else {
        this.isSelected = false
        this.selectCountry = []
      }

      return true
    }
  },
  watch: {
    '$route.path': {
      handler: function (path) {
      },
      deep: true,
      immediate: true
    },
    countryList (newValue, oldValue) {
    }
  }
}
</script>

<style lang="scss">

</style>
