<template>
  <v-bottom-navigation :value="value" app color="#D29433" grow dark>
    <v-btn value="home" to="/home">
      <span>Home</span>

      <v-icon>mdi-home</v-icon>
    </v-btn>
    &nbsp;
    <v-btn value="log" to="/login">
      <span>Login</span>

      <v-icon>mdi-chart-box</v-icon>
    </v-btn>
    &nbsp;
    <v-btn value="sign" to="/signup">
      <span>Signup</span>

      <v-icon>mdi-application-edit-outline</v-icon>
    </v-btn>
    &nbsp;
    <v-btn value="profile" to="/profile">
      <span>Profile</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({ value: 1 }),
};
</script>