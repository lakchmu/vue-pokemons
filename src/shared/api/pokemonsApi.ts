import axios from 'axios'

const baseUrl = import.meta.env.VITE_API

export const getPokemons = (limit: number, page: number) =>
  axios.get(`${baseUrl}/pokemon?limit=${limit}&offset=${page * limit}`)

export const getAllPokemons = () => axios.get(`${baseUrl}/pokemon?limit=1126`)

export const getPokemonByUrl = (url: string) => axios.get(url)

export const getPokemonById = (id: string) => axios.get(`${baseUrl}/pokemon/${id}`)
