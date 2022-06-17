<template>
  <a-input-search
    class="search"
    v-model:value="value"
    placeholder="input search text"
    enter-button
    @search="onSearch"
  />
  <div class="grid" v-if="searchResult.length > 1">
    <pokemon-card v-for="pokemon in searchResult" :pokemon="pokemon" v-bind:key="pokemon.id" />
  </div>
  <div class="grid" v-if="searchResult.length == 1">
    <pokemon-full-card :pokemon="searchResult[0]" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { PokemonCard, PokemonFullCard } from '@/widgets'

import type { Pokemon } from '@/entities/pokemon'
import api from '@/shared/api'

export default defineComponent({
  data() {
    return {
      value: '',
      searchResult: [] as Pokemon[],
    }
  },
  methods: {
    onSearch() {
      this.searchResult = api.searchPokemons(this.value.toLowerCase())
    },
  },
  components: { PokemonCard, PokemonFullCard },
})
</script>

<style lang="scss" scoped>
.search {
  margin-bottom: 48px;
}
.grid {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(6, 1fr);
}
</style>
