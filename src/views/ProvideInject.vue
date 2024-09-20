<template>
  <h2>Provide Inject</h2>
  <button type="button" class="btn btn-primary"
  @click="onClickButton()"
  >{{count}}</button>

  <NekemNemKell/>
</template>

<script>
import NekemNemKell from '@/components/NekemNemKell.vue';
import {computed} from 'vue';
export default {
    components: {
        NekemNemKell
    },
    provide(){
        return {
            //Nem dinamikus: ha változik, az injektnél nem változik
            // count: this.count
            //Dinamikus
            count: computed(() => this.count),
        }
    },
    data(){
        return{
            count: 1,
        }
    },
    methods: {
        onClickButton(){
            this.count++
        }
    }

}
</script>

<style>

</style>