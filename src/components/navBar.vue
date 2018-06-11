<template>
  <div id="nav">
    <!-- <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      right
      app
      class="secondary d-flex"
      hide-overlayd-flex
    >
      <v-list>
        <v-list-tile v-for="item in items" :key="item.title" ripple>
          <v-list-tile-action>
            <v-icon color="white">{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title class="white--text">{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer> -->
    <v-toolbar fixed app :clipped-left="clipped" color="white">
      <img class="nav-logo" src="../statics/boost-energy-ltd/boost-energy-ltd-logo.png" alt="boost-energy-ltd-logo">
      <v-spacer></v-spacer>
        <a v-for="link in navItems" :key="link" :href="link.url">
          <v-btn
            color="secondary"
            flat
          >
            {{ link.title }}
            <!-- <v-icon color="primary" right dark>{{ link.icon }}</v-icon> -->
          </v-btn>
        </a> 
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { 
          title: 'Home',
          icon: 'dashboard',
          url: '#nav'
        },
        { 
          title: 'About Us',
          icon: 'group',
          url: '#about-us'
        },
        { 
          title: 'Features',
          icon: 'stars',
          url: '#features'
        },
        { 
          title: 'Product & Services',
          icon: 'whatshot',
          url: '#product-and-services'
        },
        { 
          title: 'Contact Us',
          icon: 'mail'
        }
      ]
    }
  }
}
</script>

<style scoped>
  .navigation-drawer--clipped {
    width: 200px !important;
  }

  .navigation-drawer--mini-variant {
    width: 80px !important;
  }

  .toolbar--clipped  {
    padding-right: 1rem !important;
  }

  .nav-logo {
    height: 80%;
    width: 5rem;
  }

  a {
    text-decoration: none;
  }

</style>
