<template>
  <div>
    <img :src="country.imgUrl" class="czech-picture" />
    <h3>Czech</h3>
    <p>
      Czech Republic, also called Czechia, country located in central Europe. It
      comprises the historical provinces of Bohemia and Moravia.
    </p>
  </div>
</template>

<script>
export default {
  name: "czech",
  data() {
    return {
      country: {
        imgUrl:
          "https://images.unsplash.com/photo-1600623471616-8c1966c91ff6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
    };
  },
};
</script>

<style scoped>
.czech-picture {
  margin-top: 20px;
  width: 50%;
}
</style>
