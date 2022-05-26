<template>
  <a-layout-header>
    <a-menu class="page-menu">
      <slot name="menu"></slot>
    </a-menu>
  </a-layout-header>
  <a-layout-content class="page-content">
    <slot name="page"></slot>
  </a-layout-content>
  <a-layout-footer>Made by DKurmaeva, 2022</a-layout-footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'my-page',
})
</script>

<style>
.page-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 50px;
}
.page-menu {
  line-height: 64px;
  display: flex;
  margin: 0 -16px;
}
.page-menu-item {
  padding: 0 16px;
}
.page-menu-item a {
  color: #fff !important;
}
.page-menu-item a:hover {
  opacity: 0.75;
}
</style>
