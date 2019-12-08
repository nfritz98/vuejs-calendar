import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import moment from 'moment-timezone';
moment.tz.setDefault('UTC');

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 12,
        eventFormPositionX: 0,
        eventFormPositionY: 0,
        eventFormActive: false,
        events: [
            {
                description: '111',
                date: moment('2019-12-06', 'YYYY-MM-DD')
            },
            {
                description: '222',
                date: moment('2019-12-16', 'YYYY-MM-DD')
            },
            {
                description: '333',
                date: moment('2019-11-26', 'YYYY-MM-DD')
            }
        ],
        eventFormDate: null
    },
    mutations: {
        setCurrentMonth(state, payload){
            //used to change month-value of store
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload){
            //used to change year-value of store
            state.currentYear = payload;
        },
        eventFormPosition(state, payload){
            state.eventFormPositionX = payload.x;
            state.eventFormPositionY = payload.y;
        },
        eventFormActive(state, payload){
            state.eventFormActive = payload;
        },
        addEvent(state, payload){
            state.events.push({
                    descripiton: payload,
                    date: state.eventFormDate
            });
        },
        eventFormDate(state, payload){
            state.eventFormDate = payload;
        }
    }
});