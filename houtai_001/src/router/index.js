import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../layout/index.vue";


import Order from "../views/order/index.vue";
import OrderList from "../views/order/orderList.vue";


import Goods from '../views/goods/index.vue';
import Goodlist from '../views/goods/goodlist.vue'
import Goodlistto from '../views/goods/goodlistto.vue'
import Goodlisttotwo from '../views/goods/goodlisttotwo.vue'

import Gouwuche from '../views/gouwuche/index.vue'
import gouwuchecar from '../views/gouwuche/car.vue'


import Giss from '../views/giss/index.vue'
import map from '../views/giss/map.vue'
import mapfanwei from '../views/giss/mapfanwei.vue'

import Yh from '../views/yh/index.vue'
import Yhadd from '../views/yh/yhadd.vue'

import Tubiao from '../views/tubiao/index.vue'
import Tuone from '../views/tubiao/tuone.vue'
import Tutwo from '../views/tubiao/tutwo.vue'

import Dingdan from '../views/dingdan/dingdan.vue'

import logina from '../views/login/login.vue'
import zhuce from '../views/login/zhuce.vue'


Vue.use(VueRouter);

const routes = [
  
  { 
    path:'/login',
    component:logina,
    
  },
  {
    
      path:'/zhuce',
      component:zhuce,
   
  },

  {
    path: "/",
    name: "home",
    component: Home,
    redirect: "/order/list",
    children: [
      {
        path: "/order",
        component: Order,
        children: [
          {
            path: "/order/list",
            component: OrderList,
          },
        ],
      },
      {
        path:'/goods',
        component:Goods,
        children:[
         {
          path:'/goods/goodlist',
          component:Goodlist,
         },
         {
          path:'/goods/goodlistto',
          component:Goodlistto,
         },
         {
           path:'/goods/goodlisttotwo',
           component:Goodlisttotwo,
           props($route){
               return {
                 id:$route.query.id,
                 name:$route.query.name,
                 price:$route.query.price,
                 ctime:$route.query.ctime,
                 sellCount:$route.query.sellCount,
                 goodsDesc:$route.query.goodsDesc,
                 category:$route.query.category,
                 rating:$route.query.rating,
               }
           }
         }
        ]
      },
      
      {
        path:'/giss',
        component:Giss,
        children:[
         {
          path:'/giss/map',
          component:map
         },
         {
          path:'/giss/mapfanwei',
          component:mapfanwei
         }
        ]
      },
      {
        path:'/yh',
        component: Yh,
        children:[
          {
            path:'/yh/yhadd',
            component: Yhadd,
          }
        ]
      },
      {
        path:'/dd',
        component:Dingdan
      },
      {
        path:'/tubiao',
        component: Tubiao,
        children:[
          {
            path:'/tubiao/tuone',
            component: Tuone,
          },
          {
            path:'/tubiao/tutwo',
            component: Tutwo,
          },
        ]
      },
    
    ],
  },
 

];

const router = new VueRouter({
  mode:'hash',
  routes,
});


//全局路由守卫 判断是否有token 
// router.beforeEach((to, from, next) => {
//   let token = localStorage.getItem("token");
//   if (token) {
//     next();
//   } else {
//     if (to.path === "/login") {
//       next();
//     } else if(from.path == '/login' && to.path == '/ceshi'){
//          next()
//     }else {
//       console.log('没有token，访问失败');
//       // this.$router.push('/login/zhuce')
//       next("/login");
//     }
//   }
// });

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem("token");
  if(to.path == '/zhuce' || to.path == '/login'){
    next()
  }else if(token){
    next()
  }else{
    next('/login')
  }
});


export default router;
