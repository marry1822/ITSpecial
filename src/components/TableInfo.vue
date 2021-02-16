<template>
  <div>
    <!-- <div>User selected: {{ selectedUserInfo.lastName }}</div>
    <div>Description: {{ selectedUserInfo.description }}</div>
    <div>Address: {{ selectedUserInfo.adress.streetAddress }}</div>
    <div>City: {{ selectedUserInfo.adress.city }}</div>
    <div>State: {{ selectedUserInfo.adress.state }}</div>
    <div>Zip: {{ selectedUserInfo.adress.zip }}</div> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TableInfo",
  props: {
    selectedUserInfo: {
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
