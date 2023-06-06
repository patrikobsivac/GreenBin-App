<template>
  <v-container fluid>
    <v-row>
      <v-col md="6" sm="12">
        <v-text-field label="Pregled prijave" outlined />
      </v-col>
      <v-col md="2" sm="12">
        <v-select :items="items" label="Status" outlined single-line />
      </v-col>
      <v-col md="2" sm="12">
        <v-text-field label="Broj kamiona" outlined />
      </v-col>
      <v-col md="2" sm="12">
        <v-text-field label="Ime vozaca" outlined />
      </v-col>
    </v-row>
    <v-row>
      <v-col md="6" sm="12">
        <v-text-field label="Pregled adrese" outlined />
      </v-col>
      <v-col md="6" sm="12">
        <v-select :items="dates" label="Datum" outlined single-line />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      items: ["Akcija", "Obrada", "Primljeno"],
      dates: [
        "Ponedeljak, 10. svibanj 2020.",
        "Utorak, 11. svibanj 2020.",
        "Sreda, 12. svibanj 2020.",
        "Cetvrtak, 13. svibanj 2020.",
        "Petak, 14. svibanj 2020.",
      ],
    };
  },
  methods: {},
};
</script>