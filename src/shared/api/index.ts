import * as pokemonsApi from './pokemonsApi'
import * as pokemonsLS from './pokemonsLS'

const api = { ...pokemonsApi, ...pokemonsLS }

export default api
