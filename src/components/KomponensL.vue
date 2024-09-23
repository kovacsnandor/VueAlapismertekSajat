<template>
    <div class="my-box">
      <h3>Lokális komponens</h3>
      <p>Engem lokálisan kell deklarálni az oldalon</p>
      <p>Csak ezen az oldalon vagyok elérhető</p>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .my-box {
    width: 300px;
    /* height: 300px; */
    border: 1px dashed black;
    background-color: lightgreen;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
  }
  </style>