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
// import { mapState } from 'vuex'
import Loader from '@/components/ui/Loader'

export default {
  name: 'GeneralInfo',
  components: { Loader },
  props: {
  },
  data () {
    return {
      isSelected: '',
      isLoading: false
    }
  },
  computed: {
  },
  created () {
  },
  mounted () {
  },
  methods: {
  },
  watch: {
  }
}
</script>
