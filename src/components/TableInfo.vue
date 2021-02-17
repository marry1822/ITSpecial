<template>
  <div v-if="this.SELECTED_ROW_INFO.adress">
    <div>User selected: {{ this.SELECTED_ROW_INFO.lastName }}</div>
    <div>Description: {{ this.SELECTED_ROW_INFO.description }}</div>
    <div>Address: {{ this.SELECTED_ROW_INFO.adress.streetAddress }}</div>
    <div>City: {{ this.SELECTED_ROW_INFO.adress.city }}</div>
    <div>State: {{ this.SELECTED_ROW_INFO.adress.state }}</div>
    <div>Zip: {{ this.SELECTED_ROW_INFO.adress.zip }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableInfo",
  computed: {
    ...mapGetters(["SELECTED_ROW_INFO"])
  }
};
</script>

<style></style>
