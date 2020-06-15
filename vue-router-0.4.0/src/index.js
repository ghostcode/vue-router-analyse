var routerUtil = require('./util')
var Router = require('./router')

/**
 * Installation interface.
 * Install the necessary directives.
 */
// Vue.use(Router) 时就会调用此方法
Router.install = function (Vue) {
  /* istanbul ignore if */
  // 防止多次安装
  if (Router.installed) {
    routerUtil.warn('already installed.')
    return
  }
  require('./router/api')(Vue, Router)
  require('./router/internal')(Vue, Router)
  require('./directives/view')(Vue)
  require('./directives/link')(Vue)
  require('./override')(Vue)
  routerUtil.Vue = Vue
  Router.installed = true
}

// auto install
/* istanbul ignore if */
if (window.Vue) {
  Router.install(window.Vue)
}

module.exports = Router
