import Vue from 'vue'
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import modConfirm from '@mod/confirm.vue'
import '@style/global.less';

Vue.use(VueResource);
Vue.use(Vuex);

let store = new Vuex.Store({
    state: {
        count: 2,
    },
    getters: {},
    mutations: {},
    actions: {},
    strict: process.env.NODE_ENV !== 'production'
});

let app = new Vue({
    el: '#app',
    store,
    components: { modConfirm },
    data: {
        confirm: {
            txt: '确定吗',
            show: false,
            is_cancel: false,
            ok() {
                this.$http.post('/test.action', {}).then((res) => {
                    console.log('11');
                });
            }
        },
    },
    methods: {
        showBox() {
            this.$refs.showBox.showConfirm();
        },
    }
});



