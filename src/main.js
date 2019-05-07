// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

import axios from 'axios'
axios.defaults.baseURL = 'http://www.liulongbin.top:3005'
Vue.prototype.$http = axios

import Comment from './components/share/comment.vue'
Vue.component('comment', Comment)

// lib有.css文件
// 引入文件也没问题
// 该文件无法处理->让webpack

// 引入MUI相关的资源
import './lib/mui/css/mui.min.css'

import './lib/mui/css/icons-extra.css'

Vue.use(MintUI)
Vue.filter('toTime', function(origin) {
  return new Date(origin).toLocaleString()
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
