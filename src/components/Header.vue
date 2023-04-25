<template>
  <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
  <h5 class="my-0 mr-md-auto font-weight-normal">Book Management Information System</h5>
  
  <button class="btn btn-outline-primary" @click="showModal">Add New Book</button>  
</div>

</template>
<script>
export default {
 methods : {
   showModal() {
     this.$store.state.modalVisibility = true
   }
 }
}
</script>

