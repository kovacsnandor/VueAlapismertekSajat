<template>
  <h2>Sok Gyerek &lt;-&gt; Gyerek kommunikáció</h2>
  <div class="row">

      <div class="col-6"
      v-for="(gyerek,i) in gyerekek" :key="i"
      >
          
          <SokGyerek
          :gyerek="gyerek"
          :gyerekek="gyerekek"
          />
    </div>
  </div>
</template>

<script>
import SokGyerek from '@/components/SokGyerek.vue';

export default {
    components: {
        SokGyerek
    },
    data(){
        return {
            gyerekek: [
                {
                    id: 1,
                    nev: 'Pisti',
                    szin: 'lightblue'
                },
                {
                    id: 2,
                    nev: 'Zoli',
                    szin: 'lightblue'
                },
                {
                    id: 3,
                    nev: 'Aranka',
                    szin: 'lightblue'
                },
                {
                    id: 4,
                    nev: 'Endre',
                    szin: 'lightblue'
                },
                {
                    id: 5,
                    nev: 'Gizi',
                    szin: 'lightblue'
                },
            ]
        }
    }

}
</script>

<style>

</style>