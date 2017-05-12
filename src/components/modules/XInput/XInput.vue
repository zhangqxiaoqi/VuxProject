<template>
    <div>
        <group title="禁用内置验证及显示成功或者错误样式">
            <x-input title="禁用验证" placeholder="I'm placeholder" novalidate :icon-type="iconType" @on-blur="onBlur" placeholder-align="right"></x-input>
        </group>
        <div style="padding:15px;">
            <x-button @click.native="iconType = 'success'" type="primary"> set success</x-button>
            <x-button @click.native="iconType = 'error'" type="primary"> set error</x-button>
            <x-button @click.native="iconType = ''" type="primary"> set empty</x-button>
        </div>
        <group title="set keyboard=number and is-type=china-mobile">
            <x-input title="手机号码" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
        </group>
        <group title="check if value is valid when required===true">
            <x-input title="message" placeholder="I'm placeholder" ref="input01" ignore  required></x-input>
            <cell title="click to get valid value" :value="'$valid value:' + valid1" @click.native="getValid1"></cell>
        </group>
        <group title="check if value is valid when required===false">
        <x-input title="message" placeholder="I'm placeholder" :required="true" ref="input02" @click.native="getValid2"></x-input>
        <cell title="click to get valid value" :value="'$valid value:' + valid2" @click.native="getValid2"></cell>
         <x-textarea :max="200" name="description" placeholder="多行文本" ref="textarea01"></x-textarea>
        </group>
    </div>
</template>
<script>
import { XInput, Group, XButton, Cell,XTextarea } from 'vux'
export default {
    components: {
        XInput,
        XButton,
        Group,
        Cell,
        XTextarea
    },
    data() {
        return {
            password: '123465',
            password2: '',
            valid1: false,
            valid2: false,
            iconType: '',
            be2333: function (value) {
                return {
                    valid: value === '2333',
                    msg: 'Must be 2333'
                }
            },
            style: '',
            disabledValue: 'hello',
            debounceValue: '',
            maxValue: ''
        }
    },
    methods: {
        getValid1() {
            this.valid1 = this.$refs.input01.valid
            //console.log(this.$refs.input01);
            //console.log(this.$refs.input01._data.currentValue);
           console.log('检测结果:'+ this.$common.validate(this.$refs));
        },
        getValid2() {
            this.valid2 = this.$refs.input02.valid
        },
        change(val) {
            console.log(val)
        },
        onBlur(val) {
            console.log('on blur', val)
        },
        onFocus(val) {
            console.log('on focus', val)
        }
    }
}
</script>
<style scoped>
.red {
    color: red;
}

.green {
    color: green;
}
</style>