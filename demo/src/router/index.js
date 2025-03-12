import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/layout',
    component:()=>import( '../views/LayoutView.vue'),
    children: [
      {
        path: 'about',
        component: () => import( '../views/AboutView.vue')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
