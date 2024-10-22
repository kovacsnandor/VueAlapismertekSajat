<template>
  <p>{{ personForm }}</p>
  <form class="row g-4 needs-validation was-validated" novalidate>
    <!-- Name -->
    <div class="col-md-8">
      <label for="name" class="form-label">Név:</label>
      <input
        type="text"
        class="form-control"
        id="name"
        required
        v-model="personForm.name"
      />
      <div class="valid-feedback">&nbsp;</div>
      <div class="invalid-feedback">Név kitöltése kötelező</div>
    </div>
    <!-- dateOfBird -->
    <div class="col-md-4">
      <label for="dateOfBird" class="form-label">Született:</label>
      <input
        type="date"
        class="form-control"
        id="dateOfBird"
        required
        v-model="formattedDate"
      />
    </div>
    <!-- locality -->
    <div class="col-md-6 position-relative">
      <label for="locality" class="form-label">Helység:</label>
      <input
        type="text"
        class="form-control"
        id="locality"
        required
        v-model="personForm.locality"
      />
      <div class="invalid-tooltip">Név kitöltése kötelező</div>
    </div>
    <!-- zipCode -->
    <div class="col-md-3">
      <label for="zipCode" class="form-label">Irányítószám:</label>
      <input
        type="text"
        class="form-control"
        id="zipCode"
        required
        pattern="^\d{4}$"
        v-model="personForm.zipCode"
      />
    </div>
    <!-- neme -->
    <div class="col-md-3">
      <label class="form-check-label"> Neme </label>

      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="neme"
          :value="true"
          id="ferfi"
          v-model="personForm.neme"
        />
        <label class="form-check-label" for="ferfi"> Férfi </label>
      </div>
      <div class="form-check">
        <input
          class="form-check-input"
          type="radio"
          name="neme"
          id="no"
          :value="false"
          v-model="personForm.neme"
        />
        <label class="form-check-label" for="no"> Nő </label>
      </div>
    </div>

    <!-- profession -->
    <div class="col-md-5">
      <label class="form-check-label mb-2" for="profession">
        Foglalkozások:
      </label>
      <select
        class="form-select"
        aria-label="Default select example"
        id="profession"
        v-model="personForm.professionId"
        required
      >
        <option
          :value="profession.id"
          v-for="profession in professions"
          :key="profession.id"
        >
          {{ profession.name }}
        </option>
      </select>
    </div>

    <button type="submit" class="btn btn-success">Mentés</button>
  </form>
</template>

<script>
import dateFormat, { masks } from "dateformat";
export default {
  props: ["personForm", "professions"],
  emits: ["savePerson"],
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
      this.$emit("savePerson", this.personForm);
    },
  },
  computed: {
    formattedDate: {
      get() {
        if (!this.personForm.dateOfBird) {
          return null;
        }
        return dateFormat(this.personForm.dateOfBird, "yyyy-mm-dd");

        // return this.personForm.dateOfBird
      },
      set(newValue) {
        this.personForm.dateOfBird = dateFormat(newValue, "yyyy.mm.dd");
      },
    },
  },
};
</script>

<style>
</style>