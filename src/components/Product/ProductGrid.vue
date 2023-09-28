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
    grid-auto-rows: 460px;
    grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
    align-items: center;
    justify-items: center;
  }
</style>