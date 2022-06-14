import { ref, onMounted } from 'vue'

import api from '@/shared/api'
import type { Pokemon } from '@/entities/pokemon/types'

import { pokemonResponseToModel } from './libs'

export const usePokemons = () => {
  const page = 0
  const limit = 24
  const isLoading = ref(true)
  const pokemons = ref([] as Pokemon[])

  const getPokemons = async () => {
    try {
      const { data } = await api.getPokemons(limit, page)
      pokemons.value = await Promise.all(
        data.results.map(async ({ url }: any) => {
          const { data } = await api.getPokemonByUrl(url)
          return pokemonResponseToModel(data)
        })
      )
      return pokemons.value
    } catch (error) {
      console.error(JSON.stringify(error))
    } finally {
      isLoading.value = false
    }
  }

  onMounted(getPokemons)

  return {
    pokemons,
  }
}

export const usePokemon = (id: string) => {
  const isLoading = ref(false)
  const pokemon = ref({} as Pokemon)

  const getPokemon = async () => {
    try {
      isLoading.value = true
      const { data } = await api.getPokemonById(id)
      pokemon.value = pokemonResponseToModel(data)
    } catch (error) {
      console.error(JSON.stringify(error))
    } finally {
      isLoading.value = false
    }
  }

  onMounted(getPokemon)

  return {
    pokemon,
  }
}
