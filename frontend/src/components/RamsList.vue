<template>
<div class="list row">
  <div class="col-md-8">
    <div class="input-group mb-3">

  </div>
</div>
  <div class="col-md-6">
    <h4>RAMs List</h4>

    <ul class="list-group">
      <li class="list-group-item"
          :class="{ active: index == currentIndex}"
          v-for="(ram, index) in rams"
          :key="index"
          @click="setActiveRAM(ram, index)">

        {{ ram.brand }} <br>{{ ram.model }} <br>
        {{typesMap[ram.type_id]}}
      </li>
    </ul>
    </div>
  <div class="col-md-6">
    <div v-if="currentRAM">
    <h4>RAM details</h4>
    <div>
      <label><strong>Brand:</strong></label> {{ currentRAM.brand }}
    </div>
    <div>
      <label><strong>Model:</strong></label> {{ currentRAM.model }}
    </div>
    <div>
      <label><strong>Clock Speed [Mhz]:</strong></label> {{ currentRAM.clock_speed }}
    </div>
    <div>
      <label><strong>Size [GB]:</strong></label> {{ currentRAM.size }}
    </div>
    <div>
      <label><strong>CAS Latency [CL]:</strong></label> {{ currentRAM.CAS_latency }}
    </div>
    <div>
      <label><strong>ECC status:</strong></label> {{ currentRAM.ECC_status }}
    </div>
    <div>
      <label><strong>Price [€]:</strong></label> {{ currentRAM.price }}
    </div>
    <div>
      <label><strong>Type:</strong></label> {{ typesMap[currentRAM.type_id] }}
    </div>

    <h4><router-link :to="'/rams/' + currentRAM.id" class="badge badge-warning">Edit</router-link></h4>
  </div>
  <div v-else>
    <br>
    <p>Click on a RAM</p>
  </div>
</div>
</div>

</template>

<script>
import RAMDataService from "../services/RAMDataService";
import typesDataService from "../services/typesDataService";
export default {
  name: "RamsList",
  data() {
    return {
      rams: [],
      types:[],
      typesMap: {},
      currentRAM: null,
      currentType: null,
      currentIndex: -1,
    };
  },
  methods: {
    retrieveRAMs() {
      RAMDataService.getAll()
          .then(response => {
            this.rams = response.data;
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    retrieveTypes() {
      typesDataService.getAll()
          .then(response => {
            this.types = response.data;
            this.typesMap = this.types.reduce((map, type) => {
              map[type.id] = type.name;
              return map;
            }, {})
            console.log(response.data);
          })
          .catch(e => {
            console.log(e);
          });
    },
    setActiveRAM(ram, index) {
      this.currentRAM = ram;
      this.currentIndex = ram ? index : -1;
    },
  },
  mounted() {
    this.retrieveRAMs();
    this.retrieveTypes();
  }
};
</script>

<style>
.list{
  text-align: left;
  max-width: 750px;
  margin: auto;
}

</style>