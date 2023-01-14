import { createRouter, createWebHistory } from 'vue-router'

import header from "/src/components/header.vue";
import HelloWorld from '/src/componentS/HelloWorld.vue'
import app from '/src/App.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'xxx',
      component: 'app'
    }
  ]
  
})

export default router

