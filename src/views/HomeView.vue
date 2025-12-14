<template>
  <h2>Home</h2>
  <Counter/>
  <p>Search: {{ storeSearchWord.searchWord }}</p>
</template>

<script>
import Counter from '@/components/Counter/Counter.vue';
import { useSearchWordStore } from "@/stores/useSearchWordStore";
export default {
  components: {
    Counter
  },
  data(){
    return {
      storeSearchWord: useSearchWordStore()
    }
  }

}
</script>

<style>

</style>
