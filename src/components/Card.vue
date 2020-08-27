<template>
  <div class="card" @mouseover="hover = true" @mouseleave="hover = false">
    <h3 style="padding:10px">FA Community Shield</h3>
    <div class="row card-content">
      <div class="col-sm-7 event">
        <div class="row team-details">
          <img
            src="https://media.api-sports.io/football/teams/42.png"
            alt="logo"
            style="height:20px;width:20px;"
          >
          <h4>Liverpool</h4>
        </div>
        <div class="row team-details">
          <img
            src="https://media.api-sports.io/football/teams/40.png"
            alt="logo"
            style="height:20px;width:20px;"
          >
          <h4>Arsenal</h4>
        </div>
      </div>
      <div class="col-sm-5 event-time">
        <h5>30/08</h5>
        <h5>Sunday</h5>
      </div>
    </div>
    <p>location</p>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style scoped>
.card {
  position: relative;
  height: 200px;
  background: white;
  width: 250px;
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
}

.team-details img {
  margin: 0 5px 0px 30px;
}

.event-time {
  justify-content: center;
  align-self: center;
}
</style>