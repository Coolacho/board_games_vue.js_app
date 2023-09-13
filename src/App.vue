<script setup>
  import { ref} from 'vue';
  import NavigationMenu from "@/components/NavigationMenu.vue";

  let optionId = 0;
  const navMenuOptions = ref([
    {id: optionId++, text:"Promotions", link:"/Promotions"},
    {id: optionId++, text:"New", link:"http://192.168.2.150:5173"},
    {id: optionId++, text:"Board games", link:"/All_board_games"},
    {id: optionId++, text:"Accessories", link:"http://192.168.2.150:5173"}
  ])

</script>

<template>
  <NavigationMenu :options="navMenuOptions"></NavigationMenu>
  <router-view></router-view>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');

</style>
