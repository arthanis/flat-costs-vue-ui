<template>
  <div>
    <DataTable
      :data="sortedCostByDesc"
      :columns="getColumns(entity)"
      :entity="entity"
      @updateData="fetchEntity(entity)"
    />
  </div>
</template>

<script>
import API from '@/mixins/api';
import EntitiesMixin from '@/mixins/entities';
import DataTable from '@/components/Datatable.vue';

export default {
  name: 'Costs',
  components: {
    DataTable,
  },
  mixins: [API, EntitiesMixin],
  data() {
    return {
      entity: 'costs',
      costs: [],
    };
  },
  computed: {
    sortedCostByDesc() {
      return this.costs.slice(0).reverse();
    },
  },
  mounted() {
    this.fetchEntity(this.entity);
  },
};
</script>
