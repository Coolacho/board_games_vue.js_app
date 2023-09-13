<script setup>
  import {ref} from "vue";

  defineProps({
    images: Array,
    productName: String
  })

  const imageId = ref(0);
  function changeImgForward(images) {
    if (imageId.value < images.length-1) {
      setTimeout(() => {
        ++imageId.value;
      }, 2000);
    }
  }

  function changeImgBackward() {
    if (imageId.value > 0) {
      setTimeout(() => {
        --imageId.value;
      }, 2000);
    }
  }

</script>

<template>
  <div id="wrapper">
    <div
        class="img-change-buttons left"
        @click="changeImgBackward()"
    >
      <img
          src="../../assets/images/others/left-arrow.png"
          alt="Previous photo"
      >
    </div>
    <div
        class="img-change-buttons right"
        @click="changeImgForward(images)"
    >
      <img
          src="../../assets/images/others/left-arrow.png"
          alt="Next photo"
      >
    </div>
    <img
        id="image-wheel"
        :src="images[imageId].path"
        :alt="productName"
    >
  </div>
</template>

<style scoped>
  #wrapper {
    width: 85%;
    height: 65%;
    position: relative;
    overflow: hidden;
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

  #image-wheel{
    border-radius: 10px;
    width: 100%;
    height: 100%;
  }
</style>