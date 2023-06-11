<template>
  <v-container fluid>
    <h1>Prikupljanje smeća</h1>
    <v-form>
      <v-row justify="center">
        <v-col cols="10">
          <v-text-field label="Broj kamiona" v-model="brojKamiona" outlined />
        </v-col>
        <v-col cols="10">
          <v-text-field label="Ime vozaca" v-model="imeVozaca" outlined />
        </v-col>
        <v-col cols="10">
          <v-select :items="datum" label="Datum" outlined />
        </v-col>
        <v-col cols="10">
          <v-text-field
            label="Pregled prijave"
            v-model="pregledprijave"
            outlined
          />
        </v-col>
        <v-col cols="10">
          <v-text-field
            label="Pregled adrese"
            v-model="pregledAdrese"
            outlined
          />
        </v-col>
      </v-row>
      <v-btn type="button" :items="items" color="primary" @click="getStatus"
        >Status</v-btn
      >
    </v-form>
  </v-container>
</template>

<script>
import { firebase } from "/firebase";
export default {
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
      console.log("Status je jos uvijek nepoznat"); //tu se treba raditi logika
    },
  },
};
</script>

<style scoped>
h1 {
  font-size: 30 px;
  font-weight: bold;
  margin-bottom: 15px;
  text-align: center;
  color: #666;
}

v-btn {
  margin-top: 20px;
  width: 100%;
}
</style>