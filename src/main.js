import Vue from 'vue'
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import App from './App.vue'
import router from './router.js'

Vue.use(VueResource);
Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        count: 1
    },
    getters: {
        addCount: (state) => {
            return state.count * 2;
        }
    },
    mutations: {
        increment: (state, n) => {
            state.count += n;
        }
    },
    actions: {
        actionA: ({ commit }, n) => {
            setTimeout(() => {
                commit('increment', n);
            }, 2000)
        },
        actionB: ({ dispatch, commit}, n) => {
            return dispatch('actionA', n).then(() => {
                commit('increment', n + 1);
            })
        }
    },
    strict: process.env.NODE_ENV !== 'production'
});

const app = new Vue({
    el: '#app',
    store,
    router: router,
    template: '<App/>',
    components: {App}
});



