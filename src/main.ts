import { createApp } from 'vue'
import Antd from 'ant-design-vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import components from '@/shared'
import { store, key } from '@/providers/vuex'

import type { Component } from 'vue'

const app = createApp(App)

app.provide('$store', store)
app.use(store, key)

components.forEach((component: Component) => app.component(component.name as string, component))

app.use(createPinia())

app.use(Antd)

app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('my-')
}

app.use(router)

app.mount('#app')
