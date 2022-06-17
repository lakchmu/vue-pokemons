<template>
  <my-header title="Pokemon Details" />
  <pokemon-full-card :pokemon="pokemon" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'

import api from '@/shared/api'
import { PokemonFullCard } from '@/widgets'

export default defineComponent({
  name: 'pokemon-detail-page',
  setup() {
    const route = useRoute()
    const { id } = route.params
    const pokemon = api.getPokemonById(Number.parseInt(id as string))
    return { pokemon }
  },
  components: { PokemonFullCard },
})
</script>

<style lang="scss" scoped></style>
