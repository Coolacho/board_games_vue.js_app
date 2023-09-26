<!--suppress CssUnusedSymbol -->
<script setup>
import {inject, ref} from "vue";

  const productName = inject('productName');
  const productImages = inject('productImages');

  const imageId = ref(0);
  const transitionName = ref(null);
  function changeImgRight(images) {
    if (imageId.value < images.length-1) {
      transitionName.value="slide-left";
      ++imageId.value;
    }
  }

  function changeImgLeft() {
    if (imageId.value > 0) {
      transitionName.value="slide-right"
      --imageId.value;
    }
  }

</script>

<template>
  <div id="wrapper">
    <div
        class="img-change-buttons left"
        @click="changeImgLeft()"
    >
      <img
          src="../../assets/images/others/left-arrow.png"
          alt="Previous photo"
      >
    </div>
    <div
        class="img-change-buttons right"
        @click="changeImgRight(productImages)"
    >
      <img
          src="../../assets/images/others/left-arrow.png"
          alt="Next photo"
      >
    </div>
    <TransitionGroup :name="transitionName">
      <img
          v-for="image in productImages"
          v-show="productImages.indexOf(image) === imageId"
          :key="productImages.indexOf(image)"
          :src="image.path"
          :alt="productName"
          class="productImages"
      >
    </TransitionGroup>
  </div>
</template>

<style scoped>
  #wrapper {
    width: 85%;
    height: 65%;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }

  .img-change-buttons {
    width: 30px;
    height: 100%;
    z-index: 3;
    position: absolute;
  }
  .img-change-buttons.left {
    left: 0;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
  .img-change-buttons.right {
    right: 0;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
  }
  .img-change-buttons:hover {
    background-color: #80868B55;
  }
  .img-change-buttons:hover > *{
    visibility: visible;
  }
  .img-change-buttons img {
    width: 30px;
    max-height: 30px;
    position: absolute;
    top: 45%;
    visibility: hidden;
  }
  .img-change-buttons img::selection {
    background: transparent;
  }
  .img-change-buttons.right img {
    rotate: 180deg;
  }

  .productImages {
    position: absolute;
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
  .slide-left-enter-active,
  .slide-left-leave-active,
  .slide-right-enter-active,
  .slide-right-leave-active {
    transition: all 2s ease-in-out;
  }

  .slide-left-enter-from,
  .slide-right-leave-to {
    opacity: 0;
    translate: 450px;
    scale: 50% 50%;
  }

  .slide-left-leave-to,
  .slide-right-enter-from {
    opacity: 0;
    translate: -450px;
    scale: 50% 50%;
  }

</style>