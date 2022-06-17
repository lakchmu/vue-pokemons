import { Store } from 'vuex'

import type { State } from './src/providers/vuex'

declare module '@vue/runtime-core' {
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
