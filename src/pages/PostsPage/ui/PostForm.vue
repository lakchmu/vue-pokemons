<template>
  <form @submit.prevent @submit="createPost">
    <h1>Create Post</h1>
    <my-input v-model="post.title" placeholder="Type some title" />
    <my-input v-model="post.body" placeholder="Type some body" />
    <my-button @click="createPost">Submit</my-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      post: this.resetForm(),
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now()
      this.$emit('create', this.post)
      this.post = this.resetForm()
    },
    resetForm() {
      return {
        id: -1,
        title: '',
        body: '',
      }
    },
  },
})
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
</style>
