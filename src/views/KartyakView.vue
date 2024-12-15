<template>
  <div>
    <div class="d-flex justify-content-between">
      <h2>Kártyák</h2>
      <!-- Hány kártya/oldal -->
      <div class="d-flex align-items-center">
        <span>kártya/olal: </span>
        <select
          class="form-select my-rowPerPage-width ms-2"
          aria-label="Default select example"
          v-model="rowsPerPage"
        >
          <option
            v-for="number in rowsPerPageArray" :key="number"
            :value="number"
          >
            {{ number }}
          </option>
        </select>
      </div>
    </div>

    <!-- Kártyák és Paginátor -->
    <div clas="d-flex align-items-end">
      <!-- Kártyák -->
      <div class="my-cards-height overflow-y-auto my-border">
        <Cards :cards="cards" />
      </div>

      <!-- Paginátor -->
      <div class="p-3 my-border">
        <Paginator
          :pageNumber="pageNumber"
          :numberOfPages="numberOfPages"
          :pagesArray="pagesArray"
          @paging="pagingHandler"
        />
      </div>
    </div>
  </div>
</template>


<script>
import Paginator from "@/components/Paginator.vue";
import Cards from "../components/Cards.vue";
import "../components/Cards.vue";
import axios from "axios";
export default {
  components: {
    Cards,
    Paginator,
  },
  data() {
    return {
      urlApi: "http://localhost:8000/api",
      cards: [], //A kártyák
      pagesArray: [], //hány oldal van tömb
      pageNumber: 1, //melyik oldal van kiválasztva
      rowsPerPage: 3, //hány kártya legyen oldalanként
      numberOfPages: 1, // hány oldal
      rowsPerPageArray: [3, 5, 10, 25, 100], //kártya/oldal választék
    };
  },
  mounted() {
    this.getOsztalynevsor();
    this.getPageCount();
  },
  watch: {
    async rowsPerPage() {
      await this.getOsztalynevsor();
      await this.getPageCount();
      this.pageNumber = Math.min(
        this.pageNumber, this.numberOfPages);
    },
    pageNumber() {
      this.getOsztalynevsor();
    },
  },
  methods: {
    async getOsztalynevsor() {
      const url = `${this.urlApi}/queryOsztalynevsorLimit/${this.pageNumber}/${this.rowsPerPage}`;
      const response = await axios.get(url);
      this.cards = response.data.data;
    },
    async getPageCount() {
      const url = `${this.urlApi}/queryHanyOldalVan/${this.rowsPerPage}`;
      this.rows = await axios.get(url);
      this.numberOfPages = this.rows.data.data.oldalszam;
      this.pagesArray = [];
      for (let i = 0; i < this.numberOfPages; i++) {
        this.pagesArray.push(i + 1);
      }
    },
    pagingHandler(pageInfo) {
      this.pageNumber = pageInfo.pageNumber;
    },
  },
};
</script>


<style>
.my-cards-height {
  height: calc(100vh - 300px);
}

.my-rowPerPage-width {
  width: 90px;
}
</style>
