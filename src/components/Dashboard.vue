<template>
  <div>
    <h4 class="mb-3">
      Categories
    </h4>

    <DataTable
      :columns="getColumns('categories')"
      :data="categories"
      :entity="'categories'"
      :actions="false"
      @updateData="fetchEntity('categories')"
    />

    <h4 class="mt-5 mb-3">
      Costs
    </h4>

    <DataTable
      :actions="false"
      :columns="getColumns('costs')"
      :data="costs"
      :entity="'costs'"
      :order-by="'desc'"
      @updateData="fetchEntity('costs')"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import API from '@/mixins/api';
import EntitiesMixin from '@/mixins/entities';
import DataTable from '@/components/Datatable.vue';

export default {
  name: 'Dashboard',
  components: {
    DataTable,
  },
  mixins: [API, EntitiesMixin],
  data() {
    return {
      costs: [],
      categories: [],
    };
  },
  computed: {
    ...mapGetters(['config']),
  },
  mounted() {
    const { entities } = this.$store.getters.config;

    Object.keys(entities).forEach((entity) => {
      this.axios.get(`${this.baseURL}/${entity}`)
        .then((res) => {
          this[entity] = res.data;
        });
    });
  },
  methods: {
    getCategoryNameById(id) {
      const category = this.categories.find((item) => item.id === id);

      if (!category) {
        return 'No category';
      }

      return category.name;
    },
  },
};
</script>
