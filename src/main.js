// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import FastClick from 'fastclick'
import VueRouter from 'vue-router'
import { AlertPlugin, ToastPlugin,ConfirmPlugin,LoadingPlugin   } from 'vux'
import App from './App'

import router from './router/index'
import common from './util/common'

Vue.use(VueRouter)
Vue.use(AlertPlugin)
Vue.use(ToastPlugin)
Vue.use(ConfirmPlugin)
Vue.use(LoadingPlugin)
FastClick.attach(document.body)

Vue.config.productionTip = false
Vue.prototype.$common=common
/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app-box')
