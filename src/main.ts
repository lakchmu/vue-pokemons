import { createApp } from 'vue'
import { Button, Modal, Select, PageHeader, Layout, Table, Card, Spin, Tag } from 'ant-design-vue'

import App from './App.vue'
import router from './router'

import components from '@/shared'
import { store, key } from '@/providers/pokemons'

import type { Component } from 'vue'

const app = createApp(App)

app.use(store, key)

components.forEach((component: Component) => app.component(component.name as string, component))

app.use(Button)
app.use(Modal)
app.use(Select)
app.use(PageHeader)
app.use(Layout)
app.use(Table)
app.use(Card)
app.use(Spin)
app.use(Tag)

app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('my-')
}

app.use(router)

app.mount('#app')
