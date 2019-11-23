import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
  
import App from './App.vue'
import Data from './components/Data.vue'

const routes =[
  {
    path:'/data/:type', component: Data
  }
]
const router = new VueRouter({
  routes
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
  