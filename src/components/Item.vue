<template>
   <div>
      <span>Item.vue</span>
      <button @click="buttonClick"></button>
      <span>{{itemData}}</span>
   </div>
</template>
<script>
export default {
   name: 'Item',
   data(){
      return{
         num: 0
      }
   },
   computed:{
      itemData(){
         return this.$store.state.itemData;
      }
   },
   methods: {
      buttonClick(){
         console.log(this.num++)
      }
   },
   asyncData ({ store, route }) {
      // 触发 action 后，会返回 Promise
      return store.dispatch('incrementItem')
   }
}
</script>