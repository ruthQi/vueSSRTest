//只用于客户端渲染
import {createApp} from './app';
const { app, router } = createApp();
router.onReady(()=>{
   app.$mount('#app');
})

