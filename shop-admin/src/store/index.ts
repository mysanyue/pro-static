import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore } from 'vuex'

export interface State {
  count: number
  foo: string
}

export const key: InjectionKey<Store<State>> = Symbol('store')

export const store = createStore<State>({
  state: {
    count: 0,
    foo: 'hell',
  },
  modules: {},
})

export function useStore() {
  return baseUseStore(key)
}
