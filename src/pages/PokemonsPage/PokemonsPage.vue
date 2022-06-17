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
    <loading-block />
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { key } from '@/providers/pokemons'

import { PokemonCard, LoadingBlock } from '@/widgets'

export default defineComponent({
  mounted() {
    useStore(key).dispatch('getPokemons')
  },
  computed: {
    pokemons() {
      const store = useStore(key)
      return store.state.pokemons
    },
  },
  name: 'pokemons-page',
  components: { PokemonCard, LoadingBlock },
})
</script>

<style scoped>
.content {
  display: flex;
  flex-wrap: wrap;
}
</style>
