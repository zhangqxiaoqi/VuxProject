<template>
    <div style="text-align:center;">
        <popover placement="top" style="margin: 20px;" @on-show="onShow" @on-hide="onHide">
            <div slot="content" class="popover-demo-content">
                hello world
            </div>
            <button class="btn btn-default">上</button>
        </popover>
    
        <popover placement="bottom" style="margin: 20px;">
            <div slot="content" class="popover-demo-content">
                hello world
            </div>
            <button class="btn btn-default">下</button>
        </popover>
    
        <popover placement="left" style="margin: 20px;">
            <div slot="content" class="popover-demo-content">
                hello world
            </div>
            <button class="btn btn-default">左</button>
        </popover>
    
        <popover placement="right" style="margin: 20px;">
            <div slot="content" class="popover-demo-content">
                hello world
            </div>
            <button class="btn btn-default">右</button>
        </popover>
    </div>
</template>



<script>
import { Popover } from 'vux'

export default {
    components: {
        Popover
    },
    methods: {
        onShow() {
            console.log('on show')
        },
        onHide() {
            console.log('on hide')
        }
    }
}
</script>

<style scoped>
.popover-demo-content {
    padding: 5px 10px;
}
</style>