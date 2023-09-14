<template>
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center" dense>
      <v-col cols="12" sm="8" md="4" lg="4">
        <v-card elevation="0" class="signup-card">
          <div class="text-center">
            <h1 class="mb-2">Signup</h1>
          </div>
          <v-img
            src="@/assets/recycle.png"
            alt="Green Bin"
            contain
            height="200"
          ></v-img>
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
                color="#ffffff"
                x-large
                block
                light
              >
                KREIRAJ
              </v-btn>
              <v-card-actions class="text--secondary">
                <v-spacer></v-spacer>
                Več imate račun?
                <router-link to="/login" class="pl-2" style="color: black">
                  Prijavite se
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
import {
  doc,
  setDoc,
  auth,
  db,
  createUserWithEmailAndPassword,
} from "/firebase.js";
export default {
  name: "Signup",
  components: {},
  data() {
    return {
      isButtonDisabled: false,
      name: null,
      username: null,
      password: null,
      passwordRepeat: "",
      rules: {
        required: (value) => !!value || "Required.",
        email: (v) =>
          !v ||
          /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
          "E-mail mora bit valjan!",
      },
    };
  },
  created() {},
  mounted() {},
  destroyed() {},
  methods: {
    postActionMoveToView() {
      this.$router.push({ path: "/login" });
    },
    async saveAdditionalData(user, username, name) {
      await setDoc(doc(db, "korisnici", username), {
        Email: username,
        Name: name,
        AuthorisationType: "Korisnik",
      });
    },
    signup() {
      debugger;
      const username = this.username;
      const password = this.password;
      createUserWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          alert("Uspješno registrirano.");
          console.log(userCredential);
          const user = userCredential.user;
          const name = this.name;
          this.saveAdditionalData(user, username, name);
          this.postActionMoveToView();
        })
        .catch((error) => {
          alert("Došlo je do pogreške", error);
        });
    },
  },
};
</script>

<style lang="css" scoped>
.signup-card[data-v-024d905c] {
  padding: 20px;
  background-color: #ffffff;
}

h1.mb-2 {
  color: blacksmoke;
}

#nav a {
  color: white;
}

#pl-2 {
  color: blacksmoke;
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

.theme--light.v-input input,
.theme--light.v-input textarea {
  color: rgb(255 255 255 / 87%);
}
</style>