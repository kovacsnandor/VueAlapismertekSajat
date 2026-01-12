<template>
  <div>
    <button
      type="button"
      class="btn btn-primary"
      @click="onClickSzorKettoButton"
    >
      *2
    </button>
  </div>
</template>

<script>
export default {
  props: {
    szam: { type: Number, default: 0 },
  },
  methods: {
    onClickSzorKettoButton() {
      this.$emit("duplazas", this.szam * 2);
    },
  },
};
</script>

<style>
</style>