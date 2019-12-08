import Vue from 'vue';
import './style.scss';

import store from './store';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');
Object.defineProperty(Vue.prototype, '$moment', { get() { return this.$root.moment } });

import App from './components/App.vue';

let events = window.___INITIAL_STATE___.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
});

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
