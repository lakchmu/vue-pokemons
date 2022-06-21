<template>
  <div class="root" ref="loadingBlock">
    <a-spin v-if="turnOn" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { palette } from '@/shared'
import { usePokemonStore } from '@/providers/pinia'

export default defineComponent({
  mounted() {
    const store = usePokemonStore()

    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    }

    const callback = (entries: any) => {
      this.turnOn = store.$state.pokemons.length < import.meta.env.VITE_POKEMONS_LIMIT
      if (entries[0].isIntersecting && this.turnOn) {
        store.init()
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.loadingBlock as Element)
  },
  data() {
    return {
      backgroundColor: `${palette.main}`,
      turnOn: true,
    }
  },
  name: 'loading-block',
})
</script>

<style scoped>
.root {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 48px;
}
</style>
