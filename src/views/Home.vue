<template>
  <div>
    <img class="map-image" alt="World Map" src="../assets/world-map.jpg" />
    <p class="map-text">Let's travel!</p>
  </div>
</template>

<style scoped>
.map-image {
  width: 100%;
}
.map-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
  color: white;
}
</style>
