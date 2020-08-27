<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    //
  })
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
  background-image: url(assets/background.jpg);
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
html {
  overflow: hidden;
  height: 100%;
}

body {
  /* height: 100%; */
  /* overflow: auto; */
  margin: 0;
  min-height: 100vh;
  overflow-x: hidden;
}
</style>
