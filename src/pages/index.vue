<template>
  <v-content>
    <v-container fluid class="section">
      <home-section/>
      <about-us-section/>
      <features-section/>
      <product-and-services/>
      <contact-section/>
    </v-container>
  </v-content>
</template>

<script>
import homeSection from '../components/pageSections/home'
import aboutUsSection from '../components/pageSections/aboutUs'
import featuresSection from '../components/pageSections/features'
import productAndServices from '../components/pageSections/productAndServices'
import contactSection from '../components/pageSections/contacts'

export default {
  data () {
    return {
    }
  },
  components: {
    homeSection,
    aboutUsSection,
    featuresSection,
    productAndServices,
    contactSection
  }
}
</script>

<style scoped>
  .section {
    padding: 0;
  }


</style>
