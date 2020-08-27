<template>
  <!-- <h1 style="color:white;">Inside Results</h1> -->
  <v-container fluid>
    <div class="search-another">
      <DropDown style="z-index:2"/>
      <div class="search-another-btn">
        <md-button id="search-btn" class="md-raised md-accent search-btn">Search</md-button>
      </div>
    </div>

    <transition-group
      name="slide-fade"
      mode="out-in"
      tag="div"
      class="card-container"
      style="z-index:1;"
    >
      <div class="event-container" v-for="(item, i) in items" :key="i">
        <!-- <v-card id="schedule-card" class="ma-3 pa-6" :color="item.color" height="200">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img
                src="https://media.api-sports.io/football/leagues/528.png"
                contain
                max-width="70"
                max-height="70"
              >Sunday, 6:30pm</v-img>
            </v-avatar>
          </div>
        </v-card>-->
        <Card/>
      </div>
    </transition-group>

    <!-- <v-layout row wrap justify-space-between>
      <v-flex xs12 md4 v-for="(item, i) in items" :key="i">
        <v-card id="schedule-card" class="ma-3 pa-6" :color="item.color" height="200">
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="headline" v-text="item.title"></v-card-title>

              <v-card-subtitle v-text="item.artist"></v-card-subtitle>
            </div>

            <v-avatar class="ma-3" size="125" tile>
              <v-img
                src="https://media.api-sports.io/football/leagues/528.png"
                contain
                max-width="70"
                max-height="70"
              >Sunday, 6:30pm</v-img>
            </v-avatar>
          </div>
        </v-card>
      </v-flex>
    </v-layout>-->

    <!-- <v-row>
      <v-col cols="12">
        <v-row :align="center" :justify="space-between" centered>
          <v-card
            id="schedule-card"
            class="ma-3 pa-6"
            max-width="335"
            v-for="(item, i) in items"
            :key="i"
            :color="item.color"
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title class="headline" v-text="item.title"></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar class="ma-3" size="125" tile>
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-row>
      </v-col>
    </v-row>-->

    <!-- <h1 style="color:white;">{{$route.query.q}}</h1> -->
    <!-- <v-row>
      <v-col cols="12">
        <v-row :align="alignment" :justify="justify" class="grey lighten-5" style="height: 300px;">
          <v-card v-for="n in 12" :key="n" class="ma-3 pa-6" outlined tile>Column</v-card>
        </v-row>
      </v-col>
    </v-row>-->
  </v-container>
</template>

<script>
import DropDown from "./DropDown.vue";
import Card from "./Card.vue";

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
    DropDown,
    Card
  },
  data: () => ({
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People"
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding"
      }
    ],
    // alignmentsAvailable: ["start", "center", "end", "baseline", "stretch"],
    // alignment: "center",
    dense: false
  })
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

#search-btn {
  height: 43px;
  margin-inline-end: auto;
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>


