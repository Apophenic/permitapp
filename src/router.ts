import { createRouter, createWebHistory } from '@ionic/vue-router'
import { RouteRecordRaw } from 'vue-router'
import App from '@/App.vue'
import Permit from '@/permit/Permit.vue'
import PermitReview from '@/permit/PermitReview.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: App
  },
  {
    path: '/permit',
    component: Permit
  },
  {
    path: '/review/:id',
    component: PermitReview
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
