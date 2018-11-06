//只用于客户端渲染
import {createApp} from './app.js';
const { app, router, store } = createApp();
import Vue from 'vue';

Vue.mixin({
   beforeRouteUpdate(to, from, next) {
      const { asyncData } = this.$options
      if (asyncData) {
         asyncData({
            store: this.$store,
            route: to
         }).then(next).catch(next)
      } else {
         next()
      }
   }
})

if (window.__INITIAL_STATE__) {
   console.log('exit')
   store.replaceState(window.__INITIAL_STATE__)
}
router.onReady(()=>{
   router.beforeResolve((to, from, next) => {
      const matched = router.getMatchedComponents(to)
      const prevMatched = router.getMatchedComponents(from)
      let diffed = false
      const activated = matched.filter((c, i) => {
         return diffed || (diffed = (prevMatched[i] !== c))
      })
      const asyncDataHooks = activated.map(c => c.asyncData).filter(_ => _)
      if (!asyncDataHooks.length) {
         return next()
      }

      Promise.all(asyncDataHooks.map(hook => hook({ store, route: to })))
         .then(() => {
            next()
         })
         .catch(next)
   })

   // actually mount to DOM
   app.$mount('#app')
})



