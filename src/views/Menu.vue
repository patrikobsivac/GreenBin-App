<template>
  <div class="center">
    <div>
      <h1>Menu</h1>
      <br /><br />
      <v-btn large class="mx-2" color="green" to="/report">Prijava Smeća</v-btn>
      <v-btn large class="mx-2" color="green" to="/route">Ruta smeća</v-btn>
      <v-btn large class="mx-2" color="green" to="/status">Status</v-btn>
      <v-btn large class="mx-2" color="green" to="/address"
        >Pošalji Adresu</v-btn
      >
      <v-btn large class="mx-2" color="green" to="/razvrstaj">Razvrstaj</v-btn>
      <v-btn large class="mx-2" color="green" to="/kontakti">Kontakti</v-btn>
      <v-btn large class="mx-2" color="white" @click="logout()"
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