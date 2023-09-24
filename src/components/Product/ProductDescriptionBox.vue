<script setup>

  import {inject} from "vue";

  const description = inject('productDescription');

</script>

<template>
  <div>
    <p>{{description}}</p>
  </div>
</template>

<style scoped>
  div {
    padding: 10px;
    height: 75%;
    font-family: 'Belanosima', sans-serif;
    color: #9AA0A6;
    border-radius: 12px;
    border: 2px solid #9AA0A6;
    white-space: pre-wrap;
    box-sizing: border-box;
  }
  p {
    margin-top: 10px;
    margin-inline: 7px;
    padding-right: 7px;
    max-height: 95%;
    overflow: auto;
    white-space: pre-wrap;
    overscroll-behavior: contain;
  }
  p::-webkit-scrollbar {
    width: 7px;
  }
  p::-webkit-scrollbar-track {
    background: none;
    padding-left: 2px;
  }
  p::-webkit-scrollbar-thumb {
    background: #80868B;
    border-radius: 10px;
  }
  p::-webkit-scrollbar-thumb:hover {
    background: #9AA0A6;
  }
</style>