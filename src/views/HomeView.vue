<template>
  <v-app>
    <v-main>
      <v-container>
        <h1>Green Bin</h1>
        <v-btn color="red" class="mx-1">{{ loginBtnText }}</v-btn>
        <v-btn color="blue" class="mx-1">{{ signupBtnText }}</v-btn>
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