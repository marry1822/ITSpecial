<template>
  <div>
    <BFormInput
      id="filter-input"
      v-model="filter"
      type="search"
      placeholder="Type to Search"
    />
    <div>
      <BTable
        bordered
        hover
        :items="paginatedData"
        :fields="fields"
        :filter="filter"
        @filtered="onFiltered"
      />
    </div>
    <div class="catalog-pagination d-flex justify-content-center">
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
</template>

<script>
import { mapGetters } from "vuex";

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
        sortable: true
      },
      {
        key: "phone",
        sortable: true
      },
      {
        key: "adress",
        sortable: true
      },
      {
        key: "description",
        sortable: true
      }
    ],
    currentPage: 1,
    perPage: 25,
    filter: null,
    filterOn: [],
    totalRows: 1
  }),
  props: {
    infoItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onPageChange() {
      window.scrollTo(0, 0);
    },
    onFiltered(filteredItems) {
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  },
  computed: {
    ...mapGetters(["INFO"]),
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

<style></style>
