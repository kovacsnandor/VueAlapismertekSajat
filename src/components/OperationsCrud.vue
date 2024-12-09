<template>
  <!-- törlés -->
  <button
    type="button"
    class="btn btn-outline-danger btn-sm"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    @click="onClickDeleteButton(dataLine)"
  >
    <i class="bi bi-trash3"></i>
  </button>
  <!-- módosítás -->
  <button
    type="button"
    class="btn btn-outline-primary btn-sm ms-2"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    @click="onClickUpdate(dataLine)"
  >
    <i class="bi bi-pencil"></i>
  </button>
  <!-- új -->
  <button
    type="button"
    class="btn btn-outline-success btn-sm ms-2"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    @click="onClickCreate()"
  >
    <i class="bi bi-plus-lg"></i>
  </button>
</template>

<script>
export default {
  props: ["dataLine"],
  emits: ["onClickDeleteButton", "onClickUpdate", "onClickCreate"],
  methods: {
    onClickDeleteButton(dataLine) {
      this.$emit("onClickDeleteButton", dataLine);
    },
    onClickUpdate(dataLine) {
      this.$emit("onClickUpdate", dataLine);
    },
    onClickCreate() {
      this.$emit("onClickCreate");
    },
  },
};
</script>

<style>
</style>