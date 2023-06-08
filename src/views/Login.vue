<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0">
          <div class="text-center">
            <h1 class="mb-2">Login</h1>
          </div>
          <a
            href="#"
            name="Fedorae Education"
            title="Green Bin"
            target="_blank"
          >
            <v-img
              src="@/assets/recycle.png"
              alt="Green Bin App"
              contain
              height="200"
            ></v-img>
          </a>
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
                class="rounded-0"
                color="#000000"
                x-large
                block
                dark
                >Login</v-btn
              >
              <v-card-actions class="text--secondary">
                <v-spacer></v-spacer>
                <!-- <router-link :to="{ name: 'SignUp' }">Sign Up</router-link> -->
                Nemate račun?
                <a href="/signup" class="pl-2" style="color: #000000"
                  >Registriraj</a
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
import { firebase } from "@/firebase";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("login..." + this.username);

      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Uspješna prijava", result);
          this.$router.push({ name: "home" });
        })
        .catch(function (e) {
          console.error("Greška", e);
        });
    },
  },
};
</script>

<style lang="css" scoped>
</style>
