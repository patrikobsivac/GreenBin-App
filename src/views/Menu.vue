<template>
  <div class="center">
    <div>
      <h1>Menu</h1>
      <br /><br />
      <v-btn large class="mx-2" color="green" style="color: white" to="/report"
        >Prijava Smeća</v-btn
      >
      <v-btn large class="mx-2" color="green" style="color: white" to="/route"
        >Ruta smeća</v-btn
      >
      <v-btn large class="mx-2" color="green" style="color: white" to="/status"
        >Status</v-btn
      >

      <v-btn
        large
        class="mx-2"
        color="green"
        style="color: white"
        to="/razvrstaj"
        >Razvrstaj</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        style="color: white"
        to="/kontakti"
        >Kontakti</v-btn
      >
      <v-btn large class="mx-2" color="white" to="/" @click="logout()"
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
  name: "Menu",
  methods: {
    async logout() {
      try {
        let feedback = await signOut(auth);
        this.$router.push("/");
        console.log("Odjavljen/a", feedback);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>