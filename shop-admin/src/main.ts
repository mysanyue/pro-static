import { createApp } from 'vue'
import '@/styles/index.scss'
import App from './App.vue'
import router from './router'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'

createApp(App).use(router).use(store, key).use(elementPlus).mount('#app')
