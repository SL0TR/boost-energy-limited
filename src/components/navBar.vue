<template>
  <div>
    <v-navigation-drawer :mini-variant.sync="mini" v-model="drawer" stateless hide-overlay>
      <v-toolbar flat class="transparent">
        <v-list class="pa-0">
          <v-list-tile avatar>
            <v-list-tile-avatar>
              <img src="https://randomuser.me/api/portraits/men/85.jpg" >
            </v-list-tile-avatar>
            <v-list-tile-content>
              <v-list-tile-title>John Leider</v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-btn icon @click.native.stop="mini = !mini">
                <v-icon>chevron_left</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
        </v-list>
      </v-toolbar>
      <v-list class="pt-0" dense>
        <v-divider></v-divider>
        <v-list-tile v-for="item in items" :key="item.title" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app :clipped-left="clipped" color="secondary">
      <v-toolbar-title v-text="title" class="white--text nav-title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="drawer = !drawer">
        <v-icon color="white">menu</v-icon>
      </v-btn>
    </v-toolbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: 'Boost Energy Limited',
      drawer: true,
      items: [
        { title: 'Home', icon: 'dashboard' },
        { title: 'About', icon: 'question_answer' }
      ],
      mini: true,
      right: null
    }
  }
}
</script>

<style scoped>
  .navigation-drawer {
    /* width: 200px !important; */
  }

  .toolbar--clipped  {
    padding-right: 1rem !important;
  }

  .nav-title {
    border-left: 5px solid var(--accent-color);
    padding-left: 1rem;
  }

</style>
