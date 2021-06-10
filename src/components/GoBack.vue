<template>
  <div>
    <button @click="goBack" class="go-back">Go Back</button>
  </div>
</template>

<script>
export default {
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.go-back {
  width: 80px;
  color: #e2e1dc;
  background-color: #868075;
  border: none;
  border-radius: 10px;
  margin-bottom: 10px;
}
</style>
