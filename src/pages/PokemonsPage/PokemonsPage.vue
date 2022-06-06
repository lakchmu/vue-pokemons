<template>
  <a-layout-content>
    <my-header title="Pokemons" />
    <div class="content" v-if="pokemons.length">
      <pokemon-card
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        :pokemon="pokemon"
      />
    </div>
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { PokemonCard } from '@/widgets'
import usePokemons from '@/entities/pokemon/hook'

export default defineComponent({
  setup() {
    const { pokemons } = usePokemons()

    return {
      pokemons,
    }
  },
  name: 'pokemons-page',
  components: { PokemonCard },
})
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
