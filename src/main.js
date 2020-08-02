import Vue from 'vue'
import App from './App.vue'
import { VBtn } from 'vuetensils/src/components'

import './registerServiceWorker'
import router from './router'
import store from './store'

import '@/sass/index.sass'
import './assets/tailwind.css'

Vue.component('VBtn', VBtn)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
