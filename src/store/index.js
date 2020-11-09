import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    shuju:[]
  },
  mutations: {
    cun(state,data){
     state.shuju=data
 
    }
  },
  actions: {
  },
  modules: {
  }
})
