import api from '@/shared/api'

import { pokemonResponseToModel } from '@/entities/pokemon'

import type { Pokemon } from '@/entities/pokemon/types'

type GetPokemonsResponse = {
  pokemons: Pokemon[]
  isLoading: boolean
}

export const getPokemons = async (): Promise<GetPokemonsResponse> => {
  const page = 0
  const limit = 24
  let pokemons = [] as Pokemon[]
  let isLoading = true

  try {
    const { data } = await api.getPokemons(limit, page)
    pokemons = await Promise.all(
      data.results.map(async ({ url }: any) => {
        const { data } = await api.getPokemon(url)
        return pokemonResponseToModel(data)
      })
    )
  } catch (error) {
    console.error(JSON.stringify(error))
  } finally {
    isLoading = false
  }

  return {
    pokemons,
    isLoading,
  }
}
