<template>
  <h2>Szülő &lt;-&gt; Gyerek kommunikáció</h2>

  <div class="row">
    <div class="col-5 my-border">
      <h3>Üzenőfal és kérdező (szülő elem)</h3>
      <!-- Kérdés -->
      <div class="mb-3">
        <label for="kerdes" class="form-label"> Kérdés: </label>
        <input type="email" class="form-control" id="kerdes" v-model="kerdes" />
      </div>
      <!-- Üzenőfal -->
      <ul class="list-group">
        <li class="list-group-item"
          v-for="(valasz, i) in valaszok" :key="i"
        >
          <h4>{{valasz.nev}}</h4>
          {{valasz.valasz}}
        </li>
      </ul>
    </div>

    <div class="col-7 my-border">
      <!-- Kérdezettek -->
      <h3>Kérdezettek</h3>
      <div class="d-flex flex-wrap">
        <!-- Dobozok -->
        <Kerdezett
          v-for="(kerdezett, i) in kerdezettek"
          :key="i"
          :nev="kerdezett"
          :kerdes="kerdes"
          @uzenoFal="uzenofalKezelo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Kerdezett from "../components/DobozUzenettel.vue";
export default {
  components: {
    Kerdezett,
  },
  data() {
    return {
      kerdes: null,
      kerdezettek: ["Feri", "Enikő", "Mónika", "Géza"],
      valaszok: [],
    };
  },
  watch: {
    kerdes(){
      this.valaszok = [];
    }
  },
  methods:{
    uzenofalKezelo(data){
      this.valaszok.push(data)
    }
  }

};
</script>

<style>
</style>