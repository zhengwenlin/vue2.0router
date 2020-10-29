import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  name: 'vm',
  router,
  render: (h) => {
    return h(App)
  }
}).$mount('#app')