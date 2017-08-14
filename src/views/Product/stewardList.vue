<template>
  <div class="pd-container">
    <product-Nav></product-Nav>
    <product-List id="1"></product-List>
  </div>
</template>
<script>
  import productNav from '../../component/productNav.vue';
  import productList from '../../component/productList.vue';
  export default{
    components: {
      productNav,
      productList
    },
    data(){
      return{

      }
    }
  }
</script>
<style>

</style>
