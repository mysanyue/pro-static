import './test'
import Vue from 'vue'
import App from './App.vue'

if (module.hot) {
  module.hot.accept(['./test.js'], () => {
    console.log('test.js模块更新')
  })
}

new Vue({
  render: (h) => h(App),
}).$mount('#root')
