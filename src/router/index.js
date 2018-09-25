import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/hello'
    }
  ]
})
export default router