<template>
    <div>
        <msg title="操作成功" description="内容详情，可根据实际需要安排，如果换行则不超过规定长度，居中<a href=''>展现文字链接</a>"   :icon="icon" :buttons="buttons"></msg>
    </div>
</template>
<script>
import { Msg, Divider, XButton } from 'vux'
export default {
    components: {
        Msg,
        Divider,
        XButton
    },
    methods: {
        changeIcon() {
            if (!this.icon || this.icon === 'success') {
                this.icon = 'warn'
                return;
            }
            if (this.icon === 'warn') {
                this.icon = 'info'
                return;
            }
            if (this.icon === 'info') {
                this.icon = 'waiting'
                return;
            }
            if (this.icon === 'waiting') {
                this.icon = 'success'
            }
        }
    },
    data() {
        return {
            description: 'msg description',
            icon: '',
            buttons: [{
                type: 'primary',
                text: 'primary button',
                onClick: this.changeIcon.bind(this)
            }, {
                type: 'default',
                text: 'secondary button',
                link: '/demo'
            }]
        }
    }
}
</script>