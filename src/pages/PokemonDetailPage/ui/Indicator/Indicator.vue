<template>
  <div class="xp-line row" :style="[getWidth, getGradient]" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { pokemonTypeColorMap, type PokemonType } from '@/entities/pokemon'

export default defineComponent({
  name: 'my-indicator',
  props: {
    types: {
      type: Object as () => PokemonType[],
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  methods: {
    getTypeColor(type: PokemonType) {
      return pokemonTypeColorMap[type]
    },
  },
  computed: {
    getGradient() {
      if (this.types.length === 1) return `background: ${this.getTypeColor(this.types[0])}`

      const typesColors = this.types.map((type: PokemonType) => this.getTypeColor(type)).join(', ')

      return { background: `linear-gradient(90deg, ${typesColors})` }
    },
    getWidth() {
      return { 'min-width': `${this.value}px` }
    },
  },
})
</script>

<style scoped></style>
