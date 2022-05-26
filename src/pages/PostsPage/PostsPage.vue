<template>
  <a-layout-content>
    <my-header :title="'Posts'" />
    <div class="tools">
      <my-button type="primary" @click="showModal">+add post</my-button>
      <a-select
        ref="select"
        v-model:value="value"
        style="width: 120px"
        :options="options"
        @change="handleChange"
        class="select"
      />
    </div>
    <a-modal v-model:visible="visible" :footer="null">
      <post-form-vue @create="createPost" />
    </a-modal>
    <div v-if="isLoading">Loading...</div>
    <post-list-vue v-if="!isLoading" :posts="posts" @remove="removePost" />
  </a-layout-content>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import PostFormVue from './ui/PostForm.vue'
import PostListVue from './ui/PostList.vue'

import type { Post } from './ui/types'

export default defineComponent({
  data() {
    return {
      posts: [] as Post[],
      isLoading: false,
      visible: false,
      value: 1,
      options: [
        { value: 'title', label: 'Sort by name' },
        { value: 'title', label: 'Sort by name' },
      ],
    }
  },
  methods: {
    createPost(post: Post) {
      this.posts = [...this.posts, post]
      this.visible = false
    },
    removePost(post: Post) {
      this.posts = this.posts.filter(({ id }: Post) => id !== post.id)
    },
    showModal() {
      this.visible = true
    },
    handleChange() {
      console.log('hey')
    },
    async getPosts() {
      try {
        this.isLoading = true
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/posts?_limit=10'
        )
        this.posts = response.data
      } catch (error) {
        alert(error)
      } finally {
        this.isLoading = false
      }
    },
  },
  mounted() {
    this.getPosts()
  },
  components: { PostFormVue, PostListVue },
})
</script>

<style>
.tools {
  display: flex;
  justify-content: space-between;
  margin: 32px 0;
}
</style>
