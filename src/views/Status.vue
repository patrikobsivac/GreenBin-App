<template>
  <v-container fluid>
    <h1>Prikupljanje smeća</h1>
    <GoBack />
    <v-form>
      <v-row justify="center">
        <v-col cols="10">
          <v-text-field label="Broj kamiona" v-model="brojKamiona" outlined />
        </v-col>
        <v-col cols="10">
          <v-text-field label="Ime vozača" v-model="imeVozaca" outlined />
        </v-col>
        <v-col cols="10">
          <v-select :items="datum" label="Datum" outlined />
        </v-col>
        <v-col cols="10">
          <v-text-field
            label="Pregled adrese"
            v-model="pregledAdrese"
            outlined
          />
        </v-col>
      </v-row>
      <v-btn
        type="button"
        :items="items"
        color="green"
        @click="getStatus"
        a
        href="/menu"
        >Status</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
import { firestore, collection, db } from "/firebase.js";
import GoBack from "@/components/GoBack";
export default {
  components: {
    GoBack,
  },
  data() {
    return {
      items: ["Akcija", "Obrada", "Primljeno"],
      brojKamiona: "",
      imeVozaca: "",
      datum: [
        "Ponedeljak, 15.5.2023.",
        "Utorak, 16.5.2023.",
        "Srijeda, 17.5.2023.",
        "Četvrtak, 18.5.2023.",
        "Petak, 19.5.2023.",
        "Subota, 20.5.2023",
        "Nedjelja, 21.5.2023",
      ],
      pregledprijave: "",
      pregledAdrese: "",
    };
  },
  methods: {
    getStatus() {
      const db = firebase.firestore();
      collection(db, "smeca")
        .add({
          brojKamiona: this.brojKamiona,
          imeVozaca: this.imeVozaca,
          datum: this.datum,
          pregledPrijave: this.pregledPrijave,
          pregledAdrese: this.pregledAdrese,
        })
        .then(() => {
          console.log("Uspješno dodano u bazu podataka");
        })
        .catch((error) => {
          console.log("Došlo je do pogreške: ", error);
        });
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 30 px;
  margin-bottom: 15px;
  text-align: center;
  color: #666;
}

v-btn {
  margin-top: 20px;
  width: 100%;
}

v-text-field {
  background-color: white;
  color: #666;
}

#label {
  background-color: white;
}
</style>