<template>
  <div>
    <h2>Foglalkozások</h2>
    <!-- Táblázat -->
 
    <table class="table table-striped">
      <thead>
        <tr>
          <!-- rename -->
          <th scope="col">Műveletek</th>
          <th scope="col">Foglalkozás</th>
          <th scope="col">Fizetés</th>
          <th scope="col">Munkaidő</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="dataLine in collection"
          :key="dataLine.id"
          @click="onClickTr(dataLine.id)"
          :class="{ 'table-success': selectedRowDataLineId == dataLine.id }"
        >
          <td class="text-nowrap">
            <OperationsCrud
              :dataLine="dataLine"
              @onClickDeleteButton="onClickDeleteButton"
              @onClickUpdate="onClickUpdate"
              @onClickCreate="onClickCreate"
            />
          </td>
          <!-- rename -->
          <td>{{ dataLine.name }}</td>
          <td>{{ dataLine.salary }}</td>
          <td>{{ dataLine.workingTime }}</td>
        </tr>
      </tbody>
    </table>
    <!-- Modal -->
    <Modal
      :title="title"
      :yes="yes"
      :no="no"
      :size="size"
      @yesEvent="yesEventHandler"
    >
      <!-- yes-no (Modal) -->
      <div v-if="state == 'Delete'">
        {{ messageYesNo }}
      </div>

      <!-- Form person -->
      <ProfessionForm
        v-if="state == 'Create' || state == 'Update'"
        :dataLine="dataLine"
        @saveDataLine="saveDataLineHandler"
      />
    </Modal>
  </div>
</template>

<script>
// rename
class DataLine {
  constructor(
    id = null,
    name = null,
    salary = null,
    workingTime = 'kötött',
  ) {
    this.id = id;
    this.name = name;
    this.salary = salary;
    this.workingTime = workingTime;
  }
}
import ProfessionForm from "@/components/ProfessionForm.vue";
import OperationsCrud from "@/components/OperationsCrud.vue";
import * as bootstrap from "bootstrap";

import uniqid from "uniqid";
export default {
  components: { ProfessionForm, OperationsCrud },
  mounted() {
    this.modal = new bootstrap.Modal("#modal", {
      keyboard: false,
    });
  },
  data() {
    return {
      modal: null,
      dataLine: new DataLine(uniqid()),
      selectedRowDataLineId: null,
      messageYesNo: null,
      state: "Read", //CRUD: Create, Read, Update, Delete
      title: null,
      yes: null,
      no: null,
      size: null,
      persons: [
        {
          id: 1,
          name: "Jó Béla",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1,
        },
        {
          id: 2,
          name: "Kis Béla",
          dateOfBird: "2021.11.03",
          locality: "Szolnok",
          zipCode: "5052",
          neme: true,
          professionId: 3,
        },
        {
          id: 3,
          name: "Zöld Mónika",
          dateOfBird: "2021.11.03",
          locality: "Budapest",
          zipCode: "5052",
          neme: true,
          professionId: 2,
        },
        {
          id: 4,
          name: "Fehér Enikő",
          dateOfBird: "2021.11.03",
          locality: "Kecskemét",
          zipCode: "6055",
          neme: true,
          professionId: 2,
        },
        {
          id: 5,
          name: "Rácz Anna",
          dateOfBird: "2021.11.03",
          locality: "Szolnok",
          zipCode: "5052",
          neme: true,
          professionId: 5,
        },
        {
          id: 6,
          name: "Bors István",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 4,
        },
        {
          id: 7,
          name: "Komár László",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 2,
        },
        {
          id: 8,
          name: "Zsír József",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 5,
        },
        {
          id: 9,
          name: "Regős János",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 3,
        },
        {
          id: 10,
          name: "Kolbász Julianna",
          dateOfBird: "2021.11.03",
          locality: "Újszász",
          zipCode: "5052",
          neme: true,
          professionId: 1,
        },
      ],
      professions: [
        {
          id: 1,
          name: "Asztalos",
          salary: 560000,
          workingTime: 'kötött'
        },
        {
          id: 2,
          name: "Villanyszerelő",
          salary: 560000,
          workingTime: 'kötött'
        },
        {
          id: 3,
          name: "Programozó",
          salary: 560000,
          workingTime: 'kötött'
        },
        {
          id: 4,
          name: "Könyvelő",
          salary: 560000,
          workingTime: 'kötetlen'
        },
        {
          id: 5,
          name: "Kereskedő",
          salary: 560000,
          workingTime: 'köteltlen'
        },
      ],
    };
  },
  methods: {
    //rename
    deleteDataLineById() {
      this.collection = this.collection.filter(
        (p) => p.id != this.selectedRowDataLineId
      );
    },
    //rename
    createDataLine() {
      this.collection.push(this.dataLine);
      this.state = "Read";
    },
    //reaname
    updateDataLine() {
      const index = this.collection.findIndex((p) => p.id == this.dataLine.id);
      this.collection[index] = this.dataLine;
      this.state = "Read";
    },
    yesEventHandler() {
      console.log("yes event");
      if (this.state == "Delete") {
        this.deleteDataLineById();
      }
    },
    onClickDeleteButton(dataLine) {
      this.title = "Törlés";
      this.messageYesNo = `Valóban törölniakarod? Név: ${dataLine.name}`;
      this.yes = "Igen";
      this.no = "Nem";
      this.size = null;
      this.state = "Delete";
      console.log(dataLine);
    },
    onClickUpdate(dataLine) {
      this.state = "Update";
      this.title = "Foglalkozás módosítása";
      this.yes = null;
      this.no = "Mégsem";
      this.size = "lg";
      // this.person = person;
      this.dataLine = { ...dataLine };
    },
    onClickCreate() {
      this.title = "Új Foglalkozás létrehozása";
      this.yes = null;
      this.no = "Mégsem";
      this.size = "lg";

      this.state = "Create";
      this.dataLine = new DataLine(uniqid());
      console.log("Create");
    },
    onClickTr(id) {
      console.log(id);

      this.selectedRowdataLineId = id;
    },
    
    saveDataLineHandler(dataLine) {
      this.dataLine = dataLine;
      this.modal.hide();
      if (this.state == "Create") {
        this.createDataLine();
      } else if (this.state == "Update") {
        this.updateDataLine();
      }
      console.log("save", this.dataLine);
    },
  },
  computed: {
    collection(){
      //rename
      return this.professions
    }
  },
};
</script>

<style>
</style>

