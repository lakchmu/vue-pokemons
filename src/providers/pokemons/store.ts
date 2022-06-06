import { createStore, Store } from 'vuex'

import { getPokemons } from './lib'

import type { InjectionKey } from 'vue'
import type { Pokemon } from '@/entities/pokemon'
import type { State } from './types'

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
  state: {
    pokemons: [] as Pokemon[],
  },
  getters: {},
  mutations: {
    getPokemons(state, pokemons) {
      state.pokemons = [...pokemons]
    },
  },
  actions: {
    async getPokemons({ commit }) {
      const pokemons = await getPokemons()
      commit('getPokemons', pokemons)
    },
  },
})
