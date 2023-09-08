<script setup>
  import { ref} from 'vue';
  import NavigationMenu from "@/components/NavigationMenu.vue";
  import ItemCard from "@/components/ItemCard.vue";
  import ProductService from "@/services/ProductService";

  let optionId = 0;
  const navMenuOptions = ref([
    {id: optionId++, text:"Promotions", link:"http://192.168.2.150:5173"},
    {id: optionId++, text:"New", link:"http://192.168.2.150:5173"},
    {id: optionId++, text:"Board games", link:"http://192.168.2.150:5173"},
    {id: optionId++, text:"Accessories", link:"http://192.168.2.150:5173"}
  ])

  const items = ref(null);
  getAllProducts();

  function getAllProducts() {
    ProductService.getProducts().then((response) =>{
      items.value = response.data;
    });

  }

</script>

<template>
  <NavigationMenu :options="navMenuOptions"></NavigationMenu>
  <div id="grid-container">
    <div
        v-for="item in items"
        :key="item.id"
    >
      <ItemCard :item=item></ItemCard>
    </div>
  </div>
  <!--TODO: Make the items align one below the other on smaller devices-->
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Belanosima&display=swap');

#grid-container{
  display: grid;
  gap: 25px;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  justify-items: center;
}

</style>
