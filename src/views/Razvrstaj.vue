<template>
  <v-app>
    <v-card>
      <h3>Katalog otpada</h3>
      <v-list>
        <v-list-item @click="toggle('papirKarton')">Papir i karton</v-list-item>
        <v-list-item @click="toggle('plastikaMetal')"
          >Plastika i metal</v-list-item
        >
        <v-list-item @click="toggle('staklo')">Staklo</v-list-item>
        <v-list-item @click="toggle('mijesaniOtpad')"
          >Miješani otpad</v-list-item
        >
        <v-list-item @click="toggle('bioOtpad')">Bio otpad</v-list-item>
        <v-list-item @click="toggle('tekstil')">Tekstil</v-list-item>
        <v-list-item @click="toggle('reciklaznaDvorista')"
          >Reciklazna d vorista</v-list-item
        >
        <v-list-item @click="toggle('ostalo')">Ostalo</v-list-item>
        <transition name="fade">
          <v-list-group
            v-if="showPapirKarton"
            class="pb-5"
            v-model="showPapirKarton"
          >
            <template v-slot:activator>
              <v-list-item-content>
                <v-list-item-title>Adresari</v-list-item-title>
              </v-list-item-content>
            </template>
            <v-list-item>
              <v-list-item-title>
                <h3>Primarni izbor razvrstavanja:</h3>
                <p>Spremnik za papir i karton.</p>
              </v-list-item-title>
              <v-list-item-content>
                <h3>Alternativni izbor razvrstavanja:</h3>
                <p>Reciklazna dvorista ili Zeleni otok.</p>
              </v-list-item-content>
            </v-list-item>
          </v-list-group>
        </transition>
        <!-- Svi ostali dijelovi -->
      </v-list>
    </v-card>
  </v-app>
</template>  

<script>
export default {
  data: () => ({
    showPapirKarton: false,
    showPlastikaMetal: false,
    showStaklo: false,
    showMijesaniOtpad: false,
    showBioOtpad: false,
    showTekstil: false,
    showReciklaznaDvorista: false,
    showOstalo: false,
  }),
  methods: {
    toggle(which) {
      this[which] = !this[which];
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>