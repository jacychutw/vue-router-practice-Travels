<template>
  <div>
    <h1>Not Found</h1>
    <p>
      Please check the URL. Try going
      <span @click="goHome">home</span>
    </p>
  </div>
</template>

<script>
export default {
  methods: {
    goHome() {
      return this.$router.push({ name: "Home" });
    },
  },
};
</script>
