<template>
  <a-layout-header class="page-header">
    <a-menu class="page-menu">
      <slot name="menu"></slot>
    </a-menu>
  </a-layout-header>
  <a-layout-content class="page-content">
    <slot name="page"></slot>
  </a-layout-content>
  <a-layout-footer class="footer"
    ><span>Made by DKurmaeva, 2022</span></a-layout-footer
  >
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import { palette } from '@/shared'

export default defineComponent({
  name: 'my-page',
  data() {
    return {
      backgroundColor: `${palette.main}`,
    }
  },
})
</script>

<style>
.page-header {
  background-color: v-bind(backgroundColor) !important;
}
.page-content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 32px 0;
}
.page-menu {
  line-height: 64px;
  display: flex;
  margin: 0 -16px;
}
.page-menu-item {
  padding: 0 16px;
}
.page-menu-item:first-child {
  margin-left: -16px;
}
.page-menu-item a {
  color: #fff !important;
}
.page-menu-item a:hover {
  opacity: 0.75;
}
.page-header,
.footer {
  display: flex;
  justify-content: center;
}
.page-content,
.page-menu,
.footer span {
  align-self: center;
  display: inline-block;
  max-width: 1080px;
  width: 100%;
}
</style>
