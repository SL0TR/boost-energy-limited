import Vue from 'vue'
import App from './App.vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'

Vue.use(Vuetify, {
  theme: {
    primary: '#E17909',
    secondary: '#009DD6',
    accent: '#005D81',
    error: '#b71c1c'
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
