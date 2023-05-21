import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueRouter from "vue-router";
import store from '../src/stores';
import axios from './core/axios';
import VueAxios from 'vue-axios';
import { library, dom } from "@fortawesome/fontawesome-svg-core";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import {filters} from '../src/filter'
import DatePicker from 'vue2-datepicker';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import VueSweetalert2 from 'vue-sweetalert2';


Vue.config.productionTip = false;
filters();
library.add(fas, far, fab)
dom.watch();
Vue.use(store)
Vue.use(VueRouter);
Vue.use(require("vue-moment"));
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
Vue.use(VueAxios, axios);
Vue.use(VueSweetalert2);
Vue.component('Datepicker', DatePicker);
new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
