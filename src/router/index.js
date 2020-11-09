import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import( '../views/About.vue'),
    children:[{
      path: 'duanzi',
    name: 'Duanzi',
    component: () => import( '../components/duanzi.vue'),
    children:[{
      path: 'shipin1',
      name: 'Shipin1',
      component: () => import( '../components/duanzi/shipin.vue')
    },{
      path: 'duan',
      name: 'Duan',
      component: () => import( '../components/duanzi/duan.vue')
    }]
    },{
      path: 'shipin',
    name: 'Shipin',
    component: () => import( '../components/shipin.vue'),
    },{
      path: 'wode',
    name: 'Wode',
    component: () => import( '../components/wode.vue'),
    },{
      path: 'yingyong',
    name: 'Yingyong',
    component: () => import( '../components/yingyong.vue'),
    },{
      path: 'zhibo',
      name: 'Zhibo',
      component: () => import( '../components/zhibo.vue'),
    }  
  ]
  },
  {
    path: '/denglu',
    name: 'Denglu',
    component: () => import('../components/Denglu.vue'),
    
  },
  {
    path: '/nicheng',
    name: 'Nicheng',
    component: () => import( '../components/nicheng.vue')
  },
  {
    path: '/duan1',
    name: 'Duan1',
    component: () => import( '../views/duan1.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
