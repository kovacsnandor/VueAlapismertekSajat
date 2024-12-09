<template>
  <p>{{ dataLine }}</p>
  <form class="row g-4 needs-validation was-validated" novalidate>
    <!-- Name -->
    <div class="col-md-8">
      <label for="name" class="form-label">Név:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        required
        v-model="dataLine.name"
      />
      <div class="valid-feedback">&nbsp;</div>
      <div class="invalid-feedback">Név kitöltése kötelező</div>
    </div>
    <!-- Fizetés -->
    <div class="col-md-4">
      <label for="salary" class="form-label">Fizetés:</label>
      <input
        type="number"
        class="form-control"
        id="salary"
        required
        v-model="dataLine.salary"
      />
    </div>

    <!-- Munkaidő -->
    <div class="col-md-3">
      <label class="form-check-label"> Munkaidő </label>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="workingTime"
          :value="'kötött'"
          id="kotott"
          v-model="dataLine.workingTime"
        />
        <label class="form-check-label" for="kotott"> Kötött </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="workingTime"
          id="kotetlen"
          :value="'kötetlen'"
          v-model="dataLine.workingTime"
        />
        <label class="form-check-label" for="kotetlen"> Kötetlen </label>
      </div>
    </div>

    <button type="submit" class="btn btn-success">Mentés</button>
  </form>
</template>

<script>
import dateFormat, { masks } from "dateformat";
export default {
  props: ["dataLine"],
  emits: ["saveDataLine"],
  mounted() {
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      form.addEventListener(
        "submit",
        (event) => {
          event.preventDefault();
          event.stopPropagation();
          if (form.checkValidity()) {
            this.onClickSubmit();
          }
        },
        false
      );
    });
  },
  methods: {
    onClickSubmit() {
      console.log("Mentés");
      this.$emit("saveDataLine", this.dataLine);
    },
  },
  computed: {
    
  },
};
</script>

<style>
</style>