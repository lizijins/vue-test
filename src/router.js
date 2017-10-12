import Vue from 'vue'
import Router from 'vue-router'
import Home from '@pages/Home.vue'
import About from '@pages/About.vue'
import Help from '@pages/Help.vue'
import NoFind from '@pages/404.vue'

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/about',
            component: About,
        },
        {
            path: '/help',
            component: Help,
        },
        {
            path: '*',
            component: NoFind
        }
    ],
    scrollBehavior (to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return {x: 0, y: 0}
        }
    }
});

export default router
