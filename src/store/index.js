import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentYear: 2019,
        currentMonth: 12
    },
    mutations: {
        setCurrentMonth(state, payload){
            //used to change value of store
            state.currentMonth = payload;
        },
        setCurrentYear(state, payload){
            //used to change value of store
            state.currentYear = payload;
        }
    }
});