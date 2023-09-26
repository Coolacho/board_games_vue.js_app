<!--suppress CssUnusedSymbol -->
<script setup>

  import {provide} from "vue";
  import {hoveredStore} from "@/store";
  import ItemPrice from "@/components/Product/ProductPrice.vue";
  import ItemCardExpanded from "@/components/Product/ProductCardExpanded.vue";

  const props = defineProps({
    product: {
      type: Object,
      required: true,
      id: {Number},
      price: {Number},
      rating: {Number},
      discount: {Number},
      name: {String},
      descriptionPath: {String},
      images: {Array},
      categories: {Array}
      /*validator(value) {
         return (typeof value.id === "number")
             && (typeof value.price === "number")
             && (typeof value.rating === "number" && (value.rating >= 0 && value.rating <=5))
             && (typeof value.discount === "number" && (value.discount >= 0 && value.discount <=100))
             && (typeof value.title === "string")
             && (typeof value.description === "string")
             && (value.images.every(img => {return typeof img.id === "number" && typeof img.path === "string"})
             && (value.categories.every(cat => {return typeof cat.id === "number" && typeof cat.name === "string"})))
      }*/
    }
  })

  provide('productName', props.product.name);
  provide('productImages', props.product.images);
  provide('productDescriptionPath', props.product.descriptionPath);
  provide('productPriceDiscount', [ props.product.price, props.product.discount ]);

  const store = hoveredStore();

</script>

<template>
  <div
      id="card-wrapper"
      @mouseenter="store.hover(product.id)"
  >
    <div id="image-wrapper">
      <img
          :src="product.images[0].path"
          :alt="product.name"
      >
    </div>
    <div id="text-wrapper">
      <span>{{ product.name }}</span>
      <p>Some game description</p>
    </div>
    <div id="footer">
      <ItemPrice></ItemPrice>
      <div id="button-pane">
        <button title="Add to cart">
          <img
              src="../../assets/images/others/add_to_cart_icon.png"
              alt="add to cart"
          >
        </button>
        <button title="More info">
          <img
              src="../../assets/images/others/info_icon.png"
              alt="more info"
          >
        </button>
      </div>
    </div>
  </div>

  <!--TODO:-->
  <!--      -Replace the description with rating and maybe categories in the normal product card-->
  <!--      -Upgrade the animation to start from the center of the product card and move to the center of the webpage-->
  <!--      -Add animation for the photo change-->
  <!--      -Add rating, categories, price and action buttons to the expanded product card-->

  <!--Idea for the animation of photo changing: add all the photos with v-for,-->
  <!--then add v-show which shows only the one with the current imageId-->
  <!--and add a <Transition> component for the v-show which will have the enter and leave animations-->
  
  <Transition name="expand">
    <ItemCardExpanded
        v-show="store.hovered === product.id"
        @mouseleave="store.unhover()"
    >
    </ItemCardExpanded>
  </Transition>

</template>

<style scoped>
  #card-wrapper{
    border-radius: 12px;
    box-shadow: 5px 5px 5px #80868B;
    width: 275px;
    height: 430px;
    background-color: #3C4043;
    color: white;
  }
  #image-wrapper {
    object-fit: contain;
    height: 65%;
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
    padding-top: 10px;
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
    padding: 0 20px 20px;
    display: inline-grid;
    align-items: center;
    grid-auto-flow: column;
    grid-template-columns: 55% 45%;
    width: 100%;
    box-sizing: border-box;
  }

  #button-pane {
    display: grid;
    grid-auto-flow: column;
    column-gap: 10px;
    justify-content: right;
  }

  .expand-enter-active {
    transition: all 2s ease-in-out;
  }
  .expand-leave-active {
    transition: all 1s linear;
  }
  .expand-enter-from,
  .expand-leave-to{
    transform: scale3d(0, 0, 0);
  }

</style>