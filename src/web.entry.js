//runs in browser

import './style.scss';

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

let events = window.___INITIAL_STATE___.map(event => {
  return {
    description: event.description,
    date: moment(event.date)
  }
});

import VueCalendar from './entry';

//#app replaced el='#app'
VueCalendar(events).$mount('#app');