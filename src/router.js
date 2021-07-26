//import Vue from 'vue'
//import VueRouter from 'vue-router'
import Lander from './components/Lander'

//seems like this is for Vue 2
//throwing error Uncaught TypeError: Cannot read property 'use' of undefined
/*
Vue.use(VueRouter)

const router = new VueRouter({
routes: [
        { path: '/', name: 'Landing', component: () => import('./components/Lander') }
]
        })

export default router
*/

//consulted this documentation https://next.router.vuejs.org/guide/#javascript

//importing this part
//const lander = Lander

//defining routes
const routes = [
    { path: '/', component: Lander }
]

//export default to mount in app
export default routes