import Vue from 'vue'
import ElementUI from 'element-ui'
import '@/assets/scss/element-variables.scss'
import '@/assets/scss/style.scss'

import App from './App.vue'
import store from './store'
import router from './router'

Vue.use(ElementUI, { size: 'small' })
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')
