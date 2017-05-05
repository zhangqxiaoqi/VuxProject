<template>
  <div>
    <group>
      <x-textarea :max="20" placeholder="默认" @on-focus="onEvent('focus')" @on-blur="onEvent('blur')"></x-textarea>
    </group>
    <group title="和input一起使用">
      <x-input placeholder="标题"></x-input>
      <x-textarea :max="200" name="description" placeholder="不显示计数器"></x-textarea>
    </group>
    <group title="不显示计数器">
      <x-textarea :max="200" name="detail" placeholder="不显示计数器" :show-counter="false"></x-textarea>
    </group>
    <group title="自动高度">
      <x-textarea placeholder="随便写点什么" :show-counter="false" :rows="3" autosize></x-textarea>
      <x-textarea title="标题" placeholder="随便写点什么" :show-counter="false" :rows="1" autosize></x-textarea>
    </group>
    <group title="设置高度为200像素">
      <x-textarea title="标题" :max="200" placeholder="提示" :show-counter="false" :height="100" :rows="8" :cols="30"></x-textarea>
    </group>
  </div>
</template>



<script>
import { XTextarea, Group, XInput } from 'vux'

export default {
  components: {
    XTextarea,
    Group,
    XInput
  },
  methods: {
    onEvent (event) {
      console.log('on', event)
    }
  }
}
</script>