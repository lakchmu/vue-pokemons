<template>
  <div class="post">
    <div>
      <div><strong>Title:</strong> {{ post.title }}</div>
      <div><strong>Body:</strong> {{ post.body }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$emit('remove')">del</my-button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

import type { Post } from './types'

export default defineComponent({
  props: {
    post: {
      type: Object as () => Post,
      required: true,
    },
  },
})
</script>
<style scoped>
.post {
  padding: 16px;
  border: 2px solid teal;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
