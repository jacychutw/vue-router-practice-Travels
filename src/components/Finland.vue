<template>
  <div>
    <img :src="country.imgUrl" class="finland-picture" />
    <h3>Finland</h3>
    <p>
      Finland is a country located in Northern Europe bordering the Baltic Sea,
      Gulf of Bothnia, and the Gulf of Finland. Finland has a largely
      free-market economy in which the economy includes a variety of private
      freedom
    </p>
  </div>
</template>

<script>
export default {
  name: "finland",
  data() {
    return {
      country: {
        imgUrl:
          "https://images.unsplash.com/photo-1581853230165-b71de20b7f37?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80",
      },
    };
  },
};
</script>

<style scoped>
.finland-picture {
  margin-top: 20px;
  width: 50%;
}
</style>
