<template>
  <!-- <h1 style="color:white;">Inside Results</h1> -->
  <v-container fluid>
    <DropDown/>
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
    // fetch(
    //   "https://api-football-v1.p.rapidapi.com/v2/fixtures/team/" +
    //     this.$route.query.q +
    //     "/next/10",
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
    //       "x-rapidapi-key": "c878d920a7msh960c77c641d7753p18ffd2jsn4467624a1a46"
    //     }
    //   }
    // )
    //   .then(response => {
    //     console.log(response.json());
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
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
</style>


