import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
// 注册
Vue.use(Vuex)

const state = {
  token: null,
  username: '',
  isCollapse: false,
  isOpenAddLayer: false,
  navIndex:'',
  sideBarIndex: '',
  navTwoIndex: '',
  observerValues:'' // 基础物料提交数据
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
