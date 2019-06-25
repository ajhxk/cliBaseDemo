import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const IndexRoute = {
  path: '/',
  redirect: '/login',
  children: []
}

let routes = [
  IndexRoute,
  {
    path: '*',
    component: () =>
            import(/* webpackChunkName: "login" */ '@/views/login/index.vue')
  }
]

const routerCtx = require.context('./', true, /index\.js$/)

routerCtx.keys().forEach(route => {
  // 排除根目录
  if (route.startsWith('./index')) { return }

  const routerModule = routerCtx(route)
  routes = [...routes, ...(routerModule.default || routerModule)]
})

console.log(routes)

export default new Router({
  mode: 'hash',
  routes: routes
})
