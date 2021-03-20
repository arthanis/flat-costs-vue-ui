export default {
  data() {
    return {
      baseURL: process.env.VUE_APP_API_URL,
      messages: {
        success: null,
        error: null,
      },
    };
  },
  methods: {
    getData(url) {
      return this.axios.get(url);
    },
    postData(url, data) {
      return this.axios.post(url, data)
        .then((res) => {
          this.handleSuccessMessage(res);
        })
        .catch((err) => {
          this.handleErrorMessage(err);
        });
    },
    updateData(url, data) {
      return this.axios.put(url, data)
        .then((res) => {
          this.handleSuccessMessage(res);
        })
        .catch((err) => {
          this.handleErrorMessage(err);
        });
    },
    deleteData(url) {
      return this.axios.delete(url)
        .then((res) => {
          this.handleSuccessMessage(res);
        })
        .catch((err) => {
          this.handleErrorMessage(err);
        });
    },
    fetchEntity(entity) {
      this[entity] = [];

      return this.getData(`${this.baseURL}/${entity}`)
        .then((res) => {
          this[entity] = res.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    handleSuccessMessage(res) {
      this.messages.error = null;
      this.messages.success = res.data.message || 'Operation completed successfully ';
    },
    handleErrorMessage(err) {
      const { request } = err;
      const response = JSON.parse(request.response);

      this.messages.success = null;
      this.messages.error = response.message;
    },
  },
};
