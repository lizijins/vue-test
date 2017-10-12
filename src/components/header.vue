<template>
    <ul class="nav vh">
        <li class="fx1" v-for="item in items">
            <router-link :to="item.route" class="vh">{{item.name}}</router-link>
        </li>
    </ul>
</template>

<style lang="less" scoped>
    .nav {
        background: #505050;
        box-shadow: 0 3px 3px #cccccc;
        li {
            a {
                height: 40px;
                color: #fff;
            }
        }
    }
</style>

<script>
    export default{
        data(){
            return {
                items: [
                    {route: '/', name: 'Home'},
                    {route: '/about', name: 'About'},
                    {route: '/help', name: 'Help'},
                ]
            }
        }
    }
</script>
