export default {
  methods: {
    getEntity(entity) {
      return this[entity];
    },
    getColumns(data) {
      if (!data.length) {
        return [];
      }

      return Object.keys(data[0]).filter((key) => !['createdAt', 'updatedAt'].includes(key));
    },
  },
};
