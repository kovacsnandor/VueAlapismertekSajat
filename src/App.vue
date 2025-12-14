<script>
import { RouterLink, RouterView } from "vue-router";
import Menu from "./components/Menu.vue";
import { useAuthStore } from "@/stores/useAuthStore.js";
import { BASE_URL } from "@/helpers/baseUrls";

export default {
  components: {
    Menu,
  },
  data() {
    return {
      storeAuth: useAuthStore(),
    };
  },

  mounted() {
    window.addEventListener("pagehide", function (e) {
      // e.preventDefault();
      // e.returnValue = "";

      // Display a confirmation dialog with 'Yes' and 'No' buttons
      var confirmationMessage = "Kilépjek?";

      

      // Custom dialog box with 'Yes' and 'No' buttons
      if (confirm(confirmationMessage)) {
        // User clicked 'Yes' button
        // Additional logic can be added here
        this.logout()

        
      } else {
        // User clicked 'No' button
        // Additional logic can be added here
      }
    }, true);
  },

  
  methods: {
    async logout() {
      const url = `${BASE_URL}/users/logout`;
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${this.storeAuth.token}`,
      };
      try {
        const response = await axios.post(url, this.user, headers);
      } catch (error) {
        console.log(error);
      }
      this.storeAuth.clearStoredData();
    },
  },
};
</script>

<template>
  <div class="container-fluid my-border my-container">
    <h1>Iskola</h1>
    <Menu />
    <!-- <nav class="my-border p-4">
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/kartyak">Kártyák</RouterLink>
    </nav> -->

    <div class="my-border p-2">
      <RouterView />
    </div>
  </div>
</template>

<style scoped>
</style>


