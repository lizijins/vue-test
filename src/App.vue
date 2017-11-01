<template>
    <div>
        <nav-top :items="items"/>
        <router-view></router-view>
    </div>
</template>

<script>
    import './global.less';
    import NavTop from '@components/nav_top.vue'
    export default{
        components: {
            NavTop,
        },
        data() {
            return {
                items: [
                    {route: '/', name: 'Home', id: 1},
                    {route: '/about', name: 'About', id: 2},
                    {route: '/help', name: 'Help', id: 3},
                ],
            }
        },
    }
</script>
