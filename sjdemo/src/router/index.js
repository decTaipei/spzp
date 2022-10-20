import Vue from 'vue'
import VueRouter from 'vue-router'

import Vuehome from '../layout/index.vue'

import Shouye from '../views/shouye.vue'
import Zhanghu from '../views/zhanghuaq.vue'
import Shouhou from '../views/shouhou.vue'
import Yuejie from '../views/yuejie.vue'
import Aaaaa from '../views/yemian.vue'
// import Cs from '../views/cs.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Vuehome, 
    redirect: "/aaa",
    children:[
      {
        path:'/zhaobiao',
        component:Shouye
      },
      {
        path:'/zhanghuanquan',
        component:Zhanghu
      },
      {
        path:'/shouhou',
        component:Shouhou
      },
      {
        path:'/yuejie',
        component:Yuejie
      },
      {
        path:'/aaa',
        component:Aaaaa
      },
      // {
      //   path:'/ceshi',
      //   component:Cs
      // },
      
    ]
  },
 
]

const router = new VueRouter({
  routes
})

export default router
