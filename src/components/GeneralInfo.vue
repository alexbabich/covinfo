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
          <!-- <p class="cov-continent-critical"><strong>critical</strong>{{item.critical}}</p> -->
        </div>
      </div>
      <br/>
      <div class="cov-info-lists">
        <ul class="cov-country-list">
          <li
            v-for="(item, index) in sortableCountry"
            :class="['item', {'is-active':item == isSelected}]"
            :key="index"
            @click="getCountryInfo(item)"
          >
            <span class="item-title">{{item}}</span>
          </li>
        </ul>
        <div class="cov-country-info">
          <template v-if="Object.keys(this.selectCountry).length > 0">
              <p class="item-title cov-country-title">
                {{ this.selectCountry.country }}
              </p>
              <ul class="cov-country-info-list">
                <li class="item"><font-awesome-icon icon="hospital-alt" /><span>{{ this.selectCountry.cases }}</span></li>
                <li class="item"><font-awesome-icon icon="ambulance" /><span>{{ this.selectCountry.todayCases }}</span></li>
                <li class="item"><font-awesome-icon icon="skull-crossbones" /><span>{{ this.selectCountry.deaths }}</span></li>
                <li class="item"><font-awesome-icon icon="heartbeat" /><span>{{ this.selectCountry.recovered }}</span></li>
              </ul>
          </template>
          <template v-else>
            <p>select country from list</p>
          </template>
        </div>
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
      isSelected: '',
      isLoading: false,
      selectCountry: [],
      sortableCountry: []
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
    this.sortableCountry = this.countryList.sort(function (a, b) {
      var x = a.country.toLowerCase()
      var y = b.country.toLowerCase()
      return x < y ? -1 : x > y ? 1 : 0
    })
  },
  mounted () {
    this.$store.dispatch('infoByCountries')
    this.$store.dispatch('infoByContinents')
    this.callFunction()
  },
  methods: {
    callFunction () {
      var v = this
      setTimeout(function () {
        v.isLoading = true
      }, 5000)
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
