<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/travels">Travels</router-link>
    </div>
    <!-- 加入 GoBack 元件 -->
    <GoBack />
    <router-view />
  </div>
</template>

<script>
// 引用 GoBack 元件
import GoBack from "@/components/GoBack.vue";

export default {
  components: {
    GoBack,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

/* 小調整 padding 值 */
#nav {
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #302e28;
}

#nav a.router-link-exact-active {
  color: #998f7f;
}
</style>
