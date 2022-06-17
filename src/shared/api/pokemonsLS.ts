import type { Pokemon } from '@/entities/pokemon'

const LOCAL_STORAGE_KEY = 'pokemons'

export const searchPokemons = (searchStr: string) => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) return []

  const pokemons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
  return pokemons.filter((pokemon: Pokemon) => pokemon.name.indexOf(searchStr) !== -1)
}

export const getPokemonById = (id: number) => {
  if (!localStorage.getItem(LOCAL_STORAGE_KEY)) return {}

  const pokemons = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) as string)
  return pokemons[id - 1]
}
