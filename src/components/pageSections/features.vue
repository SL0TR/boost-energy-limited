<template>
  <v-slide-y-transition mode="out-in">
    <v-layout column align-center justify-space-around class="about" id="features">
      <p class="display-3 mb-5 primary--text border-bottom">Features</p>
      <v-flex class="title mb-4 mt-2" xs12 text-xs-center v-for="feature in features" :key="feature">
        <v-icon color="accent" size="25">chevron_right</v-icon>{{ feature  }}
      </v-flex>
      <v-layout class="mt-5" row wrap justify-space-around>
        <v-flex sm5 xs12 class="mb-4"  v-for="card in cards" :key="card">
          <v-card>
            <v-card-title primary-title>
              <div>
                <p class="headline mb-0 accent--text">{{ card.title }}</p>
              </div>
            </v-card-title>
            <v-layout class="pa-4" d-flex column>
              <v-flex class="body-2 ma-2"  v-for="detail in card.details" :key="detail"> {{ detail }} </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-slide-y-transition>
</template>

<script>
export default {
  data () {
    return {
      features: [
        'State of the art import Terminal and Bottling plant at Sitakunda, Chittagong.',
        '6000 MT (3X2000 MT Sphere) storage capacity at a single location which will enhance up to 10000 MT',
        'Filling capacity of 12000 Nos cylinder per day in a single shift operation.',
        'A fully automated cylinder manufacturing plant at Sitakunda, Chittagong having capacity of 2000 pcs/8 hours.',
        'One satellite plant at Gazaria, Munshigong &amp; another three in different location.'
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
  .about {
    min-height: calc(100vh - 61px);
    width: 100%;
    /* padding: 8rem; */
    background: #fff;
  }

  @media (max-width: 700px) {
    .about {
      padding: 1rem;
    }
  }
</style>
