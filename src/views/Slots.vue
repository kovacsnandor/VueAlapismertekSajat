<template>
  <h2>Slorts</h2>
  <p v-if="szovegMutat">Ez egy szöveg</p>
  <button type="button" class="btn btn-danger" @click="openAlert = true">
    Hibaüzenet
  </button>
  <!-- Button trigger modal -->
  <button
    type="button"
    class="btn btn-primary ms-2"
    data-bs-toggle="modal"
    data-bs-target="#modalYesNo"
  >
    <span v-if="szovegMutat">Szöveg eltüntet</span>
    <span v-if="!szovegMutat">Szöveg mutat</span>
  </button>

  <!-- //kommunikáció, komponens, kívülről befelé -->
  <!-- belülrőlk kifelé, esemény, eseménykezelő,  -->
  <!-- esemény kiváltása, esemény elkapása -->
  <!-- feliratkozás az eseményre -->
  <KomponensAlert :openAlert="openAlert" @closeAlert="closeAlertKezelo">
    <div>
      <strong>Szerver hiba</strong><br />
      Ptóbálkozzzon később
    </div>
  </KomponensAlert>

  <ModalYesNo
    :title="'Kérdés'"
    :yes="'Igen'"
    :no="'Nem'"
    @valamilyenAkcio="eltuntetMegjelenit"
  >
    <div v-if="szovegMutat">
      <h4>Eltüntessem a szöveget? <i class="bi bi-trash3"></i></h4>
    </div>

    <div v-if="!szovegMutat">
      <h4>Megjelenítsem a szöveget? <i class="bi bi-magic"></i></h4>
    </div>
  </ModalYesNo>
</template>

<script>
export default {
  data() {
    return {
      openAlert: false,
      szovegMutat: true,
    };
  },
  methods: {
    closeAlertKezelo() {
      this.openAlert = false;
    },
    eltuntetMegjelenit() {
      // console.log("eltuntetMegjelenit");
      this.szovegMutat = !this.szovegMutat;
    },
  },
};
</script>

<style>
</style>