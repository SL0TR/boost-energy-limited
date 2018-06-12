<template >
  <v-slide-y-transition mode="out-in" >
    <v-layout column align-center justify-space-around id="contacts" class="py-4">
      <p class="display-3 mb-5 primary--text border-bottom" >Contact Us</p>
      <v-flex class="title mb-4 mt-2" sm4 xs12 text-xs-center>
        <p class="accent--text display-1">Registered Office:</p>
        <p>Navana Bilkis Lourante, Flat-A3, House-11/B, Road-36 Gulshan-2, Dhaka-1212</p>
      </v-flex>
      <v-flex class="title mb-4 mt-2" sm4 xs12 text-xs-center>
        <p class="accent--text display-1">Factory:</p>
        <p>South Syedpur, Jafarnagar, Sitakunda, Chittagong</p>
      </v-flex>
      <v-flex class="title mb-4 mt-2" sm4 xs12 text-xs-center>
        <p class="accent--text display-1">Contact Details:</p>
        <p>Tel: +88029884541, +88029884543</p>
        <p>E-mail: info@boostenergy.com.bd</p>
      </v-flex>
    </v-layout>
  </v-slide-y-transition>
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
  #contacts {
    min-height: 100vh;
  }

  @media (max-width: 700px) {
    #contacts {
      padding: 1rem;
    }
  }
</style>
