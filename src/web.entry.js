import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';

let events = [
  {
    description: 'Event 1',
    date: moment('2019-12-06', 'YYYY-MM-DD')
  },
  {
    description: 'Event 2',
    date: moment('2019-12-16', 'YYYY-MM-DD')
  },
  {
    description: 'Event 3',
    date: moment('2019-11-26', 'YYYY-MM-DD')
  }
];

//state has to be replaced completely, not only events may be replaced
//{} empty start, store.state is merges, events is also merges
let initialState = Object.assign({}, store.state, {events});
store.replaceState(initialState);

new Vue({
  el: '#app',
  data: {
    moment
  },
  components: {
    App,
  },
  store
});
