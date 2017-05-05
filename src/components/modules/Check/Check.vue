<template>
    <div style="padding:20px 0px;">
        <divider>单选，默认不选中任何项</divider>
        <div class="box">
            <checker v-model="demo1" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item value="1">A</checker-item>
                <checker-item value="2">B</checker-item>
            </checker>
            <span>当前值: {{demo1}}</span>
        </div>
        <divider>单选，Object类型</divider>
        <checker v-model="demo11" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
        </checker>
        <span>当前值: {{demo11}}</span>
        <br>
        <br>
        <checker v-model="demo22" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
            <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
        </checker>
        <span>当前值: {{demo22}}</span>
        <divider>多选类型</divider>
        <div>
            <checker v-model="demo21" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <br>
            <span>当前值: {{demo21}}</span>
            <checker v-model="demo23" type="checkbox" default-item-class="demo1-item" selected-item-class="demo1-item-selected" :max="2">
                <checker-item :value="item" v-for="(item, index) in items1" :key="index">{{item.value}}</checker-item>
            </checker>
            <checker v-model="demo3" default-item-class="demo3-item" selected-item-class="demo3-item-selected">
                <checker-item value="one">
                    <img src="http://placeholder.qiniudn.com/80x50/FF3B3B/ffffff" alt="">
                </checker-item>
                <checker-item value="two">
                    <img src="http://placeholder.qiniudn.com/80x50/FFEF7D/ffffff" alt="">
                </checker-item>
                <checker-item value="three">
                    <img src="http://placeholder.qiniudn.com/80x50/8AEEB1/ffffff" alt="">
                </checker-item>
            </checker>
            <group>
                <cell title="选择" :value="demo4" is-link @click.native="showPopup=true"></cell>
            </group>
            <popup v-model="showPopup" class="checker-popup">
                <div style="padding:10px 10px 40px 10px;">
                    <p style="padding: 5px 5px 5px 2px;color:#888;">Colors</p>
                    <checker v-model="demo4" default-item-class="demo4-item" selected-item-class="demo4-item-selected" disabled-item-class="demo4-item-disabled">
                        <checker-item value="花跟叶" @on-item-click="onItemClick">花跟叶</checker-item>
                        <checker-item value="鸟与树" @on-item-click="onItemClick">鸟与树</checker-item>
                        <checker-item value="我和你" @on-item-click="onItemClick">我和你</checker-item>
                        <checker-item value="全套礼品装" disabled @on-item-click="onItemClick">全套礼品装</checker-item>
                    </checker>
                </div>
            </popup>
            <checker v-model="demo5" default-item-class="demo5-item" selected-item-class="demo5-item-selected">
                <checker-item v-for="i in [1, 2, 3]" :key="i" :value="i">￥{{i*300}}</checker-item>
            </checker>
            <br/>
        </div>
    </div>
</template>
<script>
import { Checker, CheckerItem, Divider, Group, Cell, Popup } from 'vux'
export default {
    components: {
        Checker,
        CheckerItem,
        Divider,
        Group,
        Cell,
        Popup
    },
    methods: {
        onItemClick(value, disabled) {
            console.log(value, disabled)
            if (!this.disabled) {
                this.showPopup = false
            }
        }
    },
    data() {
        return {
            items1: [{
                key: '1',
                value: 'A'
            }, {
                key: '2',
                value: 'B'
            }, {
                key: '3',
                value: 'C'
            }],
            demo1: '',
            demo11: null,
            demo12: { key: '2', value: 'B' },
            demo21: null,
            demo22: [{ key: '2', value: 'B' }],
            demo23: null,
            demo1Checkbox: [2, 1],
            demo1CheckboxMax: ['2', '3'],
            demo2: '2',
            demo3: '',
            demo4: '花跟叶',
            showPopup: false,
            demo5: 1,
            demo6: [2, 3]
        }
    }
}
</script>
<style scoped>
.box {
    padding: 0 15px;
}

.demo1-item {
    border: 1px solid #ececec;
    padding: 5px 15px;
}

.demo1-item-selected {
    border: 1px solid green;
}

.demo2-item {
    width: 40px;
    height: 40px;
    border: 1px solid #ccc;
    display: inline-block;
    border-radius: 50%;
    line-height: 40px;
    text-align: center;
}

.demo2-item-selected {
    border-color: green;
}

.demo3-item {
    padding: 5px 5px;
    font-size: 0;
}

.demo3-item-selected {
    outline: 1px solid #8B8AEE;
}

.demo4-item {
    background-color: #ddd;
    color: #222;
    font-size: 14px;
    padding: 5px 10px;
    margin-right: 10px;
    line-height: 18px;
    border-radius: 15px;
}

.demo4-item-selected {
    background-color: #FF3B3B;
    color: #fff;
}

.demo4-item-disabled {
    color: #999;
}

.demo5-item {
    width: 100px;
    height: 26px;
    line-height: 26px;
    text-align: center;
    border-radius: 3px;
    border: 1px solid #ccc;
    background-color: #fff;
    margin-right: 6px;
}

.demo5-item-selected {

    border-color: #ff4a00;
}
</style>