import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { createApp } from 'vue'
import VueGoogleMaps from '@fawmi/vue-google-maps'

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')

//const app = createApp(App);
//app.use(VueGoogleMaps, {
//  load: {
//    key: 'YOUR_API_KEY_COMES_HERE',
//  },
//}).mount('#app')

