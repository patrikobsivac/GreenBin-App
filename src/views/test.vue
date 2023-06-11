<template>
  <div>
    <div class="form-container">
      <form>
        <label>Garbage ID:</label>
        <input type="number" v-model="id" />
        <label>Garbage Capacity:</label>
        <input type="number" v-model="capacity" />
        <label>Garbage Address:</label>
        <input type="text" v-model="address" />
        <button @click.prevent="search()">Search and Check</button>
        &nbsp; &nbsp;
        <button
          a
          href="/menu"
          @click.prevent="confirm()"
          :disabled="!confirmBtn"
        >
          Confirm
        </button>
      </form>
    </div>
    <div>{{ output }}</div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      id: "",
      capacity: "",
      address: "",
      output: "",
      confirmBtn: false,
    };
  },

  methods: {
    search() {
      if (this.id === "" || this.capacity === "" || this.address === "")
        this.output = "Ova polja su obavezna!";
      else {
        this.output =
          "Garbage ID: " +
          this.id +
          ", Capacity: " +
          this.capacity +
          ", Address: " +
          this.address;
        this.confirmBtn = true;
      }
    },
    confirm() {
      if (this.id != "" && this.capacity != "" && this.address != "") {
        this.output = "Izvješće o otpadu uspješno potvrđeno!";
        this.$router.push({
          name: "Report",
        });
      } else {
        this.output = "Došlo je do pogreške pri potvrdi!";
      }
    },
  },
};
</script>

<style>
.form-container {
  width: 40%;
  margin: 2% auto;
  padding: 2%;
  border: 1px solid #ccc;
  border-radius: 5px;
}

label {
  display: block;
  margin-top: 6px;
}

input {
  padding: 5px 10px;
  font-size: 1em;
  width: 100%;
  margin-top: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  margin-top: 16px;
  padding: 10px 16px;
  font-size: 1em;
  border: none;
  border-radius: 4px;
  background-color: #1d1747;
  color: #fff;
}

div {
  margin-top: 10px;
  color: #a9a9a9;
}
</style>