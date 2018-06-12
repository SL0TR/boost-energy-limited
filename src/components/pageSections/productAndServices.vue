<template >
  <v-slide-y-transition mode="out-in" >
    <v-layout column align-center justify-space-around id="product-and-services" class="py-4">
      <p class="display-3 mt-5 mb-5 primary--text border-bottom" >Product</p>
      <v-flex class="title mb-4 mt-2 accent--text" xs12 text-xs-center>
        Domestic, Commercial &amp; Industrial having cylinder size of 12 kg, 33 kg &amp; 45 kg as both 20mm &amp; 22mm whereas 12 kg for domestic uses &amp; 33kg/45kg for commercial &amp; Industrial Uses.
      </v-flex>
      <p class="display-3 mb-5 primary--text border-bottom">Services</p>
      <v-flex class="title mb-4 mt-2 accent--text" xs12 text-xs-center v-for="service in services" :key="service">
        <v-icon color="primary" size="25">chevron_right</v-icon>{{ service  }}
      </v-flex>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
export default {
  data () {
    return {
      services: [
        'Timely Delivery of the cylinder up to the end user/customer.',
        'Ensuring appropriate quantity and quality of LPG',
        'Supporting for quick cylinder re-filling service.',
        'Ensuring maximum level of safety.',
        'Introducing most modern distribution model.'
      ],
      cards: [
        {
          title: 'Our Values',
          details: [
            'Commitment: For Passion at work',
            'Integrity: For Honesty & Success',
            'Ambitious: For Innovation & Growth',
            'Safety: For a safe Environment & Community'
          ]
        },
        {
          title: 'Our Vision',
          details: [
            'To deliver LPG & LPG cylinder at the root level in an affordable value for meeting the demand of present market & enter into as a leading LPG operator.'
          ]
        },
        {
          title: 'Our Mission',
          details: [
            'As a modern energy we will enhance the product uses, services, and awareness as well as committed to convenience, availability, functionality and safety at consumer level.'
          ]
        },
        {
          title: 'Number of Employees',
          details: [
            'Total of 300 employee will be work for both bottling & cylinder manufacturing plant.'
          ]
        }
      ]
    }
  }
}
</script>

<style scoped>
  #product-and-services {
    min-height: 100vh;
    width: 100%;
    background: #fff;
  }

  @media (max-width: 700px) {
    #product-and-services {
      padding: 1rem;
    }
  }
</style>
