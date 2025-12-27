<template>
  <div>
    <h2>Pinia counter</h2>
    <p>
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonIncrement()"
      >
        Increment
      </button>
      <button type="button" class="btn btn-danger ms-2" @click="reset()">
        Reset
      </button>
      {{ paddedCount }}
    </p>
    <div class="row">
      <div class="col p-0">
        <PiniaCounter />
      </div>
      <div class="col p-0">
        <PiniaCounter />
      </div>
      <div class="col p-0">
        <PiniaCounter />
      </div>
    </div>
  </div>
</template>

<script>
import PiniaCounter from "@/components/PiniaCounter.vue";
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";
export default {
  components: {
    PiniaCounter,
  },
  data() {
    return {
      counterStore: useCounterStore(),
    };
  },
  methods: {
    ...mapActions(useCounterStore, ["increment", "reset"]),
    onClickButtonIncrement() {
      this.increment();
    },
  },
  computed: {
    ...mapState(useCounterStore, ["paddedCount"]),
  },
};
</script>

<style>
</style>