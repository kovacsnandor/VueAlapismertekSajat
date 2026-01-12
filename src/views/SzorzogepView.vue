<template>
  <div>
    <h1>Szorzógép</h1>
    <!-- Szám beírása -->
    <div class="d-flex align-items-center">
        <label for="szam" class="form-label"
        >Szám:</label
        >
        <input
        type="number"
        class="form-control mx-2"
        id="szam"
        style="width: 100px"
        v-model="szam"
        />
        =
        {{ eredmeny }}
    </div>
  </div>
  <!-- duplázó -->
  <Szorzo class="my-border p-3 mt-2"
    :szam="szam"
    @duplazas="duplazasHandler"
  />
</template>

<script>
import Szorzo from "@/components/Duplazogep/Szorzo.vue";

export default {
  components: {
    Szorzo,
  },
  data(){
    return {
        szam: 0,
        eredmeny: 0
    }
  },
  methods: {
    duplazasHandler(eredmeny){
        this.eredmeny = eredmeny;
    }
  }
};
</script>

<style>
</style>