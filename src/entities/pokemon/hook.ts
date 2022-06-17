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

const LOCAL_STORAGE_KEY = 'pokemons'

export const useLocalStorage = async () => {
  if (localStorage.getItem(LOCAL_STORAGE_KEY)) return

  const { data } = await api.getAllPokemons()
  const pokemons = await Promise.all(
    data.results.map(async ({ url }: any) => {
      const { data } = await api.getPokemonByUrl(url)
      return pokemonResponseToModel(data)
    })
  )

  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(pokemons))
}
