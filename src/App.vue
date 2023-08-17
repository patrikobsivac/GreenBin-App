<template>
  <v-app>
    <v-main>
      <div id="app">
        <div id="nav">
          <nav class="navbar navbar-dark bg-dark">
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
  // background-color: #181a1b;
  color: #2c3e50;
  background-color: #dedede;
}

#nav {
  padding: 30px;
  background-color: #dedede;

  a {
    font-weight: bold;
    //color: #2c3e50;
    color: white;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

#nav a {
  font-weight: bold;
  color: whitesmoke;
}

#nav navbar navbar-dark bg-dark {
  background-color: #dedede;
}

.navbar-brand {
  color: #343a40;
}

/* color: dedede; */
</style>




