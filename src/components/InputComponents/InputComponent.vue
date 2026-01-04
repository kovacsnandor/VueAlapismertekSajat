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
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script>
export default {
  props: {
    modelValue: { type: String, default: "" },
    label: { type: String, default: "Text" },
  },
};
</script>

<style>
</style>