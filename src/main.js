import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import "./registerServiceWorker";
Vue.config.productionTip = false;
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify)
new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
