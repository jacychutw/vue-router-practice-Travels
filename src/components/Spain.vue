<template>
  <div>
    <img :src="country.imgUrl" class="spain-picture" />
    <h3>Spain</h3>
    <p>
      Spain is a country located in Southwestern Europe. The coastlines include
      the Bay of Biscay, Mediterranean Sea, and Northern Atlantic Ocean.
    </p>
  </div>
</template>

<script>
export default {
  name: "spain",
  data() {
    return {
      country: {
        imgUrl:
          "https://images.unsplash.com/photo-1509840841025-9088ba78a826?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      },
    };
  },
};
</script>

<style scoped>
.spain-picture {
  margin-top: 20px;
  width: 50%;
}
</style>
