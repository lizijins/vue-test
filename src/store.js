import Vue from 'vue'
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        count: 2,
    },
    getters: {
        addCount: (state) => {
            return state.count * 2;

        }
    },
    mutations: {
        increment: (state, n) => {
            state.count += n;
        },
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

