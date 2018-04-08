// 改变的数据
import * as types from './mutation-types'

export const mutations = {
  // 登录
  [types.LOGIN](state, data) {  
    localStorage.setItem('token', data.token)
    state.token = data.token
    localStorage.setItem('username', data.name)
    state.username = data.name
  },
  // 登出
  [types.LOGINOUT](state) {
    localStorage.removeItem('token')
    state.token = ''
    localStorage.removeItem('username')
    state.username = ''
  },
  // SideBar折叠
  [types.ISCOLLAPSE](state) {
    localStorage.setItem('isCollapse', !state.isCollapse)
    state.isCollapse = !state.isCollapse
  },
  // 获取SideBar index
  [types.SIDEBARINDEX](state,index) {
    state.sideBarIndex = index
  },
  // 打开添加工序
  [types.OPENADDLAYER](state) {
    state.isOpenAddLayer = !state.isOpenAddLayer
  },
  // 获取主菜单index
  [types.NAVINDEX](state,index) {
    //console.log(index)
    localStorage.setItem('navIndex',index)
    state.navIndex = index
  },
  // 获取navtwo index
  [types.NAVTWOINDEX](state,index) {
    state.navTwoIndex = index
  },
  // 获取基础物料提交数据
  [types.OBSERVERVALUES](state,value) {
    console.log(value)
    state.observerValues = value
  },
  [types.ISREADONLY](state) {
    state.readonly = !state.readonly
  }
}

export default mutations
