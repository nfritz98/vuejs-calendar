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
        events: [],
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
            state.events.push(payload);
        },
        eventFormDate(state, payload) {
            state.eventFormDate = payload;
        }
    },
    actions: {
        addEvent(context, payload) {
            return new Promise((resolve, reject) => {
                let obj = {
                    description: payload,
                    date: context.state.eventFormDate
                };
                //push events
                Axios.post('/add_event', obj).then(response => {
                    if(response.status === 200){
                        //push event events when status 200 is received
                        // => guarantees event is also saved on server
                        context.commit('addEvent', obj);
                        resolve();
                    }else{
                        reject();
                    }
                });
            });
        }
    }
});