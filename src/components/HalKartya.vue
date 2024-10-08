<template>
  <div class="col">
    <div class="card">
      <slot name="image"></slot>
      <div class="card-body">
        <slot name="title"></slot>
        <button
          type="button"
          class="btn btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#halInfoModal"
          @click="onClickReszletek()"
        >
          Részletek
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  methods: {
    onClickReszletek() {
      this.$emit("reszletekModalKezeles", { id: this.id });
    },
  },
};
</script>

<style>
</style>