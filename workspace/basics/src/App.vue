<script setup>
  import { ref, computed } from 'vue'
  import { getImg } from './utils/getImg'

  const books = ref([
    {
      title: 'name of the wind',
      author: 'patrick rothfuss',
      image: getImg('1.jpg'),
      isFav: true,
    },
    {
      title: 'the way of kings',
      author: 'bardon sanderson',
      image: getImg('2.jpg'),
      isFav: false,
    },
    {
      title: 'the final empire',
      author: 'bardon sanderson',
      image: getImg('3.jpg'),
      isFav: true,
    },
  ])
  const favoriteBooks = computed(() => {
    return books.value.filter((book) => book.isFav)
  })

  const showBook = ref(true)
  const toggle = () => {
    showBook.value = !showBook.value
  }

  const url = ref('http://www.thenetninja.co.uk')

  const toggleFav = (book) => {
    book.isFav = !book.isFav
  }
</script>

<template>
  <div class="board">
    <div>
      abc
      <button @click="toggle">
        {{ showBook ? 'Show' : 'Hidden' }}
      </button>
    </div>
    <div v-if="showBook">
      <ul>
        <li
          v-for="book in favoriteBooks"
          :key="book.title"
          :class="{ fav: book.isFav }"
          @click="toggleFav(book)"
        >
          <img :src="book.image" :alt="book.title" />
          <h3>{{ book.title }}</h3>
          <p>
            {{ book.author }}
          </p>
        </li>
      </ul>
    </div>

    <a :href="url">Best website ever.</a>
  </div>
</template>

<style scoped>
  .board {
    background: #eee;
    max-width: 960px;
    margin: 20px auto;
  }

  p,
  h3,
  ul {
    margin: 0;
    padding: 0;
  }

  li {
    list-style-type: none;
    background: #fff;
    margin: 20px 10px;
    padding: 10px 20px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  li.fav {
    background: #ff9ed2;
    color: #fff;
  }

  li:hover {
    cursor: pointer;
  }

  .fav {
  }
</style>
