import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    // 全局数据
     state:{
         num:100
     },
    //  操作值的方法 默认有一个形参为state
    // @click='$store.commit("setdata",999)' 取这个方法的办法 commit 将值999传给n
     mutations:{
          setdata(state,n){
             state.num = n
          }
     },
     actions:{

     },
     modules:{

     },
     getters:{

     }
})