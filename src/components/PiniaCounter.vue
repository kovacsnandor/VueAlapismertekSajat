<template>
  <div class="my-box">
    <p>
      Számlál felfelé:
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonIncrement()"
      >
        {{ counter }}
      </button>
    </p>
    <p>
      Dupláz:
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonDouble()"
      >
        {{ counter }}
      </button>
    </p>

    <p>
      Számlál ötösével:
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonValahogy()"
      >
        {{ counter }}
      </button>
    </p>
    <p>
      Reset:
      <button
        type="button"
        class="btn btn-danger"
        @click="reset()"
      >
        {{ counter }}
      </button>
    </p>
    <p>{{ paddedCount }}</p>
  </div>
</template>

<script>
import { mapState, mapActions } from "pinia";
import { useCounterStore } from "@/stores/counter";

export default {
  data() {
    return {
      counterStore: useCounterStore(),
      number: 5,
    };
  },
  methods: {
    ...mapActions(useCounterStore, [
      "addCount",
      "doubleCount",
      "increment",
      "reset",
    ]),
    onClickButtonIncrement() {
      this.increment();
    },
    onClickButtonDouble() {
      this.doubleCount();
    },
    onClickButtonValahogy() {
      this.addCount(this.number);
    },
  },
  computed: {
    ...mapState(useCounterStore, ["counter", "desiredLength", "paddedCount"]),
  },
};
</script>

<style scoped>
.my-box {
  width: 250px;
  /* height: 300px; */
  border: 1px dashed black;
  background-color: lightgreen;
  border-radius: 10px;
  margin-left: 10px;
  padding: 10px;
}
</style>