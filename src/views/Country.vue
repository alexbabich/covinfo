<template>
  <div class="container cov-about">
    <p>test</p>
  </div>
</template>

<script>
// import moment from 'moment'
// import { mapState } from 'vuex'

export default {
  name: 'Country',
  components: { },
  props: {
  },
  data () {
    return {
    }
  },
  computed: {
  },
  created () {
    console.log('Country')
  },
  mounted () {
  },
  methods: {
  },
  watch: {
    $route (to, from) {
      console.log('watch Country')
    }
  }
}
</script>
