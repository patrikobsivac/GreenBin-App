<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          <h1>Plastika</h1>
          <br />
        </v-col>
      </v-row>

      <p><strong>Što SPADA pod plastikom?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Sredstva za čišćenje i pranje
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Boce za osvježavajuće napitke i plastični
                čepovi</v-list-item-content
              >
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Zaštitna plastična ambalaža
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Knjige </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Ambalaža od papira </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <hr />

      <p><strong>Što NE SPADA pod plastikom?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Ambalaže sprejeva, ambalaže kemikalija
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Plastične igračke </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Ambalaža onečišćena opasnim tvarima
              </v-list-item-content>
            </v-list-item> </v-list
          ><br />
          <v-btn
            to="/razvrstaj"
            class="elevation-12"
            color="green"
            style="color: white"
            >Natrag</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style>
@import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap");

body {
  font-family: "Roboto", sans-serif;
}
</style>