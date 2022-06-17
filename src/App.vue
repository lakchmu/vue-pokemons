<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'

import { palette } from '@/shared'
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

<style lang="less">
@import 'ant-design-vue/dist/antd.less';

@import '@/assets/ant-theme.less';
@import '@/assets/base.css';

#app {
  display: flex;
  color: v-bind('palette.text.main');
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
  padding: 0;
}

h2,
p {
  color: v-bind('palette.text.main');
  margin: 0;
  padding: 0;
}
</style>
