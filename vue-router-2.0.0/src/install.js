// 两个全局组件
import View from './components/view'
import Link from './components/link'

export function install (Vue) {
  if (install.installed) return
  install.installed = true
  // 在 Vue 原型上添加 $router 和 ￥route 属性
  Object.defineProperty(Vue.prototype, '$router', {
    // this.$root 是根组件实例
    get () { return this.$root._router }
  })

  Object.defineProperty(Vue.prototype, '$route', {
    get () { return this.$root._route }
  })

  Vue.mixin({
    beforeCreate () {
      if (this.$options.router) {
        // 实例化 Vue 时，传入的 VueRouter 实例
        this._router = this.$options.router
        // 调用 VueRouter 实例的方法，并传入 Vue 类
        this._router.init(this)
        Vue.util.defineReactive(this, '_route', this._router.history.current)
      }
    }
  })
  // 注册全局组件
  Vue.component('router-view', View)
  Vue.component('router-link', Link)
}
