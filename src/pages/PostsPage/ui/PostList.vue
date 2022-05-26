<template>
  <div v-if="posts.length">
    <post-item-vue
      :key="post.id"
      :post="post"
      v-for="post in posts"
      @remove="$emit('remove', post)"
    />
  </div>
  <h2 v-else>Post list is empty</h2>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import PostItemVue from './PostItem.vue'

import type { Post } from './types'

export default defineComponent({
  props: {
    posts: {
      type: Object as () => Post[],
      required: true,
    },
  },
  components: { PostItemVue },
})
</script>

<style scoped>
.select {
  margin-bottom: 16px;
}
</style>
