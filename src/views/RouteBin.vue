<template>
  <v-container class="text-center">
    <h1>Ruta smeća</h1>
    <v-row align="center">
      <v-col>
        <v-text-field label="Id rute" v-model="id_route"></v-text-field>
        <v-text-field
          label="Početna točka"
          v-model="start_point"
        ></v-text-field>
        <v-text-field label="Završna točka" v-model="end_point"></v-text-field>
        <v-text-field label="Udaljenost" v-model="distance"></v-text-field>
        <v-text-field
          label="Vrijeme između dvije točke"
          v-model="time_between"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn
      to="/menu"
      @click="calculateRoute"
      :disabled="start_point === '' || end_point === ''"
    >
      Izračunaj rutu
    </v-btn>
    <div class="col-lg-10 mx-auto">
      <v-btn type="button" color="green" style="color: white" to="/menu"
        >Natrag</v-btn
      >
    </div>
  </v-container>
</template> 

<script>
import GoBack from "@/components/GoBack";
import { db } from "/firebase.js";
export default {
  components: {
    GoBack,
  },
  data() {
    return {
      id_route: "",
      start_point: "",
      end_point: "",
      distance: 0,
      time_between: 0,
    };
  },
  methods: {
    calculateRoute() {
      let start_point_latlng = this.start_point.split(",");
      let end_point_latlng = this.end_point.split(",");

      let start_point_lat = start_point_latlng[0];
      let start_point_lon = start_point_latlng[1];

      let end_point_lat = end_point_latlng[0];
      let end_point_lon = end_point_latlng[1];

      let dist = this.getDistanceFromLatLonInKm(
        start_point_lat,
        start_point_lon,
        end_point_lat,
        end_point_lon
      );
      console.log(dist);

      let time = this.getTimeBetweenPoints(dist);
      console.log(time);

      this.id_route = start_point + "_" + end_point;
      this.distance = dist;
      this.time_between = time;

      let message = `Ruta je ${this.start_point} - ${this.end_point}, Udaljenost je ${dist} i
                   Vrijeme potrebno za prijelaz ove dvije točke je ${time}`;
      alert(message);
    },

    getDistanceFromLatLonInKm(lat1, lon1, lat2, lon2) {
      var R = 6371;
      var dLat = this.deg2rad(lat2 - lat1);
      var dLon = this.deg2rad(lon2 - lon1);
      var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(this.deg2rad(lat1)) *
          Math.cos(this.deg2rad(lat2)) *
          Math.sin(dLon / 2) *
          Math.sin(dLon / 2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
      var d = R * c;
      return d;
    },

    deg2rad(deg) {
      return deg * (Math.PI / 180);
    },

    getTimeBetweenPoints(dist) {
      const speed = 50; // km/h
      let time = dist / speed;
      return time;
    },
  },
};
</script>

<style>
.text-center {
  align-self: center;
  text-align: center;
}
</style>