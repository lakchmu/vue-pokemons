import { defineStore } from 'pinia'

import { usePokemons } from '../vuex/lib'

import type { Pokemon } from '@/entities/pokemon'

const { getPokemons, pokemons } = await usePokemons()

export const usePokemonStore = defineStore({
  id: 'pokemons',
  state: () => ({ pokemons: [] as Pokemon[] }),
  actions: {
    async init() {
      await getPokemons()
      this.pokemons = pokemons.value
    },
  },
})
