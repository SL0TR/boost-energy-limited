<template>
  <v-app>
    <nav-bar/>
    <index-page/>
    <footer-comp/>
  </v-app>
</template>

<script>
import indexPage from './pages/index'
import navBar from './components/navBar'
import footerComp from './components/footerComp'

  export default {
    components: {
      indexPage,
      navBar,
      footerComp
    }
  }
</script>

<style>

  :root {
    --primary-color: #FF8500;
    --secondary-color: #00AEEF;
    --accent-color: #005D81;
  }

</style>

