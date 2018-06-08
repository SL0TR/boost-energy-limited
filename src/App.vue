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
  /* GLOBAL STYLES */

  :root {
    --primary-color: #FF8500;
    --secondary-color: #00AEEF;
    --accent-color: #005D81;
  }

  .content {
    padding-right: 0 !important;
  }

  .list__tile {
    cursor: pointer;
    margin-top: 5rem;
  }

  .list__tile:hover {
    background: rgba(0, 0, 0, .2);
    cursor: pointer;
  }

  .line-height {
    line-height: 2rem !important;
  }

  .border-bottom {
    position: relative;
  }

  .border-bottom::after {
    content: "";
    position: absolute;
    bottom: -1rem;
    background: var(--secondary-color);
    width: 130%;
    left: -15%;
    height: 4px;
  }

  .full-width {
    width: 100%;
  }

</style>

