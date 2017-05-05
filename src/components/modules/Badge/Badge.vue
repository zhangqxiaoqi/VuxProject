<template>
    <div>
        <Badge text="1"></Badge>
        <Badge text="123"></Badge>
        <Group :title="'在 Cell 组件里使用'">
            <Cell title="个位数" is-link>
                <div class="badge-value" slot="value">
                    <span class="vertical-middle">新消息</span>
                    <badge text="8"></badge>
                 </div>
            </Cell>
            <Cell title="多位数" is-link>
                <div class="badge-value" slot="value">
                    <span class="vertical-middle">新消息</span>
                    <badge text="888"></badge>
                 </div>
            </Cell>
        </Group>
    </div>
</template>
<script>
   import {Badge,Group,Cell} from 'vux'
    export default{
        components:{
            Badge,
            Group,
            Cell
        }
    }
</script>