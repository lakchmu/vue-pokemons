<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <my-page>
    <template v-slot:menu>
      <a-menu-item class="page-menu-item" key="posts">
        <RouterLink to="/posts">Posts</RouterLink>
      </a-menu-item>
      <a-menu-item class="page-menu-item" key="pokemons">
        <RouterLink to="/">Pokemons</RouterLink>
      </a-menu-item>
    </template>
    <template v-slot:page><RouterView /></template>
  </my-page>
</template>

<style>
@import 'ant-design-vue/dist/antd.css';

@import '@/assets/base.css';

#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}
</style>
