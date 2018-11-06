<template>
   <div class="header-container">
      <div class="header-content">

      </div>
   </div>
</template>
<script>
export default {
   name: 'Header'
}
</script>


<style lang='less'>
   @import url('../../less/common');
   .header-container{
      padding: 24px 0px;
      width: 100%;
      background-color: #fff;    
   }
   .header-content{
      min-width: 900px;
      width: 980px;
      margin: 0 auto;
      height: 52px;
   }

   @media (min-width: 1330px) {
      .header-content{
         width: 1309px;
      }
   }
</style>
