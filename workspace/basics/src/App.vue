<script setup>
  import { ref } from 'vue'

  const title = 'The Final Empire'
  const author = 'Brandon Sanderson'
  const age = ref(45)

  const increaseAge = () => {
    age.value++
  }
  const decreaseAge = () => {
    age.value--
  }
</script>

<template>
  <p>{{ title }} - {{ author }} - {{ age }}</p>
  <button @click="increaseAge">Increase Age</button>
  &nbsp;
  <button @click="decreaseAge">Decrease Age</button>
</template>

<style></style>
