<script setup>
  import { ref} from 'vue';
  import NavigationMenu from "@/components/NavigationMenu.vue";

  let optionId = 0;
  const navMenuOptions = ref([
    {id: optionId++, text:"Promotions", link:"/Products/Promotions"},
    {id: optionId++, text:"New", link:"/Products/New"},
    {id: optionId++, text:"Board games", link:"/Products/All"},
    {id: optionId++, text:"Accessories", link:"/Products/Accessories"}
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
  }

</style>
