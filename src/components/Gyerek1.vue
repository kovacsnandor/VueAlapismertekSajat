<template>
  <div class="my-doboz">
    <h3>Gyerek1 ablak</h3>
    <div class="mb-3">
      <label for="uzenet" class="form-label"
        >Küldendő üzenet</label
      >
      <input
        type="text"
        class="form-control"
        id="uzenet"
        v-model="uzenet"
      />
    </div>
    <!-- gomb -->
    <button type="button" class="btn btn-primary"
        @click="onClickKuldButton()"
    >
        Küldd
    </button>
    <!-- válasz -->
     <p>{{valasz}}</p>

  </div>
</template>

<script>
export default {
    data(){
        return {
            uzenet: null,
            valasz: null
        }
    },
    mounted(){
        //Az oldal betöltődése után
        //feliratkozunk a gyerek2_to_gyerek1 eseményre
        //az eseményt kezelő függvénnyel
        this.emitter.on('gyerek2_to_gyerek1', (data)=>{
            this.valasz = data.uzenet;
        })
    },
    methods: {
        onClickKuldButton(){
            this.sendMessage()
        },
        sendMessage(){
            //Kibocsájtunk egy gyerek1_to_gyerek2 nevű üzentet
            //és az kapja el, aki erre feliratkozott
            this.emitter.emit('gyerek1_to_gyerek2', {uzenet: this.uzenet})
        }
    }
};
</script>

<style scoped>
.my-doboz {
  width: 400px;
  height: 210px;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
  background: lightgreen;
  border: 1px dashed black;
}
</style>