export default {
  methods: {
    getEntity(entity) {
      return this[entity];
    },
    getColumns(entity) {
      return this.$store.getters.config.entities[entity].columns;
    },
    getColumnName(column) {
      if (column?.options?.belongsToName) {
        return column.options.belongsToName;
      }

      return column.name;
    },
    setDependentEntities() {
      const { columns } = this.config.entities[this.entity];

      this.entities = [];

      columns.forEach((column) => {
        if (column?.options?.belongsTo) {
          const dependentEntity = column.options.belongsTo;

          this.fetchEntity(dependentEntity)
            .then(() => {
              this.entities.push({ [dependentEntity]: this[dependentEntity] });
            });
        }
      });
    },
    getDependentEntity(entityName) {
      const result = this.entities.find((entity) => entityName === Object.keys(entity)[0]);

      if (!result) {
        return [];
      }

      return result[entityName];
    },
    getEntityItemNameById(entity, id) {
      if (!this[entity]) {
        return '';
      }

      const entityItem = this[entity].find((elem) => elem.id === id);

      if (!entityItem) {
        return '';
      }

      return entityItem.name;
    },
  },
};
