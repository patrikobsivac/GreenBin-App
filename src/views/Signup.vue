<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="signup-card">
          <div class="text-center">
            <h1 class="mb-2">Signup</h1>
          </div>
          <a
            href="https://github.com/patrikobsivac/GreenBin-App"
            name="Green Bin"
            title="Green Bin"
            target="_blank"
          >
            <v-img
              src="@/assets/recycle.png"
              alt="Green Bin"
              contain
              height="200"
            ></v-img>
          </a>
          <v-card-text class="text-white">
            <v-form>
              <v-text-field
                style
                label="Unesi ime"
                name="name"
                prepend-inner-icon="mdi-account"
                type="text"
                input
                v-model="name"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Unesi E-Mail"
                name="email"
                prepend-inner-icon="mdi-email"
                type="email"
                input
                v-model="username"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Unesi lozinku"
                name="password"
                prepend-inner-icon="mdi-lock"
                type="password"
                input
                v-model="password"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-text-field
                label="Ponovno unesi lozinku"
                name="password"
                prepend-inner-icon="mdi-lock-outline"
                type="password"
                v-model="passwordRepeat"
                class="rounded-0"
                outlined
              ></v-text-field>
              <v-btn
                type="button"
                @click="signup"
                :disabled="
                  !name ||
                  !username ||
                  !password ||
                  !passwordRepeat ||
                  password != passwordRepeat
                "
                class="rounded-0"
                color="#000000"
                x-large
                block
                dark
              >
                KREIRAJ
              </v-btn>
              <v-card-actions class="text--secondary">
                <v-spacer></v-spacer>
                Već imate račun?
                <a href="/login" class="pl-2" style="color: whitesmoke"
                  >Login</a
                >
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { createUserWithEmailAndPassword, auth, db } from "/firebase.js";
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      createUserWithEmailAndPassword(auth, this.username, this.password)
        .then(function () {
          console.log("Uspješna registracija");
        })
        .then(() => {
          this.$router.push({ path: "/login" });
        })
        .catch(function (error) {
          console.error("Došlo je do greške", error);
        });
      console.log("Nastavak");
    },
  },
};
</script>

<style lang="css" scoped>
.signup-card {
  padding: 20px;
  background-color: #272a2b;
}

.text-center {
  color: whitesmoke;
}

#nav a {
  color: white;
}

.theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgb(255 255 255 / 87%);
}
</style>