import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import axios from 'axios'
import URI from './Default_URI'

Vue.config.productionTip = false

Vue.prototype.axios = axios
Vue.prototype.$uri = URI
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
