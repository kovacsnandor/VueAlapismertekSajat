<template>
  <div>
    <h2>v-for Ciklus</h2>
    <div class="row">
      <div class="col-5 my-border">
        <!-- lista a tnulókról -->
        <h3>Lista</h3>
        <ul>
          <li v-for="(tanulo, i) in tanulok" :key="i">
            {{ i }}: {{ tanulo.nev }}, {{ tanulo.osztaly }}, {{ tanulo.atlag }}
          </li>
        </ul>
      </div>
      <div class="col-7 my-border">
        <!-- táblázat a tanulókról -->
        <h3>Táblázat</h3>
        <div class="table-responsive">
          <table class="table w-auto table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Név</th>
                <th scope="col">Osztály</th>
                <th scope="col">Átlag</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(tanulo, i) in tanulok" :key="i">
                <td>{{ i }}</td>
                <td class="text-nowrap">{{ tanulo.nev }}</td>
                <td class="text-center">{{ tanulo.osztaly }}</td>
                <td class="text-end">{{ tanulo.atlag }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tanulok: [
        { nev: "pisti", osztaly: "3a", atlag: 4.7 },
        { nev: "béla", osztaly: "1a", atlag: 3.7 },
        { nev: "anna", osztaly: "1a", atlag: 4.2 },
        {
          nev: "nemes nemzetes vitéz nagyérdemű címzetes gróf jenő",
          osztaly: "2a",
          atlag: 2.7,
        },
        { nev: "áron", osztaly: "1a", atlag: 4.3 },
        { nev: "feri", osztaly: "2a", atlag: 3.3 },
        { nev: "áron", osztaly: "2a", atlag: 3.3 },
        { nev: "emese", osztaly: "1a", atlag: 2.9 },
        { nev: "áron", osztaly: "1b", atlag: 4.8 },
        { nev: "évi", osztaly: "3a", atlag: 2.7 },
      ],
    };
  },
};
</script>

<style>
</style>