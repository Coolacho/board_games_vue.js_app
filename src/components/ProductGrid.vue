<script setup>
  import ProductCard from "@/components/Product/ProductCard.vue";

  defineProps(['products'])
</script>

<template>
  <div>
    <ProductCard v-for="product in products" :key="product.id" :product="product"></ProductCard>
  </div>
</template>

<style scoped>
  div {
    display: grid;
    grid-template-rows: repeat(auto-fit, minmax(480px, 1fr));
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    align-items: center;
    justify-items: center;
  }
</style>