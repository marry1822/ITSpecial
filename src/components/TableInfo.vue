<template>
  <div>
    <div>User selected: {{ infoItems.lastName }}</div>
    <div>Description: {{ infoItems.description }}</div>
    <div>Address: {{ infoItems.adress.streetAddress }}</div>
    <div>City: {{ infoItems.adress.city }}</div>
    <div>State: {{ infoItems.adress.state }}</div>
    <div>Zip: {{ infoItems.adress.zip }}</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableInfo",
  props: {
    infoItems: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    ...mapGetters(["INFO"])
  }
};
</script>

<style></style>
