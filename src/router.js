import { createWebHistory, createRouter } from "vue-router"

// import global from './routers/global'
import Home from './components/container/noAccess/Home.vue'
import Demo from './components/container/noAccess/Demo.vue'
import Community from './components/container/noAccess/Community.vue'
import Sign from './components/container/noAccess/Sign.vue'
import Projects from './components/container/access/Projects.vue'

const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/community',
    component: Community,
  },
  {
    path: '/signin',
    component: Sign,
  },
  {
    path: '/demo',
    component: Demo
  },
  {
    path: '/projects',
    component: Projects,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router;