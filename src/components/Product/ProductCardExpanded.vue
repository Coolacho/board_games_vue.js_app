<script setup>

  import ItemDescriptionBox from "@/components/Product/ProductDescriptionBox.vue";
  import ItemImageWheel from "@/components/Product/ProductImageWheel.vue";

  defineProps({
    product: Object
  })

</script>

<template>
  <div
      id="expanded-card-wrapper"
  >
    <div id="left-side-container">
      <ItemImageWheel :item-name="String(product.name)" :images="Array(product.images)"></ItemImageWheel>
      <h1>{{ product.name }}</h1>
    </div>
    <div id="right-side-container">
      <ItemDescriptionBox :description="String(product.description)"></ItemDescriptionBox>
    </div>
  </div>
</template>

<style scoped>
  #expanded-card-wrapper {
    width: 75%;
    height: 80%;
    border: solid 2px #3C4043;
    border-radius: 12px;
    z-index: 2;
    position: absolute;
    left: 12.5%;
    top: 10%;
    background-color: #3C4043;
    display: grid;
    grid-auto-columns: 50%;
    grid-auto-flow: column;
    padding: 50px;
    box-sizing: border-box;
  }
  #expanded-card-wrapper h1 {
    font-family: 'Belanosima', sans-serif;
    font-size: 35px;
    color: white;
  }
  #left-side-container, #right-side-container {
    min-height: 0;
  }

  @media screen and (max-width: 400px) {
    #expanded-card-wrapper {
      padding: 20px;
      grid-auto-flow: row;
      grid-auto-rows: 50%;
      grid-auto-columns: 100%;
    }

    #expanded-card-wrapper h1 {
      font-size: 20px;
    }

  }
</style>