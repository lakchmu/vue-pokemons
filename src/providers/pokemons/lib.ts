import { ref } from 'vue'

import api from '@/shared/api'
import { pokemonResponseToModel } from '@/entities/pokemon'

import type { Ref } from 'vue'
import type { Pokemon } from '@/entities/pokemon/types'

type GetPokemonsResponse = {
  getPokemons: () => void
  pokemons: Ref<Pokemon[]>
  isLoading: boolean
}

export const usePokemons = async (): Promise<GetPokemonsResponse> => {
  const limit = 24
  const pokemons = ref([] as Pokemon[])
  let page = 0
  let isLoading = true

  const getPokemons = async () => {
    isLoading = true
    try {
      const { data } = await api.getPokemons(limit, page)
      pokemons.value = await Promise.all(
        data.results.map(async ({ url }: any) => {
          const { data } = await api.getPokemon(url)
          return pokemonResponseToModel(data)
        })
      )
    } catch (error) {
      console.error(JSON.stringify(error))
    } finally {
      isLoading = false
      page += 1
    }
  }

  return {
    getPokemons,
    pokemons,
    isLoading,
  }
}
