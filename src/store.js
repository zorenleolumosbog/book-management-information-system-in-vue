import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    modalVisibility: false,
    updateModalVisibility: false,
    dataToUpdate: "",
    dataKey: null,
    booklists: JSON.parse(localStorage.getItem("booklists")) || []
  },
  mutations: {
    ADD_BOOK(state, payload) {
      state.booklists.push(payload);
      localStorage.setItem("booklists", JSON.stringify(state.booklists));
    },
    UPDATE_BOOK(state, payload) {
      JSON.parse(localStorage.getItem("booklists")).splice(
        state.UPDATE_DATA_KEY,
        1,
        payload
      );
      localStorage.setItem("booklists", JSON.stringify(state.booklists));
    },
    UPDATE_DATA_KEY(state, payload) {
      state.dataKey = payload;
    },
    BOOK_TO_UPDATE(state, payload) {
      state.dataToUpdate = payload;
    },
    DELETE_BOOK(state, payload) {
      state.booklists.splice(payload, 1);
      localStorage.setItem("booklists", JSON.stringify(state.booklists));
    }
  },
  actions: {}
});
