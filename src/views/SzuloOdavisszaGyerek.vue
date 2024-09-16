<template>
  <h2>Szülő &lt;-&gt; Gyerek kommunikáció</h2>

  <div class="d-flex flex-wrap">
    <!-- Dobozok -->
    <Kerdezett
      v-for="(kerdezett, i) in kerdezettek"
      :key="i"
      :nev="'Feri'"
      :kerdes="kerdes"
    />
  </div>
</template>

<script>
import Kerdezett from "../components/DobozUzenettel.vue";
export default {
  components: {
    Kerdezett,
  },
  data() {
    return {
      kerdes: null,
      kerdezettek: ["Feri", "Enikő", "Mónika", "Géza"],
      valaszok: [],
    };
  },
};
</script>

<style>
</style>