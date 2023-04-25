<template>
  <div class="home">
    <Header />
    <AddBook />
    <UpdateBook />
    <BookList />
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import AddBook from "@/components/AddBook.vue";
import UpdateBook from "@/components/UpdateBook.vue";

import BookList from "@/components/BookList.vue";
export default {
  name: "home",
  components: {
    Header,
    AddBook,
    UpdateBook,
    BookList
  }
};
</script>
