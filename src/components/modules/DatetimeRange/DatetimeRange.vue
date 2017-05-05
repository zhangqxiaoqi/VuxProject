<template>
    <div>
        <group >
    <datetime-range title="选择" start-date="2017-01-01" end-date="2017-02-02" format="YYYY-MM-DD" v-model="value" @on-change="onChange"></datetime-range>
        </group>
    </div>
</template>
<script>
import { Group, DatetimeRange } from 'vux';
export default {
    components: {
        Group,
        DatetimeRange
    },
    methods: {
        onChange(val) {
            console.log('change', val)
        }
    },
    data() {
        return {
            value: ['2017-01-15', '03', '05']
        }
    }
}
</script>