<template>
    <transition name="fade">
        <div class="shadow vh" v-show="show">
            <div class="box">
                <div class="tips vh">{{txt}}</div>
                <div class="db">
                    <a class="btn fx1 vh" v-if="is_cancel" @click="cancelFunc">{{btn_cancel}}</a>
                    <a class="btn fx1 vh" v-if="is_ok" @click="okFunc">{{btn_ok}}</a>
                </div>
            </div>
        </div>
    </transition>
</template>

<style lang="less" scoped>
    .shadow {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.5);
        z-index: 999;
    }
    .box {
        width: 200px;
        background: #ffffff;
        transform: translate(0,-50%);
        .tips {
            min-height: 40px;
            padding: 20px;
            border-bottom: 1px solid #f0f0f0;
        }
        .btn {
            padding: 10px;
        }
    }
    .fade-enter-active {
        transition: opacity .5s
    }
    .fade-enter {
        opacity: 0
    }
</style>

<script>
    export default{
        props: {
            txt: { //提示文案
                type: String,
                required: true
            },
            show: { //显示或隐藏确认框
                type: Boolean,
                default: false
            },
            is_cancel: { //是否显示取消按钮
                type: Boolean,
                default: true
            },
            is_ok: { //是否显示确认按钮
                type: Boolean,
                default: true
            },
            btn_cancel: { //取消按钮文案
                type: String,
                default: '取消'
            },
            btn_ok: { //确认按钮文案
                type: String,
                default: '确定'
            },
            cancel: { //取消操作回调函数
                type: Function,
                default: () => {}
            },
            ok: { //确认操作回调函数
                type: Function,
                default: () => {}
            }
        },
        methods: {
            cancelFunc() {
                this.$emit('hideBox', false);
                this.cancel();
            },
            okFunc() {
                this.$emit('hideBox', false);
                this.ok();
            }
        }
    }
</script>
