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
import { useStore } from 'vuex'

import { key } from '@/features/pokemons'

import { PokemonCard } from '@/widgets'

export default defineComponent({
  computed: {
    pokemons() {
      const store = useStore(key)
      return store.state.pokemons
    },
  },
  mounted() {
    const store = useStore(key)
    store.dispatch('getPokemons')
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
