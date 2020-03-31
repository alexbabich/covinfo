<template>
  <div class="container cov-about">
    <Loader
      :isLoading="isLoading"
    />
    <h1>This is page with chart with country covid timeline</h1>
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
