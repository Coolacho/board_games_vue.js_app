<script setup>

  import ItemDescriptionBox from "@/components/Product/ProductDescriptionBox.vue";
  import ItemImageWheel from "@/components/Product/ProductImageWheel.vue";
  import {inject} from "vue";

  const productName = inject('productName');

</script>

<template>
  <div id="expanded-card-wrapper">
    <div id="left-side-container">
      <ItemImageWheel></ItemImageWheel>
      <h1>{{ productName }}</h1>
    </div>
    <div id="right-side-container">
      <ItemDescriptionBox></ItemDescriptionBox>
    </div>
  </div>
</template>

<style scoped>
  #expanded-card-wrapper {
    width: 85%;
    height: 85%;
    border: solid 2px #3C4043;
    border-radius: 12px;
    z-index: 2;
    position: fixed;
    left: 7.5%;
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