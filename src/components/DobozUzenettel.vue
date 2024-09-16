<template>
  <div class="my-doboz">
    <h2>{{ nev }}</h2>
    <p>Kérdés: {{ kerdes }}</p>

    <p>
      Válaszolj:
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickKulddButton()"
      >
        Küldd
      </button>
    </p>
    <div class="mb-3">
      <label for="uzenet" class="form-label"
        >Email address</label
      >
      <input
        type="email"
        class="form-control"
        id="uzenet"
        v-model="uzenet"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["nev", "kerdes"],
  data() {
    return {
      uzenet: null,
    };
  },
  methods: {
    onClickKulddButton() {},
  },
};
</script>

<style scoped>
.my-doboz {
  width: 200px;
  height: 235px;
  padding: 5px;
  margin: 10px;
  background: lightskyblue;
  border: 1px dashed black;
}
</style>