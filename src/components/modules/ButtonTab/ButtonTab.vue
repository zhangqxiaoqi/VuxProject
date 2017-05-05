<template>
    <div style="padding:20px;">
        <button-tab>
            <button-tab-item>今天</button-tab-item>
            <button-tab-item selected>本周</button-tab-item>
            <button-tab-item>本月</button-tab-item>
        </button-tab>
        <divider>使用 v-model 设置当前选中项</divider>
            <button-tab v-model="demo1">
                <button-tab-item>文章</button-tab-item>
                <button-tab-item><span class="vux-reddot-s">商品</span></button-tab-item>
            </button-tab>
            <br/>
            <button-tab v-model="demo1">
                <button-tab-item>文章同步</button-tab-item>
                <button-tab-item><span class="vux-reddot-s">商品同步</span></button-tab-item>
            </button-tab>
         <divider>红点</divider>
         <button-tab>
            <button-tab-item>所有消息</button-tab-item>
            <button-tab-item><span class="vux-reddot-s">新消息</span></button-tab-item>
         </button-tab>
    </div>
</template>
<script>
import { ButtonTab, ButtonTabItem,Divider  } from 'vux';
export default {
    data(){
        return{
            demo1:0
        }
    },
    components: {
        ButtonTab,
        ButtonTabItem,
        Divider 
    }
}
</script>