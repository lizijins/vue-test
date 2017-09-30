import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

const app = new Vue({
    el: '#app',
    router: router,
    template: '<App/>',
    components: {App}
});

