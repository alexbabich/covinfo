<template>
  <div class="hello">
    <p> {{ usersData }} </p>
    <ul>
      <li><b>Current date current location</b> <span v-if="usersData.updated">{{ usersData.updated | moment("dddd, MMMM Do YYYY, h:mm a") }}</span></li>
      <li><b>Current date Los_Angeles</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'America/Los_Angeles', 'LLLL') }}</span></li>
      <li><b>Current date London</b> <span v-if="usersData.updated">{{ usersData.updated | moment('timezone', 'Europe/London', 'LLLL') }}</span></li>
      <li><b>cases</b> <span>{{ usersData.cases }}</span></li>
      <li><font-awesome-icon icon="skull-crossbones" /> <span>{{ usersData.deaths }}</span></li>
      <li><b>recovered</b> <span>{{ usersData.recovered }}</span></li>
    </ul>
  </div>
</template>

<script>
// import moment from 'moment'
import { mapState } from 'vuex'

export default {
  name: 'GeneralInfo',
  props: {
    msg: String
  },
  data () {
    return {
    }
  },
  computed: mapState(['usersData']),
  created () {
    this.$store.dispatch('loadUsers')
  },
  methods: {
  }
}
</script>

<style lang="scss">

</style>
