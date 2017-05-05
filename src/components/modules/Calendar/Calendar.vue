<template>
    <div>
        <group title="日历">
            <calendar v-model="demo1" title="一般使用" disable-past></calendar>
        </group>
        <group>
             <calendar v-model="demo2" title="选择今天的日子" disable-past></calendar>
              
        </group>
        <group>
            <calendar v-model="demo2" title="禁止选择未来的日子" disable-future></calendar>
        </group>
    </div>
</template>
<script>
    import {Group,Calendar,Cell} from 'vux'
    export default{
        components:{
            Group,
            Calendar,
            Cell
        },
        data(){
            return {
                demo1:'',
                demo2:'TODAY',
                demo3:'TODAY'
            }
        }
    }
</script>