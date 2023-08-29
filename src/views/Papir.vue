<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          <h1>Papir i Karton</h1>
          <br />
        </v-col>
      </v-row>

      <p><strong>Što SPADA pod papir i karton?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Novine i časopisi </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Katalozi i prospekti </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Pisma </v-list-item-content>
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

      <p><strong>Što NE SPADA pod papir i karton?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Fotografije </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Prljavi papir </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Gumirane etikete </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Samoljepljiva folija </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content> Ambalaža od mlijeka </v-list-item-content>
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