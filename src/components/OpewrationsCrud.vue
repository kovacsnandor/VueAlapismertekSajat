<template>
  <!-- törlés -->
  <button
    type="button"
    class="btn btn-outline-danger btn-sm"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    @click="onClickDeleteButton(person)"
  >
    <i class="bi bi-trash3"></i>
  </button>
  <!-- módosítás -->
  <button
    type="button"
    class="btn btn-outline-primary btn-sm ms-2"
    data-bs-toggle="modal"
    data-bs-target="#modal"
    @click="onClickUpdate(person)"
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
  props: ["person"],
  emits: ["onClickDeleteButton", "onClickUpdate", "onClickCreate"],
  methods: {
    onClickDeleteButton(person) {
      this.$emit("onClickDeleteButton", person);
    },
    onClickUpdate(person) {
      this.$emit("onClickUpdate", person);
    },
    onClickCreate() {
      this.$emit("onClickCreate");
    },
  },
};
</script>

<style>
</style>