import Vue from 'vue'
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import VueResource from 'vue-resource';
import modConfirm from '@mod/confirm.vue'

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(ElementUI);

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
    components: {
        modConfirm,
    },
    data: {
        confirm: {
            txt: '确定1吗',
            show: false,
            is_cancel: false,
            ok() {
                this.$http.post('/test.action', {}).then((res) => {
                    console.log('11');
                });
            }
        },
        value9: [4, 8]
    },
    methods: {
        showBox() {
            this.$refs.showBox.showConfirm();
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
});



