<template>
  <div>
    <h2>Data Bind</h2>
    <p>
      {{ szoveg }} | {{ listaKivalasztottElem }} | {{ kenyer }}, {{ kifli }} |
      {{ neme }} |
      {{ range }} |
    </p>

    <!-- szövegdoboz -->
    <h3>Szövegdoboz</h3>
    <div class="mb-3">
      <label for="szoveg" class="form-label">Szöveg</label>
      <input type="text" class="form-control" id="szoveg" v-model="szoveg" />
    </div>

    <!-- lista -->
    <h3>Lista</h3>
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="listaKivalasztottElem"
    >
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>

    <!-- checkbox -->
    <h3>Checkbox</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="kenyer"
        v-model="kenyer"
      />
      <label class="form-check-label" for="kenyer"> Kenyér </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="checkbox"
        id="kifli"
        v-model="kifli"
      />
      <label class="form-check-label" for="kifli"> Kifli </label>
    </div>

    <!-- radio -->
    <h3>Radio</h3>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="neme"
        value="fiú"
        id="flexRadioDefault1"
        v-model="neme"
      />
      <label class="form-check-label" for="flexRadioDefault1"> Fiú </label>
    </div>
    <div class="form-check">
      <input
        class="form-check-input"
        type="radio"
        name="neme"
        value="lány"
        id="flexRadioDefault2"
        v-model="neme"
      />
      <label class="form-check-label" for="flexRadioDefault2"> Lány </label>
    </div>

    <!-- range -->
    <h3>Range</h3>
    <label for="range" class="form-label">Example range</label>
    <input type="range" class="form-range" id="range"
        :min="min" :max="max" :step="step"
        v-model="range"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      szoveg: "szöveg",
      listaKivalasztottElem: 2,
      kenyer: false,
      kifli: true,
      neme: "fiú",
      range: 0,
      min: -1,
      max: 1,
      step: 0.05,
    };
  },
};
</script>

<style>
h3 {
    margin-top: 1em;
}
</style>