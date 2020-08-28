<template>
  <v-container fluid>
    <div v-if="loading" class="loading-spinner">
      <Spinner/>
    </div>
    <div v-else>
      <div class="search-another">
        <DropDown style="z-index:2" @onItemSelected="itemSelected" @onItemReset="itemReset"/>
        <div class="search-another-btn">
          <md-button
            id="search-btn"
            class="md-raised md-accent search-btn"
            @click="searchAnotherSchedule()"
          >Search</md-button>
        </div>
        <v-snackbar v-model="snackbar">
          {{ text }}
          <template v-slot:action="{ attrs }">
            <v-btn color="pink" text v-bind="attrs" @click="snackbar = false">Close</v-btn>
          </template>
        </v-snackbar>
      </div>

      <transition-group appear name="slide-in" tag="div" class="card-container" style="z-index:1;">
        <div class="event-container" v-for="(item,i) in results" :key="i">
          <Card :item="item"/>
        </div>
      </transition-group>
    </div>
  </v-container>
</template>

<script>
import DropDown from "./DropDown.vue";
import Card from "./Card.vue";
import Spinner from "./Spinner.vue";
import json from "../../data/api.json";

export default {
  name: "Results",
  created() {
    this.fetchResults();
  },
  components: {
    DropDown,
    Card,
    Spinner
  },
  data: () => ({
    dense: false,
    snackbar: false,
    text: "Select a team first",
    isSelected: false,
    selectedClub: [],
    results: [],
    loading: true,
    apiData: json
  }),
  methods: {
    fetchResults() {
      console.log(this.$route);
      fetch(
        "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/" +
          this.$route.query.q +
          "/next/12",
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": this.apiData.host,
            "x-rapidapi-key": this.apiData.key
          }
        }
      )
        .then(response => {
          this.loading = false;

          return response.json();
        })
        .then(data => {
          this.results = data.api.fixtures;
          console.log(this.results);
        })
        .catch(err => {
          console.log(err);
        });
    },
    itemSelected(item) {
      this.isSelected = true;
      this.selectedClub = item;
    },
    itemReset(value) {
      this.isSelected = value;
    },
    searchAnotherSchedule() {
      console.log("is selected", this.isSelected);
      if (!this.isSelected) {
        this.snackbar = true;
        return;
      }
      // Avoiding duplicate navigation
      if (this.selectedClub.team_id != this.$route.query.q) {
        this.$router.push("results?q=" + this.selectedClub.team_id);
        this.fetchResults();
      }
    }
  }
};
</script>

<style>
.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.search-another {
  margin-top: 10px;
  display: flex;
  justify-content: space-around;
}

.search-another-btn .search-btn {
  border-radius: 8px !important;
}

.loading-spinner {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -10;
  /* background-color: white; */
  background-color: rgba(236, 232, 232, 0.815);
}

#search-btn {
  height: 43px;
  margin-inline-end: auto;
}

.fade-in-enter-active {
  transition: all 3s ease;
}

.fade-in-leave-active {
  transition: all 3s ease;
}

.fade-in-enter,
.fade-in-leave-to {
  position: absolute; /* add for smooth transition between elements */
  opacity: 0;
}
</style>


