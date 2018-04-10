/**** 全局组件注册 ***/
import Vue from 'vue'
// vue-3d-model
//import { ModelObj } from 'vue-3d-model'
// vue-grid-canvas
//import Grid from 'vue-grid-canvas'
// 粒子效果
//import Nest from 'vue-atom-canvas'
// 圆环菜单
//import CircleMenu from 'vue-circle-menu'
//Vue.component('CircleMenu', CircleMenu)

// layout
import NavMenu from './layout/nav/nav' 
import Popover from './layout/nav/popover'
import User from './layout/nav/user'
import Search from './layout/nav/search'  // navmenu
import SideBar from './layout/sidebar/sidebar'
import WorkSpace from './layout/workspace/workspace'
import xFooter from './layout/footer'

// workspace
import xNavMenu from './layout/workspace/nav/nav'
import NavOne from './layout/workspace/nav/nav-one.vue'
import NavTwo from './layout/workspace/nav/nav-two.vue'
import NavThree from './layout/workspace/nav/nav-three.vue' // wNavMenu
import Bom from './layout/workspace/bom/bom'

// wTable
//import wBomTable from './workspace/wTable/w-bomTable.vue'
//import wMainBomTable from './workspace/wTable/w-mainBomTable.vue'

//import xHeader from './workspace/wNavMenu/header.vue'

//import wActiveArea from './workspace/w-activeArea.vue'
//import wFrom from './workspace/w-from.vue'
//import wTable from './workspace/w-table.vue'
//import wDraw from './workspace/w-draw'




// wDraw
//import wDrawSpace from './workspace/wDraw/w-drawSpace.vue'
//import wDrawControl from './workspace/wDraw/w-drawControl.vue'
// wBom
//import wBomData from './workspace/wBom/w-bomData.vue'
// wTable
//import wBomTable from './workspace/wTable/w-bomTable.vue'
//import wMainBomTable from './workspace/wTable/w-mainBomTable.vue'

// 注册全局组件

// layout
Vue.component('NavMenu', NavMenu)
Vue.component('Popover', Popover)
Vue.component('User', User)
Vue.component('Search', Search)  // nav
Vue.component('SideBar', SideBar)
Vue.component('WorkSpace', WorkSpace)
Vue.component('xFooter', xFooter)

// workspace
Vue.component('xNavMenu', xNavMenu)
Vue.component('NavOne', NavOne)
Vue.component('NavTwo', NavTwo)
Vue.component('NavThree', NavThree)  // wNavMenu
Vue.component('Bom', Bom)
//Vue.component('wActiveAreaHeader',wActiveAreaHeader)
//Vue.component('wActiveArea',wActiveArea)
//Vue.component('wFrom', wFrom)
//Vue.component('wTable',wTable)
//Vue.component('wDraw', wDraw)



// wDraw
//Vue.component('wDrawSpace', wDrawSpace)
//wBom
//Vue.component('wBomData', wBomData)
//wTable
//Vue.component('wBomTable', wBomTable)
//Vue.component('wMainBomTable', wMainBomTable)
// components
//Vue.component('wDrawControl', w-DrawControl)
// 粒子效果
//Vue.component('Nest', Nest)

// vue-3d-model
//Vue.component('ModelObj', ModelObj)
// vue-grid-canvas
//Vue.component('Grid', Grid)


// 引入样式
//import 'vue-easytable/libs/themes-base/index.css'
// 导入 table 和 分页组件
//import {VTable,VPagination} from 'vue-easytable'

// 注册到全局
//Vue.component(VTable.name, VTable)
//Vue.component(VPagination.name, VPagination)


// MaterialCard
import xCard from './layout/workspace/material/material-card'
Vue.use(xCard)