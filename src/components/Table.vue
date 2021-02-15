<template>
  <div>
    <div>
      <BTable striped hover :items="paginatedData" :fields="fields" />
    </div>
    <!-- <div>
      <table class="sortable">
        <thead>
          <tr>
            <th data-sort="id" class="">ID</th>
            <th data-sort="lastName" class="">Last name</th>
            <th data-sort="email" class="">Email</th>
            <th data-sort="phone" class="">Phone</th>
            <th data-sort="address" class="">Address</th>
            <th data-sort="description" class="">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in paginatedData" :key="index">
            <td>{{ item.id }}</td>
            <td>{{ item.lastName }}</td>
            <td>{{ item.email }}</td>
            <td>{{ item.phone }}</td>
            <td>
              {{ item.adress.streetAddress }}, {{ item.adress.city }},
              {{ item.adress.state }}, {{ item.adress.zip }}
            </td>
            <td>{{ item.description }}</td>
          </tr>
        </tbody>
      </table>
    </div> -->
    <div class="catalog-pagination d-flex justify-content-center">
      <BPagination
        v-model="currentPage"
        :per-page="perPage"
        :total-rows="total"
        pills
        size="sm"
        prev-text="Prev"
        next-text="Next"
        @change="onClick"
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
    perPage: 25
  }),
  props: {
    infoItems: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onClick() {
      window.scrollTo(0, 0);
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
  }
};
</script>

<style></style>
