<template>
  <div class="text-center">
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <h1>Prijava kante za smeće</h1>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <v-text-field label="ID" v-model="kanta.id"></v-text-field>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <v-text-field
          label="Kapacitet"
          v-model="kanta.kapacitet"
        ></v-text-field>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <v-text-field label="Adresa" v-model="kanta.adresa"></v-text-field>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <v-btn type="button" @click="pretraziKante()" color="primary"
          >Pretraži
        </v-btn>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <v-btn type="button" @click="posaljiAdresu('neki radnik')"
          >Pošalji adresu
        </v-btn>
      </div>
    </div>
    <div class="row">
      <div class="col-lg-10 mx-auto">
        <v-btn
          type="button"
          @click="provjeriPrijavu()"
          :disabled="!checkForm()"
          color="success"
          a
          href="/menu"
          >Prijavi
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script>
//import firebase from "firebase";
import { doc, db } from "/firebase.js";
export default {
  data() {
    return {
      kanta: {
        id: "",
        kapacitet: "",
        adresa: "",
      },
    };
  },
  methods: {
    pretraziKante() {
      const db = firebase.firestore();
      const kantecollection = collection(db, "kante");

      kantecollection
        .where("id", "==", this.kanta.id)
        .get()
        .then((doc) => {
          if (doc.empty) {
            console.log("Kanta ne postoji.");
          } else {
            console.log("Kanta postoji");
          }
        });
    },

    posaljiAdresu(radnik) {
      console.log(radnik + " je primio adresu");
    },

    provjeriPrijavu() {
      console.log(" Prijava je provjerena");
    },
    checkForm: function () {
      if (
        this.kanta.id !== "" &&
        this.kanta.kapacitet !== "" &&
        this.kanta.adresa !== ""
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style>
.text-center {
  text-align: center;
  margin-top: 1rem;
}
</style>