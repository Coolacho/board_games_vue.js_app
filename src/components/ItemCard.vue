<!--suppress CssUnusedSymbol -->
<script setup>

import {ref} from "vue";
import {hoveredStore} from "@/store";
import ItemDescriptionBox from "@/components/ItemDescriptionBox.vue";
import ItemPrice from "@/components/ItemPrice.vue";

defineProps({
  item: {
    type: Object,
    required: true,
    id: {Number},
    price: {Number},
    rating: {Number},
    discount: {Number},
    name: {String},
    description: {String},
    images: {Array},
    categories: {Array}
    /*validator(value) {
      return (typeof value.id === "number")
          && (typeof value.price === "number")
          && (typeof value.rating === "number" && (value.rating >= 0 && value.rating <=5))
          && (typeof value.discount === "number" && (value.discount >= 0 && value.discount <=100))
          && (typeof value.title === "string")
          && (typeof value.description === "string")
          && (value.images.every(img => {return typeof img[0] === "number" && typeof img[1] === "string"})
          && (value.categories.every(cat => {return typeof cat[0] === "number" && typeof cat[1] === "string"})))
    }*/
  }
})

const store = hoveredStore();
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
  <div
      id="card-wrapper"
      @mouseenter="store.hover(item.id)"
  >
    <div id="image-wrapper">
      <img
          :src="item.images[0].path"
          :alt="item.name"
      >
    </div>
    <div id="text-wrapper">
      <span>{{ item.name }}</span>
      <p>Some game description</p>
    </div>
    <div id="footer">
      <ItemPrice :price = Number(item.price) :discount = Number(item.discount)></ItemPrice>
      <div id="button-pane">
        <button title="Add to cart">
          <img
              src="@/assets/add_to_cart_icon.png"
              alt="add to cart"
          >
        </button>
        <button title="More info">
          <img
              src="@/assets/info_icon.png"
              alt="more info"
          >
        </button>
      </div>
    </div>
  </div>

  <!--TODO:-->
  <!--      -Replace the description with rating and maybe categories in the normal item card-->
  <!--      -Upgrade the animation to start from the center of the item card and move to the center of the webpage-->
  <!--      -Add animation for the photo change-->
  <!--      -Add rating, categories, price and action buttons to the expanded item card-->

  <!--Idea for the animation of photo changing: add all the photos with v-for,-->
  <!--then add v-show which shows only the one with the current imageId-->
  <!--and add a <Transition> component for the v-show which will have the enter and leave animations-->
  
  <Transition name="expand">
    <div
        id="expanded-card-wrapper"
        v-show="store.hovered === item.id"
        @mouseleave="store.unhover()"
    >
      <div id="left-side-container">
        <div id="expanded-image-wrapper">
          <div
              class="img-change-buttons left"
              @click="changeImgBackward()"
          >
            <img
                src="@/assets/left-arrow.png"
                alt="Previous photo"
            >
          </div>
          <div
              class="img-change-buttons right"
              @click="changeImgForward(item.images)"
          >
            <img
                src="@/assets/left-arrow.png"
                alt="Next photo"
            >
          </div>
          <img
              id="image-wheel"
              :src="item.images[imageId].path"
              :alt="item.name"
          >
        </div>
        <h1>{{ item.name }}</h1>
      </div>
      <div id="right-side-container">
        <ItemDescriptionBox :description = String(item.description)></ItemDescriptionBox>
      </div>
    </div>
  </Transition>

</template>

<style scoped>
  #card-wrapper{
    border-radius: 12px;
    box-shadow: 5px 5px 5px #80868B;
    max-width: 275px;
    background-color: #3C4043;
    color: white;
  }
  #image-wrapper {
    padding-bottom: 5px;
    border-left: 2px solid #3C4043;
    border-top: 2px solid #3C4043;
    border-right: 2px solid #3C4043;
    border-top-left-radius: 12px;
    border-top-right-radius: 12px;
  }
  #image-wrapper img {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  #text-wrapper span{
    width: 250px;
    padding-left: 15px;
    font-family: 'Belanosima', sans-serif;
    font-size: 19px;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  #text-wrapper p {
    padding-left: 20px;
    color: #9AA0A6;
  }
  #footer {
    padding: 15px;
    display: inline-grid;
    grid-auto-flow: column;
    grid-auto-columns: 50%;
    width: 100%;
    box-sizing: border-box;
  }

  #button-pane {
    display: grid;
    grid-auto-flow: column;
    column-gap: 15px;
    justify-content: right;
  }

  .expand-enter-active {
    animation: expand 2s ease-in-out forwards;
  }
  .expand-leave-active {
    animation: expand 1s linear forwards reverse;
  }
  @keyframes expand {
    from {
      transform: scale3d(0, 0, 0);
    }
    to {
      transform: scale3d(100%, 100%, 100%);
    }
  }

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

  #expanded-image-wrapper {
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

  .exitImgLeft {
    transform: scale3d(0.65, 0.65, 0.65);
    translate: -500px;
    transition:
        transform 0.5s,
        translate 0.5s 1s;
  }
  .enterImgRight {
    translate: 500px;
    transform: scale3d(1, 1, 1);
    transition:
        translate 0.5s,
        transform 0.5s 1s;
  }
  .exitImgRight {
    transform: scale3d(0.65, 0.65, 0.65);
    translate: 500px;
    transition:
        transform 0.5s,
        translate 0.5s 1s;
  }
  .enterImgLeft {
    translate: -500px;
    transform: scale3d(1, 1, 1);
    transition:
        translate 0.5s,
        transform 0.5s 1s;
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