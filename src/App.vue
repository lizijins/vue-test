<template>
    <div>
        <header-component/>
        <router-view></router-view>
    </div>
</template>

<script>
    import './global.less';
    import HeaderComponent from '@components/header.vue'
    export default{
        components: {
            HeaderComponent,
        }
    }
</script>
