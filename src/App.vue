<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}

</script>

<template>
  <div class="container-fluid my-border my-container">

    <h1>Témakör</h1>
    
    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/globaliskomponens">Globális komponens</RouterLink> | 
      <RouterLink to="/dinamikuskomponens">Dinamikus komponens</RouterLink> | 
      <RouterLink to="/slots">Slots</RouterLink> | 
      <RouterLink to="/tegla">Tégla</RouterLink> | 
    </nav>
    
    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>


<style scoped>

</style>


