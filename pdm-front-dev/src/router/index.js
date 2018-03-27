import Vue from 'vue'
import Router from 'vue-router'
// 加载组件
import FarHome from '@/views/FarHome'
//import Register from '@/views/Register'
//import Login from '@/views/Login'
// test
//import NavMenu from '@/views/components/NavMenu'

// 注册路由
Vue.use(Router)

// 配置路由；
//const router = new Router({
//  routes: [{
//      path: '/',
//      name: 'home',
//      // 路由元信息
//      meta: {
//         requireAuth: true // 添加该字段表示该路由需要登录
//         //skipAuth: true 略过验证
//        
//      },
//      component: Home,
//      children: []
//    }, {
//      path: '/login',
//      name: 'login',
//      component: Login
//    }, {
//      path: '/register',
//      name: 'register',
//      component: Register
//    }
//    // test
//   
//  ]
//}) // new Router

const routes = [ { // 验证
  path: '/',
  component: FarHome,
// 路由元信息
meta: {
requireAuth: true, // 添加该字段表示该路由需要登录
//skipAuth: true //略过验证
   
},
  children: [{
    path: '/WorkSpace',
    component: resolve =>
      import ('@/views/layout/FarWorkSpace').then(resolve),
    children: [{
      name: 'Design',
      path: 'Design',
      component: resolve =>
        import ('@/views/workspace/w-draw').then(resolve)
    }, {
      name: 'MaterialBill',
      path: 'MaterialBill',
      component: resolve =>
        import ('@/views/workspace/wMaterial/wMaterialBill').then(resolve)
    },{
      name: 'Material',
      path: 'Material',
      component: resolve =>
        import ('@/views/workspace/wMaterial/wMaterial').then(resolve)
    },{
      name: 'ProcessCard',
      path: 'ProcessCard',
      component: resolve =>
        import ('@/views/workspace/wMaterial/wProcessCard').then(resolve)
    }]

  }]
}, { // 验证
  path: '/auth',
  component: resolve =>
    import ('@/views/auth/far-authview').then(resolve),
  children: [{
    path: 'login',
    component: resolve =>
      import ('@/views/auth/far-login').then(resolve)
  }, {
    path: 'register',
    component: resolve =>
      import ('@/views/auth/far-register').then(resolve)
  }]
}, ]

/* const scrollBehavior = (to, from, savedPosition) => {
  console.log('to', to)
  if (to.hash) {
    return {
      selector: to.hash
    }
  }
} */

// 实例路由
const router = new Router({
  mode: 'history',
  //scrollBehavior,
  routes // 传入路由配置
})

// 设置路由拦截
// 第一次拦截 home--> beforeCreate () 第二次拦截
// 在vue-router的全局钩子中设置拦截
// 每个路由皆会的钩子函数
// to 进入 from 离开 next 传递
router.beforeEach((to, from, next) => {
  //console.log(to.path.match(/.*\/index?$/i))
  //console.log(to.fullPath)
  // to.path.match(/.*\/index$/i)
  if (to.path.match(/disabled|.*\/index$/i)) { // . ->匹配任意字符 \/ ->转义 * ->全匹配 ? ->匹配字符串 $ ->结尾
    next(false)
  } else if (to.meta.requireAuth) { // 如果访问的路由设置了 meta.requireAuth
    let token = localStorage.getItem('token')
    if (to.meta.requireAuth) { // 如果访问的路由设置了 meta.requireAuth
      console.log('全局拦截')
      if (token) { // 如果有token继续
        next()
      } else {
        next({
          path: '/',
          query: {
            redirect: to.fullPath
          }
        })
      }
    }
  } else {
    next()
  }

})



// 导出路由
export default router
