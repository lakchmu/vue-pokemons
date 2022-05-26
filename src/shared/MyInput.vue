<template>
  <input type="text" :value="modelValue" @input="updateInput" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'my-input',
  props: {
    modelValue: String,
  },
  methods: {
    updateInput(event: Event) {
      this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
    },
  },
})
</script>

<style scoped>
input {
  border: 1px solid teal;
  padding: 8px;
  margin-bottom: 8px;
}
</style>
