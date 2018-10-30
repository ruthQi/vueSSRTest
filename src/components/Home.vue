<template>
   <div>
      <p>Home.vue</p>
      <p>{{num}}</p>
   </div>
</template>
<script>
export default {
   name: 'Home',
   created() {
      console.log('0000000000000')
      this.$store.dispatch('incrementHome')
   },
   computed:{
      num(){
         return this.$store.state.homeData;
      }
   },
}
</script>

