import { createRouter, createWebHistory } from 'vue-router'
import mainView from '../views/main.vue'
import mapView from '../views/mapView.vue'
import formView from '../views/formView.vue'
import welcome from '../views/totalMeetingsView.vue'

const routes = [
  {
    path: '/main',
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
  },{
    path: '/',
    name: 'welcome',
    component: welcome

  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
