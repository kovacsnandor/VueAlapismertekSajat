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
      <RouterLink to="/szulotogyerek">Szülő -> Gyerek</RouterLink> |
      <RouterLink to="/szuloodavisszagyerek">Szülő &lt;-&gt; Gyerek</RouterLink> | 
      <RouterLink to="/gyerekodavisszagyerek">Gyerek &lt;-&gt; Gyerek</RouterLink> | 
      <RouterLink to="/sokgyerekgyerek">Sok Gyerek &lt;-&gt; Gyerek</RouterLink> | 
      <RouterLink to="/provideinject">Provide Inject</RouterLink> | 
    </nav>
    
    <div class="my-border p-2">
      <RouterView/>
    </div>
  </div>
</template>

<style scoped>

</style>


