<script setup>

import {ref} from "vue"

defineProps({
  options: {
    type: Array,
    required: true
  }
})

const selectedOption = ref(0)

</script>

<template>
  <nav>
    <ul>
      <li
          v-for="option in options"
          :key="option.id"
          @click="selectedOption = option.id"
      >
        <router-link
            :to="{ path: option.link }"
            :class="{selected: selectedOption === option.id}"
        >
          {{option.text}}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

  nav {
    top: 0;
    min-width: 100%;
    position: sticky;
    justify-content: center;
    display: flex;
    background-color: #dddfe1;
    box-shadow: 5px 7px 7px #dddfe1;
    z-index: 5;
  }

  ul {
    list-style-type: none;
    column-gap: 1%;
    border-radius: 14px;
    padding-inline: 0;
    padding-top: 7px;
    padding-bottom: 10px;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 97%;
    height: 45px;
    left: 1.5%;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: auto;
    background-color: #17181B;
  }
  li {
    text-align: center;
  }
  a {
    padding-inline: 25px;
    padding-top: 15px;
    padding-bottom: 18px;
    position: relative;
    color:white;
    text-decoration: none;
    font-family: 'Belanosima', sans-serif;
    font-size: 18px;
    border-radius: 10px;
  }
  a.selected {
    background-color: #3C4043;
  }
  a::before{
    content: '';
    width: 80%;
    height: 5px;
    border-radius: 10px;
    position: absolute;
    left: 10%;
    bottom: 15%;
    background-image: linear-gradient(to bottom right, dodgerblue, springgreen);
  }
  a:not(.selected)::before{
    transform: scaleX(0);
    transform-origin: right;
    transition: transform .5s;
  }
  a:not(.selected):hover::before{
    transform: scaleX(1);
    transform-origin: left;
  }
</style>