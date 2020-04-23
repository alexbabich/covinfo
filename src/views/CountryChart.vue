<template>
  <div class="container cov-about">
    <Loader
      :isLoading="isLoading"
    />
    <template v-if="Object.keys(this.countryInfo).length > 0">
      <p>
        {{ this.countryInfo }}
      </p>
      <p>
        {{ this.countryHistory }}
      </p>
    </template>
  </div>
</template>

<script>
// import moment from 'moment'
// import { mapState } from 'vuex'
import Loader from '@/components/ui/Loader'
import axios from 'axios'

export default {
  name: 'CountryChart',
  components: { Loader },
  props: {
  },
  data () {
    return {
      isSelected: '',
      isLoading: true,
      countryInfo: '',
      countryHistory: ''
    }
  },
  computed: {
  },
  created () {
    this.mainInfo(this.$route.params.iso)
    this.getHistory()
  },
  mounted () {
  },
  methods: {
    mainInfo (val) {
      this.countryInfo = this.$store.getters.getCountryByISO(val)
      return true
    },
    getHistory () {
      axios.get(`https://corona.lmao.ninja/v2/historical/${this.countryInfo.country}`).then(resp => {
        // console.log(resp)
        this.countryHistory = resp
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    }
  },
  watch: {
  }
}
</script>
