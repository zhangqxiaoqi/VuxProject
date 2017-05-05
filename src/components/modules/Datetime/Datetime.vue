<template>
    <div>
        <group title="默认格式：YYYY-MM-DD">
            <datetime v-model="value1" @on-change="change" title="生日" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分"></datetime>
        </group>
        <group title="生日格式化">
            <datetime v-model="formatValue" :display-format="formatValueFunction" @on-change="change" title="生日"></datetime>
        </group>
        <div style="padding:15px;">
            <x-button type="primary" @click.native="formatValue = '2017-11-11'">设置时间2017-11-11</x-button>
        </div>
        <group title="限制小时范围">
            <datetime v-model="limitHourValue" format="YYYY-MM-DD HH:mm" :min-hour="9" :max-hour="18" @on-change="change" title="限制小时" inline-desc="9-18"></datetime>
        </group>
        <group title="设置开始时间和结束日期 2015-11-11 ~ 2017-10-11">
            <datetime v-model="limitHourValue" :start-date="startDate" :end-date="endDate" format="YYYY-MM-DD HH:mm" @on-change="change" title="开始时间"></datetime>
        </group>
        <div style="padding:15px;">
            <x-button @click.native="reRender" type="primary">2016-11-11 ~ 2018-10-11</x-button>
        </div>
        <group title="改变格式">
            <datetime v-model="value2" :format="format" @on-change="change" title="改变格式"></datetime>
        </group>
        <div style="padding:15px;">
            <x-button type="primary" @click.native="toggleFormat">改变格式</x-button>
        </div>
        <group title="提示文字">
            <datetime v-model="value3" format="YYYY-MM-DD" placeholder="请选择" @on-change="change" title="日期"></datetime>
        </group>
        <group title="年份范围">
            <datetime v-model="value4" :placeholder="请选择" min-year="2000" max-year="2016" format="YYYY-MM-DD HH:mm" @on-change="change" title="2000年以后"></datetime>
        </group>
        <group title="汉化">
            <datetime v-model="value5" placeholder="请选择" :min-year="2000" :max-year="2016" format="MM-DD" @on-change="change" title="中文" year-row="{value}年" month-row="{value}月" day-row="{value}日" hour-row="{value}点" minute-row="{value}分" confirm-text="完成" cancel-text="取消"></datetime>
        </group>
        <group title="显示清空">
            <datetime v-model="value6" @on-change="change" title="生日" clear-text="清空" @on-clear="clearValue"></datetime>
        </group>
        <group title="今天">
            <datetime v-model="value7" @on-change="change" title="生日" clear-text="今天" @on-clear="setToday"></datetime>
        </group>
        <group title="按钮选择">
            <datetime v-model="value7" @on-change="change" title="生日" clear-text="today" @on-clear="setToday">
                <x-button>点击</x-button>
            </datetime>
        </group>
        <group title="必填">
            <datetime v-model="value8" title="必填" clear-text="clear" @on-clear="clearValue8" :required="true"></datetime>
        </group>
    </div>
</template>
<script>
import { Datetime, Group, XButton } from 'vux'

export default {
    components: {
        Datetime,
        Group,
        XButton
    },
    data() {
        return {
            format: 'YYYY-MM-DD HH:mm',
            value1: '2015-11-12',
            value2: '',
            value3: '',
            value4: '',
            value5: '',
            value6: '2016-08-18',
            value7: '',
            value8: '',
            limitHourValue: '',
            startDate: '2015-11-11',
            endDate: '2017-10-11',
            formatValue: '2017-10-11',
            formatValueFunction(val) {
                return val.replace(/-/g, '$')
            }
        }
    },
    methods: {
        toggleFormat() {
            this.format = this.format === 'YYYY-MM-DD HH:mm' ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'
        },
        reRender() {
            this.startDate = '2016-11-11'
            this.endDate = '2018-10-11'
        },
        change(value) {
            console.log('change', value)
        },
        clearValue(value) {
            this.$data.value6 = ''
        },
        clearValue8(value) {
            this.$data.value8 = ''
        },
        setToday(value) {
            let now = new Date()
            let cmonth = now.getMonth() + 1
            let day = now.getDate()
            if (cmonth < 10) cmonth = '0' + cmonth
            if (day < 10) day = '0' + day
            this.$data.value7 = now.getFullYear() + '-' + cmonth + '-' + day
            console.log('set today ok')
        }
    }
}
</script>