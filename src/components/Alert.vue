<template>
  <div>
    <div class="alert alert-success" v-if="messages.success">
      {{ messages.success }}
    </div>

    <div class="alert alert-danger" v-if="messages.error">
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
    },
  },
};
</script>
