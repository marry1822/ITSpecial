<template>
  <div id="app">
    <Header />
    <MainPage />
  </div>
</template>

<script>
import MainPage from "./components/MainPage";
import Header from "./components/Header";

export default {
  name: "App",
  components: { MainPage, Header }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 20px;
}
</style>
