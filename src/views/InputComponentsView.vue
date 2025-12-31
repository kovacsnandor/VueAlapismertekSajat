<template>
  <div>
    <h1>Input komponens adatkötés</h1>
    <p>{{ text }}</p>
    <!-- A v-model-nek meg kell mondani, hogy melyik props-ra gondolsz
      mert lehet akár több props is: v-model:text=...
    -->
    <InputComponent
      v-model:text="text"
      :label="'Valami text'"
    />

  </div>
</template>

<script>
import InputComponent from '@/components/InputComponents/InputComponent.vue';    
export default {
    name:'InputKomponensView',
    components:{
        InputComponent
    },
    data(){
        return {
            text: '',
        }
    }
}
</script>

<style>

</style>