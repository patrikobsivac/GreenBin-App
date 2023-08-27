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
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/address"
        @click="changePage('page4')"
        >Pošalji Adresu</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/razvrstaj"
        @click="changePage('page5')"
        >Razvrstaj</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/kontakti"
        @click="changePage('page6')"
        >Kontakti</v-btn
      >
      <v-btn large class="mx-2" color="white" a href="/" @click="logout()"
        ><b>Logout</b></v-btn
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
          this.$router.push({ name: "home" });
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>