<script setup>
  defineProps({
    price: Number,
    discount: Number
  })
</script>

<template>
  <div
    v-if = "discount === 0"
  >
    <span>
      {{price.toFixed(2)}} lv.
    </span>
  </div>
  <div
    v-else
  >
    <span id="price-strikethrough">
      {{price.toFixed(2)}}
    </span>
    <span>
      <b>{{price.toFixed(2) * (1 - discount/100)}}</b> lv.
    </span>
  </div>
</template>

<style scoped>
  div {
    display: inline-block;
    font-family: 'Belanosima', sans-serif;
    font-size: 17px;
  }
  b {
    font-size: 21px;
  }
  #price-strikethrough {
    font-size: 17px;
    color: #80868B;
    position: relative;
    padding-right: 10px;
  }
  #price-strikethrough::before {
    content: "";
    width: 85%;
    height: 2px;
    border-radius: 10px;
    position: absolute;
    bottom: 40%;
    background-image: linear-gradient(to bottom right, dodgerblue, springgreen);
    transform: rotate(-10deg);
  }
</style>