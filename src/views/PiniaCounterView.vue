<template>
  <div>
    <h2>Pinia counter</h2>
    <p>
      {{ counterStore.counter }}
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonIncrement()"
      >
        Increment
      </button>
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
import { useCounterStore } from "@/stores/counter";
export default {
  components: {
    PiniaCounter,
  },
  data() {
    return {
      counterStore: useCounterStore(),
    }
  },
  methods: {
    onClickButtonIncrement() {
      this.counterStore.increment();
    },
  },
};
</script>

<style>
</style>