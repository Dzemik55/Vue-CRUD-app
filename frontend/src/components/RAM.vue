<template>
  <div v-if="currentRAM" class="edit-form">
    <h4>RAM</h4>
    <form>
      <div class="form-group">
        <label for="brand">Brand</label>
        <input type="text" class="form-control" id="brand"
               v-model="currentRAM.brand"
        />
      </div>
      <div class="form-group">
        <label for="model">Model</label>
        <input type="text" class="form-control" id="model"
               v-model="currentRAM.model"
        />
      </div>
      <div class="form-group">
        <label for="clock_speed">Clock Speed [Mhz]</label>
        <input type="text" class="form-control" id="clock_speed"
               v-model="currentRAM.clock_speed"
        />
      </div>
      <div class="form-group">
        <label for="size">Size [GB]</label>
        <input type="text" class="form-control" id="size"
               v-model="currentRAM.size"
        />
      </div>
      <div class="form-group">
        <label for="CAS_latency">CAS Latency [CL]</label>
        <input type="text" class="form-control" id="CAS_latency"
               v-model="currentRAM.CAS_latency"
        />
      </div>
      <div class="form-group">
        <label for="ECC_status">ECC Status</label>
        <input type="text" class="form-control" id="ECC_status"
               v-model="currentRAM.ECC_status"
        />
      </div>
      <div class="form-group">
        <label for="price">Price [€]</label>
        <input type="text" class="form-control" id="price"
               v-model="currentRAM.price"
        />
      </div>
      <div class="form-group">
        <label for="type_id">Type</label>
        <select class="form-control" id="type" v-model="currentRAM.type_id">
          <option value="1">DDR2</option>
          <option value="2">DDR3</option>
          <option value="3">DDR4</option>
          <option value="4">DDR5</option>
        </select>
      </div>


    </form>

    <button class="badge badge-danger mr-2"
            @click="deleteRAM"
    >
      Delete
    </button>

    <button type="submit" class="badge badge-success mr-2"
            @click="updateRAM"
    >
      Update
    </button>

    <router-link
        to="/"
        custom
        v-slot="{ navigate }"
    >
      <button class="badge badge-primary"
          @click="navigate"
          role="link"
      >
        RAM List
      </button>
    </router-link>


    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a RAM</p>
  </div>
</template>

<script>
import RAMDataService from "../services/RAMDataService";

export default {
  name: "rams-edit",
  data() {
    return {
      currentRAM: null,
      message: ''
    };
  },
  methods: {
    getRAM(id) {
      RAMDataService.get(id)
          .then(response => {
            this.currentRAM = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    updateRAM() {
      RAMDataService.update(this.currentRAM.id, this.currentRAM)
          .then(response => {
            console.log(response.data);
            this.message = 'RAM was updated successfully!';
          })
          .catch(e => {
            console.log(e);
          });
    },

    deleteRAM() {
      RAMDataService.delete(this.currentRAM.id)
          .then(response => {
            console.log(response.data);
            this.$router.push({ name: "rams" });
          })
          .catch(e => {
            console.log(e);
          });
    }
  },
  mounted() {
    this.message = '';
    this.getRAM(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>