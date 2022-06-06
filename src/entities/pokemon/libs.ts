import { PokemonType } from './types'

import type { Pokemon } from './types'

export const pokemonResponseToModel = ({
  id,
  name,
  types,
  sprites,
}: any): Pokemon => ({
  id,
  name,
  types: types.map(
    ({ type: { name } }: any) => PokemonType[name.toUpperCase()]
  ),
  url: sprites.other.dream_world.front_default,
})

export const pokemonTypeColorMap = {
  [PokemonType.FIRE]: '#FDDFDF',
  [PokemonType.GRASS]: '#DEFDE0',
  [PokemonType.ELECTRIC]: '#FCF7DE',
  [PokemonType.WATER]: '#DEF3FD',
  [PokemonType.GROUND]: '#f4e7da',
  [PokemonType.ROCK]: '#d5d5d4',
  [PokemonType.FAIRY]: '#fceaff',
  [PokemonType.POISON]: '#98d7a5',
  [PokemonType.BUG]: '#f8d5a3',
  [PokemonType.DRAGON]: '#97b3e6',
  [PokemonType.PSYCHIC]: '#eaeda1',
  [PokemonType.FLYING]: '#F5F5F5',
  [PokemonType.FIGHTING]: '#E6E0D4',
  [PokemonType.NORMAL]: '#F5F5F5',
}
