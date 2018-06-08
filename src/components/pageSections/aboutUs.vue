<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column align-center justify-space-around class="about">
      <p class="display-2 mb-5 primary--text border-bottom">About Us</p>
      <p class="title mt-5 mb-5 accent--text text-xs-center line-height">LPG (Liquefied Petroleum Gas) is a flammable gas and is a mixture of Propane and Butane. LPG is flexible, reliable, portable, clean and affordable which makes it an ideal fuel for a variety of applications. It is also suitable for all type of commercial, industrial and domestic applications.</p>
      <p class="title mt-5 mb-5 accent--text text-xs-center line-height">BOOST ENERGY is a private limited company which will enter into market as Boost LP Gas in early 2019. BOOST ENERGY aims to provide modern eco-energy to furnish the growing demand of LPG in the country.</p>
      <p class="title mt-5 mb-5 accent--text text-xs-center line-height">The Company has its own 28 Acres Industrial Plot with LPG Import Jetty, Storage &amp; Bottling facility along with Cylinder Manufacturing at Sitakunda, Chittagong and another 3 acres land for satellite plant at Gazaria, Munshiganj. The plant would be designed, Constructed and commissioned as per the latest version of International Standards. To execute, maintain and operate the plant as per design, there is an efficient management professional team having long experiences at home and abroad.</p>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
export default {
}
</script>

<style scoped>
  .about {
    min-height: calc(100vh - 61px);
    width: 100%;
    padding: 8rem;
    background: #fff;
  }

  @media (max-width: 700px) {
    .about {
      padding: 1rem;
    }
  }
</style>
