<template>
  <div class="my-doboz">
    <h3>Nekem kell mutani a számlálást: {{ count }}</h3>
    <h3>Nekem kell az url: {{url}}</h3>
  </div>
</template>

<script>
export default {
    inject: ['url', 'count']

};
</script>
<style scoped>
.my-doboz {
  border: 1px dashed black;
  background: lightblue !important;
  width: 100% !important;
  /* width: 400px; */
}
</style>