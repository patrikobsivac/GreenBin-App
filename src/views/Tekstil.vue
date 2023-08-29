<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          <h1>Tekstil</h1>
          <br />
        </v-col>
      </v-row>

      <p><strong>Što SPADA pod tekstilom?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>done</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Suha odjeća (košulje, hlače i kaputi)
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>done</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Kućanski tekstil (ručnici i krpe)
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>done</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Obuća </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <hr />

      <p><strong>Što NE SPADA pod tekstilom?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>clear</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Popluni </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>clear</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Mokra odjeća i obuća </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>clear</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Pernati jastuci </v-list-item-content>
            </v-list-item> </v-list
          ><br />
          <v-btn to="/razvrstaj" class="elevation-12" color="green"
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