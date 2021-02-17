<template>
  <div class="wrapper d-flex align-items-center justify-content-center">
    <div
      class="wrapper-container d-flex flex-column align-atems-center justify-content-center"
    >
      <div class="wrapper-input">
        <BFormInput
          v-model="filter"
          type="search"
          placeholder="Type to Search"
        />
      </div>
      <div class="wrapper-table">
        <BTable
          bordered
          hover
          :items="paginatedData"
          :fields="fields"
          :filter="filter"
          @filtered="onFiltered"
          :small="small"
          :head-variant="headVariant"
          @row-clicked="onRowSelected"
        />
      </div>
      <div class="wrapper-pagination d-flex justify-content-center">
        <BPagination
          v-model="currentPage"
          :per-page="perPage"
          :total-rows="total"
          pills
          size="sm"
          prev-text="Prev"
          next-text="Next"
          @change="onPageChange"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions} from "vuex";

export default {
  name: "Table",
  data: () => ({
    fields: [
      {
        key: "id",
        sortable: true
      },
      {
        key: "lastName",
        sortable: true
      },
      {
        key: "email",
        sortable: false
      },
      {
        key: "phone",
        sortable: true
      },
      {
        label: "Address",
        key: "adress",
        sortable: false
      },
      {
        key: "description",
        sortable: false
      }
    ],
    currentPage: 1,
    perPage: 25,
    filter: null,
    filterOn: [],
    totalRows: 1,
    small: true,
    headVariant: "dark"
  }),
  props: {
    infoItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    ...mapActions(["GET_SELECTED_ROW_INFO"]),
    onPageChange() {
      window.scrollTo(0, 0);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    onRowSelected(items) {
      this.GET_SELECTED_ROW_INFO(items);
    }
  },
  computed: {
    paginatedData() {
      const from = this.currentPage * this.perPage - this.perPage;
      const to = this.currentPage * this.perPage;
      return this.infoItems.slice(from, to);
    },
    total() {
      return this.infoItems.length;
    }
  },
  watch: {
    infoItems: {
      immediate: true,
      handler() {}
    }
  }
};
</script>

<style>
.wrapper-container {
  max-width: 85%;
}
.wrapper-container div:nth-child(n) {
  margin-bottom: 20px;
}
.wrapper-input {
  width: 50%;
  align-self: center;
}
</style>
