<template>
  <div id="app">
    <div class="container main-navigation">
      <router-link to="/">Home</router-link>
      <router-link to="/country">In detail</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
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
  },
  mounted () {
  },
  methods: {
  },
  watch: {
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #333;
}
</style>
