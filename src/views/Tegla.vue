<template>
  <h3>Tégla: {{ countOfteglak }} db</h3>

  <!-- Button + tégla -->
  <button
    type="button"
    class="btn btn-success"
    data-bs-toggle="modal"
    data-bs-target="#modalYesNo"
    @click="teglaKivesz = false"
  >
    + tégla
  </button>

  <!-- Button - tégla -->
  <button
    type="button"
    class="btn btn-danger ms-2"
    data-bs-toggle="modal"
    data-bs-target="#modalYesNo"
    @click="teglaKivesz = true"
  >
    - tégla
  </button>

  <!-- A téglák -->
  <div class="mt-3">
    <img
      class="my-tegla"
      :src="`imgTegla/${tegla}`"
      alt=""
      v-for="(tegla, i) in teglak"
      :key="i"
    />
  </div>

  <!-- Modal yes no -->
  <ModalYesNo
    :title="'Kérdés'"
    :yes="'Igen'"
    :no="'Nem'"
    @valamilyenAkcio="teglaHozzarakElvesz"
  >
    <div v-if="teglaKivesz">
      <h4>Eltüntessek egy téglát? <i class="bi bi-trash3"></i></h4>
    </div>
    <div v-if="!teglaKivesz">
      <h4>Hozzáadjak egy téglát? <i class="bi bi-magic"></i></h4>
    </div>
  </ModalYesNo>
</template>

<script>
export default {
  data() {
    return {
      teglak: ["tegla.jpg", "tegla.jpg", "tegla.jpg"],
      teglaKivesz: null
    };
  },
  methods: {
    //A valamilyenAkcio eseménykezelője
    //Hoozárak vagy elvesz téglát
    teglaHozzarakElvesz() {
      if (this.teglaKivesz) {
        this.teglak.pop();
      } else {
        this.teglak.push("tegla.jpg");
      }
    },
  },
  computed: {
    countOfteglak() {
      return this.teglak.length;
    },
  },
};
</script>

<style scoped>
.my-tegla {
  width: 100px;
}
</style>