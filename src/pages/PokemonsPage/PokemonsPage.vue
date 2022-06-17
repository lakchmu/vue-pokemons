<template>
  <div class="root">
    <my-header title="Pokemons" />
    <!-- <Grid :length="200" :pageSize="24" :scrollTo="24" :pageProvider="pageProvider" class="grid">
      <template v-slot:default="{ item, style }">
        <pokemon-card :style="style" :pokemon="item" />
      </template>
    </Grid> -->
    <div class="grid" v-if="pokemons.length">
      <pokemon-card v-for="pokemon in pokemons" :pokemon="pokemon" v-bind:key="pokemon.id" />
    </div>
    <loading-block />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { mapState } from 'pinia'
// import Grid from 'vue-virtual-scroll-grid'

// import api from '@/shared/api'

import { PokemonCard, LoadingBlock } from '@/widgets'
import { usePokemonStore } from '@/providers/pinia/store'

export default defineComponent({
  setup() {
    const store = usePokemonStore()

    onMounted(store.init)
  },
  // methods: {
  //   pageProvider: async (pageNumber: number, pageSize: number): Promise<Pokemon[]> => {
  //     let results = [] as Pokemon[]
  //     try {
  //       const { data } = await api.getPokemons(pageSize, pageNumber)
  //       results = await Promise.all(
  //         data.results.map(async ({ url }: any) => {
  //           const { data } = await api.getPokemonByUrl(url)
  //           return pokemonResponseToModel(data)
  //         })
  //       )
  //     } catch (error) {
  //       console.error(JSON.stringify(error))
  //     }

  //     return results
  //   },
  // },
  computed: {
    ...mapState(usePokemonStore, ['pokemons']),
  },
  name: 'pokemons-page',
  components: { PokemonCard, LoadingBlock },
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
