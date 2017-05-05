<template>
    <div>
        <group>
            <cell title="我的账号" value="保护中" inline-desc="小行提示" is-link></cell>
            <cell title="余额" :is-loading="!money" :value="money"></cell>
            <cell title="体现" disabled is-link></cell>
        </group>
        <group title="使用 is-link 显示右边箭头">
            <cell title="接收通知" is-link></cell>
            <cell title="隐私" is-link></cell>
            <cell title="通用" is-link>
                <img slot="icon" width="20" style="display:block;margin-right:5px;" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAMAAABgZ9sFAAAAVFBMVEXx8fHMzMzr6+vn5+fv7+/t7e3d3d2+vr7W1tbHx8eysrKdnZ3p6enk5OTR0dG7u7u3t7ejo6PY2Njh4eHf39/T09PExMSvr6+goKCqqqqnp6e4uLgcLY/OAAAAnklEQVRIx+3RSRLDIAxE0QYhAbGZPNu5/z0zrXHiqiz5W72FqhqtVuuXAl3iOV7iPV/iSsAqZa9BS7YOmMXnNNX4TWGxRMn3R6SxRNgy0bzXOW8EBO8SAClsPdB3psqlvG+Lw7ONXg/pTld52BjgSSkA3PV2OOemjIDcZQWgVvONw60q7sIpR38EnHPSMDQ4MjDjLPozhAkGrVbr/z0ANjAF4AcbXmYAAAAASUVORK5CYII=">
            </cell>
        </group>
        <group title="折叠">
            <cell title="标题一" is-link :border-intent="false" :arrow-direction="showContent001 ? 'up' : 'down'"  @click.native="showContent001= !showContent001"></cell>
            <div v-if="showContent001">
                <cell-box :border-intent="false" class="sub-item" is-link>content 001</cell-box>
                <cell-box class="sub-item" is-link>content 001</cell-box>
                <cell-box class="sub-item" is-link>content 001</cell-box>
            </div>
            <cell title="标题二" is-link :arrow-direction="showContent002?'up':'down'" @click.native="showContent002=!showContent002"></cell>
            <template v-if="showContent002">
                <cell-form-preview :border-intent="false" :list="list"></cell-form-preview>
            </template>
            <cell title="标题三" is-link :arrow-direction="showContent003?'up':'down'" @click.native="showContent003=!showContent003"></cell>
            <template v-if="showContent003">
                <cell-box>测试的内容内容日</cell-box>
            </template>
            <cell title="动画特效" is-link :arrow-direction="showContent004?'up':'down'" @click.native="showContent004=!showContent004"></cell>
            <p class="slide" :class="showContent004?'animate':''">blablabla...<br/>blablabla...<br/>blablabla...<br/>blablabla...</p>
        </group>
    </div>
</template>
<script>
import { Group, Cell, CellBox, CellFormPreview } from 'vux';
export default {
    components: {
        Group,
        Cell,
        CellBox,
        CellFormPreview
    },
    data() {
        return {
            list: [{
                label: '苹果',
                value: '3.29'
            }, {
                label: '香蕉',
                value: '1.04'
            }, {
                label: '鱼',
                value: '8.00'
            }],
            money: null,
            showContent001: false,
            showContent002: false,
            showContent003: false,
            showContent004: false
        }
    },
    mounted() {
        setTimeout(() => {
            this.money = -1023;
        }, 2000);
    }
}
</script>
<style scoped>
.sub-item {
  color: #888;
}
.slide {
  padding: 0 20px;
  overflow: hidden;
  max-height: 0;
  transition: max-height .5s cubic-bezier(0, 1, 0, 1) -.1s;
}
.animate {
  max-height: 9999px;
  transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
  transition-delay: 0s;
}
</style>