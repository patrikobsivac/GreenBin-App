<template>
  <v-app>
    <v-main>
      <div id="app">
        <div id="nav">
          <nav class="navbar navbar-light bg-light">
            <a class="navbar-brand" href="#">
              <img
                src="@/assets/GreenBin.png"
                width="35"
                height="35"
                class="d-inline-block align-top"
                alt=""
              />Green Bin</a
            >
          </nav>
          <router-link to="/">Home</router-link>
          &nbsp;
          <router-link to="/login">Login</router-link>
          &nbsp;
          <router-link to="/signup">Signup</router-link>
        </div>
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #181a1b;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>




