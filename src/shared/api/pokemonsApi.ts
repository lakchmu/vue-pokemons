import axios from 'axios'

const baseUrl = import.meta.env.VITE_API

export const getPokemons = (limit: number, page: number) =>
  axios.get(`${baseUrl}/pokemon?limit=${limit}&offset=${page * limit}`)

export const getPokemon = (url: string) => axios.get(url)
