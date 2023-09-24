<script setup>

  import {ref} from "vue";
  import ProductService from "@/services/ProductService";
  import ProductGrid from "@/components/ProductGrid.vue";

  const products = ref(null);
  getDiscountedProducts();

  function getDiscountedProducts() {
    ProductService.getDiscountedProducts().then((response) =>{
      products.value = response.data;
    });

  }

</script>

<template>
  <ProductGrid :products="products"></ProductGrid>
</template>

<style scoped>

</style>