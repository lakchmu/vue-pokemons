import { PokemonType } from './types'

import type { Pokemon } from './types'

export const pokemonResponseToModel = (pokemon: any): Pokemon => ({
  id: pokemon.id,
  name: pokemon.name,
  types: pokemon.types.map(({ type: { name } }: { type: { name: PokemonType } }) => PokemonType[name]),
  url: pokemon.sprites.other.dream_world.front_default,
  experience: pokemon.base_experience,
  hp: pokemon.stats.find((item: any) => item.stat.name == 'hp').base_stat,
  defense: pokemon.stats.find((item: any) => item.stat.name == 'defense').base_stat,
  attack: pokemon.stats.find((item: any) => item.stat.name == 'attack').base_stat,
  speed: pokemon.stats.find((item: any) => item.stat.name == 'speed').base_stat,
  weight: pokemon.weight,
  height: pokemon.height,
})

export const pokemonTypeColorMap = {
  [PokemonType.fire]: '#FDDFDF',
  [PokemonType.grass]: '#DEFDE0',
  [PokemonType.electric]: '#FCF7DE',
  [PokemonType.water]: '#DEF3FD',
  [PokemonType.ground]: '#f4e7da',
  [PokemonType.rock]: '#d5d5d4',
  [PokemonType.fairy]: '#fceaff',
  [PokemonType.poison]: '#98d7a5',
  [PokemonType.bug]: '#f8d5a3',
  [PokemonType.dragon]: '#97b3e6',
  [PokemonType.psychic]: '#eaeda1',
  [PokemonType.flying]: '#F5F5F5',
  [PokemonType.fighting]: '#E6E0D4',
  [PokemonType.normal]: '#F5F5F5',
}
