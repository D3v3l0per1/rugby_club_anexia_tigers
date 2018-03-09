// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import { store } from './store'
import 'vuetify/dist/vuetify.min.css'
import DateFilter from './filters/date'
import Alert from './components/Shared/Alert'

Vue.use(Vuetify, {
  theme: {
    primary: '#D32F2F',
    secondary: '#E53935',
    accent: '#D50000',
    error: '#f44336',
    warning: '#FFEB3B',
    info: '#2196f3',
    success: '#4caf50'
  }
})

Vue.config.productionTip = false

Vue.filter('date', DateFilter)
Vue.component('app-alert', Alert)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>',
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyD0NtRyaX5p4jPra-ZotroPVVLPpYFq6hM',
      authDomain: 'rugy-club-anexia-tigers.firebaseapp.com',
      databaseURL: 'https://rugy-club-anexia-tigers.firebaseio.com',
      projectId: 'rugy-club-anexia-tigers',
      storageBucket: 'rugy-club-anexia-tigers.appspot.com'
    })
  }
})
