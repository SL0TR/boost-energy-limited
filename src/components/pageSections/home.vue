<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column align-center justify-center class="white--text home">
      <h1 class="mt-4 mb-4 display-3 primary--text text-xs-center">Boost Energy Limited</h1>
      <p class="mt-4 mb-4 headline text-xs-center">Began it's journey in 2017</p>
      <p class="mt-4 mb-4 headline text-xs-center">Cylinder manufacturing, LPG Bottling and distribution of LP Gas throughout the Bangladesh.</p>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
export default {
}
</script>

<style scoped>
  .home {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.7)), url('../../statics/boost-energy-ltd/stove-flame-bg.jpg');
    height: calc(100vh - 61px);
    width: 100%;
    background-size: 100% 100%;
    background-attachment: fixed;
  }
</style>
