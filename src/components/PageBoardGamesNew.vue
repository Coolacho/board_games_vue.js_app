<script setup>

import {ref} from "vue";
import ProductService from "@/services/ProductService";
import ProductGrid from "@/components/Product/ProductGrid.vue";

const products = ref(null);
getNewProducts();

function getNewProducts() {
  ProductService.getNewProducts().then((response) =>{
    products.value = response.data;
  });

}

</script>

<template>
  <ProductGrid :products="products"></ProductGrid>
</template>

<style scoped>

</style>