import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueMaterial from "vue-material";
import "vue-material/dist/vue-material.css";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

import "vue-material/dist/theme/default.css";
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);
Vue.use(VueMaterial);
Vue.config.productionTip = false;

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
