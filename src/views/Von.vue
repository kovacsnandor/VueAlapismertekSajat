<template>
  <div>
    <h2>v-on Eseménykezelés és módosítók</h2>
    <!-- v-on -->
    <button
      type="button"
      class="btn btn-primary btn-lg"
      v-on:click="oClickButton()"
    >
      {{ count }}
    </button>
    <!-- @ -->
    <button
      type="button"
      class="btn btn-success btn-lg ms-2"
      @click="oClickButton()"
    >
      {{ count }}
    </button>

    <h3>Esemény módosítók: .once, .prevent, .stop</h3>
    <h4>.once: Az esemény csak egyszer következzen be</h4>
    <button
      type="button"
      class="btn btn-success btn-lg ms-2"
      @click.once="oClickButton()"
    >
      {{ count }}
    </button>

    <h4>.prevent Az alapértelmezett működés tiltása</h4>
    <a href="https://www.google.com/">link</a> |
    <a href="https://www.google.com/" @click.prevent="linkView()">
      A google linkje: {{ link }}
    </a>
    <h4>Buborékolás</h4>
    <p>
      Buborékolás (bubbling): A gyerek elem eseménye esemény a szülő elemen is
      kiváltódik. Terjed felfelé mint a buborék
    </p>
    <p>A .stop-al letilthatjuk a buborékolást</p>

    <!-- szülő -->
    <button
      type="button"
      class="btn btn-success btn-lg ms-2"
      @click="oClickButton()"
    >
      {{ count }}
      <!-- gyerek -->
      <button
        type="button"
        class="btn btn-danger btn-lg ms-2"
        @click.stop="oClickButton()"
      >
        {{ count }}
      </button>
    </button>

    <!-- Események -->
    <h3>VueJs események</h3>
    <p>
      Egér: click, dblclick, mousemove, mousewheel, mouseover, mouseout,
      mousdown.left -right -middle
    </p>
    <p>Billentyű: keypress, keydown, keyup</p>
    <p>Egyéb: submit, drag, scroll, error, abort, load, $emit</p>
  </div>

  <h3>Billentyű esemélykezelés</h3>
  <h3>Szövegdoboz</h3>
    <div class="mb-3">
      <label for="szoveg" class="form-label">Szöveg</label>
      <input type="text" class="form-control" id="szoveg" v-model="szoveg" 
        @keydown="billentyuLeutes($event)"
        @keyup.s="sBetuLeutes()"
        @keyup.enter="enterLeutes()"
      />
    </div>
    <p>{{szoveg}}</p>
    <p>{{billentyu}}</p>
    <p>{{uzenet}}</p>


</template>

<script>
export default {
  data() {
    return {
      count: 0,
      link: null,
      szoveg: null,
      billentyu: null,
      uzenet: null
    };
  },
  methods: {
    oClickButton() {
      this.count++;
    },
    linkView() {
      this.link = "https://www.google.com/";
    },
    sBetuLeutes(){
        this.uzenet = "Leütöttél egy s betűt"
    },
    enterLeutes(){
        this.uzenet = "Leütöttél egy entert"
    },
    billentyuLeutes(event){
        this.uzenet = "Leütöttésl egy billentyűt"
        this.billentyu = event.key;
    }
  },
};
</script>

<style>
</style>