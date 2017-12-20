<template>
    <div>
        <p>{{count}}</p>
        <p>{{addCount}}</p>
        <a @click="showBox">弹层</a>
        <confirm :txt="confirm.txt"
                 :show="confirm.show"
                 :ok="confirm.ok"
                 @hideBox="hideBox">
        </confirm>
    </div>
</template>

<script>
    import Confirm from '@mod/confirm.vue'
    import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
    export default {
        components: {
            Confirm
        },
        data() {
            return {
                confirm: {
                    txt: '确定吗',
                    show: false,
                    is_cancel: false,
                    cancel() {
                    },
                    ok() {
                        this.$http.post('/test.action', {}).then((res) => {
                            console.log('11');
                        });
                    }
                },
            }
        },
        computed: {
            ...mapState([
                'count'
            ]),
            ...mapGetters([
                'addCount'
            ])
        },
        methods: {
            showBox() {
                this.confirm.show = true;
                this.actionB(3);
            },
            hideBox(state) {
                this.confirm.show = state;
            },
            ...mapMutations([
                'increment'
            ]),
            ...mapActions([
                'actionA',
                "actionB"
            ]),
        }
    }
</script>
