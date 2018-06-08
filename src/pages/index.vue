<template>
  <v-content>
    <v-container fluid class="section">
      <home-section/>
      <about-us/>
    </v-container>
  </v-content>
</template>

<script>
import homeSection from '../components/pageSections/home'
import aboutUs from '../components/pageSections/aboutUs'

export default {
  data () {
    return {
    }
  },
  components: {
    homeSection,
    aboutUs
  }
}
</script>

<style scoped>
  .section {
    padding: 0;
  }


</style>
