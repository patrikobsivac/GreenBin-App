<template>
  <v-card text-align="center">
    <v-card-title>Kanta za smeće</v-card-title>
    <v-card-actions>
      <v-form @submit.prevent="onSubmit">
        <v-text-field
          name="id"
          v-model="id"
          :rules="rules"
          label="ID kante"
          text-align="center"
        />
        <v-text-field
          name="kapacitet"
          v-model="kapacitet"
          :rules="rules"
          label="Kapacitet"
          text-align="center"
        />
        <v-text-field
          name="adresa"
          v-model="adresa"
          :rules="rules"
          label="Adresa"
          text-align="center"
        />
        <v-btn align="center" name="pretrazi" type="submit" text-align="center"
          >Pretrazi i provjeri</v-btn
        >
        <v-btn name="posalji" type="submit" text-align="center"
          >Pošalji adresu</v-btn
        >
        <v-btn
          color="success"
          class="mx-0"
          name="potvrdi"
          type="submit"
          text-align="center"
        >
          Potvrdi
        </v-btn>
        <v-card-text text-align="center">
          <br />
          <v-btn
            v-for="btn in btns"
            :key="btn.text"
            color="primary"
            text-align="center"
          >
            {{ btn.text }}
          </v-btn>
        </v-card-text>
      </v-form>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      kapacitet: "",
      adresa: "",
      btns: [{ text: "Kreiraj prijavu smeća" }],
      rules: [(v) => !!v || "Ovo polje je obavezno."],
    };
  },
  methods: {
    onSubmit() {
      if ((this.id, this.kapacitet, this.adresa)) {
        axios
          .post("#", {
            id: this.id,
            kapacitet: this.kapacitet,
            adresa: this.adresa,
          })
          .then((response) => {
            console.log(response);
            alert("Uspješno ste kreirali prijavu smeća");
          })
          .catch((error) => {
            console.log(error.response);
            alert("Greška pri kreiranju prijave smeća");
          });
      }
    },
  },
};
</script>

<style scoped>
.centered-input >>> input {
  text-align: center;
}
</style>

