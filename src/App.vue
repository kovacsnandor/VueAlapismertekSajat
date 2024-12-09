<script>
import { RouterLink, RouterView } from 'vue-router'
export default {

}

</script>

<template>
  <div class="container-fluid my-border my-container">

    <h1>CRUD műveletek</h1>
    
    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/personstable">Persons</RouterLink> |
      <RouterLink to="/professionstable">Professions</RouterLink> |
    </nav>
    
    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>


