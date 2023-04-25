<template>
  <div class="card">
    <div v-if="!booklists.length">
        <h2 class="text-center">Sorry No Book Found! Please Register A book.</h2>
    </div>
    <div>
        <table class="table">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Status</th>
          <th scope="col">Purchase date</th>
          <th scope="col">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(booklist,index) in booklists" :key="index">
          <td>{{booklist.title}}</td>
          <td>{{booklist.author}}</td>
          <td v-if="booklist.status==0">Unread</td>
          <td v-if="booklist.status==1">Reading</td>
          <td v-if="booklist.status==2">Finished</td>
          <td>{{booklist.purchaseDate}}</td>
          <td>
            <button @click="clicktoUpdate(index, booklist)" class="btn btn-warning">Update</button>&nbsp;&nbsp;
            <button @click="deleteBook(index)" class="btn btn-danger">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
    </div>
    
  </div>
</template>
<script>
export default{
    methods: {
        clicktoUpdate(index,booklist) {
            
            this.$store.commit("BOOK_TO_UPDATE", booklist);
            this.$store.commit("UPDATE_DATA_KEY", index);
            this.$store.state.updateModalVisibility = true; 
        },
      deleteBook(index) {
          this.$store.commit("DELETE_BOOK",index)
      }
    },
    computed: {
        booklists() 
        {
            return this.$store.state.booklists
        }
    }
}
</script>
