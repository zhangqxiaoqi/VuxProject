<template>
    <div>
        <group title="倒计时">
            <cell title="15s" v-model="value">
                <countdown slot="value" v-model="time1" v-show="show" @on-finish="finish"></countdown>
            </cell>
        </group>
        <group title="倒计时">
            <x-switch title="开始" v-model="start"></x-switch>
            <cell title="15s" v-model="value">
                <countdown slot="value" v-model="time2" :start="start" v-show="show" @on-finish="finish2"></countdown>
            </cell>
        </group>
    </div>
</template>
<script>
import { Group, Cell, Countdown, XSwitch } from 'vux'
export default {
    components: {
        Group,
        Cell,
        Countdown,
        XSwitch
    },
    data() {
        return {
            show: true,
            time1: 15,
            time2: 15,
            value: '',
            start: false
        }
    },
    methods: {
        finish(index) {
            this.show = false
            this.value = 'completed'
            console.log('current index', index)
        },
        finish2() {
            this.start = false
            this.time = 20
        }
    }
}
</script>