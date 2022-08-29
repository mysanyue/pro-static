/* eslint-disable no-unused-vars */
import { Store } from 'vuex'
import { State } from './store/index'

declare module '@vue/runtime-core' {
  // 为 this.$store 提供声明
  export interface ComponentCustomProperties {
    $store: Store<State>
  }
}
