/* global Vue */
import Router from 'vue-router'

import Login from '@weex/login'

Vue.use(Router)

module.exports = new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Login
    }
  ]
})
