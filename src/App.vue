<script setup>
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <div class="container-fluid my-container my-border">
    <!-- Header -->
    <h1>Direktívák</h1>
    <!-- Menü -->

    <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/databind">Data bind</RouterLink> | 
      <RouterLink to="/vif">v-if</RouterLink> | 
      <RouterLink to="/vshow">v-show</RouterLink> | 
      <RouterLink to="/vfor">v-for</RouterLink> | 
      <RouterLink to="/von">v-on</RouterLink> | 
      <RouterLink to="/cssbinding">css binding</RouterLink> | 
    </nav>
    
    <!-- Ide tölti be a eblapokat -->
    <RouterView class="my-border p-3"/>

  </div>
</template>

<style scoped>

</style>
