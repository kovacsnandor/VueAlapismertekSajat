<template>
  <div>
    <h1>Input komponens adatkötés</h1>
    <p>{{ text }}</p>

    <div class="mb-3">
    <label for="text" class="form-label">
      Input v-model:
    </label>
    <input
      type="text"
      class="form-control"
      id="text"
      v-model="text"
    />
  </div>


    <!-- A v-model-nek meg kell mondani, hogy melyik props-ra gondolsz
      mert lehet akár több props is: v-model:text=...
    -->
    <InputComponent v-model:text="text" :label="'Komponens v-model'" />

    <!-- A vmodel valójában ezt csinálja: -->
    <InputComponent
      :text="text"
      @update:text="text = $event"
      :label="'Komponens másik módszerrel'"
    />
  </div>
</template>

<script>
import InputComponent from "@/components/InputComponents/InputComponent.vue";
export default {
  name: "InputKomponensView",
  components: {
    InputComponent,
  },
  data() {
    return {
      text: "",
    };
  },
};
</script>

<style>
</style>