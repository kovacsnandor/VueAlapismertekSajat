<template>
  <button type="button" class="btn btn-outline-success"
    @click="onClickButton()"
  >
    {{state.counter}} | 
    {{state.paddedCount}}
  </button>
</template>

<script>
import { useCounterStore } from "@/stores/counter";

export default {
    data(){
    return {
      state: useCounterStore()
    }
  },
  methods: {
    onClickButton(){
      this.state.increment();
    }
  }
}
</script>

<style>

</style>