<template>
  <div>
    <div class="d-flex justify-content-between align-items-center">
      <h2>Kártyák</h2>
      <p class="m-0">
        $route 
          .path:{{ $route.path }} | 
          .name:{{ $route.name }} | 
          .params:{{ $route.params }}
      </p>
      <!-- Hány kártya/oldal -->
      <div class="d-flex align-items-center">
        <span>kártya/olal: </span>
        <select
          class="form-select my-rowPerPage-width ms-2"
          aria-label="Default select example"
          v-model="cardsPerPage"
        >
          <option
            v-for="number in rowsPerPageArray"
            :key="number"
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
import { BASE_URL } from "../helpers/baseUrls";
import axios from "axios";
export default {
  components: {
    Cards,
    Paginator,
  },
  data() {
    return {
      urlApi: BASE_URL,
      cards: [], //A kártyák
      pagesArray: [], //hány oldal van tömb
      pageNumber: this.$route.params.pageNumber, //melyik oldal van kiválasztva
      cardsPerPage: this.$route.params.cardsPerPage, //hány kártya legyen oldalanként
      numberOfPages: 1, // hány oldal
      rowsPerPageArray: [3, 5, 10, 25, 100], //kártya/oldal választék
    };
  },
  mounted() {
    this.getOsztalynevsor();
    this.getPageCount();
  },
  watch: {
    async cardsPerPage(data) {
      await this.getOsztalynevsor();
      await this.getPageCount();
      this.pageNumber = Math.min(this.pageNumber, this.numberOfPages);
      this.routerReplacer()
    },
    pageNumber() {
      this.getOsztalynevsor();
      this.routerReplacer()
    },
  },
  methods: {
    async getOsztalynevsor() {
      const url = `${this.urlApi}/queryOsztalynevsorLimit/${this.pageNumber}/${this.cardsPerPage}`;
      const response = await axios.get(url);
      this.cards = response.data.data;
    },
    async getPageCount() {
      const url = `${this.urlApi}/queryHanyOldalVan/${this.cardsPerPage}`;
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
    routerReplacer(){
      const routeName = this.$route.name;
      this.$router.push({
        name: routeName,
        params: {
          pageNumber: this.pageNumber,
          cardsPerPage: this.cardsPerPage,
        },
      });
    }
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
