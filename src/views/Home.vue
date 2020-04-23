<template>
  <div class="home">
    <GeneralInfo />
  </div>
</template>

<script>
import GeneralInfo from '@/components/GeneralInfo.vue'

export default {
  name: 'Home',
  components: {
    GeneralInfo
  },
  created () {
  },
  watch: {
    '$route.path': {
      handler: function (path) {
      },
      deep: true,
      immediate: true
    }
  }
}
</script>
