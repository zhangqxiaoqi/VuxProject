<template>
    <div>
        <countup :start-val="1" :end-val="1388" :duration="2" class="demo1"></countup>
        <countup :end-val="88.88" :duration="3" :decimals="2" class="demo1"></countup>
         <countup :end-val="88.88" :duration="3" :decimals="2" :start="doStart" class="demo1"></countup>
         <x-button type="primary" @click.native="doStart=!doStart">开始</x-button>
    </div>
</template>
<script>
import { Countup, XButton } from 'vux';
export default {
    components: {
        Countup,
        XButton
    },
    data() {
        return {
            doStart: false
        }
    }
}
</script>
<style scoped>
.demo1 {
    font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;
    font-size: 6em;
    color: #04BE02;
}
</style>