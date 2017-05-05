<template>
    <div>
        <group>
            <x-switch title="显示" v-model="show"></x-switch>
        </group>
        <div v-transfer-dom>
            <confirm v-model="show" title="操作提示" @on-cancel="onCancel" @on-confirm="onConfirm" @on-show="onShow" @on-hide="onHide">
                <p style="text-align:center;">确定操作么？</p>
            </confirm>
        </div>
        <div style="padding:15px;">
            <x-button @click.native="show=!show" type="primary">显示</x-button>
            <x-button @click.native="showPlugin" type="primary">函数调用</x-button>
        </div>
    </div>
</template>
<script>
import { Confirm, Group, XSwitch, XButton, TransferDomDirective as TransferDom } from 'vux';
export default {
    directives: {
        TransferDom
    },
    components: {
        Confirm,
        Group,
        XSwitch,
        XButton
    },
    data() {
        return {
            show: false
        }
    },
    methods: {
        onCancel() {
            console.log('on cancel')
        },
        onConfirm() {
            console.log('on confirm')
        },
        onHide() {
            console.log('on hide')
        },
        onShow() {
            console.log('on show')
        },
        showPlugin() {
            this.$vux.confirm.show({
                title: 'Title',
                content: 'Content',
                onShow() {
                    console.log('plugin show')
                },
                onHide() {
                    console.log('plugin hide')
                },
                onCancel() {
                    console.log('plugin cancel')
                },
                onConfirm() {
                    console.log('plugin confirm')
                }
            })
        },
        showPlugin2() {
            this.showPlugin()
        }
    }
}
</script>