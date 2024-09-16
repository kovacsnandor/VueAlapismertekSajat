<script>
import Doboz from "../components/DobozAltalanos.vue";
export default {
  components: { Doboz },
  data() {
    return {
      cuccok: [
        { cim: "Cipők", tartalom: "Cipők vannak benne" },
        { cim: "Almák", tartalom: "Almák vannak benne" },
        { cim: "Játékok", tartalom: "Játékok vannak benne" },
      ],
      uzenet: null,
    };
  },
};
</script>


<template>
  <div>
    <h2>Szülő -> Gyerek kommunikáció</h2>
    <!-- Üzenő input -->
    <div class="mb-3">
      <label for="uzenet" class="form-label"
        >Írj egy üzenetet</label
      >
      <input
        type="text"
        class="form-control"
        id="uzenet"
        v-model="uzenet"
      />
    </div>

    <!-- Dobozok -->
    <Doboz
      v-for="(cucc, i) in cuccok"
      :key="i"
      :cim="cucc.cim"
      :tartalom="cucc.tartalom"
      :uzenet="uzenet"
    />
  </div>
</template>

<style>
</style>







