<template>
    <div>
        <marquee>
            <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" direction="down" class="align-middle">hello world {{i}}</marquee-item>
        </marquee>
        <group>
            <cell title="切换">
                <marquee>
                    <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)">JavaScript is the best language {{i}}</marquee-item>
                </marquee>
            </cell>
        </group>
        <marquee>
            <marquee-item v-for="i in asyncCount" :key="i" @click.native="onClick(i)" class="align-middle">hello world {{i}}</marquee-item>
        </marquee>
    </div>
</template>
<script>
import { Group, Cell, Marquee, MarqueeItem, Divider } from 'vux'
export default {
    components: {
        Marquee,
        MarqueeItem,
        Group,
        Cell,
        Divider
    },
    mounted() {
        setTimeout(() => {
            this.asyncCount = 5
        }, 1000)
    },
    methods: {
        onClick(i) {
            console.log(i)
        }
    },
    data() {
        return {
            asyncCount: 0
        }
    }
}
</script>
<style scoped>
.align-middle {
    text-align: center;
}
</style>