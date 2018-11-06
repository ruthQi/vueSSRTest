<template>
   <div>
      <Header></Header>
   </div>
</template>
<script>
import Header from './common/Header';
export default {
   name: 'Home',
   components: {
      Header
   },
   asyncData ({ store, route }) {
      // 触发 action 后，会返回 Promise
      return store.dispatch('incrementHome')
   },
   computed:{
      num(){
         return this.$store.state.homeData;
      }
   },
}
</script>

