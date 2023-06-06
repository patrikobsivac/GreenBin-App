<template>
  <div>
    <!-- App Navbar -->
    <nav>
      <div>
        <h3>Main Menu</h3>
        <ul>
          <li v-on:click="searchAndCheck()"><a>Pretrazi i provjeri</a></li>
          <li v-on:click="createSpamReport()"><a>Kreiraj prijavu smeca</a></li>
          <li v-on:click="sendAddress()"><a>Poslaji Adresu</a></li>
        </ul>
      </div>
    </nav>

    <!-- ID, Kapacitet, Adresa -->
    <div>
      <h4>ID, Kapacitet, Adresa</h4>
      <ul>
        <li v-on:click="captureID()"><a>ID</a></li>
        <li v-on:click="captureCapacity()"><a>Kapacitet</a></li>
        <li v-on:click="captureAddress()"><a>Adresa</a></li>
      </ul>
    </div>
  </div>
</template>