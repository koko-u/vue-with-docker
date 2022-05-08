<script setup lang="ts">
import { onMounted, ref } from 'vue';

  const title = 'My first vue app :('

  const name = ref<HTMLInputElement | undefined>(undefined)
  onMounted(() => {
    if (name.value) {
      name.value.focus()
    }
  })

  const handleClick = () => {
    if (name.value) {
      console.log('name: ', name.value.value)
      name.value.classList.add('active')
    }
    
  }
</script>

<template>
  <h1>{{ title }}</h1>
  
  <div>
    <input type="text" ref="name">
    <button @click="handleClick">Click me</button>
  </div>
  
</template>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  h1 {
    border-bottom: 1px solid #ddd;
    display: inline-block;
    padding-bottom: 10px;
  }
</style>
