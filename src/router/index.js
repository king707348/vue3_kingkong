import { createRouter, createWebHistory } from 'vue-router'

import index from '../views/index.vue'
import about from '../views/about.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: index,
      children:[

      ]
    },
    {
      path: '/about',
      name: 'about',
      component: about
    }
  ]
  
})

export default router

