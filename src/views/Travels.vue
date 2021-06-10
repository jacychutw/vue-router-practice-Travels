<template>
  <div>
    <!-- 將原本內容改掉 -->
    <p>Three countries I love the most!</p>
    <!-- 原本的 placeA placeB 置換成國家名稱 -->
    <div class="travel-router">
      <router-link to="/travels/spain">Spain</router-link> |
      <router-link to="/travels/finland">Finland</router-link> |
      <router-link to="/travels/czech">Czech</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Travels",
};
</script>

<style scoped>
.travel-router {
  background-color: beige;
  width: 100%;
}

.travel-router a {
  color: #4e4a3d;
}

.travel-router a.router-link-exact-active {
  color: #221e1d;
}
</style>
