<template>
  <div class="my-box">
    <h3>Globális komponens</h3>
    <p>Engem globálisan deklaráltak a main.js-ben</p>
    <p>Nem kell importálni, bárhonnan elérhető vagyok</p>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.my-box {
  width: 300px;
  /* height: 300px; */
  border: 1px dashed black;
  background-color: lightblue;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;

}
</style>