<template>
  <pre>{{ user }}</pre>
</template>

<script>
export default {
  data() {
    return {
      user: null
    };
  },
  async mounted() {
    this.user = await fetch(
      "https://jsonplaceholder.typicode.com/users/" + this.$route.params.id
    ).then(res => res.json());
  }
};
</script>
