import { defineStore } from "pinia";

export const useCounterStore = defineStore("search", {
  //Ezek a változók
  state: () => ({
    searchWord: 0,
  }),
  //valamilyen formában visszaadja
  getters: {
    searchword() {
      return this.searchWord.toLower();
    },
  },
  //csinál vele valamit
  actions: {
    
  },
});
