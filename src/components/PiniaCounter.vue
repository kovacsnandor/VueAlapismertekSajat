<template>
  <div class="my-box">
    <p>
      Számlál felfelé:
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonIncrement()"
      >
        {{ counterStore.counter }}
      </button>
    </p>
    <p>
      Számlál kettesével:
      <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonDouble()"
      >
        {{ counterStore.counter }}
      </button>
    </p>

    <p>
        Számlál valahogy: 
              <button
        type="button"
        class="btn btn-primary"
        @click="onClickButtonValahogy()"
      >
        {{ counterStore.counter }}
      </button>

    </p>
  </div>
</template>

<script>
import { useCounterStore } from "@/stores/counter";

export default {
  data() {
    return {
      counterStore: useCounterStore(),
      number: 5,
    };
  },
  methods: {
    onClickButtonIncrement() {
      this.counterStore.increment();
    },
    onClickButtonDouble() {
      this.counterStore.doubleCount();
    },
    onClickButtonValahogy() {
      this.counterStore.addCount(this.number);
    },
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