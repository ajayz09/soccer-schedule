<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <Search></Search> -->
    <router-view/>
  </div>
</template>

<script>
// import Results from "./components/Results.vue";
// import DropDown from "./components/DropDown.vue";

export default {
  name: "App" //,
  // components: {
  //   DropDown,
  //   Results
  // }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
html {
  overflow: hidden;
  height: 100%;
}

body {
  height: 100%;
  overflow: auto;
  margin: 0;
  background-color: #2c3e50;
  /* background-image: url(assets/background.png);
  background-size: contain; */
}
</style>
