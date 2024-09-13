<template>
  <h2>Watch (figyel, watcher: figyelő)</h2>

  <h3>Watch</h3>
  <p>Egy változó értékének változására reagálunk a segítségével</p>

  <div class="mb-3">
    <label for="eletkor" class="form-label">Hány éves</label>
    <input type="number" class="form-control" id="eletkor" v-model="eletkor" />
  </div>
  <p>{{ uzenetEletkor }}</p>
  <p>{{ eletkorSzamolo() }}</p>
  <p>{{ eletkorSzamolo_C }}</p>


  <h3>Watcher new és old érékekkel</h3>
  <p>A watcher képes meggkapni a változó múlbeli és jelenlegi étékét</p>
  <div class="mb-3">
    <label for="szo" class="form-label">Írj be egy szót, ami a betűt tartalmaz</label>
    <input type="text" class="form-control" id="szo" v-model="szo" />
  </div>
  <p>{{ uzenetSzo }}</p>

</template>

<script>
export default {
  data() {
    return {
      eletkor: null,
      uzenetEletkor: null,
      szo: null,
      uzenetSzo: null
    };
  },
  methods:{
    eletkorSzamolo(){
        if (this.eletkor < 0) {
        return "Még nem született meg";
      } else if (this.eletkor < 1) {
        return "csecsemő";
      } else if (this.eletkor < 18) {
        return "gyerek";
      } else if (this.eletkor < 120) {
        return "felnőtt";
      } else {
        return "túl öreg";
      }
    }
  },
  computed: {
    eletkorSzamolo_C(){
        if (this.eletkor < 0) {
        return "Még nem született meg";
      } else if (this.eletkor < 1) {
        return "csecsemő";
      } else if (this.eletkor < 18) {
        return "gyerek";
      } else if (this.eletkor < 120) {
        return "felnőtt";
      } else {
        return "túl öreg";
      }
    }
  },
  watch: {
    //A változó nevével azonos függvénnyel figyelhetjük a változó változását
    //A paraméterben megkapjuk az új értéket
    //Ha az eletkor váltoó értéke változik, meghívódik ez a fügvény
    eletkor(value) {
      if (value < 0) {
        this.uzenetEletkor = "Még nem született meg";
      } else if (value < 1) {
        this.uzenetEletkor = "csecsemő";
      } else if (value < 18) {
        this.uzenetEletkor = "gyerek";
      } else if (value < 120) {
        this.uzenetEletkor = "felnőtt";
      } else {
        this.uzenetEletkor = "túl öreg";
      }
    },
    szo(newValue, oldValue){
        if (!newValue.includes("a")) {
            this.uzenetSzo = "nem jó"
        } else if (oldValue && !oldValue.includes('a') && newValue.includes('a')) {
            this.uzenetSzo = "már jó"
        }else{
            this.uzenetSzo = "jó"
        }
    }
  },
};
</script>

<style>
</style>