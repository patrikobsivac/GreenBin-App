<template>
  <v-app style="background-color: #181a1b">
    <v-main class="container">
      <h1 class="display-4">Green Bin</h1>
      <p class="lead">Web aplikacija za rasporeda odvoza otpada</p>
      <v-row class="py-5" justify="center">
        <v-btn
          color="green"
          class="mx-4"
          a
          href="/login"
          style="color: white"
          >{{ loginBtnText }}</v-btn
        >
        <v-btn
          color="white"
          class="mx-4"
          a
          href="/signup"
          style="color: black"
          >{{ signupBtnText }}</v-btn
        >
      </v-row>
    </v-main>
  </v-app>
</template>


<script>
export default {
  data: () => ({
    loginBtnText: "Login",
    signupBtnText: "Signup",
  }),
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #181a1b; */
}

.py-5 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}

.container[data-v-9ea40744] {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #232425; */
  background-color: #dedede;
}

.lead {
  color: gray;
}

p {
  color: whitesmoke;
}

h1 {
  color: gray;
}
</style>