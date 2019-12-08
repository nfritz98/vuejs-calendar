import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

//lib for http-requests, vue-ressource can't be used for serverside-rednering
import Axios from 'axios';

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 12,
        eventFormPositionX: 0,
        eventFormPositionY: 0,
        eventFormActive: false,
        events: [
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
        ],
        eventFormDate: moment()
    },
    mutations: {
        setCurrentMonth(state, payload) {
            //used to change month-value of store
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload) {
            //used to change year-value of store
            state.currentYear = payload;
        },
        eventFormPosition(state, payload) {
            state.eventFormPositionX = payload.x;
            state.eventFormPositionY = payload.y;
        },
        eventFormActive(state, payload) {
            state.eventFormActive = payload;
        },
        addEvent(state, payload) {
            //send event to server
            let obj = {
                description: payload,
                date: state.eventFormDate
            };
            //push events
            state.events.push(obj);
            Axios.post('/add_event', obj)
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    }
});