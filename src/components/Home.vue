<template>
   <div>
      <p>Home.vue</p>
      <p>{{num}}</p>
   </div>
</template>
<script>
export default {
   name: 'Home',
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

