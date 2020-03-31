<template>
  <div class="container cov-general-page">
    <Loader
      :isLoading="isLoading"
    />
    <template v-if='checkRequestStatus == isLoading'>
      <!-- <p> {{ usersData }} </p> -->
      <div class="cov-world-time">
        <p><b>current location</b> <span v-if="usersData.updated">{{ usersData.updated | moment("MMM Do, h:mm a") }}</span></p>
        <p><b>Los Angeles</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'America/Los_Angeles', 'MMM Do, h:mm a') }}</span></p>
        <p><b>London</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'Europe/London', 'MMM Do, h:mm a') }}</span></p>
        <p><b>Shanghai</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'Asia/Shanghai', 'MMM Do, h:mm a') }}</span></p>
      </div>
      <ul class="cov-general-list">
        <li><font-awesome-icon icon="procedures" /><b>cases</b> <span>{{ usersData.cases }}</span></li>
        <li><font-awesome-icon icon="skull-crossbones" /><b>deaths</b> <span>{{ usersData.deaths }}</span></li>
        <li><font-awesome-icon icon="heartbeat" /><b>recovered</b> <span>{{ usersData.recovered }}</span></li>
      </ul>
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
      isLoading: false
    }
  },
  computed: {
    ...mapState(['usersData']),
    checkRequestStatus () {
      if (this.usersData !== null) {
        console.log(this.usersData)
        return true
      } else {
        return false
      }
    }
  },
  created () {
    this.$store.dispatch('loadUsers')
  },
  mounted () {
    this.callFunction()
  },
  methods: {
    callFunction: function () {
      var v = this
      setTimeout(function () {
        v.isLoading = true
      }, 3000)
    }
  },
  watch: {
  }
}
</script>

<style lang="scss">

</style>
