// 导入
import Vue from 'vue'
import Vuex from 'vuex'
import moduleCart from './cart.js'
import moduleUser from './user.js'

Vue.use(Vuex)

// store 实例对象
const store = new Vuex.Store({
  modules: {
    m_cart: moduleCart,
    m_user: moduleUser
  }
})

export default store
