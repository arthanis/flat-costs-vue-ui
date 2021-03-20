<template>
  <div>
    <alert :messages="messages" />

    <div class="d-flex justify-content-end mb-4">
      <router-link :to="{ path: `/${entity}/add` }" class="btn btn-primary">
        Add new
      </router-link>
    </div>

    <table class="table table-bordered table-striped" v-if="data.length">
      <thead>
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="`col col-${column}`"
          >
          {{ getColumnName(column) }}
        </th>
        <th class="col col-actions">Actions</th>
      </thead>
      <tbody>
        <tr
          v-for="(rowData, rowIndex) in data"
          :key="rowIndex"
        >
          <td
            :class="`col col-${column}`"
            v-for="(column, columnIndex) in columns"
            :key="columnIndex"
          >
            <span v-if="column?.options?.belongsTo">
              {{ getEntityItemNameById(column?.options?.belongsTo, rowData[column.name]) }}
            </span>
            <span v-else>
              {{ rowData[column.name]}}
            </span>
          </td>
          <td class="col col-actions">
            <div class="d-flex">
              <button
                class="btn btn-outline-primary"
                @click="onEdit(rowData.id)"
                :id="`${entity}_${rowData.id}`"
              >
                Edit
              </button>
              <button
                class="btn btn-danger ms-2"
                @click="onDelete(rowData.id)"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="alert alert-info">There is no data in {{ entity}}(s).</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import API from '@/mixins/api';
import EntitiesMixin from '@/mixins/entities';
import Alert from '@/components/Alert.vue';

export default {
  name: 'Datatable',
  components: { Alert },
  props: {
    data: Array,
    columns: Array,
  },
  computed: {
    ...mapGetters(['config']),
  },
  emits: ['updateData'],
  mixins: [API, EntitiesMixin],
  data() {
    return {
      entities: [],
      entity: this.$route.name.toLowerCase(),

    };
  },
  mounted() {
    this.setDependentEntities();
  },
  methods: {
    onEdit(id) {
      this.$router.push({ path: `/${this.entity}/edit/${id}` });
    },
    onDelete(id) {
      this.deleteData(`${this.baseURL}/${this.entity}/${id}`)
        .then(() => {
          this.$emit('updateData');
        });
    },
  },
};
</script>
