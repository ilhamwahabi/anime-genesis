<template>
  <v-app>
    <div id="app">
      <Home/>
    </div>
  </v-app>
  
</template>

<script>
import Home from "./pages/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }

  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    font-family: 'Quicksand', sans-serif;
    min-height: 100vh;
    font-size: 10px;
  }
</style>
