<template>
  <div id="app">main</div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "App",
  data: () => ({
    info: []
  }),
  components: {},
  mounted() {
    this.GET_INFO_FROM_API().then(response => {
      this.info = response.data;
      console.log(this.info);
    });
  },
  methods: {
    ...mapActions(["GET_INFO_FROM_API"]),
    setInfo(data) {
      this.SET_INFO_FROM_API_TO_STATE(data);
    }
  },
  computed: {
    ...mapGetters(["INFO"])
  }
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
}
</style>
