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
        <tr v-for="person in persons" :key="person.id"
          @click="onClickTr(person.id)"
          :class="{'table-success': selectedRowPersonId == person.id}"
        >
          <td class="text-nowrap">
            <!-- törlés -->
            <button
              type="button"
              class="btn btn-outline-danger btn-sm"
              data-bs-toggle="modal"
              data-bs-target="#modal"
              @click="onClickDeleteButton(person)"
            >
              <i class="bi bi-trash3"></i>
            </button>
            <!-- módosítás -->
            <button
              type="button"
              class="btn btn-outline-primary btn-sm ms-2"
              data-bs-toggle="modal"
              data-bs-target="#modal"
              @click="onClickUpdate(person)"
            >
              <i class="bi bi-pencil"></i>
            </button>
            <!-- új -->
            <button
              type="button"
              class="btn btn-outline-success btn-sm ms-2"
              data-bs-toggle="modal"
              data-bs-target="#modal"
              @click="onClickCreate()"
            >
              <i class="bi bi-plus-lg"></i>
            </button>
          </td>
          <td>{{ person.name }}</td>
          <td>{{ person.dateOfBird }}</td>
          <td>{{ person.locality }}</td>
          <td>{{ person.zipCode }}</td>
          <td>{{ person.neme }}</td>
          <td>{{ person.professionId }}</td>
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
      <PersonForm v-if="state == 'Create' || state == 'Update'" />
    </Modal>
  </div>
</template>

<script>
import PersonForm from "@/components/PersonForm.vue";
export default {
  components: { PersonForm },
  data() {
    return {
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
        },
        {
          id: 2,
          name: "Villanyszerelő",
        },
        {
          id: 3,
          name: "Programozó",
        },
        {
          id: 4,
          name: "Könyvelő",
        },
        {
          id: 5,
          name: "Kereskedő",
        },
      ],
    };
  },
  methods: {
    deletePersonById(){
      this.persons = this.persons.filter(p => p.id != this.selectedRowPersonId);
    },

    yesEventHandler() {
      console.log("yes event");
      if (this.state == 'Delete') {
        this.deletePersonById()
      }
    },
    onClickDeleteButton(person){
      this.title="Törlés";
      this.messageYesNo = `Valóban törölniakarod? Név: ${person.name}`;
      this.yes="Igen";
      this.no="Nem";
      this.size=null;
      this.state="Delete";
      console.log(person);
      
    },
    onClickUpdate(person){
      this.state="Update";
      console.log(person);
      
    },
    onClickCreate(){
      this.state="Create";
      console.log("Create");
      
    },
    onClickTr(id){
      console.log(id);
      
      this.selectedRowPersonId = id;
    }
  },
};
</script>

<style>
</style>

