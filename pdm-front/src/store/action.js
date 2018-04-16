import * as types from './mutation-types'

const actions = {
  // es6 函数写法
  // this.userLogin(res.data) --> data = { name: user.name,token: createToken(user.name)}
  userLogin({ commit }, data) { commit(types.LOGIN, data) }, // 登录

  userLoginOut({ commit }) { commit(types.LOGINOUT) }, // 登出

  isCollapse({ commit }) { commit(types.ISCOLLAPSE) }, // sidebar折叠

  openAddLayer({ commit }) { commit(types.OPENADDLAYER) },

  getSideBarIndex({ commit }, index) { commit(types.SIDEBARINDEX,index) }, // 获取sidebar菜单

  getNavIndex({ commit }, index) { commit(types.NAVINDEX,index) }, // 获取主菜单index

  getMultiMenuIndex({ commit }, index) { commit(types.MULTIMENUINDEX, index) }, // multiMenu index

  getObserverValues({ commit }, value) { commit(types.OBSERVERVALUES, value) },

  isReadOnly({ commit }) { commit(types.ISREADONLY) }, // cell可编辑

}

export default actions
