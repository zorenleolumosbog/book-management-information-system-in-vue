<template>
  <div>
    <div v-if="$store.state.updateModalVisibility">
      <transition name="modal">
        <div class="modal-mask">
          <div class="modal-wrapper">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title">Update Book</h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true" @click="$store.state.updateModalVisibility = false"
                      >&times;</span
                    >
                  </button>
                </div>
                <div class="modal-body">
                  <div class="row">
                    <div class="col-md-12">
                      <div class="form-group">
                        <label for="title">Title</label>
                        <input
                          type="text"
                          id="title"
                          class="form-control"
                          name="title"
                          v-model="$store.state.dataToUpdate.title"
                        />
                      </div>
                      <div class="form-group">
                        <label for="author">Author</label>
                        <input
                          type="text"
                          id="author"
                          class="form-control"
                          name="author"
                          v-model="$store.state.dataToUpdate.author"
                        />
                      </div>
                      <div class="form-group">
                        <label for="status">Select Status</label>
                        <select class="form-control" name="status" id="status" v-model="$store.state.dataToUpdate.status">
                          <option value="0">Unread</option>
                          <option value="1">Reading</option>
                          <option value="2">Finished</option>
                        </select>
                      </div>
                      <div class="form-group">
                          <label for="purchaseDate">Purchase date</label>
                          <input id="purchaseDate" class="form-control" type="date" v-model="$store.state.dataToUpdate.purchaseDate">
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="$store.state.updateModalVisibility = false"
                  >
                    Close
                  </button>
                  <button type="button" @click="saveBook" class="btn btn-primary">
                    Update Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>
<script>
export default {
  
  methods: {
    saveBook() {
      if(this.title !== "" && this.author !== "") {
        this.$store.commit("UPDATE_BOOK", {
            title: this.title,
            author: this.author,
            status: this.status,
            purchaseDate: this.purchaseDate
        }
      );
      this.$store.state.updateModalVisibility = false;
      }
      

      if(this.title == "") {
          alert("title can not be empty");
        }
        if(this.author == "") {
          alert("Author can not be empty");
        }
    }
  }
};
</script>
