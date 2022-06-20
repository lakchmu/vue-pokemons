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
  fire = 'fire',
  grass = 'grass',
  electric = 'electric',
  water = 'water',
  ground = 'ground',
  rock = 'rock',
  fairy = 'fairy',
  poison = 'poison',
  bug = 'bug',
  dragon = 'dragon',
  psychic = 'psychic',
  flying = 'flying',
  fighting = 'fighting',
  normal = 'normal',
}
