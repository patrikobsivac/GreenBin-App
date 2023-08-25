<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="headline">Katalog Otpada</h1>
        <v-list>
          <v-list-item-group v-model="odabranaVrsta" active-class="primary">
            <v-list-item v-for="vrsta in vrste" :key="vrsta.naziv">
              <v-list-item-content>
                <v-list-item-title>{{ vrsta.naziv }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider></v-divider>
        <v-list v-if="odabranaVrsta">
          <v-list-item-group v-model="odabraniNaziv">
            <v-list-item v-for="naziv in odabranaVrsta.nazivi" :key="naziv">
              <v-list-item-content>
                <v-list-item-title>{{ naziv }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
        <v-divider v-if="odabraniNaziv"></v-divider>
        <div v-if="odabraniNaziv">
          <h2 class="headline">{{ odabraniNaziv }}</h2>
          <p>
            <strong>Primarni izbor razvrstanja:</strong>
            {{ odabraniNazivInfo.primarni }}
          </p>
          <p><strong>Alternativni izbor razvrstanja:</strong></p>
          <ul>
            <li
              v-for="altIzbor in odabraniNazivInfo.alternativni"
              :key="altIzbor"
            >
              {{ altIzbor }}
            </li>
          </ul>
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      vrste: [
        {
          naziv: "Papir i Karton",
          nazivi: [
            "Adresari",
            "Bilježnice",
            "Cigretne kutije",
            "Knjige",
            "Novine",
          ],
          naziviInfo: {},
        },
        {
          naziv: "Plastika i Metal",
          nazivi: ["Plastične boce", "Limenke", "Vrećice"],
          naziviInfo: {},
        },
        {
          naziv: "Staklo",
          nazivi: ["Staklene boce", "Staklenke"],
          naziviInfo: {},
        },
        {
          naziv: "Miješani Otpad",
          nazivi: ["Plastične vrećice s otpadom", "Mokri papir"],
          naziviInfo: {},
        },
        {
          naziv: "Bio Otpad",
          nazivi: ["Ostaci hrane", "Ljušture jaja", "Vrtlarski otpad"],
          naziviInfo: {},
        },
        {
          naziv: "Tekstil",
          nazivi: ["Odjeća", "Posteljina", "Krpe"],
          naziviInfo: {},
        },
        {
          naziv: "Reciklažna Dvorista",
          nazivi: ["Reciklažna Dvorista"],
          naziviInfo: {
            "Reciklažna Dvorista": {
              primarni: "Reciklirajte na reciklažnim dvorištima",
              alternativni: ["Zeleni Otok"],
            },
          },
        },
        {
          naziv: "Ostalo",
          nazivi: ["Ostalo"],
          naziviInfo: {
            Ostalo: {
              primarni:
                "Razvrstajte prema uputama lokalnog centra za prikupljanje otpada",
              alternativni: [],
            },
          },
        },
      ],
      odabranaVrsta: null,
      odabraniNaziv: null,
      odabraniNazivInfo: null,
    };
  },
  watch: {
    odabranaVrsta() {
      this.odabraniNaziv = null;
      this.odabraniNazivInfo = null;
    },
  },
  methods: {
    prikaziDetalje(naziv) {
      this.odabraniNaziv = naziv;
      const vrsta = this.vrste.find((v) => v.naziv === this.odabranaVrsta);
      this.odabraniNazivInfo = vrsta ? vrsta.naziviInfo[naziv] : null;
    },
  },
};
</script>