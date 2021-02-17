<template>
  <div class="main-page-wrapper d-flex flex-column justify-content-center">
    <div v-if="!info.length"><Preloader /></div>
    <div v-else>
      <Table :infoItems="info" />
      <TableInfo />
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Table from "./Table";
import TableInfo from "./TableInfo";
import Preloader from "./Preloader";

export default {
  name: "MainPage",
  data: () => ({
    info: []
  }),
  components: { Table, TableInfo, Preloader },
  mounted() {
    this.GET_INFO_FROM_API().then(response => {
      this.info = response.data;
    });
  },
  methods: {
    ...mapActions(["GET_INFO_FROM_API"]),
    setInfo(data) {
      this.SET_INFO_FROM_API_TO_STATE(data);
    }
  }
};
</script>

<style></style>
