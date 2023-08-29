<template>
  <div>
    <h1 class="headline">Katalog Otpada</h1>
    <br />
    <v-row>
      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="headline">Papir i karton</div>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn to="/papir" class="elevation-12">Izaberi</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="headline">Plastika</div>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn to="/plastika" class="elevation-12">Izaberi</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="headline">Staklo</div>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn to="/staklo" class="elevation-12">Izaberi</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="headline">Mjesani Otpad</div>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn to="/mjesano" class="elevation-12">Izaberi</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="headline">Metal i aluminij</div>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn to="/metal" class="elevation-12">Izaberi</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>

      <v-col cols="12" sm="6" md="4">
        <v-card class="elevation-12">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="headline">Tekstil</div>
            </v-list-item-content>

            <v-list-item-action>
              <v-btn to="/tekstil" class="elevation-12">Izaberi</v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "KatalogOtpada",
  data: () => ({
    items: [
      { title: "Papir i Karton" },
      { title: "Plastika" },
      { title: "Staklo" },
      { title: "Mijesani Otpad" },
      { title: "Metal i aluminij" },
      { title: "Tekstil" },
    ],
  }),
};
</script>