<template>
  <div class="home">
    <GeneralInfo />
  </div>
</template>

<script>
// @ is an alias to /src
import GeneralInfo from '@/components/GeneralInfo.vue'

export default {
  name: 'Home',
  components: {
    GeneralInfo
  },
  created () {
    console.log('Home')
  },
  watch: {
    $route (to, from) {
      console.log('watch Home')
    }
  }
}
</script>
