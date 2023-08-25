<template>
  <div class="center">
    <div>
      <h1>Menu</h1>
      <br /><br />
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/report"
        @click="changePage('page1')"
        >Prijava Smeća</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/route"
        @click="changePage('page2')"
        >Ruta smeća</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/status"
        @click="changePage('page3')"
        >Status</v-btn
      >
      <v-btn large class="mx-2" color="green" a href="/" @click="logout()"
        >Logout</v-btn
      >
    </div>
  </div>
</template>

<style>
.center {
  text-align: center;
}
</style>

<script>
import { signOut, auth } from "/firebase.js";
export default {
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace({ name: "login" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>