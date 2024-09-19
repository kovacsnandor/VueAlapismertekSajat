<template>
  <div class="my-doboz">
    <!-- Gyerek neve -->
    <h3>{{ gyerek.nev }}</h3>
    <div class="mb-3">
      <!-- Üzenet -->
      <label for="uzenet" class="form-label">Küldendő üzenet</label>
      <input type="text" class="form-control" id="uzenet" v-model="uzenet" />
    </div>
    <!-- gomb -->
    <button type="button" class="btn btn-primary" @click="onClickKuldButton()">
      Küldd
    </button>
    <!-- Kinek küldjük lista  -->
    <!-- MIndenki látszódjon rajta, csak én nem -->
    <select
      class="form-select"
      aria-label="Default select example"
      v-model="kivalasztottGyerekekId"
      multiple
    >
      <option
        v-for="(gyerekListaba, i) in tobbiek"
        :key="i"
        :value="gyerekListaba.id"
      >
        {{ gyerekListaba.nev }}
      </option>
    </select>
    <!-- válasz -->
    <p>{{kiKuldte}}: {{ valasz }}</p>
  </div>
</template>

<script>
export default {
  props: ["gyerek", "gyerekek"],
  data() {
    return {
      uzenet: null,
      valasz: null,
      kivalasztottGyerekId: null, //Ennek küldjük az üzenetet
      kivalasztottGyerekekId: [], //Ennek küldjük az üzenetet
      kiKuldte: null
    };
  },
  mounted() {
    //Az oldal betöltődése után
    //feliratkozunk a gyerek2_to_gyerek1 eseményre
    //az eseményt kezelő függvénnyel
    this.emitter.on("gyerek_to_gyerek", (data) => {
      if (data.kinekKuldik == this.gyerek.id) {
        this.valasz = data.uzenet;
        this.kiKuldte = this.gyerekek.find(g => g.id==data.kiKuldi).nev
      }
     });
  },
  methods: {
    onClickKuldButton() {
      this.sendMessage();
    },
    sendMessage() {
      //Kibocsájtunk egy gyerek1_to_gyerek2 nevű üzentet
      //és az kapja el, aki erre feliratkozott
      this.emitter.emit("gyerek_to_gyerek", {
        kiKuldi: this.gyerek.id,
        kinekKuldik: this.kivalasztottGyerekId,
        uzenet: this.uzenet,
      });
    },
  },
  computed: {
    tobbiek(){
      return this.gyerekek.filter((g) =>{
       return g.id != this.gyerek.id
      }).sort((g1,g2)=>{
        return g1.nev.localeCompare(g2.nev)
      })
    }
  }
};
</script>

<style scoped>
.my-doboz {
  width: 300px;
  height: 255px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background: lightgreen;
  border: 1px dashed black;
}
</style>