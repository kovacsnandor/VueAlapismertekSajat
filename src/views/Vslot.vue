<template>
  <h2>v-slot, Halkártyák</h2>
  <!-- Kártyák -->
  <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-4">
    <HalKartya
      v-for="hal in halak"
      :key="hal.id"
      :id="hal.id"
      @reszletekModalKezeles="reszletekModalKezelo"
    >
      <!-- itt leszenek a v-slot-ok -->
      <template v-slot:image>
        <img :src="hal.image" :alt="hal.title" />
      </template>
      <template v-slot:title>
        <h5>{{ hal.title }}</h5>
      </template>
    </HalKartya>
  </div>

  <!-- Hal info modal -->
  <HalInfo
    :title="kivalasztottHal.title"
  >
    <img :src="kivalasztottHal.image" :alt="kivalasztottHal.title"
      class="float-start col-12 col-sm-6 col-lg-4 me-1 p-2 my-picture"
    >
    <div v-html="textFormat"></div>
  </HalInfo>
</template>

<script>
class Hal {
  constructor(id = 0, title = null, image = null, text = null) {
    this.id = id;
    this.title = title;
    this.image = image;
    this.text = text;
  }
}
import HalKartya from "@/components/HalKartya.vue";
import HalInfo from "@/components/HalInfo.vue";
export default {
  components: {
    HalKartya,
    HalInfo,
  },
  data() {
    return {
      kivalasztottHal: new Hal(),
      halak: [
        {
          id: 1,
          title: "Bodorka",
          image: "bodorka.jpg",
          text: [
            "Hazánk minden vizében megtalálható. Rendkívül jól alkalmazkodó kistermetű halfaj, kifejlett példányai legtöbbször 10-18 cm-esek. Oldalról lapított testű, nem túl magas hátú hal, melynek szája csúcsba nyíló, középállású. A has- és hátúszók első sugarai a hal hossztengelyére merőlegesen egy vonalba esnek, míg a nagyon hasonló vörösszárnyú keszeg a hátúszójának első sugara nem esik egybe a hasúszó alapvonalával.",
            "A hasvonal, a has- és a farokalatti úszók között hengeres, él nincs rajta. Szemgyűrűje halvány narancssárgától az élénk narancsvörösig változik, a háta zöldesszürke, a hasa fehéres, a páros úszók enyhén vörhenyesek, a páratlanok szürkésvörösek. Oldalvonalán 40-46 pikkely számlálható. Rovarlárvákat, apró csigákat, planktonrákokat, hínárhajtásokat fogyaszt. Április elején, 10-12°C-os vízhőmérsékleten csoportosan ívik",
          ],
        },
        {
          id: 2,
          title: "Vörösszárnyú keszeg",
          image: "vorosszarnyu_keszeg.jpg",
          text: [
            "Gyakori halfajunk, elsősorban a csendes, nyugodt, hínárral benőtt, holtmedrek, kisebb-nagyobb tavak, keskeny csatornák a kedvelt élőhelyei. Növényi tápláléktól az apróbb rovarokon keresztül a lárvákig mindent elfogyaszt. Oldalról lapított, viszonylag magas testű hal. Hát- és hasvonala erősen ívelt. Háta feketés-zöld, oldala a kifejlett példányoknál aranysárga. Szemgyűrűje aranysárga, esetleg narancsvörös. Úszói élénkpirosak. Pikkelyei erősek, számuk az oldalvonalon 38-42. A bodorkával ellentétben hátúszója a hasúszó alapjánál hátrébb kezdődik, emellett a hasúszók és a farokalatti úszó közötti hasvonal éles. Szája felső állású. Áprilistól júniusig, 15-18°C-os vízben szaporodik, az ikrákat vízinövényekre rakja.",
          ],
        },
        {
          id: 3,
          title: "Domolykó",
          image: "domolyko.jpg",
          text: [
            "A domolykó igazi folyóvízi hal, melyről a jellegzetes hengeres teste is árulkodik. Testhossza elérheti az 50 cm-t is, tömege a 2 kg-ot is meghaladhatja.",
            "Feje viszonylag nagy, a homlokrész széles, az orr tompán lekerekített. Csúcsba nyíló szája nagy, a szájszöglet eléri a szem elejének vonalát.",
            "A farokalatti úszó szegélye domború vagy egyenes, de sohasem homorú, ami a nyúldomolykóhoz hasonlítva a legfeltűnőbb megkülönböztető bélyeg.",
            "Háta feketés vagy barnászöld. A hasúszók és a farokalatti úszó az idősebb példányokon vörösek, a többi úszó sötétszürke. A fiatal példányoknál minden úszó szürkés színű. Táplálékát algacsoportok, növényi részek, apró rákok, férgek, csigák, vízre hulló rovarok és szerves anyagok, alkalmanként halivadék és ikra teszi ki. Május-júniusban ívik, ikráit a folyóvizek kavicsos mederszakaszaira rakja le.",
          ],
        },
        {
          id: 4,
          title: "Jászkeszeg",
          image: "jaszkeszeg.jpg",
          text: [
            "A folyók jellemző, mérsékelten magas hátú, oldalról lapított testű keszegféléje. A kifejlett példányok testhossza átlagosan 30-50 centiméter. Az idősebb egyedek mell-, a has- és a farokalatti úszói vörösek, hát- és farokúszói pedig barnásak. Feje és szeme közepes nagyságú, szemgyűrűje nem színes. Szája csúcsba nyíló, szájszöglete nem éri el a szem elejének vonalát. Pikkelyei aprók, számuk az oldalvonal mentén 55-60.",
            "Rajhal, nyáron gyakran tartózkodik a felszín közelében is, télen a mederfenékre húzódik. A fiatal példányok állati és növényi planktonnal táplálkoznak, míg a felnőttek férgeket, apró rákokat, rovarlárvákat és kisebb puhatestűeket esznek, a nagy példányok alkalmanként halivadékot is fogyasztanak. Április és június között ívik a sekély szélvizekben. Ikráját kavicsra vagy vízinövényekre rakja.",
          ],
        },
        {
          id: 5,
          title: "Balin",
          image: "balin.jpg",
          text: [
            "A balin valamennyi nagyobb folyó-, illetve állóvizünkben megtalálható, a pontyfélék családjába tartozik, foga nincs, mégis ragadozóhal. Testhossza a 70-80 cm-t is elérheti.",
            "Félig felső állású szája nagy, szájszöglete a szem alá nyúlik. Alsó állkapcsának csúcsa kissé felfelé hajló, enyhén kampós. Teste megnyúlt, mérsékelten magas, oldalról lapított. Színe, hátoldalon grafitszürke, oldalán ezüstösen csillogó, hasa fehér. Pikkelyei aprók, számuk az oldalvonalon 65-75. Úszói erőteljesek, nagyok, az alsó úszók a fiataloknál rózsaszínesek, az idősebbeknél vörhenyesek. Szeme nagy, szemgyűrűje citromsárga. A hátúszója nagy első sugara hosszú és kemény.",
            "Eleinte állati planktonnal, majd főleg vízre pottyanó rovarokkal táplálkozik, később halivadékok szerepelnek étlapján, csak kifejletten tér át a ragadozó életmódra. Gyakran kerül szem elé, mert nem lesből támad, hanem áldozatát kitartóan űzi, melynek szemtanúi is lehetünk, ahogyan a sekély vízben hajtja a fő táplálékát adó küszrajokat. Márciusban kezdi az ívást, az ikrákat főleg kavicsos aljzatra rakja.",
          ],
        },
        {
          id: 6,
          title: "Küsz",
          image: "kusz.jpg",
          text: [
            "Megnyúlt, oldalról erősen lapított testű hal. Szája kicsi és felső állású, hasítéka ferdén fölfelé irányul. Orra hegyesedő, szeme nagy. Testhossza általában 10-15, maximum 20 cm, pikkelyei ezüstösek, könnyen leválók. Legjobban a balinivadék hasonlít hozzá, de annak a szája a szeme alá ér.",
            "Félig felső állású szája nagy, szájszöglete a szem alá nyúlik. Alsó állkapcsának csúcsa kissé felfelé hajló, enyhén kampós. Teste megnyúlt, mérsékelten magas, oldalról lapított. Színe, hátoldalon grafitszürke, oldalán ezüstösen csillogó, hasa fehér. Pikkelyei aprók, számuk az oldalvonalon 65-75. Úszói erőteljesek, nagyok, az alsó úszók a fiataloknál rózsaszínesek, az idősebbeknél vörhenyesek. Szeme nagy, szemgyűrűje citromsárga. A hátúszója nagy első sugara hosszú és kemény.",
            "Csapatosan járva a felszín közelében keresi táplálékát, amelyet pl. vízre hulló rovarok, növényi részek és szerves törmelék alkot. Szaporodása elhúzódhat, áprilistól akár júliusig is eltarthat. Ikráit a homokos és sóderes mederfenékre, illetve vízinövényekre rakja.",
          ],
        },
      ],
    };
  },
  methods: {
    reszletekModalKezelo(id) {
      this.kivalasztottHal=this.halak.filter(h => h.id==id.id)[0];

      console.log(id.id);
    },
  },
  computed:{
    textFormat(){
      if (this.kivalasztottHal.text ==null) {
        return `<p></p>`;
      }
      return this.kivalasztottHal.text
      .map(t=> `<p>${t}</p>`)
      .join('');
    }
  }
};
</script>

<style>
</style>