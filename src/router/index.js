import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  () =>import('../views/LoginView.vue')
    },
    {
      path: '/post',
      name: 'postagem',
      component: () => import('../components/Postagem.vue')
    }
  ]
})

export default router
