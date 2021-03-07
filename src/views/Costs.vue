<template>
  <div>
    <DataTable
      :data="costs"
      :columns="getColumns(costs)"
      @updateData="getEntityData"
    />
  </div>
</template>

<script>
import API from '@/mixins/api';
import DataTable from '@/components/Datatable.vue';

export default {
  name: 'Costs',
  mixins: [API],
  components: {
    DataTable,
  },
  data() {
    return {
      entity: 'costs',
      costs: [],
    };
  },
  mounted() {
    this.getEntityData();
  },
};
</script>
