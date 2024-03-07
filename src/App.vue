<script setup>
  import { ref} from 'vue';
  import NavigationMenu from "@/components/NavigationMenu.vue";

  let optionId = 0;
  const navMenuOptions = ref([
    {id: optionId++, text:"Promotions", link:"/products/promotions"},
    {id: optionId++, text:"New", link:"/products/new"},
    {id: optionId++, text:"Board games", link:"/products/all"},
    {id: optionId++, text:"Accessories", link:"/products/accessories"}
  ])

</script>

<template>
  <NavigationMenu :options="navMenuOptions"></NavigationMenu>
  <router-view></router-view>
</template>

<style>

  @import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');

  body {
    background-color: #9AA0A655;
    margin: 0;
  }

</style>
