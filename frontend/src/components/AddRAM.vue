<template>
<div class="submit-form">
  <div v-if="!submitted">
    <div class="form-group">
      <label for="brand">Brand</label>
      <input
        type="text"
        class="form-control"
        id="brand"
        required
        v-model="ram.brand"
        name="brand"
        />
    </div>
    <div class="form-group">
      <label for="model">Model</label>
      <input
        type="text"
        class="form-control"
        id="model"
        required
        v-model="ram.model"
        name="model"
        />
      </div>
      <div class="form-group">
        <label for="clock_speed">Clock Speed</label>
        <input
            type="text"
            class="form-control"
            id="clock_speed"
            required
            v-model="ram.clock_speed"
            name="clock_speed"
        />
      </div>
      <div class="form-group">
        <label for="size">Size</label>
        <input
          type="text"
          class="form-control"
          id="size"
          required
          v-model="ram.size"
          name="size"
          />
      </div>
      <div class="form-group">
        <label for="CAS_latency">CAS Latency</label>
        <input
          type="text"
          class="form-control"
          id="CAS_latency"
          required
          v-model="ram.CAS_latency"
          name="CAS_latency"
          />
      </div>
    <div class="form-group">
      <label for="CAS_latency">CAS Latency</label>
      <input
          type="text"
          class="form-control"
          id="CAS_latency"
          required
          v-model="ram.CAS_latency"
          name="CAS_latency"
      />
    </div>
    <div class="form-group">
      <label for="ECC_status">ECC Status</label>
      <input
          type="text"
          class="form-control"
          id="ECC_status"
          required
          v-model="ram.ECC_status"
          name="ECC_status"
      />
    </div>
    <div class="form-group">
      <label for="ECC_status">ECC Status</label>
      <input
          type="text"
          class="form-control"
          id="ECC_status"
          required
          v-model="ram.ECC_status"
          name="ECC_status"
      />
    </div>
    <div class="form-group">
      <label for="price">Price</label>
      <input
          type="text"
          class="form-control"
          id="price"
          required
          v-model="ram.price"
          name="price"
      />
    </div>
    <div class="form-group">
      <label for="type">Type</label>
      <select id="type" name="type">
        <option value="DDR3">DDR3</option>
        <option value="DDR4">DDR4</option>
        <option value="DDR5">DDR5</option>
      </select>
    </div>

<button @click="saveRAM" class="btn btn-success">Submit</button>
  </div>
  <div v-else>
    <h4>You submitted successfully!</h4>
    <button class="btn btn-success" @click="newRAM">Add</button>
  </div>
</div>
</template>

<script>
import RAMDataService from "../services/ram.service";

export default {
  name: "AddRAM",
  data() {
    return {
      ram: {
        brand: "",
        model: "",
        clock_speed: "",
        size: "",
        CAS_latency: "",
        ECC_status: "",
        price: "",
        type: ""
      },
      submitted: false
    };
  },
  methods: {
    saveRAM() {
      let data = {
        brand: this.ram.brand,
        model: this.ram.model,
        clock_speed: this.ram.clock_speed,
        size: this.ram.size,
        CAS_latency: this.ram.CAS_latency,
        ECC_status: this.ram.ECC_status,
        price: this.ram.price,
        type: this.ram.type
      };

      RAMDataService.create(data)
        .then(response => {
          this.ram.brand = response.data.brand;
          this.ram.model = response.data.model;
          this.ram.clock_speed = response.data.clock_speed;
          this.ram.size = response.data.size;
          this.ram.CAS_latency = response.data.CAS_latency;
          this.ram.ECC_status = response.data.ECC_status;
          this.ram.price = response.data.price;
          this.ram.type = response.data.type;

          this.submitted = true;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },

    newRAM() {
      this.submitted = false;
      this.ram = {};
    }
  }
};
</script>

<style>
.submit-form{
  max-width: 300px;
  margin: auto;
}
</style>