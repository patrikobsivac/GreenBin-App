<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          <h1>Mješoviti otpad</h1>
          <br />
        </v-col>
      </v-row>

      <p><strong>Što SPADA pod mješovitim otpadom?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>done</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Ostaci hrane </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>done</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Prljavi papir </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>done</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Kozmetički proizvodi </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <hr />

      <p><strong>Što NE SPADA pod mješovitim otpadom?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>clear</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Staklo </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>clear</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Baterije </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>clear</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Papiri karton </v-list-item-content>
            </v-list-item> </v-list
          ><br />
          <v-btn href="/razvrstaj" class="elevation-12" color="green"
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