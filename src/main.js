import Vue from 'vue'
import VueResource from 'vue-resource';
import App from './App.vue'
import store from './store.js';
import router from './router.js'

Vue.use(VueResource);

const app = new Vue({
    el: '#app',
    store,
    router: router,
    template: '<App/>',
    components: {App}
});



