<template>
  <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <h3 style="padding:10px">{{ item.league.name }}</h3>
    <div class="row card-content" style="margin: auto">
      <div class="col-sm-8 event">
        <div class="row team-details" style="margin: auto">
          <img v-bind:src="item.homeTeam.logo" alt="logo" style="height:20px;width:20px;">
          <h4>{{ item.homeTeam.team_name }}</h4>
        </div>
        <div class="row team-details" style="margin: auto">
          <img v-bind:src="item.awayTeam.logo" alt="logo" style="height:20px;width:20px;">
          <h4>{{ item.awayTeam.team_name }}</h4>
        </div>
      </div>
      <div class="col-sm-4 event-time">
        <h5>{{ formattedDate }}</h5>
        <h5>{{ formattedTime }}</h5>
      </div>
    </div>
    <p>{{ item.venue }}</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    formattedTime: "",
    formattedDate: ""
  }),
  props: {
    item: {}
  },
  created() {
    this.getTimeFromUNIX();
  },
  methods: {
    getTimeFromUNIX() {
      let unix_timestamp = this.item.event_timestamp;
      var date = new Date(unix_timestamp * 1000);
      var hours = date.getHours();
      var minutes = "0" + date.getMinutes();
      var when = "";
      if (hours > 11) when = " pm";
      else when = " am";
      // Will display time in 10:30:23 format
      this.formattedTime = hours + ":" + minutes.substr(-2) + when;
      console.log(this.formattedTime);

      var month = date.getMonth();
      var day = date.getDate();
      this.formattedDate = day + "/" + month;
    }
  }
};
</script>

<style scoped>
.card {
  /* overflow-wrap: break-word; */
  position: relative;
  height: 180px;
  background: white;
  width: 300px;
  box-shadow: 0 5px 20px rgba(120, 120, 120, 0.4);
  border: none;
  border-radius: 20px;
  margin: 20px;
  cursor: pointer;
  transition: all 500ms ease-out;
}

.card:hover {
  transform: scale(1.02);
  box-shadow: 0 10px 50px rgba(120, 120, 120, 0.4);
}

.card h3 {
  color: gray;
}

.card-content .event-time h5 {
  font-weight: 500;
}

.team-details {
  padding: 5px;
  justify-content: center;
  align-self: center;
}

.team-details img {
  margin-right: 5px;
}

.event-time {
  justify-content: center;
  align-self: center;
}

@media only screen and (max-width: 600px) {
  .card {
    height: 230px;
  }
}
</style>