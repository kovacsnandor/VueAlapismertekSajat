<template>
  <div>
    <nav class="navbar navbar-expand-md bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Iskola</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <!-- Home -->
            <li class="nav-item">
              <router-link class="nav-link active" aria-current="page" to="/"
                >Home</router-link
              >
            </li>
            <!-- Counter -->
            <li class="nav-item">
              <a class="nav-link" href="#">Counter</a>
            </li>
            <!-- Iskola -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Iskola
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/kartyak"
                    >Kártyák</router-link
                  >
                </li>
                <li><a class="dropdown-item" href="#">Tanuló keres</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li v-if="store.user">
                  <router-link class="dropdown-item" to="/sportok">Sportok</router-link>
                </li>
                <li v-if="store.user">
                  <router-link class="dropdown-item" to="/osztalyok">Osztályok</router-link>
                </li>
              </ul>
            </li>
            <!-- Login/Reg.-Logout -->
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <!-- Login -->
                <span v-if="!store.user"> Login </span>
                <!-- User -->
                <span v-if="store.user">
                  <i class="bi bi-person"></i> {{ store.user }}
                </span>
              </a>
              <ul class="dropdown-menu">
                <li>
                  <router-link class="dropdown-item" to="/login">
                    <i class="bi bi-person"></i> Login
                  </router-link>
                </li>
                <li v-if="store.user" @click.prevent="logout()">
                  <a class="dropdown-item" href="#"> Logout </a>
                </li>
                <li><hr class="dropdown-divider" /></li>
                <li><router-link class="dropdown-item" to="/regisztracio">Regisztráció</router-link></li>
                <li v-if="store.user">
                  <a class="dropdown-item" href="#">Profile</a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/useAuthStore";
import { BASE_URL } from "../helpers/baseUrls";
import router from "../router";
import axios from "axios";
export default {
  data() {
    return {
      store: useAuthStore(),
    };
  },
  methods: {
    async logout() {
      const url = `${BASE_URL}/users/logout`;
      const headers = {
        Accept: "application/json",
        Authorization: `Bearer ${this.store.token}`,
      };
      try {
        const response = await axios.post(url, this.user, headers);
      } catch (error) {
        console.log(error);
      }
      this.store.clearStoredData();
      router.push('/');
    },
  },
};
</script>

<style>
</style>