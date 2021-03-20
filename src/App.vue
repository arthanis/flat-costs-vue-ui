<template>
  <div>
    <Header />

    <main v-if="isInitialized" class="container py-5">
      <h1 class="mb-4">
        {{ getTitle }}
      </h1>
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
  data() {
    return {
      isInitialized: false,
    };
  },
  computed: {
    getTitle() {
      return this.$route.meta.title;
    },
  },
  async created() {
    await this.getData(`${this.baseURL}/config`)
      .then((res) => {
        this.$store.commit('setConfig', res.data);
        this.isInitialized = true;
      });
  },
};
</script>

<style lang='scss'>
  @import 'assets/scss/app';
</style>
