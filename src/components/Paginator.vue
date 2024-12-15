<template>
  <nav aria-label="Pagináció" class="d-flex align-items-center">
    <ul class="pagination">
      <!-- Previous -->
      <li
        class="page-item"
        :class="{ disabled: pageInfo.pageNumber == 1 }"
        @click="onClickPrevious()"
      >
        <span class="page-link">Previous</span>
      </li>

      <!-- Pages -->
      <li
        class="page-item"
        aria-current="page"
        :class="{ active: pageNumber == page }"
        v-for="page in pagesArray" :key="page"
        @click="onClickPageNumber(page)"
      >
        <span class="page-link">{{ page }}</span>
      </li>

      <!-- Next -->
      <li
        class="page-item"
        :class="{
          disabled: pageInfo.pageNumber == numberOfPages}"
        @click="onClickNext()"
      >
        <span class="page-link">Next</span>
      </li>
    </ul>
    <!-- Debugger -->
    <p class="ms-3">
      pageNumber: {{ this.pageNumber }} | numberOfPages: {{ numberOfPages }} |
      pageInfo: {{ pageInfo.pageNumber }} | pagesArray: {{ pagesArray }}
    </p>
  </nav>
</template>

<script>
export default {
  props: ["pageNumber",
          "numberOfPages",
          "pagesArray"],
  data() {
    return {
      pageInfo: {
        pageNumber: this.pageNumber,
      },
    };
  },
  watch: {
    pageNumber(data) {
      this.pageInfo.pageNumber = data;
    },
  },
  methods: {
    onClickPrevious() {
      this.pageInfo.pageNumber = Math.max(
        1, this.pageInfo.pageNumber - 1);
      this.$emit("paging", this.pageInfo);
    },
    onClickPageNumber(page) {
      this.pageInfo.pageNumber = page;
      this.$emit("paging", this.pageInfo);
    },
    onClickNext() {
      this.pageInfo.pageNumber = Math.min(
        this.numberOfPages,
        this.pageInfo.pageNumber + 1);
      this.$emit("paging", this.pageInfo);
    },
  },
};
</script>

<style>
.page-link {
  cursor: pointer;
}
</style>