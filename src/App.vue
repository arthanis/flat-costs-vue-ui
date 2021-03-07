<template>
  <div>
    <Header />

    <main class="container py-5" v-if="isInitialized">
      <h1 class="mb-4">{{ getTitle }}</h1>
      <router-view />
    </main>
  </div>
</template>

<script>
import API from '@/mixins/api';
import Header from '@/components/layout/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
  mixins: [API],
  computed: {
    getTitle() {
      return this.$route.meta.title;
    },
  },
  data() {
    return {
      isInitialized: false,
    };
  },
  async created() {
    await this.getData(`${this.baseURL}/config`)
      .then((res) => {
        this.$store.commit('setConfig', res.data);
      });

    await this.getData(`${this.baseURL}/categories`)
      .then((res) => {
        this.$store.commit('setCategories', res.data);
      });

    this.isInitialized = true;
  },
};
</script>

<style lang='scss'>
  @import 'assets/scss/app';
</style>
