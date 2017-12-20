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
            NavTop
        },
        data() {
            return {
                items: [
                    {route: '/', name: 'Home'},
                    {route: '/about', name: 'About'},
                    {route: '/help', name: 'Help'},
                ],
            }
        },
    }
</script>
