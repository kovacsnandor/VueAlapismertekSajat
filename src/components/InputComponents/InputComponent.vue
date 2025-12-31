<template>
  <div class="mb-3">
    <label for="text" class="form-label">
      {{ label }}:
    </label>
    <!-- Az emit nevénél kötelező a 'update:text' struktúra
      Az  $event.target.value-ben az van, amit az inpuba írsz
    -->
    <input
      type="text"
      class="form-control"
      id="text"
      :value="text"
      @input="$emit('update:text', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    text: { type: String, default: "" },
    label: { type: String, default: "Text" },
  },
};
</script>

<style>
</style>