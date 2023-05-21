import Vue from 'vue'
import Vuex from 'vuex'

import modules from "./modules/_bootstrap";

Vue.use(Vuex)

const store = new Vuex.Store({
    modules,
    // Enable strict mode in development to get a warning
    // when mutating state outside of a mutation.
    // https://vuex.vuejs.org/guide/strict.html

});


export default store;
