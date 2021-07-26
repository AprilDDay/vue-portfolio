import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Vue from 'vue'

//seems like the following is from Vue 2
/*
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
*/

//consulted the following https://next.router.vuejs.org/guide/#javascript
const app = Vue.createApp({})

app.use(router)

app.mount('#app')
//createApp(App).mount('#app')
