import { createRouter, createWebHistory } from 'vue-router'
import { PostsPage, PokemonsPage } from '@/pages'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/posts',
      name: 'posts',
      component: PostsPage,
    },
    {
      path: '/',
      name: 'pokemons',
      component: PokemonsPage,
    },
  ],
})

export default router
