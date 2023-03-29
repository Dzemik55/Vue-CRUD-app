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
        <label for="clock_speed">Clock Speed [Mhz]</label>
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
        <label for="size">Size [GB]</label>
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
        <label for="CAS_latency">CAS Latency [CL]</label>
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
      <select class="form-control" id="type" v-model="ram.ECC_status">
        <option value="false">false</option>
        <option value="true">true</option>
      </select>
    </div>
    <div class="form-group">
      <label for="price">Price [€]</label>
      <input
          type="text"
          class="form-control"
          id="price"
          required
          v-model="ram.price"
          name="price"
      />
    </div>
<!--    <div class="form-group">-->
<!--      <label for="price">Type</label>-->
<!--      <input-->
<!--          type="text"-->
<!--          class="form-control"-->
<!--          id="type"-->
<!--          required-->
<!--          v-model="ram.type"-->
<!--          name="type"-->
<!--      />-->
<!--    </div>-->
    <div class="form-group">
      <label for="type_id">Type</label>
      <select class="form-control" id="type" v-model="ram.type_id">
        <option value="1">DDR2</option>
        <option value="2">DDR3</option>
        <option value="3">DDR4</option>
        <option value="4">DDR5</option>
      </select>
    </div>

<button @click="saveRAM" class="btn btn-success">Submit</button>
  </div>
  <div v-else>
    <h4>You submitted successfully!</h4>
    <button class="btn btn-success mr-2" @click="newRAM">Add</button>
    <router-link
        to="/"
        custom
        v-slot="{ navigate }"
    >
      <button class="btn btn-primary"
              @click="navigate"
              role="link"
      >
        RAM List
      </button>
    </router-link>
  </div>
</div>
</template>

<script>
import RAMDataService from "../services/RAMDataService";

export default {
  name: "add-ram",
  data() {
    return {
      ram: {
        id: null,
        brand: "",
        model: "",
        clock_speed: "",
        size: "",
        CAS_latency: "",
        ECC_status: "",
        price: "",
        type_id: ""
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
        type_id: this.ram.type_id
      };

      RAMDataService.create(data)
        .then(response => {
          this.ram.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
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