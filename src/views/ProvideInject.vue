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
            //Ezt a változót odaadom, bárkinek akinek kell (aki injektálja)
            // count: this.count,
            //A count változót egy count nevű computed-ként hirdetem
            //aminek a függősége az eredeti count változó
            //tehát ha az változik, az injektált count is változik
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