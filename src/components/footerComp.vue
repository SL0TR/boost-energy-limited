<template>
  <v-footer height="auto" class="grey darken-3">
    <v-layout  class="footer-comp" row align-center justify-space-between>
      <v-flex xs12 pa-2 text-xs-left white--text>
        &copy;2018 — <strong class="secondary--text">Boost Energy Limited</strong>
      </v-flex>
      <img class="nav-logo" src="../statics/boost-energy-ltd/boost-energy-ltd-logo.png" alt="">
      <v-flex xs12 pa-2 text-xs-right white--text>
        Developed by <a href="https://sl0tr.github.io/" rel="noopener" target="_blank"><v-btn color="primary" outline round>Mohaimin Islam</v-btn></a>
      </v-flex>
    </v-layout>
  </v-footer>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style scoped>

  .nav-logo {
    height: 5rem;
    width: 5rem;
    padding: .5rem;
  }

  @media (max-width: 769px) {
    .footer-comp {
      flex-direction: column;
    }
  }

</style>
