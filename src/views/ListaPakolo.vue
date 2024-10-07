<template>
  <h3>Lista pakoló</h3>
  <!-- <p>{{emberek1AZ}}</p> -->
  <!-- <p>{{emberek2AZ}}</p> -->
  <div class="d-flex justify-content-center">
    <!-- lista1 -->
    <select
      class="form-select my-select-width"
      aria-label="Default select example"
      multiple
      :size="size"
      v-model="emberek1KivalasztottakId"
    >
      <option v-for="(ember, i) in emberek1AZ" :key="i" :value="ember.id">
        {{ ember.nev }}
      </option>
    </select>

    <!-- listaikonok -->
    <div class="d-flex align-items-center">
      <div class="d-flex flex-column">
        <!-- jobbra -->
        <i
          class="bi bi-arrow-right-square my-arrow-size p-2"
          @click="onClickNyil('jobbra')"
        ></i>
        <!-- jobbról -->
        <i
          class="bi bi-arrow-left-square my-arrow-size p-2"
          @click="onClickNyil('balra')"
        ></i>
      </div>
    </div>

    <!-- lista2 -->
    <select
      class="form-select my-select-width"
      aria-label="Default select example"
      multiple
      :size="size"
      v-model="emberek2KivalasztottakId"
    >
      <option v-for="(ember, i) in emberek2AZ" :key="i" :value="ember.id">
        {{ ember.nev }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      emberek1: [
        {
          id: 1,
          nev: "pisti",
        },
        {
          id: 2,
          nev: "feri",
        },
        {
          id: 3,
          nev: "anna",
        },
        {
          id: 4,
          nev: "géza",
        },
        {
          id: 5,
          nev: "márton",
        },
        {
          id: 6,
          nev: "zsuzsi",
        },
        {
          id: 7,
          nev: "emőke",
        },
        {
          id: 8,
          nev: "enikó",
        },
        {
          id: 9,
          nev: "áron",
        },
        {
          id: 10,
          nev: "jános",
        },
        {
          id: 11,
          nev: "dóri",
        },
        {
          id: 12,
          nev: "ernő",
        },
      ],
      emberek2: [
        {
          id: 13,
          nev: "zoli",
        },
        {
          id: 14,
          nev: "péter",
        },
        {
          id: 15,
          nev: "gizi",
        },
        {
          id: 16,
          nev: "lóránt",
        },
        {
          id: 17,
          nev: "nusi",
        },
      ],
      emberek1KivalasztottakId: [],
      emberek2KivalasztottakId: [],
      irany: null,
      size: 10,
    };
  },
  methods: {
    onClickNyil(irany) {
      this.irany = irany;
      this.atpakol();
    },
    atpakol() {
      if (this.irany === "jobbra") {
        // jobbra
        if (this.emberek1KivalasztottakId.length ==0) {
            return;
        }
        const emberek1Kivalasztottak = this.emberek1KivalasztottakId.map(
          (e) => {
            return this.emberKeresByid(this.emberek1, e);
          }
        );
        this.emberek2.push(...emberek1Kivalasztottak);
        this.torol(this.emberek1, this.emberek1KivalasztottakId);
        this.emberek1KivalasztottakId = [];
      } else {
        // balra
        if (this.emberek2KivalasztottakId.length ==0) {
            return;
        }
        const emberek2Kivalasztottak = this.emberek2KivalasztottakId.map(
          (e) => {
            return this.emberKeresByid(this.emberek2, e);
          }
        );
        this.emberek1.push(...emberek2Kivalasztottak);
        this.torol(this.emberek2, this.emberek2KivalasztottakId);
        this.emberek2KivalasztottakId = []
      }
    },
    torol(mibol, miketId) {
      for (const id of miketId) {
        const index = mibol.findIndex((m) => m.id == id);
        mibol.splice(index, 1);
      }
    },
    emberKeresByid(emberek, id) {
      const ember = emberek.filter((e) => e.id == id);
      return ember[0];
    },
  },
  computed: {
    emberek1AZ() {
      return this.emberek1.sort((e1, e2) => e1.nev.localeCompare(e2.nev));
    },
    emberek2AZ() {
      return this.emberek2.sort((e1, e2) => e1.nev.localeCompare(e2.nev));
    },
  },
};
</script>

<style scoped>
.my-arrow-size {
  font-size: 2rem;
}
.my-arrow-size:hover {
  color: red;
  cursor: pointer;
}
.my-select-width {
  width: 150px;
}

</style>