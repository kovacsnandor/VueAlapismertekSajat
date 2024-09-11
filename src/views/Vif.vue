<template>
  <div>
    <h2>
        v-if
        (<span v-if="listaKivalasztottElem === '1'">*</span>
        <span v-else-if="listaKivalasztottElem === '2'">**</span>
        <span v-else-if="listaKivalasztottElem === '3'">***</span>
        <span v-else>?</span>)
    </h2>

    <select
      class="form-select"
      aria-label="Default select example"
      v-model="listaKivalasztottElem"
    >
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
        listaKivalasztottElem: null,
    };
  },
};
</script>

<style>
</style>