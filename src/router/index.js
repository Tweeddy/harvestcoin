import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/main.vue'
import mapView from '../views/mapView.vue'
import formView from '../views/formView.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: mainView
  },
  {
    path: '/map',
    name: 'map',
    component: mapView
  },
  {
    path: '/form',
    name: 'form',
    component: formView
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
