<template>
  <div class="my-doboz">
    <h2>{{cim}}</h2>
    <p>Tartalom: {{tartalom}}</p>
    <p>Üzenet: {{uzenet}}</p>
  </div>
</template>

<script>
export default {
    props: ['cim', 'tartalom', 'uzenet']
}
</script>

<style scoped>
.my-doboz {
    width: 200px;
    height: 200px;
    padding: 5px;
    margin: 10px;
    background: lightgreen;
    border: 1px dashed black;
}
</style>