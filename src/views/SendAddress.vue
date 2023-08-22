<template>
  <div>
    <v-row align="center" justify="center">
      <v-col cols="12">
        <v-card>
          <v-container>
            <v-row>
              <v-col>
                <h3>Moje adrese</h3>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-text-field label="Unesite svoju adresu" v-model="address" />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" align="center">
                <v-btn a href="/menu" color="green" @click="saveAddress()"
                  >Spremi adresu</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { db } from "/firebase.js";
export default {
  data: () => ({
    address: "",
  }),
  methods: {
    async saveAddress() {
      const addressRef = db.collection("addresses").doc(this.address);
      const addressDoc = await addressRef.get();

      if (addressDoc.exists) {
        alert("Adresa vec postoji!");
        return;
      }

      addressRef
        .set({
          address: this.address,
        })
        .then(() => {
          alert("Adresa uspjesno spremljena!");
        })
        .catch((error) => {
          alert(`Greska: ${error.message}`);
        });
    },
  },
};
</script>