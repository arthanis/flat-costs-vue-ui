<template>
  <div>
    <alert :messages="messages" />

    <div v-if="actions" class="d-flex justify-content-end mb-4">
      <router-link :to="{ path: `/${entity}/add` }" class="btn btn-primary">
        <i class="bi-plus-square"></i>
        <span class="btn__text">Add new</span>
      </router-link>
    </div>

    <table v-if="data.length" class="datatable">
      <thead>
        <th
          v-for="(column, index) in columns"
          :key="index"
          :class="`col col-${column.name}`">
          {{ getColumnName(column) }}
        </th>
        <th v-if="actions" class="col col-actions">
          Actions
        </th>
      </thead>
      <tbody>
        <tr
          v-for="(rowData, rowIndex) in data"
          :key="rowIndex">
          <td
            v-for="(column, columnIndex) in columns"
            :key="columnIndex"
            :class="`col col-${column.name}`">
            <span v-if="column?.options?.belongsTo">
              {{ getEntityItemNameById(column?.options?.belongsTo, rowData[column.name]) }}
            </span>
            <span v-else-if="column.name === 'value'">
              {{ currency(rowData[column.name]) }}
            </span>
            <span v-else>
              {{ rowData[column.name] }}
            </span>
          </td>
          <td v-if="actions" class="col col-actions">
            <div class="d-flex">
              <button
                :id="`${entity}_${rowData.id}`"
                class="btn btn-outline-primary"
                @click="onEdit(rowData.id)">
                <i class="bi-pencil"></i>
                <span class="btn__text">Edit</span>
              </button>
              <button
                class="btn btn-danger ms-2"
                @click="onDelete(rowData.id)"
              >
                <i class="bi-trash"></i>
                <span class="btn__text">Delete</span>
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <div class="alert alert-info">
        There is no data in {{ entity }}(s).
      </div>
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
  mixins: [API, EntitiesMixin],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      },
    },
    entity: {
      type: String,
      default: '',
    },
    columns: {
      type: Array,
      default() {
        return [];
      },
    },
    actions: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['updateData'],
  data() {
    return {
      entities: [],
    };
  },
  computed: {
    ...mapGetters(['config']),
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
    currency(value) {
      const locale = navigator.languages ? navigator.languages[0] : 'en-US';
      const currency = process.env.VUE_APP_COST_CURRENCY;
      const options = {
        style: 'currency',
        currency,
        minimumFractionDigits: 0,
      };

      return Intl.NumberFormat(locale, options).format(value);
    },
  },
};
</script>
