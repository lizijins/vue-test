<template>
    <div>
        <a @click="showBox">弹层</a>
        <mod-confirm :txt="confirm.txt"
                 :ok="confirm.ok"
                 ref="showBox"
         >
        </mod-confirm>
    </div>
</template>

<script>
    import modConfirm from '@mod/confirm.vue'
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        components: {
            modConfirm
        },
        data() {
            return {
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
            }
        },
        computed: {
            ...mapState({
            })
        },
        methods: {
            showBox() {
                this.$refs.showBox.showConfirm();
            },
            ...mapMutations({
            })
        }
    }
</script>
