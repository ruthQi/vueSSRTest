<template>
   <div id="app">
      <span>Hello World!</span>
      <div>
         <router-link to="/">Home</router-link>
         <br/>
         <router-link to="/item">Item</router-link>
      </div>
      <router-view></router-view>
   </div>
</template>
<script>
export default {
   name: 'App'
}
</script>

