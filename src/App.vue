<script>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "vue";

export default {
  provide() {
    return {
      searchWord: computed(() => this.searchWord),
    };
  },

  data() {
    return {
      searchWord: null,
    };
  },
};
</script>

<template>
  <div class="container-fluid my-border my-container">
    <h1>Témakör</h1>

    <nav
      class="my-border p-4 d-flex justify-content-between align-items-center"
    >
      <div>
        <RouterLink to="/">Home</RouterLink> |
        <RouterLink to="/globaliskomponens">Globális komponens</RouterLink> |
        <RouterLink to="/dinamikuskomponens">Dinamikus komponens</RouterLink> |
        <RouterLink to="/slots">Slots</RouterLink> |
        <RouterLink to="/tegla">Tégla</RouterLink> |
        <RouterLink to="/listapakolo">Lista pakoló</RouterLink> |
        <RouterLink to="/vslot">v-slot</RouterLink> |
      </div>

      <div class="d-flex align-items-center" role="search">
        <label for="searchWord" class="form-label text-nowrap m-0"
          >Hal kereső:
        </label>
        <input
          id="searchWord"
          class="form-control me-2 ms-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          v-model="searchWord"
        />
        <button class="btn btn-outline-success" type="submit">Search</button>
      </div>
    </nav>

    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>
</style>


