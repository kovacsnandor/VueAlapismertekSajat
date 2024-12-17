import { defineStore } from 'pinia'

export const useSearchWordStore = defineStore('searchWord', {
  //Ezek a változók
  state: () => ({
    searchWord: null,
  }),
  //valamilyen formában visszaadja
  getters: {
  },
  //csinál vele valamit
  actions: {
  }
});
