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
        <a
            :class="{selected: selectedOption === option.id}"
            :href=option.link
        >
          {{option.text}}
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>

  ul {
    list-style-type: none;
    padding-inline: 0;
    background-color: #17181B;
    display: flex;
    justify-content: center;
    column-gap: 30px;
    border-radius: 10px;
    overflow: auto;
    white-space: nowrap;
    position: sticky;
  }
  li {
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
  }
  a {
    padding-inline: 30px;
    padding-top: 20px;
    padding-bottom: 20px;
    position: relative;
    color:white;
    text-decoration: none;
    font-family: 'Belanosima', sans-serif;
    font-size: 18px;
  }
  a.selected {
    border-radius: 10px;
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