<template>
  <v-app>
    <v-main>
      <v-container>
        <h1 class="headline">Kontakti</h1>
        <v-card>
          <v-card-title class="justify-center"
            ><b>Kontakt informacije</b></v-card-title
          >
          <v-card-text>
            <p><strong>Broj mobitela:</strong> +385 91 123 4567</p>
            <p><strong>Email:</strong> pobsivac@unipu.hr</p>
          </v-card-text>
          <v-card-actions class="justify-center">
            <a href="/menu" class="v-btn v-btn--contained v-btn--primary"
              >Natrag</a
            >
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<style>
.v-card__title {
  align-items: center;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  font-size: 1.25rem;
  font-weight: 500;
  letter-spacing: 0.0125em;
  line-height: 2rem;
  word-break: break-all;
}
.justify-center {
  justify-content: center;
}
</style>