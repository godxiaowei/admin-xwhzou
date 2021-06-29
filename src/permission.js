import router from '@/router'
import store from '@/store'
import nprogress from 'nprogress' // 引入进度条
import 'nprogress/nprogress.css'

// 权限拦截在路由跳转的时候 导航守卫

// 白名单
const whitelist = ['/login', '/404'] // 定义白名单
// 前置守卫
router.beforeEach((to, from, next) => {
  nprogress.start() // 开启进度条
  // 判断是否有token值存在，如果存在判断是登陆页面，如果是，则跳转到主页
  if (store.getters.token) {
    if (to.path === '/login') {
      next('/') // 跳转到主页
    } else {
      next()
    }
  } else {
    // 没有Token的情况下，判断跳转的页面在不在白名单之内

    if (whitelist.indexOf(to.path) > -1) {
      next() // 跳转的地址在白名单之内
    } else {
      next('/login') // 跳转的地址不在白名单之内，则跳转到登陆页面
    }
  }
  nprogress.done() // 手动强制关闭一次  为了解决 手动切换地址时  进度条的不关闭的问题
})

// 后置守卫
router.afterEach((to, from, next) => {
  nprogress.done() // 关闭进度条
})
