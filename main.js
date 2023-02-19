import App from './App'
import mySearch from './components/my-search/my-search.vue'
Vue.component('my-search', mySearch)
import myGoods from './components/my-goods/my-goods.vue'
Vue.component('my-goods', myGoods)
import myAddress from './components/my-address/my-address.vue'
Vue.component('my-address', myAddress)
import mySettle from './components/my-settle/my-settle.vue'
Vue.component('my-settle', mySettle)
import myLogin from './components/my-login/my-login.vue'
Vue.component('my-login', myLogin)
import myUserInfo from './components/my-userinfo/my-userinfo.vue'
Vue.component('my-userinfo', myUserInfo)


import store from './store'

// 按需导入 $http 对象
import {
  $http
} from '@escook/request-miniprogram'

// 在 uni-app 项目中，可以把 $http 挂载到 uni 顶级对象之上，方便全局调用
uni.$http = $http

// 配置请求根路径
$http.baseUrl = 'https://www.uinav.com'

// 请求拦截器
$http.beforeRequest = function(options) {
  wx.showLoading({
    title: '数据加载中...',
  })

  if (options.url.indexOf('/my/') !== -1) {
    options.header = {
      Authorization: store.state.m_user.token
    }
  }
}

// 响应拦截器
$http.afterRequest = function() {
  wx.hideLoading()
}

uni.$showMsg = function(title = '数据加载失败', duration = 1500) {
  uni.showToast({
    title,
    duration,
    icon: 'none'
  })
}

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App,
  store
})
app.$mount()
// #endif

// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif
