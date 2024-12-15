<script>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './components/Menu.vue';
export default {
  components: {
    Menu
  }
}

</script>

<template>
  <div class="container-fluid my-border my-container">

    <h1>Iskola</h1>
    <Menu />
    <!-- <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/kartyak">Kártyák</RouterLink>
    </nav> -->
    
    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>

</style>


