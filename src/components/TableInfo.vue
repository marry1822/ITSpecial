<template>
  <div
    class="table-info-wrapper d-flex align-items-center justify-content-center"
  >
    <div
      class="table-info-wrapper-container d-flex flex-column align-items-flex-start justify-content-flex-start"
      v-if="this.SELECTED_ROW_INFO.adress"
    >
      <div>
        <span>User selected:</span> {{ this.SELECTED_ROW_INFO.lastName }}
      </div>
      <div>
        <span>Description:</span> {{ this.SELECTED_ROW_INFO.description }}
      </div>
      <div>
        <span>Address:</span> {{ this.SELECTED_ROW_INFO.adress.streetAddress }}
      </div>
      <div><span>City:</span> {{ this.SELECTED_ROW_INFO.adress.city }}</div>
      <div><span>State:</span> {{ this.SELECTED_ROW_INFO.adress.state }}</div>
      <div><span>Zip:</span> {{ this.SELECTED_ROW_INFO.adress.zip }}</div>
    </div>
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

<style>
.table-info-wrapper-container {
  max-width: 50%;
}
.table-info-wrapper-container div:nth-child(n) {
  text-align: left;
}
.table-info-wrapper-container span:nth-child(n) {
  font-weight: bold;
}
</style>
