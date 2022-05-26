<template>
  <a-page-header class="root" :title="title" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    title: String,
  },
  name: 'my-header',
})
</script>

<style scoped>
.root {
  border: 1px solid rgb(235, 237, 240);
}
</style>
