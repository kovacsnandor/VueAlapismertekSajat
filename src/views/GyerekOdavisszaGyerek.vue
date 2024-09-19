<template>
  <h2>Gyerek &lt;-&gt; Gyerek kommunikáció</h2>

  <div class="row">
    <div class="col-6">
        <!-- Gyerek1 -->
        <Gyerek1 />
    </div>
    <div class="col-6">
        <!-- Gyerek2 -->
        <Gyerek2 />
    </div>
  </div>
  <div class="row">
    <div class="col-6"
    v-for="(gyerek,i) in gyerekek" :key="i"
    >
    <!-- Gyerek -->
        <Gyerek 
        :gyerek="gyerek"
        />
    </div>
  </div>

</template>

<script>
import Gyerek1 from '@/components/Gyerek1.vue';
import Gyerek2 from '@/components/Gyerek2.vue';
import Gyerek from '@/components/Gyerek.vue';
export default {
    components: {
        Gyerek1,
        Gyerek2,
        Gyerek,
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
                    nev: 'Robi',
                    szin: 'lightgreen'
                }
            ]
        }
    }
}
</script>

<style>

</style>