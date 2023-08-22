<template>
  <div class="center">
    <div>
      <h1>Menu</h1>
      <br /><br />
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/report"
        @click="changePage('page1')"
        >Prijava Smeća</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/route"
        @click="changePage('page2')"
        >Ruta smeća</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/status"
        @click="changePage('page3')"
        >Status</v-btn
      >
      <v-btn
        large
        class="mx-2"
        color="green"
        a
        href="/"
        @click="changePage('page4')"
        >Logout</v-btn
      >
    </div>
  </div>
</template>

<style>
.center {
  text-align: center;
}
</style>

<script>
export default {
  methods: {
    changePage(page) {
      this.$router.push({
        name: page,
      });
    },
  },
};
</script>