<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col class="text-center">
          <h1>Metal i aluminij</h1>
          <br />
        </v-col>
      </v-row>

      <p><strong>Što SPADA pod metal i aluminij?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Aluminijska folija, poklopci čaša i jogurta
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="primary--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Limenke pića i prehrambenih proizvoda
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>

      <hr />

      <p><strong>Što NE SPADA pod metal i aluminij?</strong></p>

      <v-row>
        <v-col>
          <v-list class="pa-4">
            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Limenke pod tlakom (npr. sprejevi i dezodoransi)
              </v-list-item-content>
            </v-list-item>

            <v-list-item>
              <v-list-item-icon class="error--text">
                <v-icon dark>*</v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                Metalna ambalaža boja, ulja i pesticida
              </v-list-item-content>
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