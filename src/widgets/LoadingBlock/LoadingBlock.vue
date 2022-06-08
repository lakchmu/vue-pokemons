<template>
  <div class="root" ref="loadingBlock">
    <a-spin />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'

import { key } from '@/providers/pokemons'
import { palette } from '@/shared'

export default defineComponent({
  mounted() {
    const store = useStore(key)

    const options = {
      rootMargin: '0px',
      threshold: 0.5,
    }

    const callback = (entries: any) => {
      if (entries[0].isIntersecting) {
        store.dispatch('getPokemons')
      }
    }

    const observer = new IntersectionObserver(callback, options)
    observer.observe(this.$refs.loadingBlock as Element)
  },
  data() {
    return {
      backgroundColor: `${palette.main}`,
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
