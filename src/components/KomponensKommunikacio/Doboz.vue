<template>
  <div class="my-doboz">
    <h2>{{ kicsoda }}</h2>
    <p>Szülőtől: {{ uzenetSzulotol }}</p>
    <!-- Üzenet írás -->
    <label for="uzenet" class="form-label">Írj egy választ</label>
    <div class="d-flex">
      <input
        type="text"
        class="form-control"
        id="uzenet"
        v-model="uzenetSzulonek"
      />
      <!-- Üzenet küldés -->
      <button
        type="button"
        class="btn btn-primary ms-2"
        v-if="uzenetSzulonek"
        @click="onClickUzenetKuldButton"
      >
        <i class="bi bi-send"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Doboz",
  props: {
    kicsoda: { type: String, default: "Valaki" },
    uzenetSzulotol: { type: String, default: "Üzenet a szülőtől" },
  },
  methods: {
    onClickUzenetKuldButton() {
      const data = {
        kitol: this.kicsoda,
        uzenet: this.uzenetSzulonek,
      };
      this.$emit("uzenetFogadEsemeny", data);
      this.uzenetSzulonek = '';
    },
  },
  data() {
    return {
      uzenetSzulonek: "",
    };
  },
};
</script>

<style scoped>
.my-doboz {
  min-width: 200px;
  min-height: 100px;
  padding: 5px;
  margin: 10px;
  background: lightgreen;
  border: 1px dashed black;
}
</style>