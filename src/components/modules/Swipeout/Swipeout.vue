<template>
    <div>
        <swipeout>
            <swipeout-item @on-close="handleEvents('on-close')" @on-open="handleEvents('on-open')" transition-mode="follow">
                <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick('fav')" type="primary">是的</swipeout-button>
                    <swipeout-button @click.native="onButtonClick('delete')" type="warn">正确</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-t">
                    <cell title="正常滑动实例" is-link></cell>
                </div>
            </swipeout-item>
            <swipeout-item :threshold=".5" underlay-color="#ccc">
                <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick('fav')" background-color="#336DD6">收藏</swipeout-button>
                    <swipeout-button @click.native="onButtonClick('delete')" background-color="#D23934">删除</swipeout-button>
                </div>
                <div slot="content" class="demo-content vux-1px-tb">
                    设置滑动阀值0.5
                </div>
            </swipeout-item>
            <swipeout-item :disabled="disabled" ref="swipeoutItem" :right-menu-width="210" :sensitivity="15">
                <div slot="right-menu">
                    <swipeout-button @click.native="onButtonClick('fav')" type="primary" :width="70">收藏</swipeout-button>
                    <swipeout-button @click.native="onButtonClick('delete')" type="warn" :width="70">删除</swipeout-button>
                    <swipeout-button @click.native="onButtonClick('ignore')" type="default" :width="70">忽略</swipeout-button>
                </div>
    
                <div slot="left-menu">
                    <swipeout-button @click.native="onButtonClick('fav')" type="primary">收藏</swipeout-button>
                    <swipeout-button @click.native="onButtonClick('delete')" type="warn">删除</swipeout-button>
                </div>
    
                <div slot="content" class="demo-content vux-1px-b">
                    可用
                </div>
            </swipeout-item>
        </swipeout>
    </div>
</template>
<script>
import { Swipeout, SwipeoutItem, SwipeoutButton, XButton, Cell, Group } from 'vux'
export default {
    components: {
        Swipeout,
        SwipeoutItem,
        SwipeoutButton,
        XButton,
        Cell,
        Group
    },
    methods: {
        onButtonClick(type) {
            alert('on button click ' + type)
        },
        handleEvents(type) {
            console.log('event: ', type)
        }
    },
    data() {
        return {
            disabled: false
        }
    }
}
</script>
<style lang="less">
.demo-content {
    padding: 10px 10px;
}
</style>