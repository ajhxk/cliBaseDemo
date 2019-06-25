import Vue from 'vue'

const autoRegisterGlobalComp = () => {
  const globCompCtx = require.context('./', true, /index\.js$/)
  const keys = globCompCtx.keys()

  keys.forEach(key => {
    const compConfig = globCompCtx(key)
    const ctrl = compConfig.default || compConfig
    Vue.component(ctrl.name, ctrl)
  })
}

export default autoRegisterGlobalComp
