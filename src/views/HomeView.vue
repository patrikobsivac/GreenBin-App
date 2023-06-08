<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Green Bin</h1>
        <p>Web aplikacija za rasporeda odvoza otpada</p>
        <br />
        <v-btn color="red" class="mx-1" a href="/login">{{
          loginBtnText
        }}</v-btn>
        <v-btn color="blue" class="mx-1" a href="/signup">{{
          signupBtnText
        }}</v-btn>
      </v-container>
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

