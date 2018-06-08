<template>
  <div>
    <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="clipped"
      v-model="drawer"
      right
      app
      class="secondary"
      hide-overlay
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
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="white">
      <img class="nav-logo" src="../statics/boost-energy-ltd/boost-energy-ltd-logo.png" alt="boost-energy-ltd-logo">
      <v-spacer></v-spacer>
      <!-- <v-toolbar-title v-text="title" class="secondary--text headline"></v-toolbar-title>
      <v-spacer></v-spacer> -->
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon color="primary">menu</v-icon>
      </v-btn>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'" color="primary"></v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clipped: true,
      drawer: false,
      fixed: false,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'Account', icon: 'account_box' },
        { title: 'Admin', icon: 'gavel' }
      ],
      miniVariant: true,
      right: true,
      title: 'Boost Energy Limited'
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

</style>
