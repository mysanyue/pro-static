import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 创建 APP 应用返回对应用的实例对象，调用 mount 方法进行挂载
createApp(App).use(store).use(router).mount('#app')
