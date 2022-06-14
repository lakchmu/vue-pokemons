<template>
  <div class="root">
    <my-header title="Pokemons" />
    <Grid :length="48" :pageSize="24" :pageProvider="pageProvider" class="grid">
      <template v-slot:default="{ item, style }">
        <pokemon-card :style="style" :pokemon="item" />
      </template>
    </Grid>
    <!-- <loading-block /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import Grid from 'vue-virtual-scroll-grid'

import { key } from '@/providers/pokemons'
import api from '@/shared/api'

import { PokemonCard } from '@/widgets'
import { pokemonResponseToModel, type Pokemon } from '@/entities/pokemon'

export default defineComponent({
  methods: {
    pageProvider: async (pageNumber: number, pageSize: number): Promise<Pokemon[]> => {
      let results = [] as Pokemon[]
      try {
        const { data } = await api.getPokemons(pageSize, pageNumber)
        results = await Promise.all(
          data.results.map(async ({ url }: any) => {
            const { data } = await api.getPokemonByUrl(url)
            return pokemonResponseToModel(data)
          })
        )
      } catch (error) {
        console.error(JSON.stringify(error))
      }

      return results
    },
  },
  mounted() {
    useStore(key).dispatch('getPokemons')
  },
  name: 'pokemons-page',
  components: { Grid, PokemonCard },
})
</script>

<style scoped>
.root {
  display: flex;
  flex-wrap: wrap;
}
.grid {
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(6, 1fr);
}
</style>
