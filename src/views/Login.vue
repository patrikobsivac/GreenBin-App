<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="login-card">
          <div class="text-center">
            <h1 class="mb-2">Prijava</h1>
          </div>
          <v-img
            src="@/assets/recycle.png"
            alt="Green Bin"
            contain
            height="200"
          ></v-img>
          <v-card-text>
            <v-form>
              <v-text-field
                label="E-Mail"
                name="email"
                prepend-inner-icon="mdi-email"
                type="email"
                v-model="username"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Lozinka"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                v-model="password"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-btn
                type="submit"
                @click="login()"
                :disabled="username.length == 0 || password.length < 4"
                class="rounded-0"
                color="#ffffff"
                background-color="#00000"
                a
                href="#"
                x-large
                block
                light
                >Prijava</v-btn
              >
              <v-alert
                :value="showAlert"
                type="error"
                color="error"
                class="mt-3"
              >
                {{ alertMessage }}
              </v-alert>
              <v-card-actions
                class="text--secondary d-flex justify-center"
                color="secondary"
              >
                Nemate račun?
                <router-link
                  :to="{ name: 'SignUp' }"
                  class="pl-2"
                  style="color: black"
                  target="_blank"
                  a
                  href="/signup"
                >
                  Registrirajte se
                </router-link>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { signInWithEmailAndPassword, auth, db } from "/firebase.js";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      showAlert: false,
      alertMessage: "",
    };
  },
  methods: {
    login() {
      if (this.username.length == 0 || this.password.length < 3) {
        this.alertMessage = "Molimo vas da ispunite oba polja za prijavu!";
        this.showAlert = true;
      } else {
        console.log("login..." + this.username);
        signInWithEmailAndPassword(auth, this.username, this.password)
          .then((result) => {
            console.log("Uspješna prijava", result);
            this.$router.push({ path: "/menu" });
          })
          .catch(function (e) {
            console.error("Greška", e);
          });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.login-card {
  padding: 20px;
  background-color: #272a2b;
}

.mb-2 {
  color: blacksmoke;
}

.theme--light.v-input input,
.theme--light.v-input textarea {
  background-color: rgba(0, 0, 0, 0.87);
}

.login-card[data-v-26084dc2] {
  padding: 20px;
  background-color: #ffffff;
}

.v-btn__content {
  align-items: center;
  color: black;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
}

.theme--dark.v-btn {
  color: #000000;
}
</style>