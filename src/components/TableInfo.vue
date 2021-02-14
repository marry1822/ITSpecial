<template>
  <div>
    <div>id: {{ infoItems.id }}</div>
    <div>lastName: {{ infoItems.lastName }}</div>
    <div>email: {{ infoItems.email }}</div>
    <div>phone: {{ infoItems.phone }}</div>
    <div>adress: {{ infoItems.adress }}</div>
    <div>streetAddress: {{ infoItems.adress.streetAddress }}</div>
    <div>city: {{ infoItems.adress.city }}</div>
    <div>state: {{ infoItems.adress.state }}</div>
    <div>zip: {{ infoItems.adress.zip }}</div>
    <div>description: {{ infoItems.description }}</div>
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
