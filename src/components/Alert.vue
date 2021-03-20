<template>
  <div>
    <div v-if="messages.success" class="alert alert-success">
      {{ messages.success }}
    </div>

    <div v-if="messages.error" class="alert alert-danger">
      {{ messages.error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Alert',
  props: {
    messages: {
      type: Object,
      default() {
        return {};
      },
    },
  },
};
</script>
