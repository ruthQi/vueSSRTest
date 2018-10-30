import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export function createStore(){
   return new Vuex.Store({
      state: {
         homeData: 0,
         itemData: 0
      },
      actions: {
         incrementHome({commit}){
            console.log('9999999999999')
            commit('incrementHome', 2)
         },
         incrementItem({commit}){
            commit('incrementItem', 1)
         }
      },
      mutations:{
         incrementHome(state, n){
            console.log(state)
            state.homeData += n;
         },
         incrementItem(state, n){
            state.itemData += n;
         }
      },
      getters:{}
   })
}
