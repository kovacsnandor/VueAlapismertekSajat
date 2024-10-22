<template>
  <div>
    <h2>CRUD műveletek</h2>
    <!-- Táblázat -->
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">Műveletek</th>
          <th scope="col">Név</th>
          <th scope="col">Született</th>
          <th scope="col">Helység</th>
          <th scope="col">Irányítószám</th>
          <th scope="col">Neme</th>
          <th scope="col">Foglalkozás</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="person in personsTransform"
          :key="person.id"
          @click="onClickTr(person.id)"
          :class="{ 'table-success': selectedRowPersonId == person.id }"
        >
          <td class="text-nowrap">
            <OpewrationsCrud
              :person="person"
              @onClickDeleteButton="onClickDeleteButton"
              @onClickUpdate="onClickUpdate"
              @onClickCreate="onClickCreate"
            />
          </td>
          <td>{{ person.name }}</td>
          <td>{{ person.dateOfBird }}</td>
          <td>{{ person.locality }}</td>
          <td>{{ person.zipCode }}</td>
          <td>{{ person.nemeString }}</td>
          <td>{{ person.professionName }}</td>
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
      <PersonForm
        v-if="state == 'Create' || state == 'Update'"
        :personForm="person"
        :professions="professions"
        @savePerson="savePersonHandler"
      />
    </Modal>
  </div>
</template>

<script>
class Person {
  constructor(
    id = null,
    name = null,
    dateOfBird = null,
    locality = null,
    zipCode = null,
    neme = true,
    professionId = null
  ) {
    this.id = id;
    this.name = name;
    this.dateOfBird = dateOfBird;
    this.locality = locality;
    this.zipCode = zipCode;
    this.neme = neme;
    this.professionId = professionId;
  }
}
import PersonForm from "@/components/PersonForm.vue";
import OpewrationsCrud from "@/components/OpewrationsCrud.vue";
import * as bootstrap from "bootstrap";

import uniqid from "uniqid";
export default {
  components: { PersonForm, OpewrationsCrud },
  mounted() {
    this.modal = new bootstrap.Modal("#modal", {
      keyboard: false,
    });
  },
  data() {
    return {
      modal: null,
      person: new Person(uniqid()),
      selectedRowPersonId: null,
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
    deletePersonById() {
      this.persons = this.persons.filter(
        (p) => p.id != this.selectedRowPersonId
      );
    },

    createPerson() {
      this.persons.push(this.person);
      this.state = "Read";
    },
    updatePerson() {
      const index = this.persons.findIndex((p) => p.id == this.person.id);
      this.persons[index] = this.person;
      this.state = "Read";
    },
    yesEventHandler() {
      console.log("yes event");
      if (this.state == "Delete") {
        this.deletePersonById();
      }
    },
    onClickDeleteButton(person) {
      this.title = "Törlés";
      this.messageYesNo = `Valóban törölniakarod? Név: ${person.name}`;
      this.yes = "Igen";
      this.no = "Nem";
      this.size = null;
      this.state = "Delete";
      console.log(person);
    },
    onClickUpdate(person) {
      this.state = "Update";
      this.title = "Személy módosítása";
      this.yes = null;
      this.no = "Mégsem";
      this.size = "lg";
      // this.person = person;
      this.person = { ...person };
    },
    onClickCreate() {
      this.title = "Új személy létrehozása";
      this.yes = null;
      this.no = "Mégsem";
      this.size = "lg";

      this.state = "Create";
      this.person = new Person(uniqid());
      console.log("Create");
    },
    onClickTr(id) {
      console.log(id);

      this.selectedRowPersonId = id;
    },
    nemeString(neme) {
      return neme ? "férfi" : "nő";
    },
    professionById(professionId) {
      return this.professions.filter((p) => p.id == professionId)[0].name;
    },
    savePersonHandler(person) {
      this.person = person;
      this.modal.hide();
      if (this.state == "Create") {
        this.createPerson();
      } else if (this.state == "Update") {
        this.updatePerson();
      }
      console.log("save", this.person);
    },
  },
  computed: {
    personsTransform() {
      return this.persons.map((p) => {
        const newP = {
          ...p,
          nemeString: this.nemeString(p.neme),
          professionName: this.professionById(p.professionId),
        };
        return newP;
      });
    },
  },
};
</script>

<style>
</style>

