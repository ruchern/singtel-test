import Router from 'vue-router'
import Home from '@/components/Home'

export default new Router({
  base: window.location.pathname,
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})
