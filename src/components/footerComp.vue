<template>
  <v-footer height="auto" class="grey darken-3">
    <v-layout row wrap justify-center>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        flat
      >
        {{ link }}
      </v-btn>
      <v-flex xs12 py-1 text-xs-center white--text>
        Developed by <v-btn color="secondary" outline round>Mohaimin</v-btn>
      </v-flex>
      <v-flex xs12 py-2 text-xs-center white--text>
        &copy;2018 — <strong class="primary--text">Boost Energy Limited</strong>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
      links: ['Home', 'About Us', 'Services', 'Contact Us']
    }
  }
}
</script>

<style scoped>

</style>
