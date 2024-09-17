<template>
  <div class="my-doboz">
    <h2>{{ nev }}</h2>
    <p>Kérdés: {{ kerdes }}</p>

    <div class="mb-3">
      <label for="uzenet" class="form-label"
        >Válasz:
        <button
          type="button"
          class="btn btn-primary"
          @click="onClickKulddButton()"
          v-if="kerdes && valasz"
        >
          Küldd
        </button>
      </label>
      <input type="email" class="form-control" id="uzenet" v-model="valasz" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["nev", "kerdes"],
  data() {
    return {
      valasz: null,
    };
  },
  methods: {
    onClickKulddButton() {
      this.uzenoFalraKuld();
    },
    uzenoFalraKuld() {
      if (this.valasz) {
        //Saját esemény kiváltása
        this.$emit("uzenoFal", {
          nev: this.nev,
          valasz: this.valasz,
        });
        this.valasz = null;
      }
    },
  },
};
</script>

<style scoped>
.my-doboz {
  width: 200px;
  height: 210px;
  padding: 5px;
  margin: 10px;
  background: lightskyblue;
  border: 1px dashed black;
}
</style>