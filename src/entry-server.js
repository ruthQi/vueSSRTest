//只用于服务端渲染
import { createApp } from './app';
const isDev = process.env.NODE_ENV !== 'production'

export default context => {
   return new Promise((resolve, reject)=>{
      const { app, router, store } = createApp();

      router.push(context.url);
      router.onReady(()=>{
         const matchedComponents = router.getMatchedComponents();
         if(!matchedComponents.length){
            return reject({code: 404})
         }
         Promise.all(matchedComponents.map(({ asyncData }) => asyncData && asyncData({
            store,
            route: router.currentRoute
         }))).then(() => {
            context.state = store.state;
            resolve(app)
         }).catch(reject)
      }, reject)
   })
}
