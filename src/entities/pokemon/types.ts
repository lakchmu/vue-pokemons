export type Pokemon = {
  id: number
  name: string
  url: string
  types: PokemonType[]
  experience: string
  hp: string
  defense: string
  attack: string
  speed: string
  height: string
  weight: string
}

export enum PokemonType {
  FIRE = 'fire',
  GRASS = 'grass',
  ELECTRIC = 'electric',
  WATER = 'water',
  GROUND = 'ground',
  ROCK = 'rock',
  FAIRY = 'fairy',
  POISON = 'poison',
  BUG = 'bug',
  DRAGON = 'dragon',
  PSYCHIC = 'psychic',
  FLYING = 'flying',
  FIGHTING = 'fighting',
  NORMAL = 'normal',
}
