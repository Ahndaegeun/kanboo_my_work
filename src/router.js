import { createWebHashHistory, createRouter } from "vue-router"

import global from './routers/global'
import app from '@/App.vue'

const routes = [
  {
    path: '/',
    component: app,
    children: [
      ...global,
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router;