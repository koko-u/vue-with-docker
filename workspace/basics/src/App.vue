<script setup>
  import { ref } from 'vue'
  import { getImg } from './utils/getImg'

  const books = ref([
    {
      title: 'name of the wind',
      author: 'patrick rothfuss',
      image: getImg('1.jpg'),
    },
    {
      title: 'the way of kings',
      author: 'bardon sanderson',
      image: getImg('2.jpg'),
    },
    {
      title: 'the final empire',
      author: 'bardon sanderson',
      image: getImg('3.jpg'),
    },
  ])

  const showBook = ref(true)
  const toggle = () => {
    showBook.value = !showBook.value
  }

  const url = ref('http://www.thenetninja.co.uk')
</script>

<template>
  <div>
    <button @click="toggle">
      {{ showBook ? 'Show' : 'Hidden' }}
    </button>
  </div>
  <div v-if="showBook">
    <ul>
      <li v-for="book in books" :key="book.title">
        <img :src="book.image" :alt="book.title" />
        <h3>{{ book.title }}</h3>
        <p>
          {{ book.author }}
        </p>
      </li>
    </ul>
  </div>

  <a :href="url">Best website ever.</a>
</template>

<style scoped>
  .box {
    padding: 100px 0;
    width: 400px;
    text-align: center;
    background: #ddd;
    margin: 20px;
    display: inline-block;
  }
</style>
