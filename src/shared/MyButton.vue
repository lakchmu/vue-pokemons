<template>
  <a-button type="primary" ghost :color="'teal'"><slot></slot></a-button>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'my-button',
})
</script>
<style></style>
