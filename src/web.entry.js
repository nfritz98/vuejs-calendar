import Vue from 'vue';
import  './style.scss';

import Vuex from 'vuex';
//add vuewx as plugin
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';


new Vue({
  el: '#app',
  data: {
    moment
  },
  components:{
    App
  },
  store: {
    //contains state-data, like data in components
    state: {
      currentYear: 2019,
      currentMonth: 11
    }
  }
});
