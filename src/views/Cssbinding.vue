<template>
  <div>
    <h2>css Binding (css adatkötés)</h2>
    <h3>Szövegközi stílus</h3>
    <input type="range" class="form-range" id="range"
        :min="min" :max="max" :step="step"
        v-model="opacity"
    />
    <div :style="{backgroundColor: 'rgba(115,20,20,' + opacity + ')'}">
        szövegközi stílus
    </div>

    <h3>Osztály hozzárendelés (assign a class)</h3>
    <ul>
        <li v-for="(gyumolcs, i) in gyumolcsok" :key="i"
            @click="onClickGyumolcs(gyumolcs)"
            @mouseover="overGyumolcs(gyumolcs)"
            @mouseout="outGyumolcs()"
            :class="{
                kivalasztva: gyumolcs === selectedGyumolcs,
                felette: gyumolcs === overedGyumolcs
                }"
            class="mb-3"    
        >
            {{gyumolcs}}
        </li>
    </ul>

    <h3>Camel case vs kebab case jelölés a :style-nál</h3>
    <div
        :style="{backgroundColor: 'lightpink', 'font-weight': 'bold'}"
    >
        Camel case: backgroundColor <br>
        kebab case: background-color <br>
    </div>

    <h3>Tömb szintaxis</h3>
    <div :class="[{vastagClass: isImportant}, 'sargaClass', 'doboz']">
        Valami
    </div>

  </div>



</template>

<script>
export default {
    data(){
        return {
            min: 0,
            max: 1,
            step: 0.01,
            opacity: 0.5,
            gyumolcsok: ['alma', 'barack', 'körte'],
            selectedGyumolcs: null,
            overedGyumolcs: null,
            isImportant: true
        }
    },
    methods: {
        onClickGyumolcs(gyumolcs){
            this.selectedGyumolcs = gyumolcs;
        },
        overGyumolcs(gyumolcs){
            this.overedGyumolcs = gyumolcs;
        },
        outGyumolcs(){
            this.overedGyumolcs=null
        }
    }
}
</script>

<style>
h3{
    margin-top: 1rem;
}

.kivalasztva {
  color: red;
}
.felette {
  background-color: silver;
}
li {
  cursor: pointer;
}

.vastagClass {
  font-weight: bold;
}
.sargaClass {
  background-color: rgb(255, 255, 139);
}
.doboz {
  border: dashed black 1px;
  width: 200px;
  margin: 20px;
  padding: 20px;
}
</style>