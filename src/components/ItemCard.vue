<!--suppress CssUnusedSymbol -->
<script setup>

  import {hoveredStore} from "@/store";
  import ItemPrice from "@/components/ItemPrice.vue";
  import ItemCardExpanded from "@/components/ItemCardExpanded.vue";

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
           && (value.images.every(img => {return typeof img.id === "number" && typeof img.path === "string"})
           && (value.categories.every(cat => {return typeof cat.id === "number" && typeof cat.name === "string"})))
    }*/
  }
})

  const store = hoveredStore();

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
    <ItemCardExpanded
        v-show="store.hovered === item.id"
        @mouseleave="store.unhover()"
        :item = item
    >
    </ItemCardExpanded>
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
    padding: 20px;
    display: inline-grid;
    align-items: center;
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

</style>