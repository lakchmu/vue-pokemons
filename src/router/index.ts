import { createRouter, createWebHistory } from 'vue-router'
import { PostsPage, PokemonsPage, PokemonDetailsPageVue, SearchPage } from '@/pages'

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
    {
      path: '/:id',
      name: 'pokemon-details',
      component: PokemonDetailsPageVue,
    },
    {
      path: '/search',
      name: 'search',
      component: SearchPage,
    },
  ],
})

export default router
