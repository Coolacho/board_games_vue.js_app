<script setup>

  import {ref} from "vue";
  import ProductService from "@/services/ProductService";
  import ProductGrid from "@/components/ProductGrid.vue";

  const products = ref(null);
  getAllProducts();

  function getAllProducts() {
    ProductService.getAllProducts().then((response) =>{
      products.value = response.data;
      console.log(products.value)
    });
  }

</script>

<template>
  <ProductGrid :products="products"></ProductGrid>
</template>

<style scoped>

</style>