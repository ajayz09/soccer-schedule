
<template>
  <div class="main-container">
    <h1 style="color:white;margin-bottom:30px;">Check your favourite teams schedule</h1>
    <div class="drop-down-home">
      <DropDown style="z-index:2" @onItemSelected="itemSelected" @onItemReset="itemReset"/>
    </div>
    <div class="search">
      <md-button class="md-raised md-accent" @click="searchSchedule()">Search</md-button>
    </div>
    <v-snackbar v-model="snackbar">
      {{ text }}
      <template v-slot:action="{ attrs }">
        <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import DropDown from "./DropDown.vue";

export default {
  name: "Home",
  components: {
    DropDown
  },
  data: () => ({
    selectedClub: [],
    isSelected: false,
    snackbar: false,
    text: "Select a team first"
  }),
  methods: {
    searchSchedule() {
      console.log("is selected", this.isSelected);
      if (!this.isSelected) {
        this.snackbar = true;
        return;
      }
      this.$router.push("results?q=" + this.selectedClub.team_id);
    },
    itemSelected(item) {
      this.isSelected = true;
      this.selectedClub = item;
    },
    itemReset(value) {
      this.isSelected = value;
    }
  }
};
</script>

<style>
.main-container {
  position: relative;
  margin-top: 80px;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.drop-down-home {
  max-width: 400px;
  margin: 0 auto;
}

.search {
  position: fixed;
  pointer-events: visible;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 40px;
  z-index: 1;
}
</style>