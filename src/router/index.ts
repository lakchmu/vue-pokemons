import { createRouter, createWebHistory } from 'vue-router'
import PostsPage from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'posts',
      component: PostsPage,
    },
  ],
})

export default router
