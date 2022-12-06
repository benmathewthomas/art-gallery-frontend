import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ArtworksView from '@/views/ArtworksView'
import CultureView from '@/views/CultureView'
import ExhibitionsView from '@/views/ExhibitionsView'
import RegisterView from '@/views/RegisterView'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/artworks',
    name: 'artworks',
    component: ArtworksView
  },
  {
    path: '/culture',
    name: 'culture',
    component: CultureView
  },
  {
    path: '/exhibition',
    name: 'exhibition',
    component: ExhibitionsView
  }
  ,
  {
    path: '/register',
    name: 'register',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
