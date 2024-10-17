<template>
  <div>
    <h2>Life cycle</h2>
    <p ref="valamix"></p>

    <button type="button" class="btn btn-primary"
      @click="onClickButton()"
    >
      {{ counter }}
    </button>
    <button type="button" class="btn btn-danger"
      @click="ErrorGen()"
    >
     Hiba generálás
    </button>
  </div>
</template>

<script>
export default{

  data(){
    return {
      counter: 0
    }
  },
  beforeCreate() {
    console.log("beforeCreate");
    //A beforeCreate életciklus-hook az összetevő inicializálása előtt történik, tehát ez azelőtt történik, hogy a Vue beállította volna az összetevő adatait, számított tulajdonságait, metódusait és eseményfigyelőit.
    //A beforeCreate hook használható például egy globális eseményfigyelő beállítására, de ne próbáljunk hozzáférni a beforeCreate életciklus-hook komponenséhez tartozó elemekhez, például adatokhoz, figyelőkhöz és metódusokhoz, mert ezek még nincsenek létrehozva ezt a szakaszt.
    //Ezenkívül nincs értelme a DOM-elemekhez a beforeCreate életciklus-hook-ból hozzáférni, mert csak az összetevő beszerelése után jönnek létre.
  },
  created() {
    console.log("created");
    //A létrehozott életciklus-hook az összetevő inicializálása után történik, így a Vue már beállította az összetevő adatait, számított tulajdonságait, metódusait és eseményfigyelőit.
    //Kerüljük a DOM-elemekhez való hozzáférést a létrehozott életciklus-hook-ból, mert a DOM-elemek nem érhetők el, amíg az összetevőt fel nem szereljük.
    //A létrehozott életciklus-hook használható adatok lekérésére HTTP-kérésekkel, vagy kezdeti adatértékek beállításával. Az alábbi példához hasonlóan a 'text' adattulajdonság kezdeti értéket kap:
  },
  beforeMount() {
    console.log("beforeMount");
    //A beforeMount életciklus-hook közvetlenül az összetevő felszerelése előtt történik, tehát közvetlenül az összetevő DOM-hoz való hozzáadása előtt.
    // Kerüljük a DOM-elemekhez való hozzáférést a beforeMount életciklus-hook-ból, mert a DOM-elemek nem érhetők el, amíg az összetevőt fel nem szereljük.
  },
  mounted() {
    console.log("mounted");
    //Közvetlenül azután, hogy egy komponenst hozzáadtunk a DOM-fához, a mounted() függvény meghívódik, és a kódunkat hozzáadhatjuk ehhez a szakaszhoz.

    //Ez az első lehetőség, hogy a komponenshez tartozó DOM elemekkel kapcsolatos dolgokat tegyünk, például a ref attribútumot és a $refs objektumot használjuk, ahogy az alábbi második példában tesszük.
  },
  beforeUpdate() {
    console.log("beforeUpdate");
    //A beforeUpdate életciklus hook mindig meghívásra kerül, amikor az összetevőnk adataiban változás történik, de még mielőtt a frissítés megjelenik a képernyőn. A beforeUpdate életciklus-hook közvetlenül a frissített életciklus-hook előtt történik.

    //A beforeUpdate hook különlegessége, hogy anélkül is módosíthatunk az alkalmazáson, hogy az új frissítést indítana el, így elkerüljük az egyébként végtelen ciklust. Ez az oka annak, hogy ne változtassunk az alkalmazáson a frissített életciklus-hookban, mert ezzel a hook-kal végtelen hurok jön létre.
  },
  updated() {
    console.log("updated");
    //A frissített életciklus-hook azután kerül meghívásra, hogy a komponensünk frissítette a DOM-fáját.
  },
  beforeUnmount() {
    console.log("beforeUnmount");
    //A beforeUnmount életciklus-hook közvetlenül azelőtt kerül meghívásra, hogy egy összetevőt eltávolítanak a DOM-ból.
    //Továbbra is hozzáférhetünk a DOM összetevőelemeihez a beforeUnmount hook-ban.
  },
  unmounted() {
    console.log("unmounted");
  },
  // errorCaptured(){
  //   alert("Error");
  //   console.log("errorCaptured");
  // },
  renderTracked() {
    console.log("renderTracked");

    // A renderTracked hook akkor fut le, ha egy renderelési funkció be van állítva egy reaktív komponens nyomon követésére vagy figyelésére. A renderTracked hook általában akkor fut le, amikor egy reaktív komponens inicializálva van.

    // A renderTriggered hook akkor fut le, amikor egy ilyen nyomon követett reaktív komponens megváltozik, és ezért új renderelést indít el, így a képernyő frissül a legújabb változtatásokkal.

    // A reaktív komponens olyan komponens, amely változhat.

    // A render függvény a Vue által összeállított függvény, amely nyomon követi a reaktív összetevőket. Amikor egy reaktív összetevő megváltozik, a renderelési funkció aktiválódik, és újra megjeleníti az alkalmazást a képernyőn.
  },
  renderTriggered() {
    console.log("renderTriggered");
    //A renderTracked és a renderTriggered hookok hibakeresésre szolgálnak, és csak fejlesztési módban érhetők el.
  },
  activated() {
    //Amikor egy komponenst hozzáadnak a DOM-hoz.
    console.log("activated");
  },
  deactivated() {
    //Amikor egy komponenst eltávolítanak DOM-ból.
    console.log("deactivated");
  },
  serverPrefetch() {
    //A „serverPrefetch” hook csak a szerveroldali rendering (SSR) során kerül meghívásra.
    console.log("serverPrefetch");
  },

  methods: {
    onClickButton(){
      this.counter++;
    },
    ErrorGen(){
      this.$refs.valami.innerHTML = "VALAMI";
    }
    
  }


} 

</script>


<style>

</style>
