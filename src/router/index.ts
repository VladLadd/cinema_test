import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '../views/AuthView.vue'
import FilmsView from '../views/FilmsView.vue'
import CinemasView from '../views/CinimasView.vue'
import TicketsView from '../views/TicketsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      component: AuthView,
    },
    { path: '/registration', name: 'register', component: AuthView },
    {
      path: '/films',
      name: 'films',
      component: FilmsView,
    },
    {
      path: '/cinema',
      name: 'cinemas',
      component: CinemasView,
    },
    {
      path: '/tickets',
      name: 'tickets',
      component: TicketsView,
    },
  ],
})

export default router
