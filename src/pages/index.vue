<template>
  <v-content>
    <v-container fluid class="section">
      <home-section/>
    </v-container>
  </v-content>
</template>

<script>
import homeSection from '../components/pageSections/home'

export default {
  data () {
    return {
    }
  },
  components: {
    homeSection
  }
}
</script>

<style scoped>
  .section {
    height: calc(100vh - 61px);
    width: 100%;
    padding: 0;
  }


</style>
