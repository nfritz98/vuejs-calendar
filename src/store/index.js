import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 12,
        eventFormPositionX: 0,
        eventFormPositionY: 0
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
        }
    }
});