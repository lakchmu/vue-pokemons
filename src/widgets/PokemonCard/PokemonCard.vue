<template>
  <div class="card">
    <div class="img-wrap">
      <img class="img" alt="example" :src="pokemon.url" />
    </div>
    <div class="content">
      <span class="id">#{{ getPokemonId }}</span>
      <h2 class="name">{{ pokemon.name }}</h2>
      <small>types: {{ pokemon.types.join(', ') }}</small>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { pokemonTypeColorMap } from '@/entities/pokemon/libs'

import type { Pokemon } from '@/entities/pokemon/types'

export default defineComponent({
  name: 'pokemon-card',
  props: {
    pokemon: {
      type: Object as () => Pokemon,
      required: true,
    },
  },
  data() {
    return {
      color: pokemonTypeColorMap[this.pokemon.types[0]],
    }
  },
  computed: {
    getPokemonId() {
      // TODO
      return this.pokemon.id.toString().padStart(3, '0')
    },
  },
})
</script>

<style>
.card {
  background-color: v-bind(color);
  border-radius: 20px;
  box-shadow: 0 3px 15px rgb(100 100 100 / 50%);
  padding: 20px;
  text-align: center;
  height: 274px;
}
.img-wrap {
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 50%;
  width: 120px;
  height: 120px;
  text-align: center;
}
.img {
  margin-top: 20px;
  max-width: 90%;
  max-height: 100%;
}
.content {
  margin-top: 20px;
}
.id {
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 0.8em;
  padding: 5px 10px;
}
.name {
  margin: 15px 0 7px;
  letter-spacing: 1px;
  text-transform: capitalize;
  font-size: 18px;
}
</style>
