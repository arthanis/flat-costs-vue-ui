export default {
  methods: {
    getEntity(entity) {
      console.log(entity, this[entity]);

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
