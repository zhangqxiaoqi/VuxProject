<template>
    <div >
        <divider>simple card with header and content</divider>
        <card :header="{title:'我的钱包'}" :footer="{title:'查看更多',link:'/component/panel'}">
            <div slot="content" class="card-demo-flex card-demo-content01 card-padding">
                这个是当前的内容，需要测试清楚不死安这个是当前的内容，需要测试清楚不死安这个是当前的内容，需要测试清楚不死安
            </div>
        </card>
        <divider>use header slot and content slot</divider>
        <card :footer="{title:'查看更多'}">
            <img slot="header" src="http://placeholder.qiniudn.com/640x300" style="width:100%;display:block;">
            <div slot="content" class="card-padding">
                Quisque eget vestibulum nulla. Quisque quis dui quis ex ultricies efficitur vitae non felis. Phasellus quis nibh hendrerit..
            </div>
        </card>
    </div>
</template>
<script>
    import {Card,Divider} from 'vux'
    export default{
        components:{
            Card,
            Divider
        }
    }
</script>
<style scoped lang="less">
@import '~vux/src/styles/1px.less';

.card-demo-flex {
  display: flex;
}
.card-demo-content01 {
  padding: 10px 0;
}
.card-padding {
  padding: 15px;
}
.card-demo-flex > div {
  flex: 1;
  text-align: center;
  font-size: 12px;
}
.card-demo-flex span {
  color: #f74c31;
}
</style>
