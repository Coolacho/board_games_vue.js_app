<script setup>
import {ref} from "vue";
import ProductService from "@/services/ProductService";
import ProductGrid from "@/components/Product/ProductGrid.vue";

const products = ref(null);
getAccessories();

function getAccessories() {
  ProductService.getNewProducts().then((response) =>{
    products.value = response.data;
  });

}
</script>

<template>

</template>
  <ProductGrid :products="products"></ProductGrid>
<style scoped>

</style>