<template>
  <!-- <h1 style="color:white;">Inside Results</h1> -->
  <v-container fluid>
    <div class="search-another">
      <DropDown/>
      <div class="search-another-btn">
        <md-button class="material-icons" style="background:white;border-radius:20%">
          <md-icon>search</md-icon>
        </md-button>
      </div>
      <!-- <span class="material-icons search-again-icon">search</span> -->
    </div>

    <!-- <h1 style="color:white;">{{$route.query.q}}</h1>
    <v-row>
      <v-col cols="12">
        <v-row :align="alignment" :justify="justify" class="grey lighten-5" style="height: 300px;">
          <v-card v-for="n in 12" :key="n" class="ma-3 pa-6" outlined tile>Column</v-card>
        </v-row>
      </v-col>
      <v-col cols="12">
        <v-row justify="center">
          <v-col cols="6" md="2">
            <v-select v-model="alignment" :items="alignmentsAvailable" label="Align"></v-select>
          </v-col>

          <v-col cols="6" md="2">
            <v-select v-model="justify" :items="justifyAvailable" label="Justify"></v-select>
          </v-col>
        </v-row>
      </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
import DropDown from "./DropDown.vue";
export default {
  name: "Results",
  created() {
    console.log(this.$route);
  },
  components: {
    DropDown
  },
  data() {
    return {
      alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
      alignment: "center",
      dense: false,
      justifyAvailable: [
        "start",
        "center",
        "end",
        "space-around",
        "space-between"
      ],
      justify: "center"
    };
  }
};
</script>

<style>
.search-another {
  display: flex;
}

.search-another-btn .search-btn {
  border-radius: 8px !important;
}
</style>


