<template>
  <div>
    <h1>Komponens kommunikáció</h1>
    <div class="row">
      <!-- Szülő  -->
      <div class="col">
        <hr class="border border-primary border-5 opacity-75 mb-0" />
        <h2>Szülő</h2>
        <div class="mb-3">
          <label for="uzenet" class="form-label">Írj egy üzenetet</label>
          <div class="d-flex">
            <input
              type="text"
              class="form-control"
              id="uzenet"
              v-model="uzenetInput"
            />
            <!-- Üzenet küldés -->
            <button
              type="button"
              class="btn btn-primary ms-2"
              v-if="uzenetInput"
              @click="onClickUzenetKuldButton"
            >
              <i class="bi bi-send"></i>
            </button>
          </div>
        </div>
        <!-- üzenetek kiírása -->
        <hr class="border border-warning border-5 opacity-75 mb-0" />
        <h3>
          Üzenőfal
          <button
            type="button"
            class="btn btn-danger ms-2"
            v-if="uzenetek.length"
            @click="uzenetek = []"
          >
            <i class="bi bi-trash3"></i>
          </button>
        </h3>
        <div v-for="(uzenet, index) in uzenetek" :key="index">
          <p>{{ uzenet.kitol }}: {{ uzenet.uzenet }}</p>
          <hr />
        </div>
      </div>

      <!-- Gyerek doboz -->
      <div class="col">
        <hr class="border border-success border-5 opacity-75 mb-0" />
        <h2>Gyerek</h2>
        <Doboz
          :kicsoda="'Pisti'"
          :uzenetSzulotol="uzenetGyereknek"
          @uzenetFogadEsemeny="uzenetFogadEsemenyHandler"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Doboz from "@/components/KomponensKommunikacio/Doboz.vue";
export default {
  name: "KomponensKommunikacio",
  components: {
    Doboz,
  },
  data() {
    return {
      uzenetInput: "",
      uzenetGyereknek: "",
      uzenetGyerektol: "",
      uzenetek: [],
    };
  },
  methods: {
    onClickUzenetKuldButton() {
      this.uzenetGyereknek = this.uzenetInput;
      const uzenet = {
        kitol: "Szülő",
        uzenet: this.uzenetGyereknek,
      };
      this.uzenetek.push(uzenet);
      this.uzenetInput = "";
    },
    uzenetFogadEsemenyHandler(data) {
      this.uzenetek.push(data);
    },
  },
};
</script>

<style>
</style>