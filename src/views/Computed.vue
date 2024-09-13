<template>
  <div>
    <h2>Computed</h2>
    <button type="button" class="btn btn-primary"
        @click="onClickPluszEgyTegla()"
    >
        + 1 tégla
    </button>
    <p>{{hanyTeglaVan_M()}} tégla van (függvénnyel)</p>
    <p>{{hanyTeglaVan_C}} tégla van (computed-el)</p>

    <h3>Computed vs Method</h3>
    <ul>
        <li>Computed nem tartalmazhat paramétert</li>
        <li>Computed-re úgy hivatkozhatunk mint egy változóra (nem kell zárójel)</li>
        <li>A Computed csak akkor számol újra, amikor a függő változói megváltoznak, 
            a metódusokat pedig minden alkalommal, amikor meghívják, 
            A computedben az a nagyszerű, hogy gyorsítótárazásra kerül, 
            tehát tegyük fel, hogy van egy számításod egy csomó számítással, 
            sok ciklussal, hogy ha a függő változók nem változnak, 
            akkor a használata csak egyszer kerül kiszámításra, 
            a következő időben az eredményeket újra felhasználják az előző alkalommal.</li>
        <li>Tehát: A computed hatékonyabb mint a method.</li>
    </ul>

  </div>
</template>

<script>
export default {
    data(){
        return{
            teglak: ["tégla", "tégla", "tégla", "tégla"]
        }
    },
    methods: {
        onClickPluszEgyTegla(){
            this.teglak.push("tégla");
        },
        hanyTeglaVan_M(){
            return this.teglak.length;
        }
    },
    computed: {
        //számított érték
        hanyTeglaVan_C(){
            return this.teglak.length;
        }
    }
}
</script>

<style>

</style>