import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

import { defineAsyncComponent } from 'vue'

const Hello = defineAsyncComponent(() => import('../components/HelloWorld.vue'))
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'index',
    redirect: '/hello'
  },
  {
    path: '/hello',
    name: 'hello',
    component: Hello
  }
]

export default createRouter({
  history: createWebHashHistory(),
  routes
})
