import { createApp } from 'vue'
import {
  Button,
  Modal,
  Select,
  PageHeader,
  Layout,
  Table,
  Card,
} from 'ant-design-vue'

import App from './App.vue'
import router from './router'

import components from '@/shared'

import type { Component } from 'vue'

const app = createApp(App)

components.forEach((component: Component) =>
  app.component(component.name as string, component)
)

app.use(Button)
app.use(Modal)
app.use(Select)
app.use(PageHeader)
app.use(Layout)
app.use(Table)
app.use(Card)

app.config.compilerOptions.isCustomElement = (tag) => {
  return tag.startsWith('my-')
}

app.use(router)

app.mount('#app')
