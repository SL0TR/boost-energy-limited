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
    <v-toolbar fixed app color="white">
      <img class="nav-logo" src="../statics/boost-energy-ltd/boost-energy-ltd-logo.png" alt="boost-energy-ltd-logo">
      <v-spacer></v-spacer>
        <v-btn
          class="nav-menu"
          color="secondary"
          flat
          v-for="(link, id) in navItems" :key="id"
          @click="$vuetify.goTo(link.url)"
        >
          {{ link.title }}
          <v-icon color="primary" right dark>{{ link.icon }}</v-icon>
        </v-btn>
        <v-btn class="mob-nav-btn" color="secondary" flat @click="drawer = !drawer" icon>
          <v-icon  v-html="drawer ? 'close' : 'menu'">menu</v-icon>
        </v-btn>
    </v-toolbar>
    <div class="mobile-nav" v-if="drawer">
      <v-layout column justify-space-around align-center>
        <v-btn
          color="secondary"
          flat
           v-for="(link, id) in navItems" :key="id"
           @click="$vuetify.goTo(link.url)"
        >
          {{ link.title }}
          <v-icon color="primary" right dark>{{ link.icon }}</v-icon>
        </v-btn>
      </v-layout>
      
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      drawer: false,
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
          icon: 'mail',
          url: '#contacts'
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

  .mob-nav-btn {
    display: none;
  }

  .mobile-nav {
    position: fixed;
    top: 56px;
    height: auto;
    width: 100%;
    background: rgba(255, 255, 255, .9);
    z-index: 10;
  }

  @media (max-width: 769px) {
    .nav-menu {
      display: none;
    }

    .mob-nav-btn {
      display: block;
    }
  }

</style>
