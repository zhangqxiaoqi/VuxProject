<template>

  <div>
    <group>
      <x-switch :title="'一般使用'" v-model="show1"></x-switch>
      <x-switch :title="'显示取消菜单'" v-model="show2"></x-switch>
      <x-switch :title="'显示提示文字'" v-model="show3"></x-switch>
      <x-switch :title="'使用数组定义菜单'" v-model="show5"></x-switch>
    </group>

    <group :title="'点击遮罩区域不自动关闭'">
      <x-switch :title="'一般使用'" v-model="show4"></x-switch>
    </group>

    <actionsheet v-model="show4" :menus="menus1" :close-on-clicking-mask="true" :show-cancel="true"></actionsheet>

    <actionsheet v-model="show1" :menus="menus1" @on-click-menu="click"></actionsheet>

    <actionsheet v-model="show2" :menus="menus2" @on-click-menu="click" show-cancel></actionsheet>

    <actionsheet v-model="show3" :menus="menus3" @on-click-menu="click" @on-click-menu-delete="onDelete" show-cancel></actionsheet>

    <actionsheet v-model="show5" :menus="menus5" show-cancel @on-click-menu="click"></actionsheet>

    <toast v-model="showSuccess">加载中</toast>
  </div>
</template>

<script>
import { Actionsheet, Group, XSwitch, Toast } from 'vux'

export default {
  components: {
    Actionsheet,
    Group,
    XSwitch,
    Toast
  },
  data () {
    return {
      show1: false,
      menus1: {
        menu1: 'Share to friends',
        menu2: 'Share to timeline'
      },
      show2: false,
      menus2: {
        menu1: 'Take Photo',
        menu2: 'Choose from photos'
      },
      show3: false,
      show4: false,
      show5: false,
      menus5: [{
        label: 'Are you sure?<br/><span style="color:#666;font-size:12px;">Once deleted, you will never find it.</span>',
        type: 'info'
      }, {
        label: 'Primary',
        type: 'primary',
        value: 'primary'
      }, {
        label: 'Warn',
        type: 'warn',
        value:'Warn',
        id:'12'
      }, {
        label: 'Disabled',
        type: 'disabled'
      }, {
        label: 'Default'
      }],
      showSuccess: false,
      menus3: {
        'title.noop': '确定?<br/><span style="color:#666;font-size:12px;">一旦删除将无法恢复！</span>',
        delete: '<span style="color:red">确认删除么？</span>'
      }
    }
  },
  methods: {
    click (key) {
      console.log(key.id)
    },
    onDelete () {
      this.showSuccess = true
    }
  }
}
</script>

<style>
.popup0 {
  padding-bottom:15px;
  height:200px;
}
.popup1 {
  width:100%;
  height:100%;
}
.bounce-enter-active {
  animation: bounce-in .5s;
}
.bounce-leave-active {
  animation: bounce-out .5s;
}

</style>