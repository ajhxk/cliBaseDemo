export default [{
  path: '/about',
  component: () =>
        import(/* webpackChunkName: "aboue" */ '@/views/about/index.vue')
}]
