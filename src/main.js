import Vue from 'vue'
import App from './App'
import router from './router'

new Vue({
  router,
  render: (h) => {
    return h(App)
  }
}).$mount('#app')